package resolvers

import (
	"context"

	"github.com/guregu/null/zero"
	"github.com/jmoiron/sqlx"

	"github.com/cmsgov/easi-app/pkg/graph/model"
	"github.com/cmsgov/easi-app/pkg/models"
	"github.com/cmsgov/easi-app/pkg/sqlutils"
	"github.com/cmsgov/easi-app/pkg/storage"
)

// SetSystemIntakeRelationExistingService sets the relationship between a system intake and
// an existing service by setting a free-text contract/service name, clearing relationships between
// intakes and CEDAR systems, and setting any contract number relationships
func SetSystemIntakeRelationExistingService(
	ctx context.Context,
	store *storage.Store,
	input *model.SetSystemIntakeRelationExistingServiceInput,
) (*models.SystemIntake, error) {
	return sqlutils.WithTransaction[models.SystemIntake](store, func(tx *sqlx.Tx) (*models.SystemIntake, error) {
		// Fetch intake by ID
		intake, err := store.FetchSystemIntakeByIDNP(ctx, tx, input.SystemIntakeID)
		if err != nil {
			return nil, err
		}

		// Set contract name
		intake.ContractName = zero.StringFrom(input.ContractName)
		updatedIntake, err := store.UpdateSystemIntakeNP(ctx, tx, intake)
		if err != nil {
			return nil, err
		}

		// TODO: STORE -> Remove CEDAR system relationships
		// Delete & recreate contract number relationships
		if err := store.LinkSystemIntakeContractNumbers(ctx, tx, input.SystemIntakeID, input.ContractNumbers); err != nil {
			return nil, err
		}

		return updatedIntake, nil
	})
}

// SetSystemIntakeRelationNewSystem effectively clears the relationship between a system intake
// and any previously set list of CEDAR Systems and contract/service names. It also
// sets any contract number relationships.
func SetSystemIntakeRelationNewSystem(
	ctx context.Context,
	store *storage.Store,
	input *model.SetSystemIntakeRelationNewSystemInput,
) (*models.SystemIntake, error) {
	return sqlutils.WithTransaction[models.SystemIntake](store, func(tx *sqlx.Tx) (*models.SystemIntake, error) {
		// Fetch intake by ID
		intake, err := store.FetchSystemIntakeByIDNP(ctx, tx, input.SystemIntakeID)
		if err != nil {
			return nil, err
		}

		// Clear contract name
		intake.ContractName = zero.StringFromPtr(nil)
		updatedIntake, err := store.UpdateSystemIntakeNP(ctx, tx, intake)
		if err != nil {
			return nil, err
		}

		// TODO: STORE -> Delete CEDAR system relationships
		// Delete & recreate contract number relationships
		if err := store.LinkSystemIntakeContractNumbers(ctx, tx, input.SystemIntakeID, input.ContractNumbers); err != nil {
			return nil, err
		}

		return updatedIntake, nil
	})
}

// SetSystemIntakeRelationExistingSystem sets the relationship between a system intake and
// a list of CEDAR Systems by setting an array of CEDAR System IDs, clearing any data about
// contract/service names, and setting any contract number relationships.
func SetSystemIntakeRelationExistingSystem(
	ctx context.Context,
	store *storage.Store,
	input *model.SetSystemIntakeRelationExistingSystemInput,
) (*models.SystemIntake, error) {
	return sqlutils.WithTransaction[models.SystemIntake](store, func(tx *sqlx.Tx) (*models.SystemIntake, error) {
		// Fetch intake by ID
		intake, err := store.FetchSystemIntakeByIDNP(ctx, tx, input.SystemIntakeID)
		if err != nil {
			return nil, err
		}

		// Clear contract name
		intake.ContractName = zero.StringFromPtr(nil)
		updatedIntake, err := store.UpdateSystemIntakeNP(ctx, tx, intake)
		if err != nil {
			return nil, err
		}

		// TODO: STORE -> Add CEDAR system relationships
		// Delete & recreate contract number relationships
		if err := store.LinkSystemIntakeContractNumbers(ctx, tx, input.SystemIntakeID, input.ContractNumbers); err != nil {
			return nil, err
		}

		return updatedIntake, nil
	})
}