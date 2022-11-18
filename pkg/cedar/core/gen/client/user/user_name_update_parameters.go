// Code generated by go-swagger; DO NOT EDIT.

package user

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

// NewUserNameUpdateParams creates a new UserNameUpdateParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewUserNameUpdateParams() *UserNameUpdateParams {
	return &UserNameUpdateParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewUserNameUpdateParamsWithTimeout creates a new UserNameUpdateParams object
// with the ability to set a timeout on a request.
func NewUserNameUpdateParamsWithTimeout(timeout time.Duration) *UserNameUpdateParams {
	return &UserNameUpdateParams{
		timeout: timeout,
	}
}

// NewUserNameUpdateParamsWithContext creates a new UserNameUpdateParams object
// with the ability to set a context for a request.
func NewUserNameUpdateParamsWithContext(ctx context.Context) *UserNameUpdateParams {
	return &UserNameUpdateParams{
		Context: ctx,
	}
}

// NewUserNameUpdateParamsWithHTTPClient creates a new UserNameUpdateParams object
// with the ability to set a custom HTTPClient for a request.
func NewUserNameUpdateParamsWithHTTPClient(client *http.Client) *UserNameUpdateParams {
	return &UserNameUpdateParams{
		HTTPClient: client,
	}
}

/* UserNameUpdateParams contains all the parameters to send to the API endpoint
   for the user name update operation.

   Typically these are written to a http.Request.
*/
type UserNameUpdateParams struct {

	/* Body.

	   User information to be updated in CEDAR.
	*/
	Body *models.UserUpdateRequest

	/* Username.

	   Username of user to update.
	*/
	Username string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the user name update params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UserNameUpdateParams) WithDefaults() *UserNameUpdateParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the user name update params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UserNameUpdateParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the user name update params
func (o *UserNameUpdateParams) WithTimeout(timeout time.Duration) *UserNameUpdateParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the user name update params
func (o *UserNameUpdateParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the user name update params
func (o *UserNameUpdateParams) WithContext(ctx context.Context) *UserNameUpdateParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the user name update params
func (o *UserNameUpdateParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the user name update params
func (o *UserNameUpdateParams) WithHTTPClient(client *http.Client) *UserNameUpdateParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the user name update params
func (o *UserNameUpdateParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the user name update params
func (o *UserNameUpdateParams) WithBody(body *models.UserUpdateRequest) *UserNameUpdateParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the user name update params
func (o *UserNameUpdateParams) SetBody(body *models.UserUpdateRequest) {
	o.Body = body
}

// WithUsername adds the username to the user name update params
func (o *UserNameUpdateParams) WithUsername(username string) *UserNameUpdateParams {
	o.SetUsername(username)
	return o
}

// SetUsername adds the username to the user name update params
func (o *UserNameUpdateParams) SetUsername(username string) {
	o.Username = username
}

// WriteToRequest writes these params to a swagger request
func (o *UserNameUpdateParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param username
	if err := r.SetPathParam("username", o.Username); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
