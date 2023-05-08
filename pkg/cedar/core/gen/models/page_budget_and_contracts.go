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

// PageBudgetAndContracts page budget and contracts
//
// swagger:model PageBudgetAndContracts
type PageBudgetAndContracts struct {

	// budgets
	// Required: true
	Budgets []*Budget `json:"Budgets"`

	// contracts
	Contracts []*Contract `json:"Contracts"`

	// count
	Count int32 `json:"count,omitempty"`

	// page name
	// Example: Budget and Contracts
	PageName string `json:"pageName,omitempty"`

	// system Id
	// Example: 123-45-67
	SystemID string `json:"systemId,omitempty"`
}

// Validate validates this page budget and contracts
func (m *PageBudgetAndContracts) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateBudgets(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateContracts(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *PageBudgetAndContracts) validateBudgets(formats strfmt.Registry) error {

	if err := validate.Required("Budgets", "body", m.Budgets); err != nil {
		return err
	}

	for i := 0; i < len(m.Budgets); i++ {
		if swag.IsZero(m.Budgets[i]) { // not required
			continue
		}

		if m.Budgets[i] != nil {
			if err := m.Budgets[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Budgets" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("Budgets" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *PageBudgetAndContracts) validateContracts(formats strfmt.Registry) error {
	if swag.IsZero(m.Contracts) { // not required
		return nil
	}

	for i := 0; i < len(m.Contracts); i++ {
		if swag.IsZero(m.Contracts[i]) { // not required
			continue
		}

		if m.Contracts[i] != nil {
			if err := m.Contracts[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Contracts" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("Contracts" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this page budget and contracts based on the context it is used
func (m *PageBudgetAndContracts) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateBudgets(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateContracts(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *PageBudgetAndContracts) contextValidateBudgets(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Budgets); i++ {

		if m.Budgets[i] != nil {
			if err := m.Budgets[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Budgets" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("Budgets" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *PageBudgetAndContracts) contextValidateContracts(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Contracts); i++ {

		if m.Contracts[i] != nil {
			if err := m.Contracts[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("Contracts" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("Contracts" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *PageBudgetAndContracts) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *PageBudgetAndContracts) UnmarshalBinary(b []byte) error {
	var res PageBudgetAndContracts
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
