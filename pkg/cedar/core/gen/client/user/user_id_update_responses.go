// Code generated by go-swagger; DO NOT EDIT.

package user

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cmsgov/easi-app/pkg/cedar/core/gen/models"
)

// UserIDUpdateReader is a Reader for the UserIDUpdate structure.
type UserIDUpdateReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UserIDUpdateReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUserIDUpdateOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewUserIDUpdateBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewUserIDUpdateUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewUserIDUpdateInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewUserIDUpdateOK creates a UserIDUpdateOK with default headers values
func NewUserIDUpdateOK() *UserIDUpdateOK {
	return &UserIDUpdateOK{}
}

/*
	UserIDUpdateOK describes a response with status code 200, with default header values.

OK
*/
type UserIDUpdateOK struct {
	Payload *models.Response
}

func (o *UserIDUpdateOK) Error() string {
	return fmt.Sprintf("[PUT /user/id/{id}][%d] userIdUpdateOK  %+v", 200, o.Payload)
}
func (o *UserIDUpdateOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *UserIDUpdateOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUserIDUpdateBadRequest creates a UserIDUpdateBadRequest with default headers values
func NewUserIDUpdateBadRequest() *UserIDUpdateBadRequest {
	return &UserIDUpdateBadRequest{}
}

/*
	UserIDUpdateBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type UserIDUpdateBadRequest struct {
	Payload *models.Response
}

func (o *UserIDUpdateBadRequest) Error() string {
	return fmt.Sprintf("[PUT /user/id/{id}][%d] userIdUpdateBadRequest  %+v", 400, o.Payload)
}
func (o *UserIDUpdateBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *UserIDUpdateBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUserIDUpdateUnauthorized creates a UserIDUpdateUnauthorized with default headers values
func NewUserIDUpdateUnauthorized() *UserIDUpdateUnauthorized {
	return &UserIDUpdateUnauthorized{}
}

/*
	UserIDUpdateUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type UserIDUpdateUnauthorized struct {
	Payload *models.Response
}

func (o *UserIDUpdateUnauthorized) Error() string {
	return fmt.Sprintf("[PUT /user/id/{id}][%d] userIdUpdateUnauthorized  %+v", 401, o.Payload)
}
func (o *UserIDUpdateUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *UserIDUpdateUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUserIDUpdateInternalServerError creates a UserIDUpdateInternalServerError with default headers values
func NewUserIDUpdateInternalServerError() *UserIDUpdateInternalServerError {
	return &UserIDUpdateInternalServerError{}
}

/*
	UserIDUpdateInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type UserIDUpdateInternalServerError struct {
	Payload *models.Response
}

func (o *UserIDUpdateInternalServerError) Error() string {
	return fmt.Sprintf("[PUT /user/id/{id}][%d] userIdUpdateInternalServerError  %+v", 500, o.Payload)
}
func (o *UserIDUpdateInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *UserIDUpdateInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
