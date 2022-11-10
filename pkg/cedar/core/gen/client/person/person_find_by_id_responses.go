// Code generated by go-swagger; DO NOT EDIT.

package person

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cmsgov/easi-app/pkg/cedar/core/gen/models"
)

// PersonFindByIDReader is a Reader for the PersonFindByID structure.
type PersonFindByIDReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PersonFindByIDReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPersonFindByIDOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewPersonFindByIDBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewPersonFindByIDUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewPersonFindByIDNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewPersonFindByIDInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewPersonFindByIDOK creates a PersonFindByIDOK with default headers values
func NewPersonFindByIDOK() *PersonFindByIDOK {
	return &PersonFindByIDOK{}
}

/*
	PersonFindByIDOK describes a response with status code 200, with default header values.

OK
*/
type PersonFindByIDOK struct {
	Payload *models.Person
}

func (o *PersonFindByIDOK) Error() string {
	return fmt.Sprintf("[GET /person/{id}][%d] personFindByIdOK  %+v", 200, o.Payload)
}
func (o *PersonFindByIDOK) GetPayload() *models.Person {
	return o.Payload
}

func (o *PersonFindByIDOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Person)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonFindByIDBadRequest creates a PersonFindByIDBadRequest with default headers values
func NewPersonFindByIDBadRequest() *PersonFindByIDBadRequest {
	return &PersonFindByIDBadRequest{}
}

/*
	PersonFindByIDBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type PersonFindByIDBadRequest struct {
	Payload *models.Response
}

func (o *PersonFindByIDBadRequest) Error() string {
	return fmt.Sprintf("[GET /person/{id}][%d] personFindByIdBadRequest  %+v", 400, o.Payload)
}
func (o *PersonFindByIDBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonFindByIDBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonFindByIDUnauthorized creates a PersonFindByIDUnauthorized with default headers values
func NewPersonFindByIDUnauthorized() *PersonFindByIDUnauthorized {
	return &PersonFindByIDUnauthorized{}
}

/*
	PersonFindByIDUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type PersonFindByIDUnauthorized struct {
	Payload *models.Response
}

func (o *PersonFindByIDUnauthorized) Error() string {
	return fmt.Sprintf("[GET /person/{id}][%d] personFindByIdUnauthorized  %+v", 401, o.Payload)
}
func (o *PersonFindByIDUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonFindByIDUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonFindByIDNotFound creates a PersonFindByIDNotFound with default headers values
func NewPersonFindByIDNotFound() *PersonFindByIDNotFound {
	return &PersonFindByIDNotFound{}
}

/*
	PersonFindByIDNotFound describes a response with status code 404, with default header values.

Not Found
*/
type PersonFindByIDNotFound struct {
	Payload *models.Response
}

func (o *PersonFindByIDNotFound) Error() string {
	return fmt.Sprintf("[GET /person/{id}][%d] personFindByIdNotFound  %+v", 404, o.Payload)
}
func (o *PersonFindByIDNotFound) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonFindByIDNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonFindByIDInternalServerError creates a PersonFindByIDInternalServerError with default headers values
func NewPersonFindByIDInternalServerError() *PersonFindByIDInternalServerError {
	return &PersonFindByIDInternalServerError{}
}

/*
	PersonFindByIDInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type PersonFindByIDInternalServerError struct {
	Payload *models.Response
}

func (o *PersonFindByIDInternalServerError) Error() string {
	return fmt.Sprintf("[GET /person/{id}][%d] personFindByIdInternalServerError  %+v", 500, o.Payload)
}
func (o *PersonFindByIDInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonFindByIDInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
