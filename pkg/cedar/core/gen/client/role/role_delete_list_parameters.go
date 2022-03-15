// Code generated by go-swagger; DO NOT EDIT.

package role

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

// NewRoleDeleteListParams creates a new RoleDeleteListParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewRoleDeleteListParams() *RoleDeleteListParams {
	return &RoleDeleteListParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewRoleDeleteListParamsWithTimeout creates a new RoleDeleteListParams object
// with the ability to set a timeout on a request.
func NewRoleDeleteListParamsWithTimeout(timeout time.Duration) *RoleDeleteListParams {
	return &RoleDeleteListParams{
		timeout: timeout,
	}
}

// NewRoleDeleteListParamsWithContext creates a new RoleDeleteListParams object
// with the ability to set a context for a request.
func NewRoleDeleteListParamsWithContext(ctx context.Context) *RoleDeleteListParams {
	return &RoleDeleteListParams{
		Context: ctx,
	}
}

// NewRoleDeleteListParamsWithHTTPClient creates a new RoleDeleteListParams object
// with the ability to set a custom HTTPClient for a request.
func NewRoleDeleteListParamsWithHTTPClient(client *http.Client) *RoleDeleteListParams {
	return &RoleDeleteListParams{
		HTTPClient: client,
	}
}

/* RoleDeleteListParams contains all the parameters to send to the API endpoint
   for the role delete list operation.

   Typically these are written to a http.Request.
*/
type RoleDeleteListParams struct {

	/* Application.

	   The application where the role assignment should be deleted
	*/
	Application string

	/* ID.

	   An ID of a role assignment within a specific application
	*/
	ID []string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the role delete list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *RoleDeleteListParams) WithDefaults() *RoleDeleteListParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the role delete list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *RoleDeleteListParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the role delete list params
func (o *RoleDeleteListParams) WithTimeout(timeout time.Duration) *RoleDeleteListParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the role delete list params
func (o *RoleDeleteListParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the role delete list params
func (o *RoleDeleteListParams) WithContext(ctx context.Context) *RoleDeleteListParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the role delete list params
func (o *RoleDeleteListParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the role delete list params
func (o *RoleDeleteListParams) WithHTTPClient(client *http.Client) *RoleDeleteListParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the role delete list params
func (o *RoleDeleteListParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithApplication adds the application to the role delete list params
func (o *RoleDeleteListParams) WithApplication(application string) *RoleDeleteListParams {
	o.SetApplication(application)
	return o
}

// SetApplication adds the application to the role delete list params
func (o *RoleDeleteListParams) SetApplication(application string) {
	o.Application = application
}

// WithID adds the id to the role delete list params
func (o *RoleDeleteListParams) WithID(id []string) *RoleDeleteListParams {
	o.SetID(id)
	return o
}

// SetID adds the id to the role delete list params
func (o *RoleDeleteListParams) SetID(id []string) {
	o.ID = id
}

// WriteToRequest writes these params to a swagger request
func (o *RoleDeleteListParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// query param application
	qrApplication := o.Application
	qApplication := qrApplication
	if qApplication != "" {

		if err := r.SetQueryParam("application", qApplication); err != nil {
			return err
		}
	}

	if o.ID != nil {

		// binding items for id
		joinedID := o.bindParamID(reg)

		// query array param id
		if err := r.SetQueryParam("id", joinedID...); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// bindParamRoleDeleteList binds the parameter id
func (o *RoleDeleteListParams) bindParamID(formats strfmt.Registry) []string {
	iDIR := o.ID

	var iDIC []string
	for _, iDIIR := range iDIR { // explode []string

		iDIIV := iDIIR // string as string
		iDIC = append(iDIC, iDIIV)
	}

	// items.CollectionFormat: "multi"
	iDIS := swag.JoinByFormat(iDIC, "multi")

	return iDIS
}
