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

// UserFindByIDReader is a Reader for the UserFindByID structure.
type UserFindByIDReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UserFindByIDReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUserFindByIDOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewUserFindByIDBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewUserFindByIDUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewUserFindByIDInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewUserFindByIDOK creates a UserFindByIDOK with default headers values
func NewUserFindByIDOK() *UserFindByIDOK {
	return &UserFindByIDOK{}
}

/*
	UserFindByIDOK describes a response with status code 200, with default header values.

OK
*/
type UserFindByIDOK struct {
	Payload *models.User
}

func (o *UserFindByIDOK) Error() string {
	return fmt.Sprintf("[GET /user/id/{id}][%d] userFindByIdOK  %+v", 200, o.Payload)
}
func (o *UserFindByIDOK) GetPayload() *models.User {
	return o.Payload
}

func (o *UserFindByIDOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.User)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUserFindByIDBadRequest creates a UserFindByIDBadRequest with default headers values
func NewUserFindByIDBadRequest() *UserFindByIDBadRequest {
	return &UserFindByIDBadRequest{}
}

/*
	UserFindByIDBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type UserFindByIDBadRequest struct {
	Payload *models.Response
}

func (o *UserFindByIDBadRequest) Error() string {
	return fmt.Sprintf("[GET /user/id/{id}][%d] userFindByIdBadRequest  %+v", 400, o.Payload)
}
func (o *UserFindByIDBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *UserFindByIDBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUserFindByIDUnauthorized creates a UserFindByIDUnauthorized with default headers values
func NewUserFindByIDUnauthorized() *UserFindByIDUnauthorized {
	return &UserFindByIDUnauthorized{}
}

/*
	UserFindByIDUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type UserFindByIDUnauthorized struct {
	Payload *models.Response
}

func (o *UserFindByIDUnauthorized) Error() string {
	return fmt.Sprintf("[GET /user/id/{id}][%d] userFindByIdUnauthorized  %+v", 401, o.Payload)
}
func (o *UserFindByIDUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *UserFindByIDUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUserFindByIDInternalServerError creates a UserFindByIDInternalServerError with default headers values
func NewUserFindByIDInternalServerError() *UserFindByIDInternalServerError {
	return &UserFindByIDInternalServerError{}
}

/*
	UserFindByIDInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type UserFindByIDInternalServerError struct {
	Payload *models.Response
}

func (o *UserFindByIDInternalServerError) Error() string {
	return fmt.Sprintf("[GET /user/id/{id}][%d] userFindByIdInternalServerError  %+v", 500, o.Payload)
}
func (o *UserFindByIDInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *UserFindByIDInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
