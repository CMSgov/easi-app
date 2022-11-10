// Code generated by go-swagger; DO NOT EDIT.

package system

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
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
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
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

func (o *SystemVersionFindByIDOK) Error() string {
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdOK  %+v", 200, o.Payload)
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

func (o *SystemVersionFindByIDBadRequest) Error() string {
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdBadRequest  %+v", 400, o.Payload)
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

func (o *SystemVersionFindByIDUnauthorized) Error() string {
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdUnauthorized  %+v", 401, o.Payload)
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

func (o *SystemVersionFindByIDNotFound) Error() string {
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdNotFound  %+v", 404, o.Payload)
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

func (o *SystemVersionFindByIDInternalServerError) Error() string {
	return fmt.Sprintf("[GET /system/version][%d] systemVersionFindByIdInternalServerError  %+v", 500, o.Payload)
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
