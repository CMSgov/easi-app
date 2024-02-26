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

// SystemDetail system detail
//
// swagger:model SystemDetail
type SystemDetail struct {

	// business owner information
	BusinessOwnerInformation *BusinessOwnerInformation `json:"BusinessOwnerInformation,omitempty"`

	// data center hosting
	DataCenterHosting *DataCenterHosting `json:"DataCenterHosting,omitempty"`

	// software product details
	SoftwareProductDetails *SoftwareProductDetails `json:"SoftwareProductDetails,omitempty"`

	// system maintainer information
	SystemMaintainerInformation *SystemMaintainerInformation `json:"SystemMaintainerInformation,omitempty"`

	// acronym
	// Example: CMSS
	Acronym string `json:"acronym,omitempty"`

	// belongs to
	// Example: 326-10-0
	BelongsTo string `json:"belongsTo,omitempty"`

	// business owner org
	// Example: Center for Medicare Management
	BusinessOwnerOrg string `json:"businessOwnerOrg,omitempty"`

	// business owner org comp
	// Example: CM-(FFS)
	BusinessOwnerOrgComp string `json:"businessOwnerOrgComp,omitempty"`

	// description
	// Example: This is a CMS System decription
	Description string `json:"description,omitempty"`

	// ict object Id
	// Example: 326-3-0
	// Required: true
	IctObjectID *string `json:"ictObjectId"`

	// id
	// Example: 326-2-0
	// Required: true
	ID *string `json:"id"`

	// name
	// Example: CMS System
	// Required: true
	Name *string `json:"name"`

	// next version Id
	// Example: 326-1-0
	NextVersionID string `json:"nextVersionId,omitempty"`

	// previous version Id
	// Example: 326-3-0
	PreviousVersionID string `json:"previousVersionId,omitempty"`

	// state
	// Example: Active
	State string `json:"state,omitempty"`

	// status
	// Example: Approved
	Status string `json:"status,omitempty"`

	// system maintainer org
	// Example: OIT
	SystemMaintainerOrg string `json:"systemMaintainerOrg,omitempty"`

	// system maintainer org comp
	// Example: Enterprise Architecture and Data Group
	SystemMaintainerOrgComp string `json:"systemMaintainerOrgComp,omitempty"`

	// uuid
	// Example: 12FFF52E-195B-4E48-9A38-669A8BD71234
	UUID string `json:"uuid,omitempty"`

	// version
	// Example: 1.0
	// Required: true
	Version *string `json:"version"`
}

// Validate validates this system detail
func (m *SystemDetail) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateBusinessOwnerInformation(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateDataCenterHosting(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSoftwareProductDetails(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSystemMaintainerInformation(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateIctObjectID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateName(formats); err != nil {
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

func (m *SystemDetail) validateBusinessOwnerInformation(formats strfmt.Registry) error {
	if swag.IsZero(m.BusinessOwnerInformation) { // not required
		return nil
	}

	if m.BusinessOwnerInformation != nil {
		if err := m.BusinessOwnerInformation.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("BusinessOwnerInformation")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("BusinessOwnerInformation")
			}
			return err
		}
	}

	return nil
}

func (m *SystemDetail) validateDataCenterHosting(formats strfmt.Registry) error {
	if swag.IsZero(m.DataCenterHosting) { // not required
		return nil
	}

	if m.DataCenterHosting != nil {
		if err := m.DataCenterHosting.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("DataCenterHosting")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("DataCenterHosting")
			}
			return err
		}
	}

	return nil
}

func (m *SystemDetail) validateSoftwareProductDetails(formats strfmt.Registry) error {
	if swag.IsZero(m.SoftwareProductDetails) { // not required
		return nil
	}

	if m.SoftwareProductDetails != nil {
		if err := m.SoftwareProductDetails.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("SoftwareProductDetails")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("SoftwareProductDetails")
			}
			return err
		}
	}

	return nil
}

func (m *SystemDetail) validateSystemMaintainerInformation(formats strfmt.Registry) error {
	if swag.IsZero(m.SystemMaintainerInformation) { // not required
		return nil
	}

	if m.SystemMaintainerInformation != nil {
		if err := m.SystemMaintainerInformation.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("SystemMaintainerInformation")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("SystemMaintainerInformation")
			}
			return err
		}
	}

	return nil
}

func (m *SystemDetail) validateIctObjectID(formats strfmt.Registry) error {

	if err := validate.Required("ictObjectId", "body", m.IctObjectID); err != nil {
		return err
	}

	return nil
}

func (m *SystemDetail) validateID(formats strfmt.Registry) error {

	if err := validate.Required("id", "body", m.ID); err != nil {
		return err
	}

	return nil
}

func (m *SystemDetail) validateName(formats strfmt.Registry) error {

	if err := validate.Required("name", "body", m.Name); err != nil {
		return err
	}

	return nil
}

func (m *SystemDetail) validateVersion(formats strfmt.Registry) error {

	if err := validate.Required("version", "body", m.Version); err != nil {
		return err
	}

	return nil
}

// ContextValidate validate this system detail based on the context it is used
func (m *SystemDetail) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateBusinessOwnerInformation(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateDataCenterHosting(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateSoftwareProductDetails(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateSystemMaintainerInformation(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *SystemDetail) contextValidateBusinessOwnerInformation(ctx context.Context, formats strfmt.Registry) error {

	if m.BusinessOwnerInformation != nil {

		if swag.IsZero(m.BusinessOwnerInformation) { // not required
			return nil
		}

		if err := m.BusinessOwnerInformation.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("BusinessOwnerInformation")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("BusinessOwnerInformation")
			}
			return err
		}
	}

	return nil
}

func (m *SystemDetail) contextValidateDataCenterHosting(ctx context.Context, formats strfmt.Registry) error {

	if m.DataCenterHosting != nil {

		if swag.IsZero(m.DataCenterHosting) { // not required
			return nil
		}

		if err := m.DataCenterHosting.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("DataCenterHosting")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("DataCenterHosting")
			}
			return err
		}
	}

	return nil
}

func (m *SystemDetail) contextValidateSoftwareProductDetails(ctx context.Context, formats strfmt.Registry) error {

	if m.SoftwareProductDetails != nil {

		if swag.IsZero(m.SoftwareProductDetails) { // not required
			return nil
		}

		if err := m.SoftwareProductDetails.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("SoftwareProductDetails")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("SoftwareProductDetails")
			}
			return err
		}
	}

	return nil
}

func (m *SystemDetail) contextValidateSystemMaintainerInformation(ctx context.Context, formats strfmt.Registry) error {

	if m.SystemMaintainerInformation != nil {

		if swag.IsZero(m.SystemMaintainerInformation) { // not required
			return nil
		}

		if err := m.SystemMaintainerInformation.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("SystemMaintainerInformation")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("SystemMaintainerInformation")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *SystemDetail) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *SystemDetail) UnmarshalBinary(b []byte) error {
	var res SystemDetail
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
