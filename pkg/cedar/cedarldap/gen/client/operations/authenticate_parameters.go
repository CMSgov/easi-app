// Code generated by go-swagger; DO NOT EDIT.

package operations

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

	"github.com/cmsgov/easi-app/pkg/cedar/cedarldap/gen/models"
)

// NewAuthenticateParams creates a new AuthenticateParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewAuthenticateParams() *AuthenticateParams {
	return &AuthenticateParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewAuthenticateParamsWithTimeout creates a new AuthenticateParams object
// with the ability to set a timeout on a request.
func NewAuthenticateParamsWithTimeout(timeout time.Duration) *AuthenticateParams {
	return &AuthenticateParams{
		timeout: timeout,
	}
}

// NewAuthenticateParamsWithContext creates a new AuthenticateParams object
// with the ability to set a context for a request.
func NewAuthenticateParamsWithContext(ctx context.Context) *AuthenticateParams {
	return &AuthenticateParams{
		Context: ctx,
	}
}

// NewAuthenticateParamsWithHTTPClient creates a new AuthenticateParams object
// with the ability to set a custom HTTPClient for a request.
func NewAuthenticateParamsWithHTTPClient(client *http.Client) *AuthenticateParams {
	return &AuthenticateParams{
		HTTPClient: client,
	}
}

/* AuthenticateParams contains all the parameters to send to the API endpoint
   for the authenticate operation.

   Typically these are written to a http.Request.
*/
type AuthenticateParams struct {

	// Body.
	Body *models.Credentials

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the authenticate params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *AuthenticateParams) WithDefaults() *AuthenticateParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the authenticate params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *AuthenticateParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the authenticate params
func (o *AuthenticateParams) WithTimeout(timeout time.Duration) *AuthenticateParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the authenticate params
func (o *AuthenticateParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the authenticate params
func (o *AuthenticateParams) WithContext(ctx context.Context) *AuthenticateParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the authenticate params
func (o *AuthenticateParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the authenticate params
func (o *AuthenticateParams) WithHTTPClient(client *http.Client) *AuthenticateParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the authenticate params
func (o *AuthenticateParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the authenticate params
func (o *AuthenticateParams) WithBody(body *models.Credentials) *AuthenticateParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the authenticate params
func (o *AuthenticateParams) SetBody(body *models.Credentials) {
	o.Body = body
}

// WriteToRequest writes these params to a swagger request
func (o *AuthenticateParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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
