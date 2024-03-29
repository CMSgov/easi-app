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

// IntakeInput intake input
//
// swagger:model IntakeInput
type IntakeInput struct {

	// The encoded, string representation of the object being transmitted
	// Required: true
	Body *string `json:"body"`

	// body format
	// Required: true
	// Enum: [JSON XML]
	BodyFormat *string `json:"bodyFormat"`

	// Creation date associated with the object being transmitted
	// Required: true
	// Format: date-time
	ClientCreatedDate *strfmt.DateTime `json:"clientCreatedDate"`

	// Unqiue ID associated with the object in body
	// Required: true
	ClientID *string `json:"clientId"`

	// Last update date associated with the object being transmitted
	// Format: date-time
	ClientLastUpdatedDate *strfmt.DateTime `json:"clientLastUpdatedDate,omitempty"`

	// Client's status associated with the object being transmitted, i.e. Initiated, Final, etc.
	// Required: true
	ClientStatus *string `json:"clientStatus"`

	// The name and version of the schema associated with the object being transmitted, i.e. SystemIntake_v01
	// Required: true
	Schema *string `json:"schema"`

	// The type of object being transmitted, i.e. SystemIntake, BusinessCase, etc
	// Required: true
	Type *string `json:"type"`

	// The version associated with the object in the body. This value can be incremented in the event a transaction needs to be resubmitted.
	// Required: true
	Version *string `json:"version"`
}

// Validate validates this intake input
func (m *IntakeInput) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateBody(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateBodyFormat(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateClientCreatedDate(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateClientID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateClientLastUpdatedDate(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateClientStatus(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSchema(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateType(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateVersion(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *IntakeInput) validateBody(formats strfmt.Registry) error {

	if err := validate.Required("body", "body", m.Body); err != nil {
		return err
	}

	return nil
}

var intakeInputTypeBodyFormatPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["JSON","XML"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		intakeInputTypeBodyFormatPropEnum = append(intakeInputTypeBodyFormatPropEnum, v)
	}
}

const (

	// IntakeInputBodyFormatJSON captures enum value "JSON"
	IntakeInputBodyFormatJSON string = "JSON"

	// IntakeInputBodyFormatXML captures enum value "XML"
	IntakeInputBodyFormatXML string = "XML"
)

// prop value enum
func (m *IntakeInput) validateBodyFormatEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, intakeInputTypeBodyFormatPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *IntakeInput) validateBodyFormat(formats strfmt.Registry) error {

	if err := validate.Required("bodyFormat", "body", m.BodyFormat); err != nil {
		return err
	}

	// value enum
	if err := m.validateBodyFormatEnum("bodyFormat", "body", *m.BodyFormat); err != nil {
		return err
	}

	return nil
}

func (m *IntakeInput) validateClientCreatedDate(formats strfmt.Registry) error {

	if err := validate.Required("clientCreatedDate", "body", m.ClientCreatedDate); err != nil {
		return err
	}

	if err := validate.FormatOf("clientCreatedDate", "body", "date-time", m.ClientCreatedDate.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *IntakeInput) validateClientID(formats strfmt.Registry) error {

	if err := validate.Required("clientId", "body", m.ClientID); err != nil {
		return err
	}

	return nil
}

func (m *IntakeInput) validateClientLastUpdatedDate(formats strfmt.Registry) error {
	if swag.IsZero(m.ClientLastUpdatedDate) { // not required
		return nil
	}

	if err := validate.FormatOf("clientLastUpdatedDate", "body", "date-time", m.ClientLastUpdatedDate.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *IntakeInput) validateClientStatus(formats strfmt.Registry) error {

	if err := validate.Required("clientStatus", "body", m.ClientStatus); err != nil {
		return err
	}

	return nil
}

func (m *IntakeInput) validateSchema(formats strfmt.Registry) error {

	if err := validate.Required("schema", "body", m.Schema); err != nil {
		return err
	}

	return nil
}

func (m *IntakeInput) validateType(formats strfmt.Registry) error {

	if err := validate.Required("type", "body", m.Type); err != nil {
		return err
	}

	return nil
}

func (m *IntakeInput) validateVersion(formats strfmt.Registry) error {

	if err := validate.Required("version", "body", m.Version); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this intake input based on context it is used
func (m *IntakeInput) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *IntakeInput) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *IntakeInput) UnmarshalBinary(b []byte) error {
	var res IntakeInput
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
