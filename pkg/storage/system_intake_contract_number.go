package storage

import (
	"context"
	"errors"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
	"go.uber.org/zap"

	"github.com/cmsgov/easi-app/pkg/appcontext"
	"github.com/cmsgov/easi-app/pkg/models"
	"github.com/cmsgov/easi-app/pkg/sqlqueries"
)

// TODO Implement store methods that have to deal with setting System Intake linking/relation data
func (s *Store) LinkSystemIntakeContractNumbers(ctx context.Context, tx *sqlx.Tx, systemIntakeID uuid.UUID, contractNumbers []string) error {
	if systemIntakeID == uuid.Nil {
		return errors.New("unexpected nil system intake ID when linking system intake to contract number")
	}

	if _, err := tx.ExecContext(ctx, sqlqueries.SystemIntakeContractNumberForm.Delete, systemIntakeID); err != nil {
		appcontext.ZLogger(ctx).Error("Failed to delete contract numbers linked to system intake", zap.Error(err))
		return err
	}

	// no need to run insert if we are not inserting new contracts
	if len(contractNumbers) < 1 {
		return nil
	}

	userID := appcontext.Principal(ctx).Account().ID

	createSystemIntakeContractNumbersLinks := make([]models.SystemIntakeContractNumber, len(contractNumbers))

	for i, contractNumber := range contractNumbers {
		contractNumberLink := models.NewSystemIntakeContractNumber(userID)
		contractNumberLink.ID = uuid.New()
		contractNumberLink.ModifiedBy = &userID
		contractNumberLink.IntakeID = systemIntakeID
		contractNumberLink.ContractNumber = contractNumber
		createSystemIntakeContractNumbersLinks[i] = contractNumberLink
	}

	if _, err := tx.NamedExecContext(ctx, sqlqueries.SystemIntakeContractNumberForm.Create, createSystemIntakeContractNumbersLinks); err != nil {
		appcontext.ZLogger(ctx).Error("Failed to insert linked system intake to contract numbers", zap.Error(err))
		return err
	}

	return nil
}
