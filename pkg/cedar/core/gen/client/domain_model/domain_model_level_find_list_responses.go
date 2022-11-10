// Code generated by go-swagger; DO NOT EDIT.

package domain_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cmsgov/easi-app/pkg/cedar/core/gen/models"
)

// DomainModelLevelFindListReader is a Reader for the DomainModelLevelFindList structure.
type DomainModelLevelFindListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DomainModelLevelFindListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDomainModelLevelFindListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewDomainModelLevelFindListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewDomainModelLevelFindListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewDomainModelLevelFindListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewDomainModelLevelFindListOK creates a DomainModelLevelFindListOK with default headers values
func NewDomainModelLevelFindListOK() *DomainModelLevelFindListOK {
	return &DomainModelLevelFindListOK{}
}

/*
	DomainModelLevelFindListOK describes a response with status code 200, with default header values.

OK
*/
type DomainModelLevelFindListOK struct {
	Payload *models.DomainModelLevelFindResponse
}

func (o *DomainModelLevelFindListOK) Error() string {
	return fmt.Sprintf("[GET /domainModelLevel][%d] domainModelLevelFindListOK  %+v", 200, o.Payload)
}
func (o *DomainModelLevelFindListOK) GetPayload() *models.DomainModelLevelFindResponse {
	return o.Payload
}

func (o *DomainModelLevelFindListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.DomainModelLevelFindResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDomainModelLevelFindListBadRequest creates a DomainModelLevelFindListBadRequest with default headers values
func NewDomainModelLevelFindListBadRequest() *DomainModelLevelFindListBadRequest {
	return &DomainModelLevelFindListBadRequest{}
}

/*
	DomainModelLevelFindListBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type DomainModelLevelFindListBadRequest struct {
	Payload *models.Response
}

func (o *DomainModelLevelFindListBadRequest) Error() string {
	return fmt.Sprintf("[GET /domainModelLevel][%d] domainModelLevelFindListBadRequest  %+v", 400, o.Payload)
}
func (o *DomainModelLevelFindListBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *DomainModelLevelFindListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDomainModelLevelFindListUnauthorized creates a DomainModelLevelFindListUnauthorized with default headers values
func NewDomainModelLevelFindListUnauthorized() *DomainModelLevelFindListUnauthorized {
	return &DomainModelLevelFindListUnauthorized{}
}

/*
	DomainModelLevelFindListUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type DomainModelLevelFindListUnauthorized struct {
	Payload *models.Response
}

func (o *DomainModelLevelFindListUnauthorized) Error() string {
	return fmt.Sprintf("[GET /domainModelLevel][%d] domainModelLevelFindListUnauthorized  %+v", 401, o.Payload)
}
func (o *DomainModelLevelFindListUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *DomainModelLevelFindListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDomainModelLevelFindListInternalServerError creates a DomainModelLevelFindListInternalServerError with default headers values
func NewDomainModelLevelFindListInternalServerError() *DomainModelLevelFindListInternalServerError {
	return &DomainModelLevelFindListInternalServerError{}
}

/*
	DomainModelLevelFindListInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type DomainModelLevelFindListInternalServerError struct {
	Payload *models.Response
}

func (o *DomainModelLevelFindListInternalServerError) Error() string {
	return fmt.Sprintf("[GET /domainModelLevel][%d] domainModelLevelFindListInternalServerError  %+v", 500, o.Payload)
}
func (o *DomainModelLevelFindListInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *DomainModelLevelFindListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
