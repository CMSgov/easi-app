// Code generated by go-swagger; DO NOT EDIT.

package intake

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"encoding/json"
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cmsgov/easi-app/pkg/cedar/intake/gen/models"
)

// IntakeStatusFindListReader is a Reader for the IntakeStatusFindList structure.
type IntakeStatusFindListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *IntakeStatusFindListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewIntakeStatusFindListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewIntakeStatusFindListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewIntakeStatusFindListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewIntakeStatusFindListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /intake/status] intakeStatusFindList", response, response.Code())
	}
}

// NewIntakeStatusFindListOK creates a IntakeStatusFindListOK with default headers values
func NewIntakeStatusFindListOK() *IntakeStatusFindListOK {
	return &IntakeStatusFindListOK{}
}

/*
IntakeStatusFindListOK describes a response with status code 200, with default header values.

OK
*/
type IntakeStatusFindListOK struct {
	Payload *models.IntakeStatusResponse
}

// IsSuccess returns true when this intake status find list o k response has a 2xx status code
func (o *IntakeStatusFindListOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this intake status find list o k response has a 3xx status code
func (o *IntakeStatusFindListOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this intake status find list o k response has a 4xx status code
func (o *IntakeStatusFindListOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this intake status find list o k response has a 5xx status code
func (o *IntakeStatusFindListOK) IsServerError() bool {
	return false
}

// IsCode returns true when this intake status find list o k response a status code equal to that given
func (o *IntakeStatusFindListOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the intake status find list o k response
func (o *IntakeStatusFindListOK) Code() int {
	return 200
}

func (o *IntakeStatusFindListOK) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status][%d] intakeStatusFindListOK %s", 200, payload)
}

func (o *IntakeStatusFindListOK) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status][%d] intakeStatusFindListOK %s", 200, payload)
}

func (o *IntakeStatusFindListOK) GetPayload() *models.IntakeStatusResponse {
	return o.Payload
}

func (o *IntakeStatusFindListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.IntakeStatusResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewIntakeStatusFindListBadRequest creates a IntakeStatusFindListBadRequest with default headers values
func NewIntakeStatusFindListBadRequest() *IntakeStatusFindListBadRequest {
	return &IntakeStatusFindListBadRequest{}
}

/*
IntakeStatusFindListBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type IntakeStatusFindListBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this intake status find list bad request response has a 2xx status code
func (o *IntakeStatusFindListBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this intake status find list bad request response has a 3xx status code
func (o *IntakeStatusFindListBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this intake status find list bad request response has a 4xx status code
func (o *IntakeStatusFindListBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this intake status find list bad request response has a 5xx status code
func (o *IntakeStatusFindListBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this intake status find list bad request response a status code equal to that given
func (o *IntakeStatusFindListBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the intake status find list bad request response
func (o *IntakeStatusFindListBadRequest) Code() int {
	return 400
}

func (o *IntakeStatusFindListBadRequest) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status][%d] intakeStatusFindListBadRequest %s", 400, payload)
}

func (o *IntakeStatusFindListBadRequest) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status][%d] intakeStatusFindListBadRequest %s", 400, payload)
}

func (o *IntakeStatusFindListBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *IntakeStatusFindListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewIntakeStatusFindListUnauthorized creates a IntakeStatusFindListUnauthorized with default headers values
func NewIntakeStatusFindListUnauthorized() *IntakeStatusFindListUnauthorized {
	return &IntakeStatusFindListUnauthorized{}
}

/*
IntakeStatusFindListUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type IntakeStatusFindListUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this intake status find list unauthorized response has a 2xx status code
func (o *IntakeStatusFindListUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this intake status find list unauthorized response has a 3xx status code
func (o *IntakeStatusFindListUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this intake status find list unauthorized response has a 4xx status code
func (o *IntakeStatusFindListUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this intake status find list unauthorized response has a 5xx status code
func (o *IntakeStatusFindListUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this intake status find list unauthorized response a status code equal to that given
func (o *IntakeStatusFindListUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the intake status find list unauthorized response
func (o *IntakeStatusFindListUnauthorized) Code() int {
	return 401
}

func (o *IntakeStatusFindListUnauthorized) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status][%d] intakeStatusFindListUnauthorized %s", 401, payload)
}

func (o *IntakeStatusFindListUnauthorized) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status][%d] intakeStatusFindListUnauthorized %s", 401, payload)
}

func (o *IntakeStatusFindListUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *IntakeStatusFindListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewIntakeStatusFindListInternalServerError creates a IntakeStatusFindListInternalServerError with default headers values
func NewIntakeStatusFindListInternalServerError() *IntakeStatusFindListInternalServerError {
	return &IntakeStatusFindListInternalServerError{}
}

/*
IntakeStatusFindListInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type IntakeStatusFindListInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this intake status find list internal server error response has a 2xx status code
func (o *IntakeStatusFindListInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this intake status find list internal server error response has a 3xx status code
func (o *IntakeStatusFindListInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this intake status find list internal server error response has a 4xx status code
func (o *IntakeStatusFindListInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this intake status find list internal server error response has a 5xx status code
func (o *IntakeStatusFindListInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this intake status find list internal server error response a status code equal to that given
func (o *IntakeStatusFindListInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the intake status find list internal server error response
func (o *IntakeStatusFindListInternalServerError) Code() int {
	return 500
}

func (o *IntakeStatusFindListInternalServerError) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status][%d] intakeStatusFindListInternalServerError %s", 500, payload)
}

func (o *IntakeStatusFindListInternalServerError) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status][%d] intakeStatusFindListInternalServerError %s", 500, payload)
}

func (o *IntakeStatusFindListInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *IntakeStatusFindListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
