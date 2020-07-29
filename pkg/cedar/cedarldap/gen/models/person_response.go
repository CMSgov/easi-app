// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// PersonResponse person response
// swagger:model PersonResponse
type PersonResponse struct {

	// person
	Person *Person `json:"Person,omitempty"`
}

// Validate validates this person response
func (m *PersonResponse) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validatePerson(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *PersonResponse) validatePerson(formats strfmt.Registry) error {

	if swag.IsZero(m.Person) { // not required
		return nil
	}

	if m.Person != nil {
		if err := m.Person.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("Person")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *PersonResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *PersonResponse) UnmarshalBinary(b []byte) error {
	var res PersonResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
