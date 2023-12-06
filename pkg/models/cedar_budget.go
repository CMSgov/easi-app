package models

// CedarBudget represents a single Budget object returned from the CEDAR API

type CedarBudget struct {
	Funding      string  `json:"funding,omitempty"`
	FundingID    string  `json:"fundingId,omitempty"`
	ID           string  `json:"id,omitempty"`
	ProjectID    *string `json:"projectId"`
	ProjectTitle string  `json:"projectTitle,omitempty"`
	SystemID     string  `json:"systemId,omitempty"`
}
