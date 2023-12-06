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

// ExchangeUpdateReader is a Reader for the ExchangeUpdate structure.
type ExchangeUpdateReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ExchangeUpdateReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewExchangeUpdateOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewExchangeUpdateBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewExchangeUpdateUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewExchangeUpdateInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewExchangeUpdateOK creates a ExchangeUpdateOK with default headers values
func NewExchangeUpdateOK() *ExchangeUpdateOK {
	return &ExchangeUpdateOK{}
}

/* ExchangeUpdateOK describes a response with status code 200, with default header values.

OK
*/
type ExchangeUpdateOK struct {
	Payload *models.Response
}

func (o *ExchangeUpdateOK) Error() string {
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateOK  %+v", 200, o.Payload)
}
func (o *ExchangeUpdateOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeUpdateOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewExchangeUpdateBadRequest creates a ExchangeUpdateBadRequest with default headers values
func NewExchangeUpdateBadRequest() *ExchangeUpdateBadRequest {
	return &ExchangeUpdateBadRequest{}
}

/* ExchangeUpdateBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type ExchangeUpdateBadRequest struct {
	Payload *models.Response
}

func (o *ExchangeUpdateBadRequest) Error() string {
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateBadRequest  %+v", 400, o.Payload)
}
func (o *ExchangeUpdateBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeUpdateBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewExchangeUpdateUnauthorized creates a ExchangeUpdateUnauthorized with default headers values
func NewExchangeUpdateUnauthorized() *ExchangeUpdateUnauthorized {
	return &ExchangeUpdateUnauthorized{}
}

/* ExchangeUpdateUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type ExchangeUpdateUnauthorized struct {
	Payload *models.Response
}

func (o *ExchangeUpdateUnauthorized) Error() string {
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateUnauthorized  %+v", 401, o.Payload)
}
func (o *ExchangeUpdateUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeUpdateUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewExchangeUpdateInternalServerError creates a ExchangeUpdateInternalServerError with default headers values
func NewExchangeUpdateInternalServerError() *ExchangeUpdateInternalServerError {
	return &ExchangeUpdateInternalServerError{}
}

/* ExchangeUpdateInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type ExchangeUpdateInternalServerError struct {
	Payload *models.Response
}

func (o *ExchangeUpdateInternalServerError) Error() string {
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateInternalServerError  %+v", 500, o.Payload)
}
func (o *ExchangeUpdateInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeUpdateInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
