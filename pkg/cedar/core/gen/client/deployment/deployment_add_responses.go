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

// DeploymentAddReader is a Reader for the DeploymentAdd structure.
type DeploymentAddReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeploymentAddReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeploymentAddOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewDeploymentAddBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewDeploymentAddUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewDeploymentAddInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewDeploymentAddOK creates a DeploymentAddOK with default headers values
func NewDeploymentAddOK() *DeploymentAddOK {
	return &DeploymentAddOK{}
}

/*
	DeploymentAddOK describes a response with status code 200, with default header values.

OK
*/
type DeploymentAddOK struct {
	Payload *models.Response
}

func (o *DeploymentAddOK) Error() string {
	return fmt.Sprintf("[POST /deployment][%d] deploymentAddOK  %+v", 200, o.Payload)
}
func (o *DeploymentAddOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentAddOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeploymentAddBadRequest creates a DeploymentAddBadRequest with default headers values
func NewDeploymentAddBadRequest() *DeploymentAddBadRequest {
	return &DeploymentAddBadRequest{}
}

/*
	DeploymentAddBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type DeploymentAddBadRequest struct {
	Payload *models.Response
}

func (o *DeploymentAddBadRequest) Error() string {
	return fmt.Sprintf("[POST /deployment][%d] deploymentAddBadRequest  %+v", 400, o.Payload)
}
func (o *DeploymentAddBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentAddBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeploymentAddUnauthorized creates a DeploymentAddUnauthorized with default headers values
func NewDeploymentAddUnauthorized() *DeploymentAddUnauthorized {
	return &DeploymentAddUnauthorized{}
}

/*
	DeploymentAddUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type DeploymentAddUnauthorized struct {
	Payload *models.Response
}

func (o *DeploymentAddUnauthorized) Error() string {
	return fmt.Sprintf("[POST /deployment][%d] deploymentAddUnauthorized  %+v", 401, o.Payload)
}
func (o *DeploymentAddUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentAddUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeploymentAddInternalServerError creates a DeploymentAddInternalServerError with default headers values
func NewDeploymentAddInternalServerError() *DeploymentAddInternalServerError {
	return &DeploymentAddInternalServerError{}
}

/*
	DeploymentAddInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type DeploymentAddInternalServerError struct {
	Payload *models.Response
}

func (o *DeploymentAddInternalServerError) Error() string {
	return fmt.Sprintf("[POST /deployment][%d] deploymentAddInternalServerError  %+v", 500, o.Payload)
}
func (o *DeploymentAddInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *DeploymentAddInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
