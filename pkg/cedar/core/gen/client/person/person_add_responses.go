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

// PersonAddReader is a Reader for the PersonAdd structure.
type PersonAddReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PersonAddReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPersonAddOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewPersonAddBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewPersonAddUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewPersonAddInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewPersonAddOK creates a PersonAddOK with default headers values
func NewPersonAddOK() *PersonAddOK {
	return &PersonAddOK{}
}

/* PersonAddOK describes a response with status code 200, with default header values.

OK
*/
type PersonAddOK struct {
	Payload *models.Response
}

func (o *PersonAddOK) Error() string {
	return fmt.Sprintf("[POST /person][%d] personAddOK  %+v", 200, o.Payload)
}
func (o *PersonAddOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonAddOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonAddBadRequest creates a PersonAddBadRequest with default headers values
func NewPersonAddBadRequest() *PersonAddBadRequest {
	return &PersonAddBadRequest{}
}

/* PersonAddBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type PersonAddBadRequest struct {
	Payload *models.Response
}

func (o *PersonAddBadRequest) Error() string {
	return fmt.Sprintf("[POST /person][%d] personAddBadRequest  %+v", 400, o.Payload)
}
func (o *PersonAddBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonAddBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonAddUnauthorized creates a PersonAddUnauthorized with default headers values
func NewPersonAddUnauthorized() *PersonAddUnauthorized {
	return &PersonAddUnauthorized{}
}

/* PersonAddUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type PersonAddUnauthorized struct {
	Payload *models.Response
}

func (o *PersonAddUnauthorized) Error() string {
	return fmt.Sprintf("[POST /person][%d] personAddUnauthorized  %+v", 401, o.Payload)
}
func (o *PersonAddUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonAddUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPersonAddInternalServerError creates a PersonAddInternalServerError with default headers values
func NewPersonAddInternalServerError() *PersonAddInternalServerError {
	return &PersonAddInternalServerError{}
}

/* PersonAddInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type PersonAddInternalServerError struct {
	Payload *models.Response
}

func (o *PersonAddInternalServerError) Error() string {
	return fmt.Sprintf("[POST /person][%d] personAddInternalServerError  %+v", 500, o.Payload)
}
func (o *PersonAddInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *PersonAddInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
