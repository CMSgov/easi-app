// Code generated by go-swagger; DO NOT EDIT.

package domain_model

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

// DomainModelFindListReader is a Reader for the DomainModelFindList structure.
type DomainModelFindListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DomainModelFindListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDomainModelFindListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewDomainModelFindListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewDomainModelFindListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewDomainModelFindListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /domainModel] domainModelFindList", response, response.Code())
	}
}

// NewDomainModelFindListOK creates a DomainModelFindListOK with default headers values
func NewDomainModelFindListOK() *DomainModelFindListOK {
	return &DomainModelFindListOK{}
}

/*
DomainModelFindListOK describes a response with status code 200, with default header values.

OK
*/
type DomainModelFindListOK struct {
	Payload models.DomainModelFindResponse
}

// IsSuccess returns true when this domain model find list o k response has a 2xx status code
func (o *DomainModelFindListOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this domain model find list o k response has a 3xx status code
func (o *DomainModelFindListOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this domain model find list o k response has a 4xx status code
func (o *DomainModelFindListOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this domain model find list o k response has a 5xx status code
func (o *DomainModelFindListOK) IsServerError() bool {
	return false
}

// IsCode returns true when this domain model find list o k response a status code equal to that given
func (o *DomainModelFindListOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the domain model find list o k response
func (o *DomainModelFindListOK) Code() int {
	return 200
}

func (o *DomainModelFindListOK) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /domainModel][%d] domainModelFindListOK %s", 200, payload)
}

func (o *DomainModelFindListOK) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /domainModel][%d] domainModelFindListOK %s", 200, payload)
}

func (o *DomainModelFindListOK) GetPayload() models.DomainModelFindResponse {
	return o.Payload
}

func (o *DomainModelFindListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDomainModelFindListBadRequest creates a DomainModelFindListBadRequest with default headers values
func NewDomainModelFindListBadRequest() *DomainModelFindListBadRequest {
	return &DomainModelFindListBadRequest{}
}

/*
DomainModelFindListBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type DomainModelFindListBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this domain model find list bad request response has a 2xx status code
func (o *DomainModelFindListBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this domain model find list bad request response has a 3xx status code
func (o *DomainModelFindListBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this domain model find list bad request response has a 4xx status code
func (o *DomainModelFindListBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this domain model find list bad request response has a 5xx status code
func (o *DomainModelFindListBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this domain model find list bad request response a status code equal to that given
func (o *DomainModelFindListBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the domain model find list bad request response
func (o *DomainModelFindListBadRequest) Code() int {
	return 400
}

func (o *DomainModelFindListBadRequest) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /domainModel][%d] domainModelFindListBadRequest %s", 400, payload)
}

func (o *DomainModelFindListBadRequest) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /domainModel][%d] domainModelFindListBadRequest %s", 400, payload)
}

func (o *DomainModelFindListBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *DomainModelFindListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDomainModelFindListUnauthorized creates a DomainModelFindListUnauthorized with default headers values
func NewDomainModelFindListUnauthorized() *DomainModelFindListUnauthorized {
	return &DomainModelFindListUnauthorized{}
}

/*
DomainModelFindListUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type DomainModelFindListUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this domain model find list unauthorized response has a 2xx status code
func (o *DomainModelFindListUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this domain model find list unauthorized response has a 3xx status code
func (o *DomainModelFindListUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this domain model find list unauthorized response has a 4xx status code
func (o *DomainModelFindListUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this domain model find list unauthorized response has a 5xx status code
func (o *DomainModelFindListUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this domain model find list unauthorized response a status code equal to that given
func (o *DomainModelFindListUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the domain model find list unauthorized response
func (o *DomainModelFindListUnauthorized) Code() int {
	return 401
}

func (o *DomainModelFindListUnauthorized) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /domainModel][%d] domainModelFindListUnauthorized %s", 401, payload)
}

func (o *DomainModelFindListUnauthorized) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /domainModel][%d] domainModelFindListUnauthorized %s", 401, payload)
}

func (o *DomainModelFindListUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *DomainModelFindListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDomainModelFindListInternalServerError creates a DomainModelFindListInternalServerError with default headers values
func NewDomainModelFindListInternalServerError() *DomainModelFindListInternalServerError {
	return &DomainModelFindListInternalServerError{}
}

/*
DomainModelFindListInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type DomainModelFindListInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this domain model find list internal server error response has a 2xx status code
func (o *DomainModelFindListInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this domain model find list internal server error response has a 3xx status code
func (o *DomainModelFindListInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this domain model find list internal server error response has a 4xx status code
func (o *DomainModelFindListInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this domain model find list internal server error response has a 5xx status code
func (o *DomainModelFindListInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this domain model find list internal server error response a status code equal to that given
func (o *DomainModelFindListInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the domain model find list internal server error response
func (o *DomainModelFindListInternalServerError) Code() int {
	return 500
}

func (o *DomainModelFindListInternalServerError) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /domainModel][%d] domainModelFindListInternalServerError %s", 500, payload)
}

func (o *DomainModelFindListInternalServerError) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[GET /domainModel][%d] domainModelFindListInternalServerError %s", 500, payload)
}

func (o *DomainModelFindListInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *DomainModelFindListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
