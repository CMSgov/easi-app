// Code generated by go-swagger; DO NOT EDIT.

package note

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

// NewNoteDeleteListParams creates a new NoteDeleteListParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewNoteDeleteListParams() *NoteDeleteListParams {
	return &NoteDeleteListParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewNoteDeleteListParamsWithTimeout creates a new NoteDeleteListParams object
// with the ability to set a timeout on a request.
func NewNoteDeleteListParamsWithTimeout(timeout time.Duration) *NoteDeleteListParams {
	return &NoteDeleteListParams{
		timeout: timeout,
	}
}

// NewNoteDeleteListParamsWithContext creates a new NoteDeleteListParams object
// with the ability to set a context for a request.
func NewNoteDeleteListParamsWithContext(ctx context.Context) *NoteDeleteListParams {
	return &NoteDeleteListParams{
		Context: ctx,
	}
}

// NewNoteDeleteListParamsWithHTTPClient creates a new NoteDeleteListParams object
// with the ability to set a custom HTTPClient for a request.
func NewNoteDeleteListParamsWithHTTPClient(client *http.Client) *NoteDeleteListParams {
	return &NoteDeleteListParams{
		HTTPClient: client,
	}
}

/* NoteDeleteListParams contains all the parameters to send to the API endpoint
   for the note delete list operation.

   Typically these are written to a http.Request.
*/
type NoteDeleteListParams struct {

	/* ID.

	   An ID of one or more notes
	*/
	ID []string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the note delete list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *NoteDeleteListParams) WithDefaults() *NoteDeleteListParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the note delete list params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *NoteDeleteListParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the note delete list params
func (o *NoteDeleteListParams) WithTimeout(timeout time.Duration) *NoteDeleteListParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the note delete list params
func (o *NoteDeleteListParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the note delete list params
func (o *NoteDeleteListParams) WithContext(ctx context.Context) *NoteDeleteListParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the note delete list params
func (o *NoteDeleteListParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the note delete list params
func (o *NoteDeleteListParams) WithHTTPClient(client *http.Client) *NoteDeleteListParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the note delete list params
func (o *NoteDeleteListParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithID adds the id to the note delete list params
func (o *NoteDeleteListParams) WithID(id []string) *NoteDeleteListParams {
	o.SetID(id)
	return o
}

// SetID adds the id to the note delete list params
func (o *NoteDeleteListParams) SetID(id []string) {
	o.ID = id
}

// WriteToRequest writes these params to a swagger request
func (o *NoteDeleteListParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

// bindParamNoteDeleteList binds the parameter id
func (o *NoteDeleteListParams) bindParamID(formats strfmt.Registry) []string {
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
