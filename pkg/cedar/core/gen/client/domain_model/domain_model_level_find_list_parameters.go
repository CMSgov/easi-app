// Code generated by go-swagger; DO NOT EDIT.

package domain_model

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
)

// NewDomainModelLevelFindListParams creates a new DomainModelLevelFindListParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewDomainModelLevelFindListParams() *DomainModelLevelFindListParams {
	return &DomainModelLevelFindListParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewDomainModelLevelFindListParamsWithTimeout creates a new DomainModelLevelFindListParams object
// with the ability to set a timeout on a request.
func NewDomainModelLevelFindListParamsWithTimeout(timeout time.Duration) *DomainModelLevelFindListParams {
	return &DomainModelLevelFindListParams{
		timeout: timeout,
	}
}

// NewDomainModelLevelFindListParamsWithContext creates a new DomainModelLevelFindListParams object
// with the ability to set a context for a request.
func NewDomainModelLevelFindListParamsWithContext(ctx context.Context) *DomainModelLevelFindListParams {
	return &DomainModelLevelFindListParams{
		Context: ctx,
	}
}

// NewDomainModelLevelFindListParamsWithHTTPClient creates a new DomainModelLevelFindListParams object
// with the ability to set a custom HTTPClient for a request.
func NewDomainModelLevelFindListParamsWithHTTPClient(client *http.Client) *DomainModelLevelFindListParams {
	return &DomainModelLevelFindListParams{
		HTTPClient: client,
	}
}

/*
DomainModelLevelFindListParams contains all the parameters to send to the API endpoint

	for the domain model level find list operation.

	Typically these are written to a http.Request.
*/
type DomainModelLevelFindListParams struct {

	/* Model.

	   The name of specific reference model to return. A value from the GET /domainModelName endpoint.
	*/
	Model string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the domain model level find list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *DomainModelLevelFindListParams) WithDefaults() *DomainModelLevelFindListParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the domain model level find list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *DomainModelLevelFindListParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the domain model level find list params
func (o *DomainModelLevelFindListParams) WithTimeout(timeout time.Duration) *DomainModelLevelFindListParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the domain model level find list params
func (o *DomainModelLevelFindListParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the domain model level find list params
func (o *DomainModelLevelFindListParams) WithContext(ctx context.Context) *DomainModelLevelFindListParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the domain model level find list params
func (o *DomainModelLevelFindListParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the domain model level find list params
func (o *DomainModelLevelFindListParams) WithHTTPClient(client *http.Client) *DomainModelLevelFindListParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the domain model level find list params
func (o *DomainModelLevelFindListParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithModel adds the model to the domain model level find list params
func (o *DomainModelLevelFindListParams) WithModel(model string) *DomainModelLevelFindListParams {
	o.SetModel(model)
	return o
}

// SetModel adds the model to the domain model level find list params
func (o *DomainModelLevelFindListParams) SetModel(model string) {
	o.Model = model
}

// WriteToRequest writes these params to a swagger request
func (o *DomainModelLevelFindListParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// query param model
	qrModel := o.Model
	qModel := qrModel
	if qModel != "" {

		if err := r.SetQueryParam("model", qModel); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
