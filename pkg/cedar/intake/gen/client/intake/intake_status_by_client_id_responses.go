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

// IntakeStatusByClientIDReader is a Reader for the IntakeStatusByClientID structure.
type IntakeStatusByClientIDReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *IntakeStatusByClientIDReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewIntakeStatusByClientIDOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewIntakeStatusByClientIDBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewIntakeStatusByClientIDUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewIntakeStatusByClientIDInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /intake/status/client/{id}] intakeStatusByClientId", response, response.Code())
	}
}

// NewIntakeStatusByClientIDOK creates a IntakeStatusByClientIDOK with default headers values
func NewIntakeStatusByClientIDOK() *IntakeStatusByClientIDOK {
	return &IntakeStatusByClientIDOK{}
}

/*
IntakeStatusByClientIDOK describes a response with status code 200, with default header values.

OK
*/
type IntakeStatusByClientIDOK struct {
	Payload *models.IntakeStatus
}

// IsSuccess returns true when this intake status by client Id o k response has a 2xx status code
func (o *IntakeStatusByClientIDOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this intake status by client Id o k response has a 3xx status code
func (o *IntakeStatusByClientIDOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this intake status by client Id o k response has a 4xx status code
func (o *IntakeStatusByClientIDOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this intake status by client Id o k response has a 5xx status code
func (o *IntakeStatusByClientIDOK) IsServerError() bool {
	return false
}

// IsCode returns true when this intake status by client Id o k response a status code equal to that given
func (o *IntakeStatusByClientIDOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the intake status by client Id o k response
func (o *IntakeStatusByClientIDOK) Code() int {
	return 200
}

func (o *IntakeStatusByClientIDOK) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status/client/{id}][%d] intakeStatusByClientIdOK %s", 200, payload)
}

func (o *IntakeStatusByClientIDOK) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status/client/{id}][%d] intakeStatusByClientIdOK %s", 200, payload)
}

func (o *IntakeStatusByClientIDOK) GetPayload() *models.IntakeStatus {
	return o.Payload
}

func (o *IntakeStatusByClientIDOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.IntakeStatus)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewIntakeStatusByClientIDBadRequest creates a IntakeStatusByClientIDBadRequest with default headers values
func NewIntakeStatusByClientIDBadRequest() *IntakeStatusByClientIDBadRequest {
	return &IntakeStatusByClientIDBadRequest{}
}

/*
IntakeStatusByClientIDBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type IntakeStatusByClientIDBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this intake status by client Id bad request response has a 2xx status code
func (o *IntakeStatusByClientIDBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this intake status by client Id bad request response has a 3xx status code
func (o *IntakeStatusByClientIDBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this intake status by client Id bad request response has a 4xx status code
func (o *IntakeStatusByClientIDBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this intake status by client Id bad request response has a 5xx status code
func (o *IntakeStatusByClientIDBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this intake status by client Id bad request response a status code equal to that given
func (o *IntakeStatusByClientIDBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the intake status by client Id bad request response
func (o *IntakeStatusByClientIDBadRequest) Code() int {
	return 400
}

func (o *IntakeStatusByClientIDBadRequest) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status/client/{id}][%d] intakeStatusByClientIdBadRequest %s", 400, payload)
}

func (o *IntakeStatusByClientIDBadRequest) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status/client/{id}][%d] intakeStatusByClientIdBadRequest %s", 400, payload)
}

func (o *IntakeStatusByClientIDBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *IntakeStatusByClientIDBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewIntakeStatusByClientIDUnauthorized creates a IntakeStatusByClientIDUnauthorized with default headers values
func NewIntakeStatusByClientIDUnauthorized() *IntakeStatusByClientIDUnauthorized {
	return &IntakeStatusByClientIDUnauthorized{}
}

/*
IntakeStatusByClientIDUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type IntakeStatusByClientIDUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this intake status by client Id unauthorized response has a 2xx status code
func (o *IntakeStatusByClientIDUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this intake status by client Id unauthorized response has a 3xx status code
func (o *IntakeStatusByClientIDUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this intake status by client Id unauthorized response has a 4xx status code
func (o *IntakeStatusByClientIDUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this intake status by client Id unauthorized response has a 5xx status code
func (o *IntakeStatusByClientIDUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this intake status by client Id unauthorized response a status code equal to that given
func (o *IntakeStatusByClientIDUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the intake status by client Id unauthorized response
func (o *IntakeStatusByClientIDUnauthorized) Code() int {
	return 401
}

func (o *IntakeStatusByClientIDUnauthorized) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status/client/{id}][%d] intakeStatusByClientIdUnauthorized %s", 401, payload)
}

func (o *IntakeStatusByClientIDUnauthorized) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status/client/{id}][%d] intakeStatusByClientIdUnauthorized %s", 401, payload)
}

func (o *IntakeStatusByClientIDUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *IntakeStatusByClientIDUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewIntakeStatusByClientIDInternalServerError creates a IntakeStatusByClientIDInternalServerError with default headers values
func NewIntakeStatusByClientIDInternalServerError() *IntakeStatusByClientIDInternalServerError {
	return &IntakeStatusByClientIDInternalServerError{}
}

/*
IntakeStatusByClientIDInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type IntakeStatusByClientIDInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this intake status by client Id internal server error response has a 2xx status code
func (o *IntakeStatusByClientIDInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this intake status by client Id internal server error response has a 3xx status code
func (o *IntakeStatusByClientIDInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this intake status by client Id internal server error response has a 4xx status code
func (o *IntakeStatusByClientIDInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this intake status by client Id internal server error response has a 5xx status code
func (o *IntakeStatusByClientIDInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this intake status by client Id internal server error response a status code equal to that given
func (o *IntakeStatusByClientIDInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the intake status by client Id internal server error response
func (o *IntakeStatusByClientIDInternalServerError) Code() int {
	return 500
}

func (o *IntakeStatusByClientIDInternalServerError) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status/client/{id}][%d] intakeStatusByClientIdInternalServerError %s", 500, payload)
}

func (o *IntakeStatusByClientIDInternalServerError) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /intake/status/client/{id}][%d] intakeStatusByClientIdInternalServerError %s", 500, payload)
}

func (o *IntakeStatusByClientIDInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *IntakeStatusByClientIDInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
