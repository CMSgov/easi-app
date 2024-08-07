package resolvers

import (
	"context"

	"github.com/google/uuid"
	"go.uber.org/zap"

	"github.com/cms-enterprise/easi-app/pkg/appcontext"
	"github.com/cms-enterprise/easi-app/pkg/dataloaders"
	"github.com/cms-enterprise/easi-app/pkg/models"
)

// SystemIntakeSystems utilizes dataloaders to retrieve systems linked to a given system intake ID
func SystemIntakeSystems(ctx context.Context, systemIntakeID uuid.UUID) ([]*models.CedarSystem, error) {
	siSystems, err := dataloaders.GetSystemIntakeSystemsBySystemIntakeID(ctx, systemIntakeID)
	if err != nil {
		appcontext.ZLogger(ctx).Error("unable to retrieve cedar system ids from db", zap.Error(err))
		return nil, err
	}

	var systems []*models.CedarSystem
	for _, v := range siSystems {
		cedarSystemSummary, err := dataloaders.GetCedarSystemByID(ctx, v.SystemID)
		if err != nil {
			appcontext.ZLogger(ctx).Error("unable to retrieve system from cedar", zap.Error(err))
			continue
		}
		systems = append(systems, cedarSystemSummary)
	}
	return systems, nil
}

func CedarSystemLinkedSystemIntakes(ctx context.Context, cedarSystemID string, state models.SystemIntakeState) ([]*models.SystemIntake, error) {
	return dataloaders.GetCedarSystemLinkedSystemIntakes(ctx, cedarSystemID, state)
}
