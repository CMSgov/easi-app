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

// EASIGrtFeedback e a s i grt feedback
//
// swagger:model EASIGrtFeedback
type EASIGrtFeedback struct {

	// feedback
	// Required: true
	Feedback *string `json:"feedback"`

	// feedback type
	// Required: true
	FeedbackType *string `json:"feedbackType"`

	// intake Id
	// Required: true
	IntakeID *string `json:"intakeId"`
}

// Validate validates this e a s i grt feedback
func (m *EASIGrtFeedback) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateFeedback(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateFeedbackType(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateIntakeID(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *EASIGrtFeedback) validateFeedback(formats strfmt.Registry) error {

	if err := validate.Required("feedback", "body", m.Feedback); err != nil {
		return err
	}

	return nil
}

func (m *EASIGrtFeedback) validateFeedbackType(formats strfmt.Registry) error {

	if err := validate.Required("feedbackType", "body", m.FeedbackType); err != nil {
		return err
	}

	return nil
}

func (m *EASIGrtFeedback) validateIntakeID(formats strfmt.Registry) error {

	if err := validate.Required("intakeId", "body", m.IntakeID); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this e a s i grt feedback based on context it is used
func (m *EASIGrtFeedback) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *EASIGrtFeedback) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *EASIGrtFeedback) UnmarshalBinary(b []byte) error {
	var res EASIGrtFeedback
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
