// Code generated by go-swagger; DO NOT EDIT.

package exchange

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cmsgov/easi-app/pkg/cedar/core/gen/models"
)

// ExchangeAddReader is a Reader for the ExchangeAdd structure.
type ExchangeAddReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ExchangeAddReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewExchangeAddOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewExchangeAddBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewExchangeAddUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewExchangeAddInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewExchangeAddOK creates a ExchangeAddOK with default headers values
func NewExchangeAddOK() *ExchangeAddOK {
	return &ExchangeAddOK{}
}

/*
	ExchangeAddOK describes a response with status code 200, with default header values.

OK
*/
type ExchangeAddOK struct {
	Payload *models.Response
}

func (o *ExchangeAddOK) Error() string {
	return fmt.Sprintf("[POST /exchange][%d] exchangeAddOK  %+v", 200, o.Payload)
}
func (o *ExchangeAddOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeAddOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewExchangeAddBadRequest creates a ExchangeAddBadRequest with default headers values
func NewExchangeAddBadRequest() *ExchangeAddBadRequest {
	return &ExchangeAddBadRequest{}
}

/*
	ExchangeAddBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type ExchangeAddBadRequest struct {
	Payload *models.Response
}

func (o *ExchangeAddBadRequest) Error() string {
	return fmt.Sprintf("[POST /exchange][%d] exchangeAddBadRequest  %+v", 400, o.Payload)
}
func (o *ExchangeAddBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeAddBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewExchangeAddUnauthorized creates a ExchangeAddUnauthorized with default headers values
func NewExchangeAddUnauthorized() *ExchangeAddUnauthorized {
	return &ExchangeAddUnauthorized{}
}

/*
	ExchangeAddUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type ExchangeAddUnauthorized struct {
	Payload *models.Response
}

func (o *ExchangeAddUnauthorized) Error() string {
	return fmt.Sprintf("[POST /exchange][%d] exchangeAddUnauthorized  %+v", 401, o.Payload)
}
func (o *ExchangeAddUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeAddUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewExchangeAddInternalServerError creates a ExchangeAddInternalServerError with default headers values
func NewExchangeAddInternalServerError() *ExchangeAddInternalServerError {
	return &ExchangeAddInternalServerError{}
}

/*
	ExchangeAddInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type ExchangeAddInternalServerError struct {
	Payload *models.Response
}

func (o *ExchangeAddInternalServerError) Error() string {
	return fmt.Sprintf("[POST /exchange][%d] exchangeAddInternalServerError  %+v", 500, o.Payload)
}
func (o *ExchangeAddInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeAddInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
