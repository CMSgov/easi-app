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
)

// NewPersonParams creates a new PersonParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewPersonParams() *PersonParams {
	return &PersonParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewPersonParamsWithTimeout creates a new PersonParams object
// with the ability to set a timeout on a request.
func NewPersonParamsWithTimeout(timeout time.Duration) *PersonParams {
	return &PersonParams{
		timeout: timeout,
	}
}

// NewPersonParamsWithContext creates a new PersonParams object
// with the ability to set a context for a request.
func NewPersonParamsWithContext(ctx context.Context) *PersonParams {
	return &PersonParams{
		Context: ctx,
	}
}

// NewPersonParamsWithHTTPClient creates a new PersonParams object
// with the ability to set a custom HTTPClient for a request.
func NewPersonParamsWithHTTPClient(client *http.Client) *PersonParams {
	return &PersonParams{
		HTTPClient: client,
	}
}

/* PersonParams contains all the parameters to send to the API endpoint
   for the person operation.

   Typically these are written to a http.Request.
*/
type PersonParams struct {

	/* CommonName.

	   The common name of the person.
	*/
	CommonName *string

	/* CountLimit.

	   The maximum number of records to return. The maximum number of results allowed in a single call is limited by the server. This value is only used if it is less than the server-side setting
	*/
	CountLimit *string

	/* Email.

	   The email of the person.
	*/
	Email *string

	/* FirstName.

	   The first name of the person.
	*/
	FirstName *string

	/* LastName.

	   The last name of the person.
	*/
	LastName *string

	/* Telephone.

	   The telephone number of the person.
	*/
	Telephone *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the person params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PersonParams) WithDefaults() *PersonParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the person params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PersonParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the person params
func (o *PersonParams) WithTimeout(timeout time.Duration) *PersonParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the person params
func (o *PersonParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the person params
func (o *PersonParams) WithContext(ctx context.Context) *PersonParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the person params
func (o *PersonParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the person params
func (o *PersonParams) WithHTTPClient(client *http.Client) *PersonParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the person params
func (o *PersonParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithCommonName adds the commonName to the person params
func (o *PersonParams) WithCommonName(commonName *string) *PersonParams {
	o.SetCommonName(commonName)
	return o
}

// SetCommonName adds the commonName to the person params
func (o *PersonParams) SetCommonName(commonName *string) {
	o.CommonName = commonName
}

// WithCountLimit adds the countLimit to the person params
func (o *PersonParams) WithCountLimit(countLimit *string) *PersonParams {
	o.SetCountLimit(countLimit)
	return o
}

// SetCountLimit adds the countLimit to the person params
func (o *PersonParams) SetCountLimit(countLimit *string) {
	o.CountLimit = countLimit
}

// WithEmail adds the email to the person params
func (o *PersonParams) WithEmail(email *string) *PersonParams {
	o.SetEmail(email)
	return o
}

// SetEmail adds the email to the person params
func (o *PersonParams) SetEmail(email *string) {
	o.Email = email
}

// WithFirstName adds the firstName to the person params
func (o *PersonParams) WithFirstName(firstName *string) *PersonParams {
	o.SetFirstName(firstName)
	return o
}

// SetFirstName adds the firstName to the person params
func (o *PersonParams) SetFirstName(firstName *string) {
	o.FirstName = firstName
}

// WithLastName adds the lastName to the person params
func (o *PersonParams) WithLastName(lastName *string) *PersonParams {
	o.SetLastName(lastName)
	return o
}

// SetLastName adds the lastName to the person params
func (o *PersonParams) SetLastName(lastName *string) {
	o.LastName = lastName
}

// WithTelephone adds the telephone to the person params
func (o *PersonParams) WithTelephone(telephone *string) *PersonParams {
	o.SetTelephone(telephone)
	return o
}

// SetTelephone adds the telephone to the person params
func (o *PersonParams) SetTelephone(telephone *string) {
	o.Telephone = telephone
}

// WriteToRequest writes these params to a swagger request
func (o *PersonParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.CommonName != nil {

		// query param commonName
		var qrCommonName string

		if o.CommonName != nil {
			qrCommonName = *o.CommonName
		}
		qCommonName := qrCommonName
		if qCommonName != "" {

			if err := r.SetQueryParam("commonName", qCommonName); err != nil {
				return err
			}
		}
	}

	if o.CountLimit != nil {

		// query param countLimit
		var qrCountLimit string

		if o.CountLimit != nil {
			qrCountLimit = *o.CountLimit
		}
		qCountLimit := qrCountLimit
		if qCountLimit != "" {

			if err := r.SetQueryParam("countLimit", qCountLimit); err != nil {
				return err
			}
		}
	}

	if o.Email != nil {

		// query param email
		var qrEmail string

		if o.Email != nil {
			qrEmail = *o.Email
		}
		qEmail := qrEmail
		if qEmail != "" {

			if err := r.SetQueryParam("email", qEmail); err != nil {
				return err
			}
		}
	}

	if o.FirstName != nil {

		// query param firstName
		var qrFirstName string

		if o.FirstName != nil {
			qrFirstName = *o.FirstName
		}
		qFirstName := qrFirstName
		if qFirstName != "" {

			if err := r.SetQueryParam("firstName", qFirstName); err != nil {
				return err
			}
		}
	}

	if o.LastName != nil {

		// query param lastName
		var qrLastName string

		if o.LastName != nil {
			qrLastName = *o.LastName
		}
		qLastName := qrLastName
		if qLastName != "" {

			if err := r.SetQueryParam("lastName", qLastName); err != nil {
				return err
			}
		}
	}

	if o.Telephone != nil {

		// query param telephone
		var qrTelephone string

		if o.Telephone != nil {
			qrTelephone = *o.Telephone
		}
		qTelephone := qrTelephone
		if qTelephone != "" {

			if err := r.SetQueryParam("telephone", qTelephone); err != nil {
				return err
			}
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
