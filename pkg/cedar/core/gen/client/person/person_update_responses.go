// Code generated by go-swagger; DO NOT EDIT.

package person

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

// PersonUpdateReader is a Reader for the PersonUpdate structure.
type PersonUpdateReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PersonUpdateReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPersonUpdateOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewPersonUpdateBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewPersonUpdateUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewPersonUpdateInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[PUT /person] personUpdate", response, response.Code())
	}
}

// NewPersonUpdateOK creates a PersonUpdateOK with default headers values
func NewPersonUpdateOK() *PersonUpdateOK {
	return &PersonUpdateOK{}
}

/*
PersonUpdateOK describes a response with status code 200, with default header values.

OK
*/
type PersonUpdateOK struct {
	Payload *models.Response
}

// IsSuccess returns true when this person update o k response has a 2xx status code
func (o *PersonUpdateOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this person update o k response has a 3xx status code
func (o *PersonUpdateOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this person update o k response has a 4xx status code
func (o *PersonUpdateOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this person update o k response has a 5xx status code
func (o *PersonUpdateOK) IsServerError() bool {
	return false
}

// IsCode returns true when this person update o k response a status code equal to that given
func (o *PersonUpdateOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the person update o k response
func (o *PersonUpdateOK) Code() int {
	return 200
}

func (o *PersonUpdateOK) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /person][%d] personUpdateOK %s", 200, payload)
}

func (o *PersonUpdateOK) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /person][%d] personUpdateOK %s", 200, payload)
}

func (o *PersonUpdateOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonUpdateOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonUpdateBadRequest creates a PersonUpdateBadRequest with default headers values
func NewPersonUpdateBadRequest() *PersonUpdateBadRequest {
	return &PersonUpdateBadRequest{}
}

/*
PersonUpdateBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type PersonUpdateBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this person update bad request response has a 2xx status code
func (o *PersonUpdateBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this person update bad request response has a 3xx status code
func (o *PersonUpdateBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this person update bad request response has a 4xx status code
func (o *PersonUpdateBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this person update bad request response has a 5xx status code
func (o *PersonUpdateBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this person update bad request response a status code equal to that given
func (o *PersonUpdateBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the person update bad request response
func (o *PersonUpdateBadRequest) Code() int {
	return 400
}

func (o *PersonUpdateBadRequest) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /person][%d] personUpdateBadRequest %s", 400, payload)
}

func (o *PersonUpdateBadRequest) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /person][%d] personUpdateBadRequest %s", 400, payload)
}

func (o *PersonUpdateBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonUpdateBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonUpdateUnauthorized creates a PersonUpdateUnauthorized with default headers values
func NewPersonUpdateUnauthorized() *PersonUpdateUnauthorized {
	return &PersonUpdateUnauthorized{}
}

/*
PersonUpdateUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type PersonUpdateUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this person update unauthorized response has a 2xx status code
func (o *PersonUpdateUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this person update unauthorized response has a 3xx status code
func (o *PersonUpdateUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this person update unauthorized response has a 4xx status code
func (o *PersonUpdateUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this person update unauthorized response has a 5xx status code
func (o *PersonUpdateUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this person update unauthorized response a status code equal to that given
func (o *PersonUpdateUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the person update unauthorized response
func (o *PersonUpdateUnauthorized) Code() int {
	return 401
}

func (o *PersonUpdateUnauthorized) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /person][%d] personUpdateUnauthorized %s", 401, payload)
}

func (o *PersonUpdateUnauthorized) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /person][%d] personUpdateUnauthorized %s", 401, payload)
}

func (o *PersonUpdateUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonUpdateUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonUpdateInternalServerError creates a PersonUpdateInternalServerError with default headers values
func NewPersonUpdateInternalServerError() *PersonUpdateInternalServerError {
	return &PersonUpdateInternalServerError{}
}

/*
PersonUpdateInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type PersonUpdateInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this person update internal server error response has a 2xx status code
func (o *PersonUpdateInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this person update internal server error response has a 3xx status code
func (o *PersonUpdateInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this person update internal server error response has a 4xx status code
func (o *PersonUpdateInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this person update internal server error response has a 5xx status code
func (o *PersonUpdateInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this person update internal server error response a status code equal to that given
func (o *PersonUpdateInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the person update internal server error response
func (o *PersonUpdateInternalServerError) Code() int {
	return 500
}

func (o *PersonUpdateInternalServerError) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /person][%d] personUpdateInternalServerError %s", 500, payload)
}

func (o *PersonUpdateInternalServerError) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[PUT /person][%d] personUpdateInternalServerError %s", 500, payload)
}

func (o *PersonUpdateInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonUpdateInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
