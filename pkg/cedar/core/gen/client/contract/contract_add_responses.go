// Code generated by go-swagger; DO NOT EDIT.

package contract

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cms-enterprise/easi-app/pkg/cedar/core/gen/models"
)

// ContractAddReader is a Reader for the ContractAdd structure.
type ContractAddReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ContractAddReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewContractAddOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewContractAddBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewContractAddUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewContractAddInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[POST /contract] contractAdd", response, response.Code())
	}
}

// NewContractAddOK creates a ContractAddOK with default headers values
func NewContractAddOK() *ContractAddOK {
	return &ContractAddOK{}
}

/*
ContractAddOK describes a response with status code 200, with default header values.

OK
*/
type ContractAddOK struct {
	Payload *models.Response
}

// IsSuccess returns true when this contract add o k response has a 2xx status code
func (o *ContractAddOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this contract add o k response has a 3xx status code
func (o *ContractAddOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this contract add o k response has a 4xx status code
func (o *ContractAddOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this contract add o k response has a 5xx status code
func (o *ContractAddOK) IsServerError() bool {
	return false
}

// IsCode returns true when this contract add o k response a status code equal to that given
func (o *ContractAddOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the contract add o k response
func (o *ContractAddOK) Code() int {
	return 200
}

func (o *ContractAddOK) Error() string {
	return fmt.Sprintf("[POST /contract][%d] contractAddOK  %+v", 200, o.Payload)
}

func (o *ContractAddOK) String() string {
	return fmt.Sprintf("[POST /contract][%d] contractAddOK  %+v", 200, o.Payload)
}

func (o *ContractAddOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *ContractAddOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewContractAddBadRequest creates a ContractAddBadRequest with default headers values
func NewContractAddBadRequest() *ContractAddBadRequest {
	return &ContractAddBadRequest{}
}

/*
ContractAddBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type ContractAddBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this contract add bad request response has a 2xx status code
func (o *ContractAddBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this contract add bad request response has a 3xx status code
func (o *ContractAddBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this contract add bad request response has a 4xx status code
func (o *ContractAddBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this contract add bad request response has a 5xx status code
func (o *ContractAddBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this contract add bad request response a status code equal to that given
func (o *ContractAddBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the contract add bad request response
func (o *ContractAddBadRequest) Code() int {
	return 400
}

func (o *ContractAddBadRequest) Error() string {
	return fmt.Sprintf("[POST /contract][%d] contractAddBadRequest  %+v", 400, o.Payload)
}

func (o *ContractAddBadRequest) String() string {
	return fmt.Sprintf("[POST /contract][%d] contractAddBadRequest  %+v", 400, o.Payload)
}

func (o *ContractAddBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *ContractAddBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewContractAddUnauthorized creates a ContractAddUnauthorized with default headers values
func NewContractAddUnauthorized() *ContractAddUnauthorized {
	return &ContractAddUnauthorized{}
}

/*
ContractAddUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type ContractAddUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this contract add unauthorized response has a 2xx status code
func (o *ContractAddUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this contract add unauthorized response has a 3xx status code
func (o *ContractAddUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this contract add unauthorized response has a 4xx status code
func (o *ContractAddUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this contract add unauthorized response has a 5xx status code
func (o *ContractAddUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this contract add unauthorized response a status code equal to that given
func (o *ContractAddUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the contract add unauthorized response
func (o *ContractAddUnauthorized) Code() int {
	return 401
}

func (o *ContractAddUnauthorized) Error() string {
	return fmt.Sprintf("[POST /contract][%d] contractAddUnauthorized  %+v", 401, o.Payload)
}

func (o *ContractAddUnauthorized) String() string {
	return fmt.Sprintf("[POST /contract][%d] contractAddUnauthorized  %+v", 401, o.Payload)
}

func (o *ContractAddUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *ContractAddUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewContractAddInternalServerError creates a ContractAddInternalServerError with default headers values
func NewContractAddInternalServerError() *ContractAddInternalServerError {
	return &ContractAddInternalServerError{}
}

/*
ContractAddInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type ContractAddInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this contract add internal server error response has a 2xx status code
func (o *ContractAddInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this contract add internal server error response has a 3xx status code
func (o *ContractAddInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this contract add internal server error response has a 4xx status code
func (o *ContractAddInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this contract add internal server error response has a 5xx status code
func (o *ContractAddInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this contract add internal server error response a status code equal to that given
func (o *ContractAddInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the contract add internal server error response
func (o *ContractAddInternalServerError) Code() int {
	return 500
}

func (o *ContractAddInternalServerError) Error() string {
	return fmt.Sprintf("[POST /contract][%d] contractAddInternalServerError  %+v", 500, o.Payload)
}

func (o *ContractAddInternalServerError) String() string {
	return fmt.Sprintf("[POST /contract][%d] contractAddInternalServerError  %+v", 500, o.Payload)
}

func (o *ContractAddInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *ContractAddInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
