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

// DataCenter data center
//
// swagger:model DataCenter
type DataCenter struct {

	// address1
	// Example: 123 main street
	Address1 string `json:"address1,omitempty"`

	// address2
	// Example: suite 100
	Address2 string `json:"address2,omitempty"`

	// address state
	// Example: NY
	AddressState string `json:"addressState,omitempty"`

	// city
	// Example: New York
	City string `json:"city,omitempty"`

	// description
	Description string `json:"description,omitempty"`

	// end date
	// Format: date
	EndDate strfmt.Date `json:"endDate,omitempty"`

	// id
	// Example: 55-1-0
	ID string `json:"id,omitempty"`

	// name
	// Example: CMS Baltimore Data Center - EDC4
	Name string `json:"name,omitempty"`

	// start date
	// Format: date
	StartDate strfmt.Date `json:"startDate,omitempty"`

	// state
	// Enum: ["active","planned","retired"]
	State string `json:"state,omitempty"`

	// status
	// Enum: ["approved","draft"]
	Status string `json:"status,omitempty"`

	// version
	// Example: 1
	Version string `json:"version,omitempty"`

	// zip
	// Example: 10002
	Zip string `json:"zip,omitempty"`
}

// Validate validates this data center
func (m *DataCenter) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateEndDate(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateStartDate(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateState(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateStatus(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *DataCenter) validateEndDate(formats strfmt.Registry) error {
	if swag.IsZero(m.EndDate) { // not required
		return nil
	}

	if err := validate.FormatOf("endDate", "body", "date", m.EndDate.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *DataCenter) validateStartDate(formats strfmt.Registry) error {
	if swag.IsZero(m.StartDate) { // not required
		return nil
	}

	if err := validate.FormatOf("startDate", "body", "date", m.StartDate.String(), formats); err != nil {
		return err
	}

	return nil
}

var dataCenterTypeStatePropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["active","planned","retired"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		dataCenterTypeStatePropEnum = append(dataCenterTypeStatePropEnum, v)
	}
}

const (

	// DataCenterStateActive captures enum value "active"
	DataCenterStateActive string = "active"

	// DataCenterStatePlanned captures enum value "planned"
	DataCenterStatePlanned string = "planned"

	// DataCenterStateRetired captures enum value "retired"
	DataCenterStateRetired string = "retired"
)

// prop value enum
func (m *DataCenter) validateStateEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, dataCenterTypeStatePropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *DataCenter) validateState(formats strfmt.Registry) error {
	if swag.IsZero(m.State) { // not required
		return nil
	}

	// value enum
	if err := m.validateStateEnum("state", "body", m.State); err != nil {
		return err
	}

	return nil
}

var dataCenterTypeStatusPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["approved","draft"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		dataCenterTypeStatusPropEnum = append(dataCenterTypeStatusPropEnum, v)
	}
}

const (

	// DataCenterStatusApproved captures enum value "approved"
	DataCenterStatusApproved string = "approved"

	// DataCenterStatusDraft captures enum value "draft"
	DataCenterStatusDraft string = "draft"
)

// prop value enum
func (m *DataCenter) validateStatusEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, dataCenterTypeStatusPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *DataCenter) validateStatus(formats strfmt.Registry) error {
	if swag.IsZero(m.Status) { // not required
		return nil
	}

	// value enum
	if err := m.validateStatusEnum("status", "body", m.Status); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this data center based on context it is used
func (m *DataCenter) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *DataCenter) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *DataCenter) UnmarshalBinary(b []byte) error {
	var res DataCenter
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
