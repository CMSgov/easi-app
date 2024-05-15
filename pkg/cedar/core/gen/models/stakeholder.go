// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// Stakeholder stakeholder
//
// swagger:model Stakeholder
type Stakeholder struct {

	// description
	Description string `json:"description,omitempty"`

	// id
	// Example: 152-3-0
	// Required: true
	ID *string `json:"id"`

	// name
	// Example: Food and Drug Administration (FDA)
	Name string `json:"name,omitempty"`

	// state
	// Enum: ["active","planned","retired"]
	State string `json:"state,omitempty"`

	// status
	// Enum: ["approved","draft"]
	Status string `json:"status,omitempty"`

	// version
	// Example: 1
	Version string `json:"version,omitempty"`
}

// Validate validates this stakeholder
func (m *Stakeholder) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateState(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateStatus(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Stakeholder) validateID(formats strfmt.Registry) error {

	if err := validate.Required("id", "body", m.ID); err != nil {
		return err
	}

	return nil
}

var stakeholderTypeStatePropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["active","planned","retired"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		stakeholderTypeStatePropEnum = append(stakeholderTypeStatePropEnum, v)
	}
}

const (

	// StakeholderStateActive captures enum value "active"
	StakeholderStateActive string = "active"

	// StakeholderStatePlanned captures enum value "planned"
	StakeholderStatePlanned string = "planned"

	// StakeholderStateRetired captures enum value "retired"
	StakeholderStateRetired string = "retired"
)

// prop value enum
func (m *Stakeholder) validateStateEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, stakeholderTypeStatePropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *Stakeholder) validateState(formats strfmt.Registry) error {
	if swag.IsZero(m.State) { // not required
		return nil
	}

	// value enum
	if err := m.validateStateEnum("state", "body", m.State); err != nil {
		return err
	}

	return nil
}

var stakeholderTypeStatusPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["approved","draft"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		stakeholderTypeStatusPropEnum = append(stakeholderTypeStatusPropEnum, v)
	}
}

const (

	// StakeholderStatusApproved captures enum value "approved"
	StakeholderStatusApproved string = "approved"

	// StakeholderStatusDraft captures enum value "draft"
	StakeholderStatusDraft string = "draft"
)

// prop value enum
func (m *Stakeholder) validateStatusEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, stakeholderTypeStatusPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *Stakeholder) validateStatus(formats strfmt.Registry) error {
	if swag.IsZero(m.Status) { // not required
		return nil
	}

	// value enum
	if err := m.validateStatusEnum("status", "body", m.Status); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this stakeholder based on context it is used
func (m *Stakeholder) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *Stakeholder) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Stakeholder) UnmarshalBinary(b []byte) error {
	var res Stakeholder
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
