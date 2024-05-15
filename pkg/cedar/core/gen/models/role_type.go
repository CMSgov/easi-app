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

// RoleType role type
//
// swagger:model RoleType
type RoleType struct {

	// application
	// Required: true
	// Enum: ["all","alfabet"]
	Application *string `json:"application"`

	// description
	Description string `json:"description,omitempty"`

	// id
	// Required: true
	ID *string `json:"id"`

	// name
	// Required: true
	Name *string `json:"name"`
}

// Validate validates this role type
func (m *RoleType) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateApplication(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateName(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

var roleTypeTypeApplicationPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["all","alfabet"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		roleTypeTypeApplicationPropEnum = append(roleTypeTypeApplicationPropEnum, v)
	}
}

const (

	// RoleTypeApplicationAll captures enum value "all"
	RoleTypeApplicationAll string = "all"

	// RoleTypeApplicationAlfabet captures enum value "alfabet"
	RoleTypeApplicationAlfabet string = "alfabet"
)

// prop value enum
func (m *RoleType) validateApplicationEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, roleTypeTypeApplicationPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *RoleType) validateApplication(formats strfmt.Registry) error {

	if err := validate.Required("application", "body", m.Application); err != nil {
		return err
	}

	// value enum
	if err := m.validateApplicationEnum("application", "body", *m.Application); err != nil {
		return err
	}

	return nil
}

func (m *RoleType) validateID(formats strfmt.Registry) error {

	if err := validate.Required("id", "body", m.ID); err != nil {
		return err
	}

	return nil
}

func (m *RoleType) validateName(formats strfmt.Registry) error {

	if err := validate.Required("name", "body", m.Name); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this role type based on context it is used
func (m *RoleType) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *RoleType) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *RoleType) UnmarshalBinary(b []byte) error {
	var res RoleType
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
