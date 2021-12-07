// Code generated by go-swagger; DO NOT EDIT.

package exchange

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

// NewExchangeDeleteListParams creates a new ExchangeDeleteListParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewExchangeDeleteListParams() *ExchangeDeleteListParams {
	return &ExchangeDeleteListParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewExchangeDeleteListParamsWithTimeout creates a new ExchangeDeleteListParams object
// with the ability to set a timeout on a request.
func NewExchangeDeleteListParamsWithTimeout(timeout time.Duration) *ExchangeDeleteListParams {
	return &ExchangeDeleteListParams{
		timeout: timeout,
	}
}

// NewExchangeDeleteListParamsWithContext creates a new ExchangeDeleteListParams object
// with the ability to set a context for a request.
func NewExchangeDeleteListParamsWithContext(ctx context.Context) *ExchangeDeleteListParams {
	return &ExchangeDeleteListParams{
		Context: ctx,
	}
}

// NewExchangeDeleteListParamsWithHTTPClient creates a new ExchangeDeleteListParams object
// with the ability to set a custom HTTPClient for a request.
func NewExchangeDeleteListParamsWithHTTPClient(client *http.Client) *ExchangeDeleteListParams {
	return &ExchangeDeleteListParams{
		HTTPClient: client,
	}
}

/* ExchangeDeleteListParams contains all the parameters to send to the API endpoint
   for the exchange delete list operation.

   Typically these are written to a http.Request.
*/
type ExchangeDeleteListParams struct {

	/* ID.

	   An array of ids data exchanges.
	*/
	ID []string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the exchange delete list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ExchangeDeleteListParams) WithDefaults() *ExchangeDeleteListParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the exchange delete list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ExchangeDeleteListParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the exchange delete list params
func (o *ExchangeDeleteListParams) WithTimeout(timeout time.Duration) *ExchangeDeleteListParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the exchange delete list params
func (o *ExchangeDeleteListParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the exchange delete list params
func (o *ExchangeDeleteListParams) WithContext(ctx context.Context) *ExchangeDeleteListParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the exchange delete list params
func (o *ExchangeDeleteListParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the exchange delete list params
func (o *ExchangeDeleteListParams) WithHTTPClient(client *http.Client) *ExchangeDeleteListParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the exchange delete list params
func (o *ExchangeDeleteListParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithID adds the id to the exchange delete list params
func (o *ExchangeDeleteListParams) WithID(id []string) *ExchangeDeleteListParams {
	o.SetID(id)
	return o
}

// SetID adds the id to the exchange delete list params
func (o *ExchangeDeleteListParams) SetID(id []string) {
	o.ID = id
}

// WriteToRequest writes these params to a swagger request
func (o *ExchangeDeleteListParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

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

// bindParamExchangeDeleteList binds the parameter id
func (o *ExchangeDeleteListParams) bindParamID(formats strfmt.Registry) []string {
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
