package storage

import (
	"context"
	"encoding/json"
	"errors"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
	"github.com/lib/pq"
	"go.uber.org/zap"

	"github.com/cmsgov/easi-app/pkg/appcontext"
	"github.com/cmsgov/easi-app/pkg/models"
	"github.com/cmsgov/easi-app/pkg/sqlqueries"
)

// SetSystemIntakeContractNumbers links given Contract Numbers to given System Intake ID
func (s *Store) SetSystemIntakeContractNumbers(ctx context.Context, tx *sqlx.Tx, systemIntakeID uuid.UUID, contractNumbers []string) error {
	if systemIntakeID == uuid.Nil {
		return errors.New("unexpected nil system intake ID when linking system intake to contract number")
	}

	if _, err := tx.ExecContext(ctx, sqlqueries.SystemIntakeContractNumberForm.Delete, pq.StringArray(contractNumbers), systemIntakeID); err != nil {
		appcontext.ZLogger(ctx).Error("Failed to delete contract numbers linked to system intake", zap.Error(err))
		return err
	}

	// no need to run insert if we are not inserting new Contract Numbers
	if len(contractNumbers) < 1 {
		return nil
	}

	userID := appcontext.Principal(ctx).Account().ID

	setSystemIntakeContractNumbersLinks := make([]models.SystemIntakeContractNumber, len(contractNumbers))

	for i, contractNumber := range contractNumbers {
		contractNumberLink := models.NewSystemIntakeContractNumber(userID)
		contractNumberLink.ID = uuid.New()
		contractNumberLink.ModifiedBy = &userID
		contractNumberLink.SystemIntakeID = systemIntakeID
		contractNumberLink.ContractNumber = contractNumber

		setSystemIntakeContractNumbersLinks[i] = contractNumberLink
	}

	if _, err := tx.NamedExecContext(ctx, sqlqueries.SystemIntakeContractNumberForm.Set, setSystemIntakeContractNumbersLinks); err != nil {
		appcontext.ZLogger(ctx).Error("Failed to insert linked system intake to contract numbers", zap.Error(err))
		return err
	}

	return nil
}

// SystemIntakeContractNumbersBySystemIntakeIDLOADER gets multiple groups of Contract Numbers by System Intake ID
func (s *Store) SystemIntakeContractNumbersBySystemIntakeIDLOADER(ctx context.Context, paramTableJSON string) (map[string][]*models.SystemIntakeContractNumber, error) {
	var contracts []*models.SystemIntakeContractNumber
	if err := s.db.SelectContext(ctx, &contracts, sqlqueries.SystemIntakeContractNumberForm.SelectBySystemIntakeIDLOADER, paramTableJSON); err != nil {
		return nil, err
	}

	ids, err := extractSystemIntakeIDs(paramTableJSON)
	if err != nil {
		return nil, err
	}

	store := map[string][]*models.SystemIntakeContractNumber{}

	for _, id := range ids {
		store[id] = []*models.SystemIntakeContractNumber{}
	}

	for _, contract := range contracts {
		key := contract.SystemIntakeID.String()
		store[key] = append(store[key], contract)
	}

	return store, nil
}

type extract struct {
	SystemIntakeID string `json:"system_intake_id"`
}

func extractSystemIntakeIDs(paramsAsJSON string) ([]string, error) {
	var extracted []extract
	if err := json.Unmarshal([]byte(paramsAsJSON), &extracted); err != nil {
		return nil, err
	}

	out := make([]string, len(extracted))

	for i := range extracted {
		out[i] = extracted[i].SystemIntakeID
	}

	return out, nil
}
