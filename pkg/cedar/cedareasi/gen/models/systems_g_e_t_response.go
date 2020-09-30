// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"strconv"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// SystemsGETResponse systems g e t response
// swagger:model systems_GET_response
type SystemsGETResponse struct {

	// response
	Response *Response1 `json:"Response,omitempty"`

	// systems
	Systems []*System `json:"Systems"`
}

// Validate validates this systems g e t response
func (m *SystemsGETResponse) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateResponse(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSystems(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *SystemsGETResponse) validateResponse(formats strfmt.Registry) error {

	if swag.IsZero(m.Response) { // not required
		return nil
	}

	if m.Response != nil {
		if err := m.Response.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("Response")
			}
			return err
		}
	}

	return nil
}

func (m *SystemsGETResponse) validateSystems(formats strfmt.Registry) error {

	if swag.IsZero(m.Systems) { // not required
		return nil
	}

	for i := 0; i < len(m.Systems); i++ {
		if swag.IsZero(m.Systems[i]) { // not required
			continue
		}

		if m.Systems[i] != nil {
			if err := m.Systems[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Systems" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *SystemsGETResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *SystemsGETResponse) UnmarshalBinary(b []byte) error {
	var res SystemsGETResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
