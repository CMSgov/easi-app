// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// BusinessCase business case
//
// swagger:model BusinessCase
type BusinessCase struct {

	// business need
	// Required: true
	BusinessNeed *string `json:"business_need"`

	// business owner
	// Required: true
	BusinessOwner *string `json:"business_owner"`

	// cms benefit
	// Required: true
	CmsBenefit *string `json:"cms_benefit"`

	// decided at
	// Required: true
	DecidedAt *string `json:"decided_at"`

	// eua user id
	// Required: true
	EuaUserID *string `json:"eua_user_id"`

	// ID used to uniquely identify a system intake form
	// Required: true
	GovernanceID *string `json:"governance_id"`

	// hosting needs
	// Required: true
	HostingNeeds *string `json:"hosting_needs"`

	// ID used to uniquely identify a business case
	// Required: true
	ID *string `json:"id"`

	// initial submitted at
	InitialSubmittedAt string `json:"initial_submitted_at,omitempty"`

	// last submitted at
	LastSubmittedAt string `json:"last_submitted_at,omitempty"`

	// lifecycle id
	// Required: true
	LifecycleID *string `json:"lifecycle_id"`

	// priority alignment
	// Required: true
	PriorityAlignment *string `json:"priority_alignment"`

	// project name
	// Required: true
	ProjectName *string `json:"project_name"`

	// requester
	// Required: true
	Requester *string `json:"requester"`

	// requester phone number
	// Required: true
	RequesterPhoneNumber *string `json:"requester_phone_number"`

	// solutions
	// Required: true
	Solutions []*BusinessCaseSolution `json:"solutions"`

	// status
	// Required: true
	Status *string `json:"status"`

	// success indicators
	// Required: true
	SuccessIndicators *string `json:"success_indicators"`

	// user interface
	// Required: true
	UserInterface *string `json:"user_interface"`

	// withdrawn at
	WithdrawnAt string `json:"withdrawn_at,omitempty"`
}

// Validate validates this business case
func (m *BusinessCase) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateBusinessNeed(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateBusinessOwner(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateCmsBenefit(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateDecidedAt(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateEuaUserID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateGovernanceID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateHostingNeeds(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateLifecycleID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validatePriorityAlignment(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateProjectName(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateRequester(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateRequesterPhoneNumber(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSolutions(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateStatus(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSuccessIndicators(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateUserInterface(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *BusinessCase) validateBusinessNeed(formats strfmt.Registry) error {

	if err := validate.Required("business_need", "body", m.BusinessNeed); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateBusinessOwner(formats strfmt.Registry) error {

	if err := validate.Required("business_owner", "body", m.BusinessOwner); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateCmsBenefit(formats strfmt.Registry) error {

	if err := validate.Required("cms_benefit", "body", m.CmsBenefit); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateDecidedAt(formats strfmt.Registry) error {

	if err := validate.Required("decided_at", "body", m.DecidedAt); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateEuaUserID(formats strfmt.Registry) error {

	if err := validate.Required("eua_user_id", "body", m.EuaUserID); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateGovernanceID(formats strfmt.Registry) error {

	if err := validate.Required("governance_id", "body", m.GovernanceID); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateHostingNeeds(formats strfmt.Registry) error {

	if err := validate.Required("hosting_needs", "body", m.HostingNeeds); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateID(formats strfmt.Registry) error {

	if err := validate.Required("id", "body", m.ID); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateLifecycleID(formats strfmt.Registry) error {

	if err := validate.Required("lifecycle_id", "body", m.LifecycleID); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validatePriorityAlignment(formats strfmt.Registry) error {

	if err := validate.Required("priority_alignment", "body", m.PriorityAlignment); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateProjectName(formats strfmt.Registry) error {

	if err := validate.Required("project_name", "body", m.ProjectName); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateRequester(formats strfmt.Registry) error {

	if err := validate.Required("requester", "body", m.Requester); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateRequesterPhoneNumber(formats strfmt.Registry) error {

	if err := validate.Required("requester_phone_number", "body", m.RequesterPhoneNumber); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateSolutions(formats strfmt.Registry) error {

	if err := validate.Required("solutions", "body", m.Solutions); err != nil {
		return err
	}

	for i := 0; i < len(m.Solutions); i++ {
		if swag.IsZero(m.Solutions[i]) { // not required
			continue
		}

		if m.Solutions[i] != nil {
			if err := m.Solutions[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("solutions" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *BusinessCase) validateStatus(formats strfmt.Registry) error {

	if err := validate.Required("status", "body", m.Status); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateSuccessIndicators(formats strfmt.Registry) error {

	if err := validate.Required("success_indicators", "body", m.SuccessIndicators); err != nil {
		return err
	}

	return nil
}

func (m *BusinessCase) validateUserInterface(formats strfmt.Registry) error {

	if err := validate.Required("user_interface", "body", m.UserInterface); err != nil {
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *BusinessCase) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *BusinessCase) UnmarshalBinary(b []byte) error {
	var res BusinessCase
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
