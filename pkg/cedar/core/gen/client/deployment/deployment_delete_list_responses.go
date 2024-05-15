// Code generated by go-swagger; DO NOT EDIT.

package deployment

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

// DeploymentDeleteListReader is a Reader for the DeploymentDeleteList structure.
type DeploymentDeleteListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeploymentDeleteListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeploymentDeleteListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewDeploymentDeleteListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewDeploymentDeleteListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewDeploymentDeleteListNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewDeploymentDeleteListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[DELETE /deployment] deploymentDeleteList", response, response.Code())
	}
}

// NewDeploymentDeleteListOK creates a DeploymentDeleteListOK with default headers values
func NewDeploymentDeleteListOK() *DeploymentDeleteListOK {
	return &DeploymentDeleteListOK{}
}

/*
DeploymentDeleteListOK describes a response with status code 200, with default header values.

OK
*/
type DeploymentDeleteListOK struct {
	Payload *models.Response
}

// IsSuccess returns true when this deployment delete list o k response has a 2xx status code
func (o *DeploymentDeleteListOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this deployment delete list o k response has a 3xx status code
func (o *DeploymentDeleteListOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this deployment delete list o k response has a 4xx status code
func (o *DeploymentDeleteListOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this deployment delete list o k response has a 5xx status code
func (o *DeploymentDeleteListOK) IsServerError() bool {
	return false
}

// IsCode returns true when this deployment delete list o k response a status code equal to that given
func (o *DeploymentDeleteListOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the deployment delete list o k response
func (o *DeploymentDeleteListOK) Code() int {
	return 200
}

func (o *DeploymentDeleteListOK) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListOK %s", 200, payload)
}

func (o *DeploymentDeleteListOK) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListOK %s", 200, payload)
}

func (o *DeploymentDeleteListOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentDeleteListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeploymentDeleteListBadRequest creates a DeploymentDeleteListBadRequest with default headers values
func NewDeploymentDeleteListBadRequest() *DeploymentDeleteListBadRequest {
	return &DeploymentDeleteListBadRequest{}
}

/*
DeploymentDeleteListBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type DeploymentDeleteListBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this deployment delete list bad request response has a 2xx status code
func (o *DeploymentDeleteListBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this deployment delete list bad request response has a 3xx status code
func (o *DeploymentDeleteListBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this deployment delete list bad request response has a 4xx status code
func (o *DeploymentDeleteListBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this deployment delete list bad request response has a 5xx status code
func (o *DeploymentDeleteListBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this deployment delete list bad request response a status code equal to that given
func (o *DeploymentDeleteListBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the deployment delete list bad request response
func (o *DeploymentDeleteListBadRequest) Code() int {
	return 400
}

func (o *DeploymentDeleteListBadRequest) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListBadRequest %s", 400, payload)
}

func (o *DeploymentDeleteListBadRequest) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListBadRequest %s", 400, payload)
}

func (o *DeploymentDeleteListBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentDeleteListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeploymentDeleteListUnauthorized creates a DeploymentDeleteListUnauthorized with default headers values
func NewDeploymentDeleteListUnauthorized() *DeploymentDeleteListUnauthorized {
	return &DeploymentDeleteListUnauthorized{}
}

/*
DeploymentDeleteListUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type DeploymentDeleteListUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this deployment delete list unauthorized response has a 2xx status code
func (o *DeploymentDeleteListUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this deployment delete list unauthorized response has a 3xx status code
func (o *DeploymentDeleteListUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this deployment delete list unauthorized response has a 4xx status code
func (o *DeploymentDeleteListUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this deployment delete list unauthorized response has a 5xx status code
func (o *DeploymentDeleteListUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this deployment delete list unauthorized response a status code equal to that given
func (o *DeploymentDeleteListUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the deployment delete list unauthorized response
func (o *DeploymentDeleteListUnauthorized) Code() int {
	return 401
}

func (o *DeploymentDeleteListUnauthorized) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListUnauthorized %s", 401, payload)
}

func (o *DeploymentDeleteListUnauthorized) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListUnauthorized %s", 401, payload)
}

func (o *DeploymentDeleteListUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentDeleteListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeploymentDeleteListNotFound creates a DeploymentDeleteListNotFound with default headers values
func NewDeploymentDeleteListNotFound() *DeploymentDeleteListNotFound {
	return &DeploymentDeleteListNotFound{}
}

/*
DeploymentDeleteListNotFound describes a response with status code 404, with default header values.

Not Found
*/
type DeploymentDeleteListNotFound struct {
	Payload *models.Response
}

// IsSuccess returns true when this deployment delete list not found response has a 2xx status code
func (o *DeploymentDeleteListNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this deployment delete list not found response has a 3xx status code
func (o *DeploymentDeleteListNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this deployment delete list not found response has a 4xx status code
func (o *DeploymentDeleteListNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this deployment delete list not found response has a 5xx status code
func (o *DeploymentDeleteListNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this deployment delete list not found response a status code equal to that given
func (o *DeploymentDeleteListNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the deployment delete list not found response
func (o *DeploymentDeleteListNotFound) Code() int {
	return 404
}

func (o *DeploymentDeleteListNotFound) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListNotFound %s", 404, payload)
}

func (o *DeploymentDeleteListNotFound) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListNotFound %s", 404, payload)
}

func (o *DeploymentDeleteListNotFound) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentDeleteListNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeploymentDeleteListInternalServerError creates a DeploymentDeleteListInternalServerError with default headers values
func NewDeploymentDeleteListInternalServerError() *DeploymentDeleteListInternalServerError {
	return &DeploymentDeleteListInternalServerError{}
}

/*
DeploymentDeleteListInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type DeploymentDeleteListInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this deployment delete list internal server error response has a 2xx status code
func (o *DeploymentDeleteListInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this deployment delete list internal server error response has a 3xx status code
func (o *DeploymentDeleteListInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this deployment delete list internal server error response has a 4xx status code
func (o *DeploymentDeleteListInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this deployment delete list internal server error response has a 5xx status code
func (o *DeploymentDeleteListInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this deployment delete list internal server error response a status code equal to that given
func (o *DeploymentDeleteListInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the deployment delete list internal server error response
func (o *DeploymentDeleteListInternalServerError) Code() int {
	return 500
}

func (o *DeploymentDeleteListInternalServerError) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListInternalServerError %s", 500, payload)
}

func (o *DeploymentDeleteListInternalServerError) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListInternalServerError %s", 500, payload)
}

func (o *DeploymentDeleteListInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentDeleteListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
