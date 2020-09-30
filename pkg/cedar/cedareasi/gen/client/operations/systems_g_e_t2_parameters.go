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

	strfmt "github.com/go-openapi/strfmt"
)

// NewSystemsGET2Params creates a new SystemsGET2Params object
// with the default values initialized.
func NewSystemsGET2Params() *SystemsGET2Params {
	var ()
	return &SystemsGET2Params{

		timeout: cr.DefaultTimeout,
	}
}

// NewSystemsGET2ParamsWithTimeout creates a new SystemsGET2Params object
// with the default values initialized, and the ability to set a timeout on a request
func NewSystemsGET2ParamsWithTimeout(timeout time.Duration) *SystemsGET2Params {
	var ()
	return &SystemsGET2Params{

		timeout: timeout,
	}
}

// NewSystemsGET2ParamsWithContext creates a new SystemsGET2Params object
// with the default values initialized, and the ability to set a context for a request
func NewSystemsGET2ParamsWithContext(ctx context.Context) *SystemsGET2Params {
	var ()
	return &SystemsGET2Params{

		Context: ctx,
	}
}

// NewSystemsGET2ParamsWithHTTPClient creates a new SystemsGET2Params object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewSystemsGET2ParamsWithHTTPClient(client *http.Client) *SystemsGET2Params {
	var ()
	return &SystemsGET2Params{
		HTTPClient: client,
	}
}

/*SystemsGET2Params contains all the parameters to send to the API endpoint
for the systems g e t 2 operation typically these are written to a http.Request
*/
type SystemsGET2Params struct {

	/*ID*/
	ID *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the systems g e t 2 params
func (o *SystemsGET2Params) WithTimeout(timeout time.Duration) *SystemsGET2Params {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the systems g e t 2 params
func (o *SystemsGET2Params) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the systems g e t 2 params
func (o *SystemsGET2Params) WithContext(ctx context.Context) *SystemsGET2Params {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the systems g e t 2 params
func (o *SystemsGET2Params) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the systems g e t 2 params
func (o *SystemsGET2Params) WithHTTPClient(client *http.Client) *SystemsGET2Params {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the systems g e t 2 params
func (o *SystemsGET2Params) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithID adds the id to the systems g e t 2 params
func (o *SystemsGET2Params) WithID(id *string) *SystemsGET2Params {
	o.SetID(id)
	return o
}

// SetID adds the id to the systems g e t 2 params
func (o *SystemsGET2Params) SetID(id *string) {
	o.ID = id
}

// WriteToRequest writes these params to a swagger request
func (o *SystemsGET2Params) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.ID != nil {

		// query param id
		var qrID string
		if o.ID != nil {
			qrID = *o.ID
		}
		qID := qrID
		if qID != "" {
			if err := r.SetQueryParam("id", qID); err != nil {
				return err
			}
		}

	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
