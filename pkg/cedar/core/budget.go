package cedarcore

import (
	"context"

	"github.com/cmsgov/easi-app/pkg/appcontext"
	"github.com/cmsgov/easi-app/pkg/cedar/core/gen/client/budget"
	"github.com/cmsgov/easi-app/pkg/models"
)

// GetBudgetBySystem queries CEDAR for budget information (NJD EXPAND ON THIS?) associated with a particular system, taking the version-independent ID of a system
func (c *Client) GetBudgetBySystem(ctx context.Context, cedarSystemID string) ([]*models.CedarBudget, error) {
	if !c.cedarCoreEnabled(ctx) {
		appcontext.ZLogger(ctx).Info("CEDAR Core is disabled")
		return []*models.CedarBudget{}, nil
	}
	cedarSystem, err := c.GetSystem(ctx, cedarSystemID)

	params := budget.NewBudgetFindParams()

	// Construct the parameters
	params.SetSystemID(&cedarSystem.VersionID)
	params.HTTPClient = c.hc

	if err != nil {
		return nil, err
	}

	// Make the API call
	resp, err := c.sdk.Budget.BudgetFind(params, c.auth)
	if err != nil {
		return nil, err
	}

	// Convert the auto-generated struct to our own pkg/models struct
	retVal := make([]*models.CedarBudget, 0, len(resp.Payload.Budgets))

	for _, budget := range resp.Payload.Budgets {

		// NJD - add error/nil checking, maybe not necessary w/ omitempty
		retVal = append(retVal, &models.CedarBudget{
			Funding:      budget.Funding,
			FundingID:    budget.FundingID,
			ID:           budget.ID,
			ProjectID:    budget.ProjectID,
			ProjectTitle: budget.ProjectTitle,
			SystemID:     budget.SystemID,
		})
	}
	return retVal, nil
}
