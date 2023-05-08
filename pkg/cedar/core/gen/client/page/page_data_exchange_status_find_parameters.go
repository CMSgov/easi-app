// Code generated by go-swagger; DO NOT EDIT.

package page

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

// NewPageDataExchangeStatusFindParams creates a new PageDataExchangeStatusFindParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewPageDataExchangeStatusFindParams() *PageDataExchangeStatusFindParams {
	return &PageDataExchangeStatusFindParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewPageDataExchangeStatusFindParamsWithTimeout creates a new PageDataExchangeStatusFindParams object
// with the ability to set a timeout on a request.
func NewPageDataExchangeStatusFindParamsWithTimeout(timeout time.Duration) *PageDataExchangeStatusFindParams {
	return &PageDataExchangeStatusFindParams{
		timeout: timeout,
	}
}

// NewPageDataExchangeStatusFindParamsWithContext creates a new PageDataExchangeStatusFindParams object
// with the ability to set a context for a request.
func NewPageDataExchangeStatusFindParamsWithContext(ctx context.Context) *PageDataExchangeStatusFindParams {
	return &PageDataExchangeStatusFindParams{
		Context: ctx,
	}
}

// NewPageDataExchangeStatusFindParamsWithHTTPClient creates a new PageDataExchangeStatusFindParams object
// with the ability to set a custom HTTPClient for a request.
func NewPageDataExchangeStatusFindParamsWithHTTPClient(client *http.Client) *PageDataExchangeStatusFindParams {
	return &PageDataExchangeStatusFindParams{
		HTTPClient: client,
	}
}

/* PageDataExchangeStatusFindParams contains all the parameters to send to the API endpoint
   for the page data exchange status find operation.

   Typically these are written to a http.Request.
*/
type PageDataExchangeStatusFindParams struct {

	/* Direction.

	   The direction of the data exchange, relative to the systemId provided
	*/
	Direction *string

	/* SystemID.

	   ID of the system that the data exchange is associated with
	*/
	SystemID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the page data exchange status find params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PageDataExchangeStatusFindParams) WithDefaults() *PageDataExchangeStatusFindParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the page data exchange status find params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PageDataExchangeStatusFindParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the page data exchange status find params
func (o *PageDataExchangeStatusFindParams) WithTimeout(timeout time.Duration) *PageDataExchangeStatusFindParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the page data exchange status find params
func (o *PageDataExchangeStatusFindParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the page data exchange status find params
func (o *PageDataExchangeStatusFindParams) WithContext(ctx context.Context) *PageDataExchangeStatusFindParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the page data exchange status find params
func (o *PageDataExchangeStatusFindParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the page data exchange status find params
func (o *PageDataExchangeStatusFindParams) WithHTTPClient(client *http.Client) *PageDataExchangeStatusFindParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the page data exchange status find params
func (o *PageDataExchangeStatusFindParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithDirection adds the direction to the page data exchange status find params
func (o *PageDataExchangeStatusFindParams) WithDirection(direction *string) *PageDataExchangeStatusFindParams {
	o.SetDirection(direction)
	return o
}

// SetDirection adds the direction to the page data exchange status find params
func (o *PageDataExchangeStatusFindParams) SetDirection(direction *string) {
	o.Direction = direction
}

// WithSystemID adds the systemID to the page data exchange status find params
func (o *PageDataExchangeStatusFindParams) WithSystemID(systemID string) *PageDataExchangeStatusFindParams {
	o.SetSystemID(systemID)
	return o
}

// SetSystemID adds the systemId to the page data exchange status find params
func (o *PageDataExchangeStatusFindParams) SetSystemID(systemID string) {
	o.SystemID = systemID
}

// WriteToRequest writes these params to a swagger request
func (o *PageDataExchangeStatusFindParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Direction != nil {

		// query param direction
		var qrDirection string

		if o.Direction != nil {
			qrDirection = *o.Direction
		}
		qDirection := qrDirection
		if qDirection != "" {

			if err := r.SetQueryParam("direction", qDirection); err != nil {
				return err
			}
		}
	}

	// query param systemId
	qrSystemID := o.SystemID
	qSystemID := qrSystemID
	if qSystemID != "" {

		if err := r.SetQueryParam("systemId", qSystemID); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
