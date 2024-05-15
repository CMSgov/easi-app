// Code generated by go-swagger; DO NOT EDIT.

package exchange

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"encoding/json"
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
		return nil, runtime.NewAPIError("[PUT /exchange] exchangeUpdate", response, response.Code())
	}
}

// NewExchangeUpdateOK creates a ExchangeUpdateOK with default headers values
func NewExchangeUpdateOK() *ExchangeUpdateOK {
	return &ExchangeUpdateOK{}
}

/*
ExchangeUpdateOK describes a response with status code 200, with default header values.

OK
*/
type ExchangeUpdateOK struct {
	Payload *models.Response
}

// IsSuccess returns true when this exchange update o k response has a 2xx status code
func (o *ExchangeUpdateOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this exchange update o k response has a 3xx status code
func (o *ExchangeUpdateOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this exchange update o k response has a 4xx status code
func (o *ExchangeUpdateOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this exchange update o k response has a 5xx status code
func (o *ExchangeUpdateOK) IsServerError() bool {
	return false
}

// IsCode returns true when this exchange update o k response a status code equal to that given
func (o *ExchangeUpdateOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the exchange update o k response
func (o *ExchangeUpdateOK) Code() int {
	return 200
}

func (o *ExchangeUpdateOK) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateOK %s", 200, payload)
}

func (o *ExchangeUpdateOK) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateOK %s", 200, payload)
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

/*
ExchangeUpdateBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type ExchangeUpdateBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this exchange update bad request response has a 2xx status code
func (o *ExchangeUpdateBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this exchange update bad request response has a 3xx status code
func (o *ExchangeUpdateBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this exchange update bad request response has a 4xx status code
func (o *ExchangeUpdateBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this exchange update bad request response has a 5xx status code
func (o *ExchangeUpdateBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this exchange update bad request response a status code equal to that given
func (o *ExchangeUpdateBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the exchange update bad request response
func (o *ExchangeUpdateBadRequest) Code() int {
	return 400
}

func (o *ExchangeUpdateBadRequest) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateBadRequest %s", 400, payload)
}

func (o *ExchangeUpdateBadRequest) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateBadRequest %s", 400, payload)
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

/*
ExchangeUpdateUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type ExchangeUpdateUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this exchange update unauthorized response has a 2xx status code
func (o *ExchangeUpdateUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this exchange update unauthorized response has a 3xx status code
func (o *ExchangeUpdateUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this exchange update unauthorized response has a 4xx status code
func (o *ExchangeUpdateUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this exchange update unauthorized response has a 5xx status code
func (o *ExchangeUpdateUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this exchange update unauthorized response a status code equal to that given
func (o *ExchangeUpdateUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the exchange update unauthorized response
func (o *ExchangeUpdateUnauthorized) Code() int {
	return 401
}

func (o *ExchangeUpdateUnauthorized) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateUnauthorized %s", 401, payload)
}

func (o *ExchangeUpdateUnauthorized) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateUnauthorized %s", 401, payload)
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

/*
ExchangeUpdateInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type ExchangeUpdateInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this exchange update internal server error response has a 2xx status code
func (o *ExchangeUpdateInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this exchange update internal server error response has a 3xx status code
func (o *ExchangeUpdateInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this exchange update internal server error response has a 4xx status code
func (o *ExchangeUpdateInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this exchange update internal server error response has a 5xx status code
func (o *ExchangeUpdateInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this exchange update internal server error response a status code equal to that given
func (o *ExchangeUpdateInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the exchange update internal server error response
func (o *ExchangeUpdateInternalServerError) Code() int {
	return 500
}

func (o *ExchangeUpdateInternalServerError) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateInternalServerError %s", 500, payload)
}

func (o *ExchangeUpdateInternalServerError) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /exchange][%d] exchangeUpdateInternalServerError %s", 500, payload)
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
