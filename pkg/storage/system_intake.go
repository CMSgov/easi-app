package storage

import (
	"fmt"
	"time"

	"github.com/google/uuid"
	"go.uber.org/zap"

	"github.com/cmsgov/easi-app/pkg/models"
)

// SaveSystemIntake does an upsert for a system intake
func (s *Store) SaveSystemIntake(intake *models.SystemIntake) error {
	const SystemIntakeInsertSQL = `
		INSERT INTO system_intake (
			id,
			eua_user_id,
		    status,
			requester,
			component,
			business_owner,
			business_owner_component,
			product_manager,
			product_manager_component,
			isso,
			trb_collaborator,
			oit_security_collaborator,
			ea_collaborator,
			project_name,
			existing_funding,
			funding_source,
			business_need,
			solution,
			process_status,
			ea_support_request,
			existing_contract,
			created_at,
			updated_at,
		    submitted_at,
		    alfabet_id
		) 
		VALUES (
			:id,
			:eua_user_id,
		    :status,
			:requester,
			:component,
			:business_owner,
			:business_owner_component,
			:product_manager,
			:product_manager_component,
			:isso,
			:trb_collaborator,
			:oit_security_collaborator,
			:ea_collaborator,
			:project_name,
			:existing_funding,
			:funding_source,
			:business_need,
			:solution,
			:process_status,
			:ea_support_request,
			:existing_contract,
		    :created_at,
		    :updated_at,
		    :submitted_at,
		    :alfabet_id
		)
		ON CONFLICT (id) DO UPDATE SET
		    status=:status,
			requester=:requester,
			component=:component,
			business_owner=:business_owner,
			business_owner_component=:business_owner_component,
			product_manager=:product_manager,
			product_manager_component=:product_manager_component,
			isso=:isso,
			trb_collaborator=:trb_collaborator,
			oit_security_collaborator=:oit_security_collaborator,
			ea_collaborator=:ea_collaborator,
			project_name=:project_name,
			existing_funding=:existing_funding,
			funding_source=:funding_source,
			business_need=:business_need,
			solution=:solution,
			process_status=:process_status,
			ea_support_request=:ea_support_request,
			existing_contract=:existing_contract,
		    created_at=:created_at,
			updated_at=:updated_at,
			submitted_at=:submitted_at,
		    alfabet_id=:alfabet_id
	`
	_, err := s.DB.NamedExec(
		SystemIntakeInsertSQL,
		intake,
	)
	if err != nil {
		s.logger.Error(
			fmt.Sprintf("Failed to save system intake %s", err),
			zap.String("id", intake.ID.String()),
			zap.String("user", intake.EUAUserID),
		)
	}
	return err
}

// FetchSystemIntakeByID queries the DB for a system intake matching the given ID
func (s *Store) FetchSystemIntakeByID(id uuid.UUID) (*models.SystemIntake, error) {
	intake := models.SystemIntake{}
	err := s.DB.Get(&intake, "SELECT * FROM public.system_intake WHERE id=$1", id)
	if err != nil {
		s.logger.Error(
			fmt.Sprintf("Failed to fetch system intake %s", err),
			zap.String("id", id.String()),
		)
		return &models.SystemIntake{}, err
	}
	return &intake, nil
}

// FetchSystemIntakesByEuaID queries the DB for system intakes matching the given EUA ID
func (s *Store) FetchSystemIntakesByEuaID(euaID string) (models.SystemIntakes, error) {
	intakes := []models.SystemIntake{}
	err := s.DB.Select(&intakes, "SELECT * FROM system_intake WHERE eua_user_id=$1", euaID)
	if err != nil {
		s.logger.Error(
			fmt.Sprintf("Failed to fetch system intakes %s", err),
			zap.String("euaID", euaID),
		)
		return models.SystemIntakes{}, err
	}
	return intakes, nil
}

// GetSystemIntakeMetrics gets a metrics digest for system intake
func (s *Store) GetSystemIntakeMetrics(startTime time.Time, endTime time.Time) (models.SystemIntakeMetrics, error) {
	const startedCountSQL = `
		SELECT count(*) FROM system_intake WHERE created_at >=  $1 and created_at < $2
	`
	metrics := models.SystemIntakeMetrics{}
	var startedRequests int
	err := s.DB.Get(
		&startedRequests,
		startedCountSQL,
		&startTime,
		&endTime,
	)
	if err != nil {
		return metrics, err
	}
	metrics.StartedRequests = startedRequests
	return metrics, nil
}
