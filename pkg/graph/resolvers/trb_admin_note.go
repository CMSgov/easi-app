package resolvers

import (
	"context"
	"errors"

	"github.com/google/uuid"

	"github.com/cmsgov/easi-app/pkg/appcontext"
	"github.com/cmsgov/easi-app/pkg/models"
	"github.com/cmsgov/easi-app/pkg/storage"
)

// CreateTRBAdminNote creates a new TRB admin note in the database
func CreateTRBAdminNote(ctx context.Context, store *storage.Store, trbRequestID uuid.UUID, category models.TRBAdminNoteCategory, noteText string) (*models.TRBAdminNote, error) {
	noteToCreate := models.TRBAdminNote{
		TRBRequestID: trbRequestID,
		Category:     category,
		NoteText:     noteText,
	}
	noteToCreate.CreatedBy = appcontext.Principal(ctx).ID()

	createdNote, err := store.CreateTRBAdminNote(ctx, &noteToCreate)
	if err != nil {
		return nil, err
	}

	return createdNote, nil
}

// GetTRBAdminNoteByID retrieves a single admin note by its ID
func GetTRBAdminNoteByID(ctx context.Context, store *storage.Store, id uuid.UUID) (*models.TRBAdminNote, error) {
	note, err := store.GetTRBAdminNoteByID(ctx, id)
	if err != nil {
		return nil, err
	}

	return note, nil
}

// GetTRBAdminNotesByTRBRequestID retrieves a list of admin notes associated with a TRB request
func GetTRBAdminNotesByTRBRequestID(ctx context.Context, store *storage.Store, trbRequestID uuid.UUID) ([]*models.TRBAdminNote, error) {
	notes, err := store.GetTRBAdminNotesByTRBRequestID(ctx, trbRequestID)
	if err != nil {
		return nil, err
	}

	return notes, nil
}

// GetTRBAdminNoteAuthorInfo gets the full user info for the author of an admin note
func GetTRBAdminNoteAuthorInfo(ctx context.Context, authorEUAID string, fetchUserInfo func(context.Context, string) (*models.UserInfo, error)) (*models.UserInfo, error) {
	authorInfo, err := fetchUserInfo(ctx, authorEUAID)
	if err != nil {
		return nil, err
	}
	return authorInfo, nil
}

// UpdateTRBAdminNote handles general updates to a TRB advice letter
func UpdateTRBAdminNote(ctx context.Context, store *storage.Store, input map[string]interface{}) (*models.TRBAdminNote, error) {
	idStr, idFound := input["id"]
	if !idFound {
		return nil, errors.New("missing required property id")
	}

	id, err := uuid.Parse(idStr.(string))
	if err != nil {
		return nil, err
	}

	note, err := store.GetTRBAdminNoteByID(ctx, id)
	if err != nil {
		return nil, err
	}

	err = ApplyChangesAndMetaData(input, note, appcontext.Principal(ctx))
	if err != nil {
		return nil, err
	}

	updatedNote, err := store.UpdateTRBAdminNote(ctx, note)
	if err != nil {
		return nil, err
	}

	return updatedNote, nil
}
