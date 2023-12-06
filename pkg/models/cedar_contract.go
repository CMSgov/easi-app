package models

// CedarContract represents a single Contract object returned from the CEDAR API

type CedarContract struct {
	PopEndDate            *string `json:"popEndDate,omitempty"`
	PopStartDate          *string `json:"popStartDate,omitempty"`
	AwardID               string  `json:"awardId"`
	ContractAdo           *string `json:"contractADO,omitempty"`
	ContractDeliverableID *string `json:"contractDeliverableId,omitempty"`
	ContractName          *string `json:"contractName,omitempty"`
	Description           *string `json:"description,omitempty"`
	ID                    string  `json:"id"`
	ParentAwardID         string  `json:"parentAwardId"`
	SystemID              *string `json:"systemId,omitempty"`
}
