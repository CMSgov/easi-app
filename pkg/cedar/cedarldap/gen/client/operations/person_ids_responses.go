// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cmsgov/easi-app/pkg/cedar/cedarldap/gen/models"
)

// PersonIdsReader is a Reader for the PersonIds structure.
type PersonIdsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PersonIdsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPersonIdsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewPersonIdsBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewPersonIdsUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewPersonIdsInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewPersonIdsOK creates a PersonIdsOK with default headers values
func NewPersonIdsOK() *PersonIdsOK {
	return &PersonIdsOK{}
}

/*
	PersonIdsOK describes a response with status code 200, with default header values.

OK
*/
type PersonIdsOK struct {
	Payload *models.PersonList
}

func (o *PersonIdsOK) Error() string {
	return fmt.Sprintf("[GET /person/{ids}][%d] personIdsOK  %+v", 200, o.Payload)
}
func (o *PersonIdsOK) GetPayload() *models.PersonList {
	return o.Payload
}

func (o *PersonIdsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.PersonList)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonIdsBadRequest creates a PersonIdsBadRequest with default headers values
func NewPersonIdsBadRequest() *PersonIdsBadRequest {
	return &PersonIdsBadRequest{}
}

/*
	PersonIdsBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type PersonIdsBadRequest struct {
	Payload *models.Response
}

func (o *PersonIdsBadRequest) Error() string {
	return fmt.Sprintf("[GET /person/{ids}][%d] personIdsBadRequest  %+v", 400, o.Payload)
}
func (o *PersonIdsBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonIdsBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonIdsUnauthorized creates a PersonIdsUnauthorized with default headers values
func NewPersonIdsUnauthorized() *PersonIdsUnauthorized {
	return &PersonIdsUnauthorized{}
}

/*
	PersonIdsUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type PersonIdsUnauthorized struct {
	Payload *models.Response
}

func (o *PersonIdsUnauthorized) Error() string {
	return fmt.Sprintf("[GET /person/{ids}][%d] personIdsUnauthorized  %+v", 401, o.Payload)
}
func (o *PersonIdsUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonIdsUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonIdsInternalServerError creates a PersonIdsInternalServerError with default headers values
func NewPersonIdsInternalServerError() *PersonIdsInternalServerError {
	return &PersonIdsInternalServerError{}
}

/*
	PersonIdsInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type PersonIdsInternalServerError struct {
	Payload *models.Response
}

func (o *PersonIdsInternalServerError) Error() string {
	return fmt.Sprintf("[GET /person/{ids}][%d] personIdsInternalServerError  %+v", 500, o.Payload)
}
func (o *PersonIdsInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonIdsInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
