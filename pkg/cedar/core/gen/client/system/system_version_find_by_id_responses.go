// Code generated by go-swagger; DO NOT EDIT.

package system

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

// SystemVersionFindByIDReader is a Reader for the SystemVersionFindByID structure.
type SystemVersionFindByIDReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *SystemVersionFindByIDReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewSystemVersionFindByIDOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewSystemVersionFindByIDBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewSystemVersionFindByIDUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewSystemVersionFindByIDNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewSystemVersionFindByIDInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /system/version] systemVersionFindById", response, response.Code())
	}
}

// NewSystemVersionFindByIDOK creates a SystemVersionFindByIDOK with default headers values
func NewSystemVersionFindByIDOK() *SystemVersionFindByIDOK {
	return &SystemVersionFindByIDOK{}
}

/*
SystemVersionFindByIDOK describes a response with status code 200, with default header values.

OK
*/
type SystemVersionFindByIDOK struct {
	Payload *models.SystemVersionResponse
}

// IsSuccess returns true when this system version find by Id o k response has a 2xx status code
func (o *SystemVersionFindByIDOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this system version find by Id o k response has a 3xx status code
func (o *SystemVersionFindByIDOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this system version find by Id o k response has a 4xx status code
func (o *SystemVersionFindByIDOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this system version find by Id o k response has a 5xx status code
func (o *SystemVersionFindByIDOK) IsServerError() bool {
	return false
}

// IsCode returns true when this system version find by Id o k response a status code equal to that given
func (o *SystemVersionFindByIDOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the system version find by Id o k response
func (o *SystemVersionFindByIDOK) Code() int {
	return 200
}

func (o *SystemVersionFindByIDOK) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdOK %s", 200, payload)
}

func (o *SystemVersionFindByIDOK) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdOK %s", 200, payload)
}

func (o *SystemVersionFindByIDOK) GetPayload() *models.SystemVersionResponse {
	return o.Payload
}

func (o *SystemVersionFindByIDOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.SystemVersionResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSystemVersionFindByIDBadRequest creates a SystemVersionFindByIDBadRequest with default headers values
func NewSystemVersionFindByIDBadRequest() *SystemVersionFindByIDBadRequest {
	return &SystemVersionFindByIDBadRequest{}
}

/*
SystemVersionFindByIDBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type SystemVersionFindByIDBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this system version find by Id bad request response has a 2xx status code
func (o *SystemVersionFindByIDBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this system version find by Id bad request response has a 3xx status code
func (o *SystemVersionFindByIDBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this system version find by Id bad request response has a 4xx status code
func (o *SystemVersionFindByIDBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this system version find by Id bad request response has a 5xx status code
func (o *SystemVersionFindByIDBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this system version find by Id bad request response a status code equal to that given
func (o *SystemVersionFindByIDBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the system version find by Id bad request response
func (o *SystemVersionFindByIDBadRequest) Code() int {
	return 400
}

func (o *SystemVersionFindByIDBadRequest) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdBadRequest %s", 400, payload)
}

func (o *SystemVersionFindByIDBadRequest) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdBadRequest %s", 400, payload)
}

func (o *SystemVersionFindByIDBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *SystemVersionFindByIDBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSystemVersionFindByIDUnauthorized creates a SystemVersionFindByIDUnauthorized with default headers values
func NewSystemVersionFindByIDUnauthorized() *SystemVersionFindByIDUnauthorized {
	return &SystemVersionFindByIDUnauthorized{}
}

/*
SystemVersionFindByIDUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type SystemVersionFindByIDUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this system version find by Id unauthorized response has a 2xx status code
func (o *SystemVersionFindByIDUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this system version find by Id unauthorized response has a 3xx status code
func (o *SystemVersionFindByIDUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this system version find by Id unauthorized response has a 4xx status code
func (o *SystemVersionFindByIDUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this system version find by Id unauthorized response has a 5xx status code
func (o *SystemVersionFindByIDUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this system version find by Id unauthorized response a status code equal to that given
func (o *SystemVersionFindByIDUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the system version find by Id unauthorized response
func (o *SystemVersionFindByIDUnauthorized) Code() int {
	return 401
}

func (o *SystemVersionFindByIDUnauthorized) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdUnauthorized %s", 401, payload)
}

func (o *SystemVersionFindByIDUnauthorized) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdUnauthorized %s", 401, payload)
}

func (o *SystemVersionFindByIDUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *SystemVersionFindByIDUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSystemVersionFindByIDNotFound creates a SystemVersionFindByIDNotFound with default headers values
func NewSystemVersionFindByIDNotFound() *SystemVersionFindByIDNotFound {
	return &SystemVersionFindByIDNotFound{}
}

/*
SystemVersionFindByIDNotFound describes a response with status code 404, with default header values.

Not Found
*/
type SystemVersionFindByIDNotFound struct {
	Payload *models.Response
}

// IsSuccess returns true when this system version find by Id not found response has a 2xx status code
func (o *SystemVersionFindByIDNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this system version find by Id not found response has a 3xx status code
func (o *SystemVersionFindByIDNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this system version find by Id not found response has a 4xx status code
func (o *SystemVersionFindByIDNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this system version find by Id not found response has a 5xx status code
func (o *SystemVersionFindByIDNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this system version find by Id not found response a status code equal to that given
func (o *SystemVersionFindByIDNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the system version find by Id not found response
func (o *SystemVersionFindByIDNotFound) Code() int {
	return 404
}

func (o *SystemVersionFindByIDNotFound) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdNotFound %s", 404, payload)
}

func (o *SystemVersionFindByIDNotFound) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdNotFound %s", 404, payload)
}

func (o *SystemVersionFindByIDNotFound) GetPayload() *models.Response {
	return o.Payload
}

func (o *SystemVersionFindByIDNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSystemVersionFindByIDInternalServerError creates a SystemVersionFindByIDInternalServerError with default headers values
func NewSystemVersionFindByIDInternalServerError() *SystemVersionFindByIDInternalServerError {
	return &SystemVersionFindByIDInternalServerError{}
}

/*
SystemVersionFindByIDInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type SystemVersionFindByIDInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this system version find by Id internal server error response has a 2xx status code
func (o *SystemVersionFindByIDInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this system version find by Id internal server error response has a 3xx status code
func (o *SystemVersionFindByIDInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this system version find by Id internal server error response has a 4xx status code
func (o *SystemVersionFindByIDInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this system version find by Id internal server error response has a 5xx status code
func (o *SystemVersionFindByIDInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this system version find by Id internal server error response a status code equal to that given
func (o *SystemVersionFindByIDInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the system version find by Id internal server error response
func (o *SystemVersionFindByIDInternalServerError) Code() int {
	return 500
}

func (o *SystemVersionFindByIDInternalServerError) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdInternalServerError %s", 500, payload)
}

func (o *SystemVersionFindByIDInternalServerError) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdInternalServerError %s", 500, payload)
}

func (o *SystemVersionFindByIDInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *SystemVersionFindByIDInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
