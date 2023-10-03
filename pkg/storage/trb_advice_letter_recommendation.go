package storage

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"

	"github.com/google/uuid"

	"go.uber.org/zap"

	"github.com/cmsgov/easi-app/pkg/appcontext"
	"github.com/cmsgov/easi-app/pkg/apperrors"
	"github.com/cmsgov/easi-app/pkg/models"
)

// CreateTRBAdviceLetterRecommendation creates a new TRB advice letter recommendation record in the database
func (s *Store) CreateTRBAdviceLetterRecommendation(
	ctx context.Context,
	recommendation *models.TRBAdviceLetterRecommendation,
) (*models.TRBAdviceLetterRecommendation, error) {
	if recommendation.ID == uuid.Nil {
		recommendation.ID = uuid.New()
	}

	stmt, err := s.db.PrepareNamed(`
		INSERT INTO trb_advice_letter_recommendations (
			id,
			trb_request_id,
			title,
			recommendation,
			links,
			order_in_letter,
			created_by,
			modified_by
		)
		VALUES (
			:id,
			:trb_request_id,
			:title,
			:recommendation,
			:links,
			:order_in_letter,
			:created_by,
			:modified_by
		)
		RETURNING *;
	`)

	if err != nil {
		appcontext.ZLogger(ctx).Error(
			fmt.Sprintf("Failed to prepare SQL statement for creating TRB advice letter recommendation with error %s", err),
			zap.Error(err),
			zap.String("user", recommendation.CreatedBy),
		)
		return nil, err
	}

	created := models.TRBAdviceLetterRecommendation{}

	err = stmt.Get(&created, recommendation)
	if err != nil {
		appcontext.ZLogger(ctx).Error(
			fmt.Sprintf("Failed to create TRB advice letter recommendation with error %s", err),
			zap.Error(err),
			zap.String("user", recommendation.CreatedBy),
		)
		return nil, err
	}

	return &created, nil
}

// GetTRBAdviceLetterRecommendationByID retrieves a TRB advice letter recommendation record from the database
func (s *Store) GetTRBAdviceLetterRecommendationByID(ctx context.Context, id uuid.UUID) (*models.TRBAdviceLetterRecommendation, error) {
	recommendation := models.TRBAdviceLetterRecommendation{}
	stmt, err := s.db.PrepareNamed(`SELECT * FROM trb_advice_letter_recommendations WHERE id = :id`)
	if err != nil {
		return nil, err
	}
	arg := map[string]interface{}{"id": id}
	err = stmt.Get(&recommendation, arg)

	if err != nil {
		appcontext.ZLogger(ctx).Error(
			"Failed to fetch TRB advice letter recommendation",
			zap.Error(err),
			zap.String("id", id.String()),
		)
		return nil, &apperrors.QueryError{
			Err:       err,
			Model:     recommendation,
			Operation: apperrors.QueryFetch,
		}
	}
	return &recommendation, err
}

// GetTRBAdviceLetterRecommendationsByTRBRequestID queries the DB for all the TRB advice letter
// recommendations records matching the given TRB request ID
func (s *Store) GetTRBAdviceLetterRecommendationsByTRBRequestID(ctx context.Context, trbRequestID uuid.UUID) ([]*models.TRBAdviceLetterRecommendation, error) {
	results := []*models.TRBAdviceLetterRecommendation{}

	err := s.db.Select(&results, `SELECT * FROM trb_advice_letter_recommendations WHERE trb_request_id = $1`, trbRequestID)

	if err != nil && !errors.Is(err, sql.ErrNoRows) {
		appcontext.ZLogger(ctx).Error("Failed to fetch TRB advice letter recommendations", zap.Error(err), zap.String("id", trbRequestID.String()))
		return nil, &apperrors.QueryError{
			Err:       err,
			Model:     models.TRBAdviceLetterRecommendation{},
			Operation: apperrors.QueryFetch,
		}
	}
	return results, nil
}

// UpdateTRBAdviceLetterRecommendation updates an existing TRB advice letter recommendation record in the database
// This purposely does not update the order_in_letter field - to update that, use UpdateTRBAdviceLetterRecommendationOrder()
func (s *Store) UpdateTRBAdviceLetterRecommendation(ctx context.Context, recommendation *models.TRBAdviceLetterRecommendation) (*models.TRBAdviceLetterRecommendation, error) {
	stmt, err := s.db.PrepareNamed(`
		UPDATE trb_advice_letter_recommendations
		SET 
			trb_request_id = :trb_request_id,
			title = :title,
			recommendation = :recommendation,
			links = :links,
			created_by = :created_by,
			modified_by = :modified_by
		WHERE id = :id
		RETURNING *;
	`)

	if err != nil {
		appcontext.ZLogger(ctx).Error(
			fmt.Sprintf("Failed to update TRB advice letter recommendation %s", err),
			zap.String("id", recommendation.ID.String()),
		)
		return nil, err
	}
	updated := models.TRBAdviceLetterRecommendation{}

	err = stmt.Get(&updated, recommendation)
	if err != nil {
		appcontext.ZLogger(ctx).Error(
			fmt.Sprintf("Failed to update TRB advice letter recommendation %s", err),
			zap.String("id", recommendation.ID.String()),
		)
		return nil, &apperrors.QueryError{
			Err:       err,
			Model:     recommendation,
			Operation: apperrors.QueryUpdate,
		}
	}

	return &updated, err
}

// DeleteTRBAdviceLetterRecommendation deletes an existing TRB advice letter recommendation record in the database
func (s *Store) DeleteTRBAdviceLetterRecommendation(ctx context.Context, id uuid.UUID) (*models.TRBAdviceLetterRecommendation, error) {
	stmt, err := s.db.PrepareNamed(`
		DELETE FROM trb_advice_letter_recommendations
		WHERE id = :id
		RETURNING *;`)

	if err != nil {
		appcontext.ZLogger(ctx).Error(
			fmt.Sprintf("Failed to delete TRB advice letter recommendation %s", err),
			zap.String("id", id.String()),
		)
		return nil, err
	}
	toDelete := models.TRBAdviceLetterRecommendation{}
	toDelete.ID = id
	deleted := models.TRBAdviceLetterRecommendation{}

	err = stmt.Get(&deleted, &toDelete)
	if err != nil {
		appcontext.ZLogger(ctx).Error(
			fmt.Sprintf("Failed to delete TRB advice letter recommendation %s", err),
			zap.String("id", id.String()),
		)
		return nil, &apperrors.QueryError{
			Err:       err,
			Model:     toDelete,
			Operation: apperrors.QueryUpdate,
		}
	}

	return &deleted, err
}

// UpdateTRBAdviceLetterRecommendationOrder updates only the ranking of recommendations for a given advice letter
func (s *Store) UpdateTRBAdviceLetterRecommendationOrder(
	ctx context.Context,
	trbAdviceLetterID uuid.UUID,
	newRanks map[uuid.UUID]int,
) ([]*models.TRBAdviceLetterRecommendation, error) {
	// convert newRanks to JSON, which Postgres will turn into a table via json_to_recordset
	newRanksSlice := []map[string]any{}
	for recommendationID, newRank := range newRanks {
		newEntry := map[string]any{
			"id":   recommendationID,
			"rank": newRank,
		}
		newRanksSlice = append(newRanksSlice, newEntry)
	}
	newRanksJSON, err := json.Marshal(newRanksSlice)
	if err != nil {
		return nil, err
	}

	stmt, err := s.db.PrepareNamed(`
		WITH new_ranks AS (
			SELECT *
			FROM json_to_recordset(:newRanks)
			AS new_ranks (id uuid, rank int)
		)
		UPDATE trb_advice_letter_recommendations AS recs
		SET order_in_letter = new_ranks.rank
		FROM new_ranks
	`)
	if err != nil {
		// TODO - proper logging
		return nil, err
	}

	updatedRecommendations := []*models.TRBAdviceLetterRecommendation{}
	arg := map[string]interface{}{
		"newRanks": string(newRanksJSON),
	}

	err = stmt.Select(&updatedRecommendations, arg)
	if err != nil {
		// TODO - proper logging
		return nil, err
	}

	return updatedRecommendations, nil
}
