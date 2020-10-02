// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// LifecycleCostLine lifecycle cost line
//
// swagger:model LifecycleCostLine
type LifecycleCostLine struct {

	// cost
	// Required: true
	Cost *int32 `json:"cost"`

	// id
	// Required: true
	ID *string `json:"id"`

	// phase
	// Required: true
	Phase *string `json:"phase"`

	// year
	// Required: true
	Year *string `json:"year"`
}

// Validate validates this lifecycle cost line
func (m *LifecycleCostLine) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCost(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validatePhase(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateYear(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *LifecycleCostLine) validateCost(formats strfmt.Registry) error {

	if err := validate.Required("cost", "body", m.Cost); err != nil {
		return err
	}

	return nil
}

func (m *LifecycleCostLine) validateID(formats strfmt.Registry) error {

	if err := validate.Required("id", "body", m.ID); err != nil {
		return err
	}

	return nil
}

func (m *LifecycleCostLine) validatePhase(formats strfmt.Registry) error {

	if err := validate.Required("phase", "body", m.Phase); err != nil {
		return err
	}

	return nil
}

func (m *LifecycleCostLine) validateYear(formats strfmt.Registry) error {

	if err := validate.Required("year", "body", m.Year); err != nil {
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *LifecycleCostLine) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *LifecycleCostLine) UnmarshalBinary(b []byte) error {
	var res LifecycleCostLine
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
