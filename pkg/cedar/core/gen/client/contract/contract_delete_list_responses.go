// Code generated by go-swagger; DO NOT EDIT.

package contract

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cmsgov/easi-app/pkg/cedar/core/gen/models"
)

// ContractDeleteListReader is a Reader for the ContractDeleteList structure.
type ContractDeleteListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ContractDeleteListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewContractDeleteListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewContractDeleteListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewContractDeleteListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewContractDeleteListNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewContractDeleteListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewContractDeleteListOK creates a ContractDeleteListOK with default headers values
func NewContractDeleteListOK() *ContractDeleteListOK {
	return &ContractDeleteListOK{}
}

/*
	ContractDeleteListOK describes a response with status code 200, with default header values.

OK
*/
type ContractDeleteListOK struct {
	Payload *models.Response
}

func (o *ContractDeleteListOK) Error() string {
	return fmt.Sprintf("[DELETE /contract][%d] contractDeleteListOK  %+v", 200, o.Payload)
}
func (o *ContractDeleteListOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *ContractDeleteListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewContractDeleteListBadRequest creates a ContractDeleteListBadRequest with default headers values
func NewContractDeleteListBadRequest() *ContractDeleteListBadRequest {
	return &ContractDeleteListBadRequest{}
}

/*
	ContractDeleteListBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type ContractDeleteListBadRequest struct {
	Payload *models.Response
}

func (o *ContractDeleteListBadRequest) Error() string {
	return fmt.Sprintf("[DELETE /contract][%d] contractDeleteListBadRequest  %+v", 400, o.Payload)
}
func (o *ContractDeleteListBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *ContractDeleteListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewContractDeleteListUnauthorized creates a ContractDeleteListUnauthorized with default headers values
func NewContractDeleteListUnauthorized() *ContractDeleteListUnauthorized {
	return &ContractDeleteListUnauthorized{}
}

/*
	ContractDeleteListUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type ContractDeleteListUnauthorized struct {
	Payload *models.Response
}

func (o *ContractDeleteListUnauthorized) Error() string {
	return fmt.Sprintf("[DELETE /contract][%d] contractDeleteListUnauthorized  %+v", 401, o.Payload)
}
func (o *ContractDeleteListUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *ContractDeleteListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewContractDeleteListNotFound creates a ContractDeleteListNotFound with default headers values
func NewContractDeleteListNotFound() *ContractDeleteListNotFound {
	return &ContractDeleteListNotFound{}
}

/*
	ContractDeleteListNotFound describes a response with status code 404, with default header values.

Not Found
*/
type ContractDeleteListNotFound struct {
	Payload *models.Response
}

func (o *ContractDeleteListNotFound) Error() string {
	return fmt.Sprintf("[DELETE /contract][%d] contractDeleteListNotFound  %+v", 404, o.Payload)
}
func (o *ContractDeleteListNotFound) GetPayload() *models.Response {
	return o.Payload
}

func (o *ContractDeleteListNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewContractDeleteListInternalServerError creates a ContractDeleteListInternalServerError with default headers values
func NewContractDeleteListInternalServerError() *ContractDeleteListInternalServerError {
	return &ContractDeleteListInternalServerError{}
}

/*
	ContractDeleteListInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type ContractDeleteListInternalServerError struct {
	Payload *models.Response
}

func (o *ContractDeleteListInternalServerError) Error() string {
	return fmt.Sprintf("[DELETE /contract][%d] contractDeleteListInternalServerError  %+v", 500, o.Payload)
}
func (o *ContractDeleteListInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *ContractDeleteListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
