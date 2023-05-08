// Code generated by go-swagger; DO NOT EDIT.

package page

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cmsgov/easi-app/pkg/cedar/core/gen/models"
)

// PageDataExchangeStatusAddReader is a Reader for the PageDataExchangeStatusAdd structure.
type PageDataExchangeStatusAddReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PageDataExchangeStatusAddReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPageDataExchangeStatusAddOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewPageDataExchangeStatusAddBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewPageDataExchangeStatusAddUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewPageDataExchangeStatusAddInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewPageDataExchangeStatusAddOK creates a PageDataExchangeStatusAddOK with default headers values
func NewPageDataExchangeStatusAddOK() *PageDataExchangeStatusAddOK {
	return &PageDataExchangeStatusAddOK{}
}

/* PageDataExchangeStatusAddOK describes a response with status code 200, with default header values.

OK
*/
type PageDataExchangeStatusAddOK struct {
	Payload *models.UpsertResponse
}

func (o *PageDataExchangeStatusAddOK) Error() string {
	return fmt.Sprintf("[POST /page/dataExchange/status][%d] pageDataExchangeStatusAddOK  %+v", 200, o.Payload)
}
func (o *PageDataExchangeStatusAddOK) GetPayload() *models.UpsertResponse {
	return o.Payload
}

func (o *PageDataExchangeStatusAddOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.UpsertResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPageDataExchangeStatusAddBadRequest creates a PageDataExchangeStatusAddBadRequest with default headers values
func NewPageDataExchangeStatusAddBadRequest() *PageDataExchangeStatusAddBadRequest {
	return &PageDataExchangeStatusAddBadRequest{}
}

/* PageDataExchangeStatusAddBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type PageDataExchangeStatusAddBadRequest struct {
	Payload *models.Response
}

func (o *PageDataExchangeStatusAddBadRequest) Error() string {
	return fmt.Sprintf("[POST /page/dataExchange/status][%d] pageDataExchangeStatusAddBadRequest  %+v", 400, o.Payload)
}
func (o *PageDataExchangeStatusAddBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *PageDataExchangeStatusAddBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPageDataExchangeStatusAddUnauthorized creates a PageDataExchangeStatusAddUnauthorized with default headers values
func NewPageDataExchangeStatusAddUnauthorized() *PageDataExchangeStatusAddUnauthorized {
	return &PageDataExchangeStatusAddUnauthorized{}
}

/* PageDataExchangeStatusAddUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type PageDataExchangeStatusAddUnauthorized struct {
	Payload *models.Response
}

func (o *PageDataExchangeStatusAddUnauthorized) Error() string {
	return fmt.Sprintf("[POST /page/dataExchange/status][%d] pageDataExchangeStatusAddUnauthorized  %+v", 401, o.Payload)
}
func (o *PageDataExchangeStatusAddUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *PageDataExchangeStatusAddUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPageDataExchangeStatusAddInternalServerError creates a PageDataExchangeStatusAddInternalServerError with default headers values
func NewPageDataExchangeStatusAddInternalServerError() *PageDataExchangeStatusAddInternalServerError {
	return &PageDataExchangeStatusAddInternalServerError{}
}

/* PageDataExchangeStatusAddInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type PageDataExchangeStatusAddInternalServerError struct {
	Payload *models.Response
}

func (o *PageDataExchangeStatusAddInternalServerError) Error() string {
	return fmt.Sprintf("[POST /page/dataExchange/status][%d] pageDataExchangeStatusAddInternalServerError  %+v", 500, o.Payload)
}
func (o *PageDataExchangeStatusAddInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *PageDataExchangeStatusAddInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
