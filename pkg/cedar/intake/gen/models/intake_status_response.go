// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// IntakeStatusResponse intake status response
//
// swagger:model IntakeStatusResponse
type IntakeStatusResponse struct {

	// statuses
	Statuses []*IntakeStatus `json:"Statuses"`

	// count
	// Required: true
	Count *int32 `json:"count"`
}

// Validate validates this intake status response
func (m *IntakeStatusResponse) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateStatuses(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateCount(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *IntakeStatusResponse) validateStatuses(formats strfmt.Registry) error {
	if swag.IsZero(m.Statuses) { // not required
		return nil
	}

	for i := 0; i < len(m.Statuses); i++ {
		if swag.IsZero(m.Statuses[i]) { // not required
			continue
		}

		if m.Statuses[i] != nil {
			if err := m.Statuses[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Statuses" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *IntakeStatusResponse) validateCount(formats strfmt.Registry) error {

	if err := validate.Required("count", "body", m.Count); err != nil {
		return err
	}

	return nil
}

// ContextValidate validate this intake status response based on the context it is used
func (m *IntakeStatusResponse) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateStatuses(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *IntakeStatusResponse) contextValidateStatuses(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Statuses); i++ {

		if m.Statuses[i] != nil {
			if err := m.Statuses[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Statuses" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *IntakeStatusResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *IntakeStatusResponse) UnmarshalBinary(b []byte) error {
	var res IntakeStatusResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
