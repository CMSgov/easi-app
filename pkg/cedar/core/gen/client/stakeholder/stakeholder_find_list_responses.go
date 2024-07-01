// Code generated by go-swagger; DO NOT EDIT.

package stakeholder

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cms-enterprise/easi-app/pkg/cedar/core/gen/models"
)

// StakeholderFindListReader is a Reader for the StakeholderFindList structure.
type StakeholderFindListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *StakeholderFindListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewStakeholderFindListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewStakeholderFindListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewStakeholderFindListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewStakeholderFindListNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewStakeholderFindListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /stakeholder] stakeholderFindList", response, response.Code())
	}
}

// NewStakeholderFindListOK creates a StakeholderFindListOK with default headers values
func NewStakeholderFindListOK() *StakeholderFindListOK {
	return &StakeholderFindListOK{}
}

/*
StakeholderFindListOK describes a response with status code 200, with default header values.

OK
*/
type StakeholderFindListOK struct {
	Payload *models.StakeholderFindResponse
}

// IsSuccess returns true when this stakeholder find list o k response has a 2xx status code
func (o *StakeholderFindListOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this stakeholder find list o k response has a 3xx status code
func (o *StakeholderFindListOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this stakeholder find list o k response has a 4xx status code
func (o *StakeholderFindListOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this stakeholder find list o k response has a 5xx status code
func (o *StakeholderFindListOK) IsServerError() bool {
	return false
}

// IsCode returns true when this stakeholder find list o k response a status code equal to that given
func (o *StakeholderFindListOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the stakeholder find list o k response
func (o *StakeholderFindListOK) Code() int {
	return 200
}

func (o *StakeholderFindListOK) Error() string {
	return fmt.Sprintf("[GET /stakeholder][%d] stakeholderFindListOK  %+v", 200, o.Payload)
}

func (o *StakeholderFindListOK) String() string {
	return fmt.Sprintf("[GET /stakeholder][%d] stakeholderFindListOK  %+v", 200, o.Payload)
}

func (o *StakeholderFindListOK) GetPayload() *models.StakeholderFindResponse {
	return o.Payload
}

func (o *StakeholderFindListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.StakeholderFindResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStakeholderFindListBadRequest creates a StakeholderFindListBadRequest with default headers values
func NewStakeholderFindListBadRequest() *StakeholderFindListBadRequest {
	return &StakeholderFindListBadRequest{}
}

/*
StakeholderFindListBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type StakeholderFindListBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this stakeholder find list bad request response has a 2xx status code
func (o *StakeholderFindListBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this stakeholder find list bad request response has a 3xx status code
func (o *StakeholderFindListBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this stakeholder find list bad request response has a 4xx status code
func (o *StakeholderFindListBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this stakeholder find list bad request response has a 5xx status code
func (o *StakeholderFindListBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this stakeholder find list bad request response a status code equal to that given
func (o *StakeholderFindListBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the stakeholder find list bad request response
func (o *StakeholderFindListBadRequest) Code() int {
	return 400
}

func (o *StakeholderFindListBadRequest) Error() string {
	return fmt.Sprintf("[GET /stakeholder][%d] stakeholderFindListBadRequest  %+v", 400, o.Payload)
}

func (o *StakeholderFindListBadRequest) String() string {
	return fmt.Sprintf("[GET /stakeholder][%d] stakeholderFindListBadRequest  %+v", 400, o.Payload)
}

func (o *StakeholderFindListBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *StakeholderFindListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStakeholderFindListUnauthorized creates a StakeholderFindListUnauthorized with default headers values
func NewStakeholderFindListUnauthorized() *StakeholderFindListUnauthorized {
	return &StakeholderFindListUnauthorized{}
}

/*
StakeholderFindListUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type StakeholderFindListUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this stakeholder find list unauthorized response has a 2xx status code
func (o *StakeholderFindListUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this stakeholder find list unauthorized response has a 3xx status code
func (o *StakeholderFindListUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this stakeholder find list unauthorized response has a 4xx status code
func (o *StakeholderFindListUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this stakeholder find list unauthorized response has a 5xx status code
func (o *StakeholderFindListUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this stakeholder find list unauthorized response a status code equal to that given
func (o *StakeholderFindListUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the stakeholder find list unauthorized response
func (o *StakeholderFindListUnauthorized) Code() int {
	return 401
}

func (o *StakeholderFindListUnauthorized) Error() string {
	return fmt.Sprintf("[GET /stakeholder][%d] stakeholderFindListUnauthorized  %+v", 401, o.Payload)
}

func (o *StakeholderFindListUnauthorized) String() string {
	return fmt.Sprintf("[GET /stakeholder][%d] stakeholderFindListUnauthorized  %+v", 401, o.Payload)
}

func (o *StakeholderFindListUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *StakeholderFindListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStakeholderFindListNotFound creates a StakeholderFindListNotFound with default headers values
func NewStakeholderFindListNotFound() *StakeholderFindListNotFound {
	return &StakeholderFindListNotFound{}
}

/*
StakeholderFindListNotFound describes a response with status code 404, with default header values.

Not Found
*/
type StakeholderFindListNotFound struct {
	Payload *models.Response
}

// IsSuccess returns true when this stakeholder find list not found response has a 2xx status code
func (o *StakeholderFindListNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this stakeholder find list not found response has a 3xx status code
func (o *StakeholderFindListNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this stakeholder find list not found response has a 4xx status code
func (o *StakeholderFindListNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this stakeholder find list not found response has a 5xx status code
func (o *StakeholderFindListNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this stakeholder find list not found response a status code equal to that given
func (o *StakeholderFindListNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the stakeholder find list not found response
func (o *StakeholderFindListNotFound) Code() int {
	return 404
}

func (o *StakeholderFindListNotFound) Error() string {
	return fmt.Sprintf("[GET /stakeholder][%d] stakeholderFindListNotFound  %+v", 404, o.Payload)
}

func (o *StakeholderFindListNotFound) String() string {
	return fmt.Sprintf("[GET /stakeholder][%d] stakeholderFindListNotFound  %+v", 404, o.Payload)
}

func (o *StakeholderFindListNotFound) GetPayload() *models.Response {
	return o.Payload
}

func (o *StakeholderFindListNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStakeholderFindListInternalServerError creates a StakeholderFindListInternalServerError with default headers values
func NewStakeholderFindListInternalServerError() *StakeholderFindListInternalServerError {
	return &StakeholderFindListInternalServerError{}
}

/*
StakeholderFindListInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type StakeholderFindListInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this stakeholder find list internal server error response has a 2xx status code
func (o *StakeholderFindListInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this stakeholder find list internal server error response has a 3xx status code
func (o *StakeholderFindListInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this stakeholder find list internal server error response has a 4xx status code
func (o *StakeholderFindListInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this stakeholder find list internal server error response has a 5xx status code
func (o *StakeholderFindListInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this stakeholder find list internal server error response a status code equal to that given
func (o *StakeholderFindListInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the stakeholder find list internal server error response
func (o *StakeholderFindListInternalServerError) Code() int {
	return 500
}

func (o *StakeholderFindListInternalServerError) Error() string {
	return fmt.Sprintf("[GET /stakeholder][%d] stakeholderFindListInternalServerError  %+v", 500, o.Payload)
}

func (o *StakeholderFindListInternalServerError) String() string {
	return fmt.Sprintf("[GET /stakeholder][%d] stakeholderFindListInternalServerError  %+v", 500, o.Payload)
}

func (o *StakeholderFindListInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *StakeholderFindListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
