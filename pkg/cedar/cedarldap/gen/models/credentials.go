// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// Credentials credentials
//
// swagger:model Credentials
type Credentials struct {

	// credentials
	// Required: true
	Credentials *string `json:"credentials"`

	// principal
	// Required: true
	Principal *string `json:"principal"`
}

// Validate validates this credentials
func (m *Credentials) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCredentials(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validatePrincipal(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Credentials) validateCredentials(formats strfmt.Registry) error {

	if err := validate.Required("credentials", "body", m.Credentials); err != nil {
		return err
	}

	return nil
}

func (m *Credentials) validatePrincipal(formats strfmt.Registry) error {

	if err := validate.Required("principal", "body", m.Principal); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this credentials based on context it is used
func (m *Credentials) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *Credentials) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Credentials) UnmarshalBinary(b []byte) error {
	var res Credentials
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
