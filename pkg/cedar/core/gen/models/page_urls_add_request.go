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

// PageUrlsAddRequest page urls add request
//
// swagger:model PageUrlsAddRequest
type PageUrlsAddRequest struct {

	// urls
	Urls []*Urls `json:"Urls"`

	// count
	// Example: 123
	// Required: true
	Count *int32 `json:"count"`

	// page name
	// Example: System Components
	PageName string `json:"pageName,omitempty"`

	// system Id
	// Example: 123
	SystemID string `json:"systemId,omitempty"`
}

// Validate validates this page urls add request
func (m *PageUrlsAddRequest) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateUrls(formats); err != nil {
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

func (m *PageUrlsAddRequest) validateUrls(formats strfmt.Registry) error {
	if swag.IsZero(m.Urls) { // not required
		return nil
	}

	for i := 0; i < len(m.Urls); i++ {
		if swag.IsZero(m.Urls[i]) { // not required
			continue
		}

		if m.Urls[i] != nil {
			if err := m.Urls[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Urls" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("Urls" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *PageUrlsAddRequest) validateCount(formats strfmt.Registry) error {

	if err := validate.Required("count", "body", m.Count); err != nil {
		return err
	}

	return nil
}

// ContextValidate validate this page urls add request based on the context it is used
func (m *PageUrlsAddRequest) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateUrls(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *PageUrlsAddRequest) contextValidateUrls(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Urls); i++ {

		if m.Urls[i] != nil {
			if err := m.Urls[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Urls" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("Urls" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *PageUrlsAddRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *PageUrlsAddRequest) UnmarshalBinary(b []byte) error {
	var res PageUrlsAddRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
