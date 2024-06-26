// Code generated by go-swagger; DO NOT EDIT.

package software_products

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/cms-enterprise/easi-app/pkg/cedar/core/gen/models"
)

// SoftwareProductsAddReader is a Reader for the SoftwareProductsAdd structure.
type SoftwareProductsAddReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *SoftwareProductsAddReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewSoftwareProductsAddOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewSoftwareProductsAddBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewSoftwareProductsAddUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewSoftwareProductsAddInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[POST /softwareProducts] softwareProductsAdd", response, response.Code())
	}
}

// NewSoftwareProductsAddOK creates a SoftwareProductsAddOK with default headers values
func NewSoftwareProductsAddOK() *SoftwareProductsAddOK {
	return &SoftwareProductsAddOK{}
}

/*
SoftwareProductsAddOK describes a response with status code 200, with default header values.

OK
*/
type SoftwareProductsAddOK struct {
	Payload *models.Response
}

// IsSuccess returns true when this software products add o k response has a 2xx status code
func (o *SoftwareProductsAddOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this software products add o k response has a 3xx status code
func (o *SoftwareProductsAddOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this software products add o k response has a 4xx status code
func (o *SoftwareProductsAddOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this software products add o k response has a 5xx status code
func (o *SoftwareProductsAddOK) IsServerError() bool {
	return false
}

// IsCode returns true when this software products add o k response a status code equal to that given
func (o *SoftwareProductsAddOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the software products add o k response
func (o *SoftwareProductsAddOK) Code() int {
	return 200
}

func (o *SoftwareProductsAddOK) Error() string {
	return fmt.Sprintf("[POST /softwareProducts][%d] softwareProductsAddOK  %+v", 200, o.Payload)
}

func (o *SoftwareProductsAddOK) String() string {
	return fmt.Sprintf("[POST /softwareProducts][%d] softwareProductsAddOK  %+v", 200, o.Payload)
}

func (o *SoftwareProductsAddOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *SoftwareProductsAddOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSoftwareProductsAddBadRequest creates a SoftwareProductsAddBadRequest with default headers values
func NewSoftwareProductsAddBadRequest() *SoftwareProductsAddBadRequest {
	return &SoftwareProductsAddBadRequest{}
}

/*
SoftwareProductsAddBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type SoftwareProductsAddBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this software products add bad request response has a 2xx status code
func (o *SoftwareProductsAddBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this software products add bad request response has a 3xx status code
func (o *SoftwareProductsAddBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this software products add bad request response has a 4xx status code
func (o *SoftwareProductsAddBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this software products add bad request response has a 5xx status code
func (o *SoftwareProductsAddBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this software products add bad request response a status code equal to that given
func (o *SoftwareProductsAddBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the software products add bad request response
func (o *SoftwareProductsAddBadRequest) Code() int {
	return 400
}

func (o *SoftwareProductsAddBadRequest) Error() string {
	return fmt.Sprintf("[POST /softwareProducts][%d] softwareProductsAddBadRequest  %+v", 400, o.Payload)
}

func (o *SoftwareProductsAddBadRequest) String() string {
	return fmt.Sprintf("[POST /softwareProducts][%d] softwareProductsAddBadRequest  %+v", 400, o.Payload)
}

func (o *SoftwareProductsAddBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *SoftwareProductsAddBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSoftwareProductsAddUnauthorized creates a SoftwareProductsAddUnauthorized with default headers values
func NewSoftwareProductsAddUnauthorized() *SoftwareProductsAddUnauthorized {
	return &SoftwareProductsAddUnauthorized{}
}

/*
SoftwareProductsAddUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type SoftwareProductsAddUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this software products add unauthorized response has a 2xx status code
func (o *SoftwareProductsAddUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this software products add unauthorized response has a 3xx status code
func (o *SoftwareProductsAddUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this software products add unauthorized response has a 4xx status code
func (o *SoftwareProductsAddUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this software products add unauthorized response has a 5xx status code
func (o *SoftwareProductsAddUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this software products add unauthorized response a status code equal to that given
func (o *SoftwareProductsAddUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the software products add unauthorized response
func (o *SoftwareProductsAddUnauthorized) Code() int {
	return 401
}

func (o *SoftwareProductsAddUnauthorized) Error() string {
	return fmt.Sprintf("[POST /softwareProducts][%d] softwareProductsAddUnauthorized  %+v", 401, o.Payload)
}

func (o *SoftwareProductsAddUnauthorized) String() string {
	return fmt.Sprintf("[POST /softwareProducts][%d] softwareProductsAddUnauthorized  %+v", 401, o.Payload)
}

func (o *SoftwareProductsAddUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *SoftwareProductsAddUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSoftwareProductsAddInternalServerError creates a SoftwareProductsAddInternalServerError with default headers values
func NewSoftwareProductsAddInternalServerError() *SoftwareProductsAddInternalServerError {
	return &SoftwareProductsAddInternalServerError{}
}

/*
SoftwareProductsAddInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type SoftwareProductsAddInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this software products add internal server error response has a 2xx status code
func (o *SoftwareProductsAddInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this software products add internal server error response has a 3xx status code
func (o *SoftwareProductsAddInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this software products add internal server error response has a 4xx status code
func (o *SoftwareProductsAddInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this software products add internal server error response has a 5xx status code
func (o *SoftwareProductsAddInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this software products add internal server error response a status code equal to that given
func (o *SoftwareProductsAddInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the software products add internal server error response
func (o *SoftwareProductsAddInternalServerError) Code() int {
	return 500
}

func (o *SoftwareProductsAddInternalServerError) Error() string {
	return fmt.Sprintf("[POST /softwareProducts][%d] softwareProductsAddInternalServerError  %+v", 500, o.Payload)
}

func (o *SoftwareProductsAddInternalServerError) String() string {
	return fmt.Sprintf("[POST /softwareProducts][%d] softwareProductsAddInternalServerError  %+v", 500, o.Payload)
}

func (o *SoftwareProductsAddInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *SoftwareProductsAddInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
