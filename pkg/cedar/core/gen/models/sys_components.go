// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// SysComponents sys components
//
// swagger:model SysComponents
type SysComponents struct {

	// component acronym
	// Example: ACO UI
	ComponentAcronym string `json:"componentAcronym,omitempty"`

	// component Id
	// Example: 326-1111-0
	ComponentID string `json:"componentId,omitempty"`

	// component name
	// Example: Marketplace Assister Technical Support
	ComponentName string `json:"componentName,omitempty"`

	// component retirement quarter
	// Example: 2
	ComponentRetirementQuarter string `json:"componentRetirementQuarter,omitempty"`

	// component retirement year
	// Example: 2030
	ComponentRetirementYear string `json:"componentRetirementYear,omitempty"`

	// description
	Description string `json:"description,omitempty"`
}

// Validate validates this sys components
func (m *SysComponents) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this sys components based on context it is used
func (m *SysComponents) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *SysComponents) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *SysComponents) UnmarshalBinary(b []byte) error {
	var res SysComponents
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
