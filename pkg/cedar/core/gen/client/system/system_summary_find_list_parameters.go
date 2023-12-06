// Code generated by go-swagger; DO NOT EDIT.

package system

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// NewSystemSummaryFindListParams creates a new SystemSummaryFindListParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewSystemSummaryFindListParams() *SystemSummaryFindListParams {
	return &SystemSummaryFindListParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewSystemSummaryFindListParamsWithTimeout creates a new SystemSummaryFindListParams object
// with the ability to set a timeout on a request.
func NewSystemSummaryFindListParamsWithTimeout(timeout time.Duration) *SystemSummaryFindListParams {
	return &SystemSummaryFindListParams{
		timeout: timeout,
	}
}

// NewSystemSummaryFindListParamsWithContext creates a new SystemSummaryFindListParams object
// with the ability to set a context for a request.
func NewSystemSummaryFindListParamsWithContext(ctx context.Context) *SystemSummaryFindListParams {
	return &SystemSummaryFindListParams{
		Context: ctx,
	}
}

// NewSystemSummaryFindListParamsWithHTTPClient creates a new SystemSummaryFindListParams object
// with the ability to set a custom HTTPClient for a request.
func NewSystemSummaryFindListParamsWithHTTPClient(client *http.Client) *SystemSummaryFindListParams {
	return &SystemSummaryFindListParams{
		HTTPClient: client,
	}
}

/* SystemSummaryFindListParams contains all the parameters to send to the API endpoint
   for the system summary find list operation.

   Typically these are written to a http.Request.
*/
type SystemSummaryFindListParams struct {

	/* BelongsTo.

	   Return only sub-systems of the system ID provided.
	*/
	BelongsTo *string

	/* IdsOnly.

	   Return only system ids and names.
	*/
	IdsOnly *bool

	/* IncludeInSurvey.

	   Include only system census eligible systems.
	*/
	IncludeInSurvey *bool

	/* Limit.

	   Limits the number of systems returned. If no value is provided, the default is 1000

	   Format: int32
	*/
	Limit *int32

	/* Offset.

	   Defines the starting position of the first record returned. If no value is provided, the default is 0

	   Format: int32
	*/
	Offset *int32

	/* RoleType.

	   Role Type of Person that is associated with any System.
	*/
	RoleType *string

	/* State.

	   System state.
	*/
	State *string

	/* Status.

	   System status.
	*/
	Status *string

	/* UserName.

	   EUA of Person that has a Role associated with any System.
	*/
	UserName *string

	/* Version.

	   System versions.
	*/
	Version *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the system summary find list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *SystemSummaryFindListParams) WithDefaults() *SystemSummaryFindListParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the system summary find list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *SystemSummaryFindListParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the system summary find list params
func (o *SystemSummaryFindListParams) WithTimeout(timeout time.Duration) *SystemSummaryFindListParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the system summary find list params
func (o *SystemSummaryFindListParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the system summary find list params
func (o *SystemSummaryFindListParams) WithContext(ctx context.Context) *SystemSummaryFindListParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the system summary find list params
func (o *SystemSummaryFindListParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the system summary find list params
func (o *SystemSummaryFindListParams) WithHTTPClient(client *http.Client) *SystemSummaryFindListParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the system summary find list params
func (o *SystemSummaryFindListParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBelongsTo adds the belongsTo to the system summary find list params
func (o *SystemSummaryFindListParams) WithBelongsTo(belongsTo *string) *SystemSummaryFindListParams {
	o.SetBelongsTo(belongsTo)
	return o
}

// SetBelongsTo adds the belongsTo to the system summary find list params
func (o *SystemSummaryFindListParams) SetBelongsTo(belongsTo *string) {
	o.BelongsTo = belongsTo
}

// WithIdsOnly adds the idsOnly to the system summary find list params
func (o *SystemSummaryFindListParams) WithIdsOnly(idsOnly *bool) *SystemSummaryFindListParams {
	o.SetIdsOnly(idsOnly)
	return o
}

// SetIdsOnly adds the idsOnly to the system summary find list params
func (o *SystemSummaryFindListParams) SetIdsOnly(idsOnly *bool) {
	o.IdsOnly = idsOnly
}

// WithIncludeInSurvey adds the includeInSurvey to the system summary find list params
func (o *SystemSummaryFindListParams) WithIncludeInSurvey(includeInSurvey *bool) *SystemSummaryFindListParams {
	o.SetIncludeInSurvey(includeInSurvey)
	return o
}

// SetIncludeInSurvey adds the includeInSurvey to the system summary find list params
func (o *SystemSummaryFindListParams) SetIncludeInSurvey(includeInSurvey *bool) {
	o.IncludeInSurvey = includeInSurvey
}

// WithLimit adds the limit to the system summary find list params
func (o *SystemSummaryFindListParams) WithLimit(limit *int32) *SystemSummaryFindListParams {
	o.SetLimit(limit)
	return o
}

// SetLimit adds the limit to the system summary find list params
func (o *SystemSummaryFindListParams) SetLimit(limit *int32) {
	o.Limit = limit
}

// WithOffset adds the offset to the system summary find list params
func (o *SystemSummaryFindListParams) WithOffset(offset *int32) *SystemSummaryFindListParams {
	o.SetOffset(offset)
	return o
}

// SetOffset adds the offset to the system summary find list params
func (o *SystemSummaryFindListParams) SetOffset(offset *int32) {
	o.Offset = offset
}

// WithRoleType adds the roleType to the system summary find list params
func (o *SystemSummaryFindListParams) WithRoleType(roleType *string) *SystemSummaryFindListParams {
	o.SetRoleType(roleType)
	return o
}

// SetRoleType adds the roleType to the system summary find list params
func (o *SystemSummaryFindListParams) SetRoleType(roleType *string) {
	o.RoleType = roleType
}

// WithState adds the state to the system summary find list params
func (o *SystemSummaryFindListParams) WithState(state *string) *SystemSummaryFindListParams {
	o.SetState(state)
	return o
}

// SetState adds the state to the system summary find list params
func (o *SystemSummaryFindListParams) SetState(state *string) {
	o.State = state
}

// WithStatus adds the status to the system summary find list params
func (o *SystemSummaryFindListParams) WithStatus(status *string) *SystemSummaryFindListParams {
	o.SetStatus(status)
	return o
}

// SetStatus adds the status to the system summary find list params
func (o *SystemSummaryFindListParams) SetStatus(status *string) {
	o.Status = status
}

// WithUserName adds the userName to the system summary find list params
func (o *SystemSummaryFindListParams) WithUserName(userName *string) *SystemSummaryFindListParams {
	o.SetUserName(userName)
	return o
}

// SetUserName adds the userName to the system summary find list params
func (o *SystemSummaryFindListParams) SetUserName(userName *string) {
	o.UserName = userName
}

// WithVersion adds the version to the system summary find list params
func (o *SystemSummaryFindListParams) WithVersion(version *string) *SystemSummaryFindListParams {
	o.SetVersion(version)
	return o
}

// SetVersion adds the version to the system summary find list params
func (o *SystemSummaryFindListParams) SetVersion(version *string) {
	o.Version = version
}

// WriteToRequest writes these params to a swagger request
func (o *SystemSummaryFindListParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.BelongsTo != nil {

		// query param belongsTo
		var qrBelongsTo string

		if o.BelongsTo != nil {
			qrBelongsTo = *o.BelongsTo
		}
		qBelongsTo := qrBelongsTo
		if qBelongsTo != "" {

			if err := r.SetQueryParam("belongsTo", qBelongsTo); err != nil {
				return err
			}
		}
	}

	if o.IdsOnly != nil {

		// query param idsOnly
		var qrIdsOnly bool

		if o.IdsOnly != nil {
			qrIdsOnly = *o.IdsOnly
		}
		qIdsOnly := swag.FormatBool(qrIdsOnly)
		if qIdsOnly != "" {

			if err := r.SetQueryParam("idsOnly", qIdsOnly); err != nil {
				return err
			}
		}
	}

	if o.IncludeInSurvey != nil {

		// query param includeInSurvey
		var qrIncludeInSurvey bool

		if o.IncludeInSurvey != nil {
			qrIncludeInSurvey = *o.IncludeInSurvey
		}
		qIncludeInSurvey := swag.FormatBool(qrIncludeInSurvey)
		if qIncludeInSurvey != "" {

			if err := r.SetQueryParam("includeInSurvey", qIncludeInSurvey); err != nil {
				return err
			}
		}
	}

	if o.Limit != nil {

		// query param limit
		var qrLimit int32

		if o.Limit != nil {
			qrLimit = *o.Limit
		}
		qLimit := swag.FormatInt32(qrLimit)
		if qLimit != "" {

			if err := r.SetQueryParam("limit", qLimit); err != nil {
				return err
			}
		}
	}

	if o.Offset != nil {

		// query param offset
		var qrOffset int32

		if o.Offset != nil {
			qrOffset = *o.Offset
		}
		qOffset := swag.FormatInt32(qrOffset)
		if qOffset != "" {

			if err := r.SetQueryParam("offset", qOffset); err != nil {
				return err
			}
		}
	}

	if o.RoleType != nil {

		// query param roleType
		var qrRoleType string

		if o.RoleType != nil {
			qrRoleType = *o.RoleType
		}
		qRoleType := qrRoleType
		if qRoleType != "" {

			if err := r.SetQueryParam("roleType", qRoleType); err != nil {
				return err
			}
		}
	}

	if o.State != nil {

		// query param state
		var qrState string

		if o.State != nil {
			qrState = *o.State
		}
		qState := qrState
		if qState != "" {

			if err := r.SetQueryParam("state", qState); err != nil {
				return err
			}
		}
	}

	if o.Status != nil {

		// query param status
		var qrStatus string

		if o.Status != nil {
			qrStatus = *o.Status
		}
		qStatus := qrStatus
		if qStatus != "" {

			if err := r.SetQueryParam("status", qStatus); err != nil {
				return err
			}
		}
	}

	if o.UserName != nil {

		// query param userName
		var qrUserName string

		if o.UserName != nil {
			qrUserName = *o.UserName
		}
		qUserName := qrUserName
		if qUserName != "" {

			if err := r.SetQueryParam("userName", qUserName); err != nil {
				return err
			}
		}
	}

	if o.Version != nil {

		// query param version
		var qrVersion string

		if o.Version != nil {
			qrVersion = *o.Version
		}
		qVersion := qrVersion
		if qVersion != "" {

			if err := r.SetQueryParam("version", qVersion); err != nil {
				return err
			}
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
