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

// ExchangeFindListReader is a Reader for the ExchangeFindList structure.
type ExchangeFindListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ExchangeFindListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewExchangeFindListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewExchangeFindListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewExchangeFindListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewExchangeFindListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /exchange] exchangeFindList", response, response.Code())
	}
}

// NewExchangeFindListOK creates a ExchangeFindListOK with default headers values
func NewExchangeFindListOK() *ExchangeFindListOK {
	return &ExchangeFindListOK{}
}

/*
ExchangeFindListOK describes a response with status code 200, with default header values.

OK
*/
type ExchangeFindListOK struct {
	Payload *models.ExchangeFindResponse
}

// IsSuccess returns true when this exchange find list o k response has a 2xx status code
func (o *ExchangeFindListOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this exchange find list o k response has a 3xx status code
func (o *ExchangeFindListOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this exchange find list o k response has a 4xx status code
func (o *ExchangeFindListOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this exchange find list o k response has a 5xx status code
func (o *ExchangeFindListOK) IsServerError() bool {
	return false
}

// IsCode returns true when this exchange find list o k response a status code equal to that given
func (o *ExchangeFindListOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the exchange find list o k response
func (o *ExchangeFindListOK) Code() int {
	return 200
}

func (o *ExchangeFindListOK) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /exchange][%d] exchangeFindListOK %s", 200, payload)
}

func (o *ExchangeFindListOK) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /exchange][%d] exchangeFindListOK %s", 200, payload)
}

func (o *ExchangeFindListOK) GetPayload() *models.ExchangeFindResponse {
	return o.Payload
}

func (o *ExchangeFindListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ExchangeFindResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewExchangeFindListBadRequest creates a ExchangeFindListBadRequest with default headers values
func NewExchangeFindListBadRequest() *ExchangeFindListBadRequest {
	return &ExchangeFindListBadRequest{}
}

/*
ExchangeFindListBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type ExchangeFindListBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this exchange find list bad request response has a 2xx status code
func (o *ExchangeFindListBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this exchange find list bad request response has a 3xx status code
func (o *ExchangeFindListBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this exchange find list bad request response has a 4xx status code
func (o *ExchangeFindListBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this exchange find list bad request response has a 5xx status code
func (o *ExchangeFindListBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this exchange find list bad request response a status code equal to that given
func (o *ExchangeFindListBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the exchange find list bad request response
func (o *ExchangeFindListBadRequest) Code() int {
	return 400
}

func (o *ExchangeFindListBadRequest) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /exchange][%d] exchangeFindListBadRequest %s", 400, payload)
}

func (o *ExchangeFindListBadRequest) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /exchange][%d] exchangeFindListBadRequest %s", 400, payload)
}

func (o *ExchangeFindListBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeFindListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewExchangeFindListUnauthorized creates a ExchangeFindListUnauthorized with default headers values
func NewExchangeFindListUnauthorized() *ExchangeFindListUnauthorized {
	return &ExchangeFindListUnauthorized{}
}

/*
ExchangeFindListUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type ExchangeFindListUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this exchange find list unauthorized response has a 2xx status code
func (o *ExchangeFindListUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this exchange find list unauthorized response has a 3xx status code
func (o *ExchangeFindListUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this exchange find list unauthorized response has a 4xx status code
func (o *ExchangeFindListUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this exchange find list unauthorized response has a 5xx status code
func (o *ExchangeFindListUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this exchange find list unauthorized response a status code equal to that given
func (o *ExchangeFindListUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the exchange find list unauthorized response
func (o *ExchangeFindListUnauthorized) Code() int {
	return 401
}

func (o *ExchangeFindListUnauthorized) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /exchange][%d] exchangeFindListUnauthorized %s", 401, payload)
}

func (o *ExchangeFindListUnauthorized) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /exchange][%d] exchangeFindListUnauthorized %s", 401, payload)
}

func (o *ExchangeFindListUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeFindListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewExchangeFindListInternalServerError creates a ExchangeFindListInternalServerError with default headers values
func NewExchangeFindListInternalServerError() *ExchangeFindListInternalServerError {
	return &ExchangeFindListInternalServerError{}
}

/*
ExchangeFindListInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type ExchangeFindListInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this exchange find list internal server error response has a 2xx status code
func (o *ExchangeFindListInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this exchange find list internal server error response has a 3xx status code
func (o *ExchangeFindListInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this exchange find list internal server error response has a 4xx status code
func (o *ExchangeFindListInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this exchange find list internal server error response has a 5xx status code
func (o *ExchangeFindListInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this exchange find list internal server error response a status code equal to that given
func (o *ExchangeFindListInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the exchange find list internal server error response
func (o *ExchangeFindListInternalServerError) Code() int {
	return 500
}

func (o *ExchangeFindListInternalServerError) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /exchange][%d] exchangeFindListInternalServerError %s", 500, payload)
}

func (o *ExchangeFindListInternalServerError) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /exchange][%d] exchangeFindListInternalServerError %s", 500, payload)
}

func (o *ExchangeFindListInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *ExchangeFindListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
