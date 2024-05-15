// Code generated by go-swagger; DO NOT EDIT.

package deployment

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cmsgov/easi-app/pkg/cedar/core/gen/models"
)

// DeploymentFindListReader is a Reader for the DeploymentFindList structure.
type DeploymentFindListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeploymentFindListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeploymentFindListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewDeploymentFindListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewDeploymentFindListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewDeploymentFindListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /deployment] deploymentFindList", response, response.Code())
	}
}

// NewDeploymentFindListOK creates a DeploymentFindListOK with default headers values
func NewDeploymentFindListOK() *DeploymentFindListOK {
	return &DeploymentFindListOK{}
}

/*
DeploymentFindListOK describes a response with status code 200, with default header values.

OK
*/
type DeploymentFindListOK struct {
	Payload *models.DeploymentFindResponse
}

// IsSuccess returns true when this deployment find list o k response has a 2xx status code
func (o *DeploymentFindListOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this deployment find list o k response has a 3xx status code
func (o *DeploymentFindListOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this deployment find list o k response has a 4xx status code
func (o *DeploymentFindListOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this deployment find list o k response has a 5xx status code
func (o *DeploymentFindListOK) IsServerError() bool {
	return false
}

// IsCode returns true when this deployment find list o k response a status code equal to that given
func (o *DeploymentFindListOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the deployment find list o k response
func (o *DeploymentFindListOK) Code() int {
	return 200
}

func (o *DeploymentFindListOK) Error() string {
	return fmt.Sprintf("[GET /deployment][%d] deploymentFindListOK  %+v", 200, o.Payload)
}

func (o *DeploymentFindListOK) String() string {
	return fmt.Sprintf("[GET /deployment][%d] deploymentFindListOK  %+v", 200, o.Payload)
}

func (o *DeploymentFindListOK) GetPayload() *models.DeploymentFindResponse {
	return o.Payload
}

func (o *DeploymentFindListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.DeploymentFindResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeploymentFindListBadRequest creates a DeploymentFindListBadRequest with default headers values
func NewDeploymentFindListBadRequest() *DeploymentFindListBadRequest {
	return &DeploymentFindListBadRequest{}
}

/*
DeploymentFindListBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type DeploymentFindListBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this deployment find list bad request response has a 2xx status code
func (o *DeploymentFindListBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this deployment find list bad request response has a 3xx status code
func (o *DeploymentFindListBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this deployment find list bad request response has a 4xx status code
func (o *DeploymentFindListBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this deployment find list bad request response has a 5xx status code
func (o *DeploymentFindListBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this deployment find list bad request response a status code equal to that given
func (o *DeploymentFindListBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the deployment find list bad request response
func (o *DeploymentFindListBadRequest) Code() int {
	return 400
}

func (o *DeploymentFindListBadRequest) Error() string {
	return fmt.Sprintf("[GET /deployment][%d] deploymentFindListBadRequest  %+v", 400, o.Payload)
}

func (o *DeploymentFindListBadRequest) String() string {
	return fmt.Sprintf("[GET /deployment][%d] deploymentFindListBadRequest  %+v", 400, o.Payload)
}

func (o *DeploymentFindListBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentFindListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeploymentFindListUnauthorized creates a DeploymentFindListUnauthorized with default headers values
func NewDeploymentFindListUnauthorized() *DeploymentFindListUnauthorized {
	return &DeploymentFindListUnauthorized{}
}

/*
DeploymentFindListUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type DeploymentFindListUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this deployment find list unauthorized response has a 2xx status code
func (o *DeploymentFindListUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this deployment find list unauthorized response has a 3xx status code
func (o *DeploymentFindListUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this deployment find list unauthorized response has a 4xx status code
func (o *DeploymentFindListUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this deployment find list unauthorized response has a 5xx status code
func (o *DeploymentFindListUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this deployment find list unauthorized response a status code equal to that given
func (o *DeploymentFindListUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the deployment find list unauthorized response
func (o *DeploymentFindListUnauthorized) Code() int {
	return 401
}

func (o *DeploymentFindListUnauthorized) Error() string {
	return fmt.Sprintf("[GET /deployment][%d] deploymentFindListUnauthorized  %+v", 401, o.Payload)
}

func (o *DeploymentFindListUnauthorized) String() string {
	return fmt.Sprintf("[GET /deployment][%d] deploymentFindListUnauthorized  %+v", 401, o.Payload)
}

func (o *DeploymentFindListUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentFindListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeploymentFindListInternalServerError creates a DeploymentFindListInternalServerError with default headers values
func NewDeploymentFindListInternalServerError() *DeploymentFindListInternalServerError {
	return &DeploymentFindListInternalServerError{}
}

/*
DeploymentFindListInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type DeploymentFindListInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this deployment find list internal server error response has a 2xx status code
func (o *DeploymentFindListInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this deployment find list internal server error response has a 3xx status code
func (o *DeploymentFindListInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this deployment find list internal server error response has a 4xx status code
func (o *DeploymentFindListInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this deployment find list internal server error response has a 5xx status code
func (o *DeploymentFindListInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this deployment find list internal server error response a status code equal to that given
func (o *DeploymentFindListInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the deployment find list internal server error response
func (o *DeploymentFindListInternalServerError) Code() int {
	return 500
}

func (o *DeploymentFindListInternalServerError) Error() string {
	return fmt.Sprintf("[GET /deployment][%d] deploymentFindListInternalServerError  %+v", 500, o.Payload)
}

func (o *DeploymentFindListInternalServerError) String() string {
	return fmt.Sprintf("[GET /deployment][%d] deploymentFindListInternalServerError  %+v", 500, o.Payload)
}

func (o *DeploymentFindListInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentFindListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
