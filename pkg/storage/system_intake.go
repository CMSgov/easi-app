package storage

import (
	"fmt"

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
			existing_contract
		) 
		VALUES (
			:id,
			:eua_user_id,
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
			:existing_contract
		)
		ON CONFLICT (id) DO UPDATE SET
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
			existing_contract=:existing_contract
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
