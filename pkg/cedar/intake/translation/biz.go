package translation

import (
	"encoding/json"
	"strconv"

	wire "github.com/cmsgov/easi-app/pkg/cedar/intake/gen/models"
	intakemodels "github.com/cmsgov/easi-app/pkg/cedar/intake/models"
	"github.com/cmsgov/easi-app/pkg/models"
)

// TranslatableBusinessCase is a wrapper around our BusinessCase model for translating into the CEDAR Intake API schema
type TranslatableBusinessCase models.BusinessCase

// ObjectID is a unique identifier for a TranslatableAction
func (bc *TranslatableBusinessCase) ObjectID() string {
	return bc.ID.String()
}

// ObjectType is a human-readable identifier for the BusinessCase type, for use in logging
func (bc *TranslatableBusinessCase) ObjectType() string {
	return "business case"
}

// CreateIntakeModel translates a BusinessCase into an IntakeInput
func (bc *TranslatableBusinessCase) CreateIntakeModel() (*wire.IntakeInput, error) {
	obj := intakemodels.EASIBizCase{
		UserEUA:              bc.EUAUserID,
		BusinessCaseID:       bc.ID.String(),
		IntakeID:             pStr(bc.SystemIntakeID.String()),
		ProjectName:          bc.ProjectName.Ptr(),
		Requester:            bc.Requester.Ptr(),
		RequesterPhoneNumber: bc.RequesterPhoneNumber.Ptr(),
		BusinessOwner:        bc.BusinessOwner.Ptr(),
		BusinessNeed:         bc.BusinessNeed.Ptr(),
		CmsBenefit:           bc.CMSBenefit.Ptr(),
		PriorityAlignment:    bc.PriorityAlignment.Ptr(),
		SuccessIndicators:    bc.SuccessIndicators.Ptr(),

		AsIsTitle:       bc.AsIsTitle.Ptr(),
		AsIsSummary:     bc.AsIsSummary.Ptr(),
		AsIsPros:        bc.AsIsPros.Ptr(),
		AsIsCons:        bc.AsIsCons.Ptr(),
		AsIsCostSavings: bc.AsIsCons.Ptr(),

		SubmittedAt:        pStr(strDateTime(bc.SubmittedAt)),
		ArchivedAt:         pStr(strDateTime(bc.ArchivedAt)),
		InitialSubmittedAt: pStr(strDateTime(bc.InitialSubmittedAt)),
		LastSubmittedAt:    pStr(strDateTime(bc.LastSubmittedAt)),

		BusinessSolutions:  []*intakemodels.EASIBusinessSolution{},
		LifecycleCostLines: []*intakemodels.EASILifecycleCost{},
	}

	// build the collection of embedded objects

	// business solutions
	// preferred (required)
	preferredSolution := &intakemodels.EASIBusinessSolution{
		SolutionType:            "preferred",
		Title:                   bc.PreferredTitle.Ptr(),
		Summary:                 bc.PreferredSummary.Ptr(),
		AcquisitionApproach:     bc.PreferredAcquisitionApproach.Ptr(),
		SecurityIsApproved:      bc.PreferredSecurityIsApproved.Ptr(),
		SecurityIsBeingReviewed: bc.PreferredSecurityIsBeingReviewed.Ptr(),
		HostingType:             bc.PreferredHostingType.Ptr(),
		HostingLocation:         bc.PreferredHostingLocation.Ptr(),
		HostingCloudServiceType: bc.PreferredHostingCloudServiceType.Ptr(),
		HasUI:                   bc.PreferredHasUI.Ptr(),
		Pros:                    bc.PreferredPros.Ptr(),
		Cons:                    bc.PreferredCons.Ptr(),
		CostSavings:             bc.PreferredCostSavings.Ptr(),
	}
	obj.BusinessSolutions = append(obj.BusinessSolutions, preferredSolution)

	// TODO: do we need to check if alternative a and b are filled out?
	// what is the best way to do that? need to check each field individually?

	// alternative a (optional)
	alternativeASolution := &intakemodels.EASIBusinessSolution{
		SolutionType:            "alternativeA",
		Title:                   bc.AlternativeATitle.Ptr(),
		Summary:                 bc.AlternativeASummary.Ptr(),
		AcquisitionApproach:     bc.AlternativeAAcquisitionApproach.Ptr(),
		SecurityIsApproved:      bc.AlternativeASecurityIsApproved.Ptr(),
		SecurityIsBeingReviewed: bc.AlternativeASecurityIsBeingReviewed.Ptr(),
		HostingType:             bc.AlternativeAHostingType.Ptr(),
		HostingLocation:         bc.AlternativeAHostingLocation.Ptr(),
		HostingCloudServiceType: bc.AlternativeAHostingCloudServiceType.Ptr(),
		HasUI:                   bc.AlternativeAHasUI.Ptr(),
		Pros:                    bc.AlternativeAPros.Ptr(),
		Cons:                    bc.AlternativeACons.Ptr(),
		CostSavings:             bc.AlternativeACostSavings.Ptr(),
	}
	obj.BusinessSolutions = append(obj.BusinessSolutions, alternativeASolution)

	// alternative b (optional)
	alternativeBSolution := &intakemodels.EASIBusinessSolution{
		SolutionType:            "alternativeB",
		Title:                   bc.AlternativeBTitle.Ptr(),
		Summary:                 bc.AlternativeBSummary.Ptr(),
		AcquisitionApproach:     bc.AlternativeBAcquisitionApproach.Ptr(),
		SecurityIsApproved:      bc.AlternativeBSecurityIsApproved.Ptr(),
		SecurityIsBeingReviewed: bc.AlternativeBSecurityIsBeingReviewed.Ptr(),
		HostingType:             bc.AlternativeBHostingType.Ptr(),
		HostingLocation:         bc.AlternativeBHostingLocation.Ptr(),
		HostingCloudServiceType: bc.AlternativeBHostingCloudServiceType.Ptr(),
		HasUI:                   bc.AlternativeBHasUI.Ptr(),
		Pros:                    bc.AlternativeBPros.Ptr(),
		Cons:                    bc.AlternativeBCons.Ptr(),
		CostSavings:             bc.AlternativeBCostSavings.Ptr(),
	}
	obj.BusinessSolutions = append(obj.BusinessSolutions, alternativeBSolution)

	// lifecycle cost lines
	bcID := bc.ID.String()

	for _, line := range bc.LifecycleCostLines {
		lc := &intakemodels.EASILifecycleCost{
			ID:             pStr(bcID),
			BusinessCaseID: pStr(bcID),
			Solution:       pStr(string(line.Solution)),
			Year:           pStr(string(line.Year)),
		}

		phase := ""
		if line.Phase != nil {
			phase = string(*line.Phase)
		}
		lc.Phase = pStr(phase)

		cost := ""
		if line.Cost != nil {
			cost = strconv.Itoa(*line.Cost)
		}
		lc.Cost = pStr(cost)

		obj.LifecycleCostLines = append(obj.LifecycleCostLines, lc)
	}

	blob, err := json.Marshal(&obj)
	if err != nil {
		return nil, err
	}

	result := &wire.IntakeInput{
		ClientID: pStr(bcID),
		Body:     pStr(string(blob)),

		// invariants for this type
		BodyFormat: pStr(wire.IntakeInputBodyFormatJSON),
		Type:       typeStr(intakeInputBizCase),
		Schema:     versionStr(IntakeInputSchemaEASIBizCaseV01),
	}

	if bc.Status == models.BusinessCaseStatusCLOSED {
		result.ClientStatus = statusStr(inputStatusFinal)
	} else {
		result.ClientStatus = statusStr(inputStatusInitiated)
	}

	if bc.CreatedAt != nil {
		result.ClientCreatedDate = pStrfmtDateTime(bc.CreatedAt)
	}
	if bc.UpdatedAt != nil {
		result.ClientLastUpdatedDate = pStrfmtDateTime(bc.UpdatedAt)
	}

	return result, nil
}
