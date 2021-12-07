// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// SupportContact support contact
//
// swagger:model SupportContact
type SupportContact struct {

	// application
	Application string `json:"application,omitempty"`

	// email
	Email string `json:"email,omitempty"`

	// id
	ID string `json:"id,omitempty"`

	// name
	Name string `json:"name,omitempty"`

	// phone
	Phone string `json:"phone,omitempty"`

	// title
	Title string `json:"title,omitempty"`

	// url
	URL string `json:"url,omitempty"`
}

// Validate validates this support contact
func (m *SupportContact) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this support contact based on context it is used
func (m *SupportContact) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *SupportContact) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *SupportContact) UnmarshalBinary(b []byte) error {
	var res SupportContact
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
