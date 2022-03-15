// Code generated by go-swagger; DO NOT EDIT.

package budget

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

// NewBudgetDeleteListParams creates a new BudgetDeleteListParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewBudgetDeleteListParams() *BudgetDeleteListParams {
	return &BudgetDeleteListParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewBudgetDeleteListParamsWithTimeout creates a new BudgetDeleteListParams object
// with the ability to set a timeout on a request.
func NewBudgetDeleteListParamsWithTimeout(timeout time.Duration) *BudgetDeleteListParams {
	return &BudgetDeleteListParams{
		timeout: timeout,
	}
}

// NewBudgetDeleteListParamsWithContext creates a new BudgetDeleteListParams object
// with the ability to set a context for a request.
func NewBudgetDeleteListParamsWithContext(ctx context.Context) *BudgetDeleteListParams {
	return &BudgetDeleteListParams{
		Context: ctx,
	}
}

// NewBudgetDeleteListParamsWithHTTPClient creates a new BudgetDeleteListParams object
// with the ability to set a custom HTTPClient for a request.
func NewBudgetDeleteListParamsWithHTTPClient(client *http.Client) *BudgetDeleteListParams {
	return &BudgetDeleteListParams{
		HTTPClient: client,
	}
}

/* BudgetDeleteListParams contains all the parameters to send to the API endpoint
   for the budget delete list operation.

   Typically these are written to a http.Request.
*/
type BudgetDeleteListParams struct {

	/* ID.

	   An array of budget ID's that are to be deleted.
	*/
	ID []string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the budget delete list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *BudgetDeleteListParams) WithDefaults() *BudgetDeleteListParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the budget delete list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *BudgetDeleteListParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the budget delete list params
func (o *BudgetDeleteListParams) WithTimeout(timeout time.Duration) *BudgetDeleteListParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the budget delete list params
func (o *BudgetDeleteListParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the budget delete list params
func (o *BudgetDeleteListParams) WithContext(ctx context.Context) *BudgetDeleteListParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the budget delete list params
func (o *BudgetDeleteListParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the budget delete list params
func (o *BudgetDeleteListParams) WithHTTPClient(client *http.Client) *BudgetDeleteListParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the budget delete list params
func (o *BudgetDeleteListParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithID adds the id to the budget delete list params
func (o *BudgetDeleteListParams) WithID(id []string) *BudgetDeleteListParams {
	o.SetID(id)
	return o
}

// SetID adds the id to the budget delete list params
func (o *BudgetDeleteListParams) SetID(id []string) {
	o.ID = id
}

// WriteToRequest writes these params to a swagger request
func (o *BudgetDeleteListParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

// bindParamBudgetDeleteList binds the parameter id
func (o *BudgetDeleteListParams) bindParamID(formats strfmt.Registry) []string {
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
