// Code generated by go-swagger; DO NOT EDIT.

package domain_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cms-enterprise/easi-app/pkg/cedar/core/gen/models"
)

// DomainModelNameFindListReader is a Reader for the DomainModelNameFindList structure.
type DomainModelNameFindListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DomainModelNameFindListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDomainModelNameFindListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewDomainModelNameFindListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewDomainModelNameFindListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewDomainModelNameFindListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /domainModelName] domainModelNameFindList", response, response.Code())
	}
}

// NewDomainModelNameFindListOK creates a DomainModelNameFindListOK with default headers values
func NewDomainModelNameFindListOK() *DomainModelNameFindListOK {
	return &DomainModelNameFindListOK{}
}

/*
DomainModelNameFindListOK describes a response with status code 200, with default header values.

OK
*/
type DomainModelNameFindListOK struct {
	Payload *models.DomainModelNameFindResponse
}

// IsSuccess returns true when this domain model name find list o k response has a 2xx status code
func (o *DomainModelNameFindListOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this domain model name find list o k response has a 3xx status code
func (o *DomainModelNameFindListOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this domain model name find list o k response has a 4xx status code
func (o *DomainModelNameFindListOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this domain model name find list o k response has a 5xx status code
func (o *DomainModelNameFindListOK) IsServerError() bool {
	return false
}

// IsCode returns true when this domain model name find list o k response a status code equal to that given
func (o *DomainModelNameFindListOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the domain model name find list o k response
func (o *DomainModelNameFindListOK) Code() int {
	return 200
}

func (o *DomainModelNameFindListOK) Error() string {
	return fmt.Sprintf("[GET /domainModelName][%d] domainModelNameFindListOK  %+v", 200, o.Payload)
}

func (o *DomainModelNameFindListOK) String() string {
	return fmt.Sprintf("[GET /domainModelName][%d] domainModelNameFindListOK  %+v", 200, o.Payload)
}

func (o *DomainModelNameFindListOK) GetPayload() *models.DomainModelNameFindResponse {
	return o.Payload
}

func (o *DomainModelNameFindListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.DomainModelNameFindResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDomainModelNameFindListBadRequest creates a DomainModelNameFindListBadRequest with default headers values
func NewDomainModelNameFindListBadRequest() *DomainModelNameFindListBadRequest {
	return &DomainModelNameFindListBadRequest{}
}

/*
DomainModelNameFindListBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type DomainModelNameFindListBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this domain model name find list bad request response has a 2xx status code
func (o *DomainModelNameFindListBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this domain model name find list bad request response has a 3xx status code
func (o *DomainModelNameFindListBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this domain model name find list bad request response has a 4xx status code
func (o *DomainModelNameFindListBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this domain model name find list bad request response has a 5xx status code
func (o *DomainModelNameFindListBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this domain model name find list bad request response a status code equal to that given
func (o *DomainModelNameFindListBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the domain model name find list bad request response
func (o *DomainModelNameFindListBadRequest) Code() int {
	return 400
}

func (o *DomainModelNameFindListBadRequest) Error() string {
	return fmt.Sprintf("[GET /domainModelName][%d] domainModelNameFindListBadRequest  %+v", 400, o.Payload)
}

func (o *DomainModelNameFindListBadRequest) String() string {
	return fmt.Sprintf("[GET /domainModelName][%d] domainModelNameFindListBadRequest  %+v", 400, o.Payload)
}

func (o *DomainModelNameFindListBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *DomainModelNameFindListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDomainModelNameFindListUnauthorized creates a DomainModelNameFindListUnauthorized with default headers values
func NewDomainModelNameFindListUnauthorized() *DomainModelNameFindListUnauthorized {
	return &DomainModelNameFindListUnauthorized{}
}

/*
DomainModelNameFindListUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type DomainModelNameFindListUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this domain model name find list unauthorized response has a 2xx status code
func (o *DomainModelNameFindListUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this domain model name find list unauthorized response has a 3xx status code
func (o *DomainModelNameFindListUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this domain model name find list unauthorized response has a 4xx status code
func (o *DomainModelNameFindListUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this domain model name find list unauthorized response has a 5xx status code
func (o *DomainModelNameFindListUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this domain model name find list unauthorized response a status code equal to that given
func (o *DomainModelNameFindListUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the domain model name find list unauthorized response
func (o *DomainModelNameFindListUnauthorized) Code() int {
	return 401
}

func (o *DomainModelNameFindListUnauthorized) Error() string {
	return fmt.Sprintf("[GET /domainModelName][%d] domainModelNameFindListUnauthorized  %+v", 401, o.Payload)
}

func (o *DomainModelNameFindListUnauthorized) String() string {
	return fmt.Sprintf("[GET /domainModelName][%d] domainModelNameFindListUnauthorized  %+v", 401, o.Payload)
}

func (o *DomainModelNameFindListUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *DomainModelNameFindListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDomainModelNameFindListInternalServerError creates a DomainModelNameFindListInternalServerError with default headers values
func NewDomainModelNameFindListInternalServerError() *DomainModelNameFindListInternalServerError {
	return &DomainModelNameFindListInternalServerError{}
}

/*
DomainModelNameFindListInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type DomainModelNameFindListInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this domain model name find list internal server error response has a 2xx status code
func (o *DomainModelNameFindListInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this domain model name find list internal server error response has a 3xx status code
func (o *DomainModelNameFindListInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this domain model name find list internal server error response has a 4xx status code
func (o *DomainModelNameFindListInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this domain model name find list internal server error response has a 5xx status code
func (o *DomainModelNameFindListInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this domain model name find list internal server error response a status code equal to that given
func (o *DomainModelNameFindListInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the domain model name find list internal server error response
func (o *DomainModelNameFindListInternalServerError) Code() int {
	return 500
}

func (o *DomainModelNameFindListInternalServerError) Error() string {
	return fmt.Sprintf("[GET /domainModelName][%d] domainModelNameFindListInternalServerError  %+v", 500, o.Payload)
}

func (o *DomainModelNameFindListInternalServerError) String() string {
	return fmt.Sprintf("[GET /domainModelName][%d] domainModelNameFindListInternalServerError  %+v", 500, o.Payload)
}

func (o *DomainModelNameFindListInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *DomainModelNameFindListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
