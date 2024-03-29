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

// DataCenterHosting data center hosting
//
// swagger:model DataCenterHosting
type DataCenterHosting struct {

	// moving to cloud
	// Example: Yes
	MovingToCloud string `json:"movingToCloud,omitempty"`

	// moving to cloud date
	// Example: 2021-10-13T00:00:00.000Z
	// Format: date
	MovingToCloudDate strfmt.Date `json:"movingToCloudDate,omitempty"`
}

// Validate validates this data center hosting
func (m *DataCenterHosting) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateMovingToCloudDate(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *DataCenterHosting) validateMovingToCloudDate(formats strfmt.Registry) error {
	if swag.IsZero(m.MovingToCloudDate) { // not required
		return nil
	}

	if err := validate.FormatOf("movingToCloudDate", "body", "date", m.MovingToCloudDate.String(), formats); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this data center hosting based on context it is used
func (m *DataCenterHosting) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *DataCenterHosting) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *DataCenterHosting) UnmarshalBinary(b []byte) error {
	var res DataCenterHosting
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
