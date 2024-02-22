// Code generated by go-swagger; DO NOT EDIT.

package software_products

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

// NewSoftwareProductsAddParams creates a new SoftwareProductsAddParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewSoftwareProductsAddParams() *SoftwareProductsAddParams {
	return &SoftwareProductsAddParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewSoftwareProductsAddParamsWithTimeout creates a new SoftwareProductsAddParams object
// with the ability to set a timeout on a request.
func NewSoftwareProductsAddParamsWithTimeout(timeout time.Duration) *SoftwareProductsAddParams {
	return &SoftwareProductsAddParams{
		timeout: timeout,
	}
}

// NewSoftwareProductsAddParamsWithContext creates a new SoftwareProductsAddParams object
// with the ability to set a context for a request.
func NewSoftwareProductsAddParamsWithContext(ctx context.Context) *SoftwareProductsAddParams {
	return &SoftwareProductsAddParams{
		Context: ctx,
	}
}

// NewSoftwareProductsAddParamsWithHTTPClient creates a new SoftwareProductsAddParams object
// with the ability to set a custom HTTPClient for a request.
func NewSoftwareProductsAddParamsWithHTTPClient(client *http.Client) *SoftwareProductsAddParams {
	return &SoftwareProductsAddParams{
		HTTPClient: client,
	}
}

/* SoftwareProductsAddParams contains all the parameters to send to the API endpoint
   for the software products add operation.

   Typically these are written to a http.Request.
*/
type SoftwareProductsAddParams struct {

	/* Body.

	   Page detail information to be added to CEDAR
	*/
	Body *models.PageSoftwareProductsRequest

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the software products add params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *SoftwareProductsAddParams) WithDefaults() *SoftwareProductsAddParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the software products add params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *SoftwareProductsAddParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the software products add params
func (o *SoftwareProductsAddParams) WithTimeout(timeout time.Duration) *SoftwareProductsAddParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the software products add params
func (o *SoftwareProductsAddParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the software products add params
func (o *SoftwareProductsAddParams) WithContext(ctx context.Context) *SoftwareProductsAddParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the software products add params
func (o *SoftwareProductsAddParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the software products add params
func (o *SoftwareProductsAddParams) WithHTTPClient(client *http.Client) *SoftwareProductsAddParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the software products add params
func (o *SoftwareProductsAddParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the software products add params
func (o *SoftwareProductsAddParams) WithBody(body *models.PageSoftwareProductsRequest) *SoftwareProductsAddParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the software products add params
func (o *SoftwareProductsAddParams) SetBody(body *models.PageSoftwareProductsRequest) {
	o.Body = body
}

// WriteToRequest writes these params to a swagger request
func (o *SoftwareProductsAddParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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