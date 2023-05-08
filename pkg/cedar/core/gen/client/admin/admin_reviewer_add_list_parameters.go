// Code generated by go-swagger; DO NOT EDIT.

package admin

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

	"github.com/cmsgov/easi-app/pkg/cedar/core/gen/models"
)

// NewAdminReviewerAddListParams creates a new AdminReviewerAddListParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewAdminReviewerAddListParams() *AdminReviewerAddListParams {
	return &AdminReviewerAddListParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewAdminReviewerAddListParamsWithTimeout creates a new AdminReviewerAddListParams object
// with the ability to set a timeout on a request.
func NewAdminReviewerAddListParamsWithTimeout(timeout time.Duration) *AdminReviewerAddListParams {
	return &AdminReviewerAddListParams{
		timeout: timeout,
	}
}

// NewAdminReviewerAddListParamsWithContext creates a new AdminReviewerAddListParams object
// with the ability to set a context for a request.
func NewAdminReviewerAddListParamsWithContext(ctx context.Context) *AdminReviewerAddListParams {
	return &AdminReviewerAddListParams{
		Context: ctx,
	}
}

// NewAdminReviewerAddListParamsWithHTTPClient creates a new AdminReviewerAddListParams object
// with the ability to set a custom HTTPClient for a request.
func NewAdminReviewerAddListParamsWithHTTPClient(client *http.Client) *AdminReviewerAddListParams {
	return &AdminReviewerAddListParams{
		HTTPClient: client,
	}
}

/* AdminReviewerAddListParams contains all the parameters to send to the API endpoint
   for the admin reviewer add list operation.

   Typically these are written to a http.Request.
*/
type AdminReviewerAddListParams struct {

	/* Body.

	   List of notes to add to a system
	*/
	Body *models.ReviewerAddRequest

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the admin reviewer add list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *AdminReviewerAddListParams) WithDefaults() *AdminReviewerAddListParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the admin reviewer add list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *AdminReviewerAddListParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the admin reviewer add list params
func (o *AdminReviewerAddListParams) WithTimeout(timeout time.Duration) *AdminReviewerAddListParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the admin reviewer add list params
func (o *AdminReviewerAddListParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the admin reviewer add list params
func (o *AdminReviewerAddListParams) WithContext(ctx context.Context) *AdminReviewerAddListParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the admin reviewer add list params
func (o *AdminReviewerAddListParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the admin reviewer add list params
func (o *AdminReviewerAddListParams) WithHTTPClient(client *http.Client) *AdminReviewerAddListParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the admin reviewer add list params
func (o *AdminReviewerAddListParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the admin reviewer add list params
func (o *AdminReviewerAddListParams) WithBody(body *models.ReviewerAddRequest) *AdminReviewerAddListParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the admin reviewer add list params
func (o *AdminReviewerAddListParams) SetBody(body *models.ReviewerAddRequest) {
	o.Body = body
}

// WriteToRequest writes these params to a swagger request
func (o *AdminReviewerAddListParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
