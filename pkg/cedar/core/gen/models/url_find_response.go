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

// URLFindResponse Url find response
//
// swagger:model UrlFindResponse
type URLFindResponse struct {

	// Url list
	URLList []*URL `json:"UrlList"`

	// count
	// Required: true
	Count *int32 `json:"count"`
}

// Validate validates this Url find response
func (m *URLFindResponse) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateURLList(formats); err != nil {
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

func (m *URLFindResponse) validateURLList(formats strfmt.Registry) error {
	if swag.IsZero(m.URLList) { // not required
		return nil
	}

	for i := 0; i < len(m.URLList); i++ {
		if swag.IsZero(m.URLList[i]) { // not required
			continue
		}

		if m.URLList[i] != nil {
			if err := m.URLList[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("UrlList" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("UrlList" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *URLFindResponse) validateCount(formats strfmt.Registry) error {

	if err := validate.Required("count", "body", m.Count); err != nil {
		return err
	}

	return nil
}

// ContextValidate validate this Url find response based on the context it is used
func (m *URLFindResponse) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateURLList(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *URLFindResponse) contextValidateURLList(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.URLList); i++ {

		if m.URLList[i] != nil {
			if err := m.URLList[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("UrlList" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("UrlList" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *URLFindResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *URLFindResponse) UnmarshalBinary(b []byte) error {
	var res URLFindResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
