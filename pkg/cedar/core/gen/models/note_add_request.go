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

// NoteAddRequest note add request
//
// swagger:model NoteAddRequest
type NoteAddRequest struct {

	// notes
	// Required: true
	Notes []*Note `json:"Notes"`
}

// Validate validates this note add request
func (m *NoteAddRequest) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateNotes(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *NoteAddRequest) validateNotes(formats strfmt.Registry) error {

	if err := validate.Required("Notes", "body", m.Notes); err != nil {
		return err
	}

	for i := 0; i < len(m.Notes); i++ {
		if swag.IsZero(m.Notes[i]) { // not required
			continue
		}

		if m.Notes[i] != nil {
			if err := m.Notes[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Notes" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("Notes" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this note add request based on the context it is used
func (m *NoteAddRequest) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateNotes(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *NoteAddRequest) contextValidateNotes(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Notes); i++ {

		if m.Notes[i] != nil {
			if err := m.Notes[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Notes" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("Notes" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *NoteAddRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *NoteAddRequest) UnmarshalBinary(b []byte) error {
	var res NoteAddRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
