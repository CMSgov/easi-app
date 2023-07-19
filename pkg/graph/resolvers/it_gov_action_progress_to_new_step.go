package resolvers

import (
	"context"
	"errors"

	"github.com/guregu/null"
	"golang.org/x/sync/errgroup"

	"github.com/cmsgov/easi-app/pkg/appcontext"
	"github.com/cmsgov/easi-app/pkg/graph/model"
	"github.com/cmsgov/easi-app/pkg/models"
	"github.com/cmsgov/easi-app/pkg/storage"
)

// ProgressIntakeToNewStep handles a Progress to New Step action on an intake
func ProgressIntakeToNewStep(
	ctx context.Context,
	store *storage.Store,
	fetchUserInfo func(context.Context, string) (*models.UserInfo, error),
	input *model.SystemIntakeProgressToNewStepsInput,
) (*models.SystemIntake, error) {
	// EUA ID of the admin taking this action
	adminEUAID := appcontext.Principal(ctx).ID()

	intake, err := store.FetchSystemIntakeByID(ctx, input.SystemIntakeID)
	if err != nil {
		return nil, err
	}

	if !intakeIsValidForProgressToNewStep(intake, input.NewStep) {
		// TODO - log?
		// TODO - more precise error type, error message
		return nil, errors.New("invalid state")
	}

	modifyIntakeToNewStep(intake, input.NewStep)

	// TODO - potential issue - some data from the action might be saved, but not all
	// this would be possible even if we called everything sequentially
	// doesn't appear to be a way to wrap everything in a transaction

	errGroup := new(errgroup.Group)
	var updatedIntake *models.SystemIntake // declare this outside the function we pass to errGroup.Go() so we can return it

	errGroup.Go(func() error {
		var errUpdateIntake error // declare this separately because if we use := on next line, compiler thinks we're declaring a new updatedIntake variable as well
		updatedIntake, errUpdateIntake = store.UpdateSystemIntake(ctx, intake)
		if errUpdateIntake != nil {
			return errUpdateIntake
		}

		return nil
	})

	// TODO - save action

	if input.Feedback != nil {
		errGroup.Go(func() error {
			feedbackForRequester := &models.GovernanceRequestFeedback{
				IntakeID:     updatedIntake.ID,
				Feedback:     *input.Feedback,
				SourceAction: models.GovernanceRequestFeedbackSourceActionProgressToNewStep,
				TargetForm:   models.GovernanceRequestFeedbackTargetNoTargetProvided,
			}
			feedbackForRequester.CreatedBy = adminEUAID

			_, errRequesterFeedback := store.CreateGovernanceRequestFeedback(ctx, feedbackForRequester)
			if errRequesterFeedback != nil {
				return errRequesterFeedback
			}

			return nil
		})
	}

	if input.GrbRecommendations != nil {
		errGroup.Go(func() error {
			feedbackForGRB := &models.GovernanceRequestFeedback{
				IntakeID:     updatedIntake.ID,
				Feedback:     *input.GrbRecommendations,
				SourceAction: models.GovernanceRequestFeedbackSourceActionProgressToNewStep,
				TargetForm:   models.GovernanceRequestFeedbackTargetNoTargetProvided,
			}
			feedbackForGRB.CreatedBy = adminEUAID

			_, errGRBFeedback := store.CreateGovernanceRequestFeedback(ctx, feedbackForGRB)
			if errGRBFeedback != nil {
				return errGRBFeedback
			}

			return nil
		})
	}

	if input.AdminNote != nil {
		errGroup.Go(func() error {
			adminUserInfo, errAdminUserInfo := fetchUserInfo(ctx, adminEUAID)
			if errAdminUserInfo != nil {
				return errAdminUserInfo
			}

			adminNote := &models.SystemIntakeNote{
				SystemIntakeID: input.SystemIntakeID,
				AuthorEUAID:    adminEUAID,
				AuthorName:     null.StringFrom(adminUserInfo.CommonName),
				Content:        null.StringFrom(*input.AdminNote),
			}

			_, errCreateNote := store.CreateSystemIntakeNote(ctx, adminNote)
			if errCreateNote != nil {
				return errCreateNote
			}

			return nil
		})
	}

	if err := errGroup.Wait(); err != nil {
		return nil, err
	}

	return updatedIntake, nil
}

// TODO - potentially inline if logic is simple enough
// TODO - if not inlined - better name
func intakeIsValidForProgressToNewStep(intake *models.SystemIntake, newStep model.SystemIntakeStepToProgressTo) bool {
	// TODO - implement
	return true
}

// TODO - potentially inline if logic is simple enough
// TODO - if not inlined - better name
func modifyIntakeToNewStep(intake *models.SystemIntake, newStep model.SystemIntakeStepToProgressTo) {
	// TODO - implement
}
