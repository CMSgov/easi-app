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
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
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

func (o *DeploymentDeleteListOK) Error() string {
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListOK  %+v", 200, o.Payload)
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

func (o *DeploymentDeleteListBadRequest) Error() string {
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListBadRequest  %+v", 400, o.Payload)
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

func (o *DeploymentDeleteListUnauthorized) Error() string {
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListUnauthorized  %+v", 401, o.Payload)
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

func (o *DeploymentDeleteListNotFound) Error() string {
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListNotFound  %+v", 404, o.Payload)
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

func (o *DeploymentDeleteListInternalServerError) Error() string {
	return fmt.Sprintf("[DELETE /deployment][%d] deploymentDeleteListInternalServerError  %+v", 500, o.Payload)
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
