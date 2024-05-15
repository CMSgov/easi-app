// Code generated by go-swagger; DO NOT EDIT.

package budget

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

// BudgetAddReader is a Reader for the BudgetAdd structure.
type BudgetAddReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *BudgetAddReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewBudgetAddOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewBudgetAddBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewBudgetAddUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewBudgetAddInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[POST /budget] budgetAdd", response, response.Code())
	}
}

// NewBudgetAddOK creates a BudgetAddOK with default headers values
func NewBudgetAddOK() *BudgetAddOK {
	return &BudgetAddOK{}
}

/*
BudgetAddOK describes a response with status code 200, with default header values.

OK
*/
type BudgetAddOK struct {
	Payload *models.Response
}

// IsSuccess returns true when this budget add o k response has a 2xx status code
func (o *BudgetAddOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this budget add o k response has a 3xx status code
func (o *BudgetAddOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this budget add o k response has a 4xx status code
func (o *BudgetAddOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this budget add o k response has a 5xx status code
func (o *BudgetAddOK) IsServerError() bool {
	return false
}

// IsCode returns true when this budget add o k response a status code equal to that given
func (o *BudgetAddOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the budget add o k response
func (o *BudgetAddOK) Code() int {
	return 200
}

func (o *BudgetAddOK) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /budget][%d] budgetAddOK %s", 200, payload)
}

func (o *BudgetAddOK) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /budget][%d] budgetAddOK %s", 200, payload)
}

func (o *BudgetAddOK) GetPayload() *models.Response {
	return o.Payload
}

func (o *BudgetAddOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewBudgetAddBadRequest creates a BudgetAddBadRequest with default headers values
func NewBudgetAddBadRequest() *BudgetAddBadRequest {
	return &BudgetAddBadRequest{}
}

/*
BudgetAddBadRequest describes a response with status code 400, with default header values.

Bad Request
*/
type BudgetAddBadRequest struct {
	Payload *models.Response
}

// IsSuccess returns true when this budget add bad request response has a 2xx status code
func (o *BudgetAddBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this budget add bad request response has a 3xx status code
func (o *BudgetAddBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this budget add bad request response has a 4xx status code
func (o *BudgetAddBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this budget add bad request response has a 5xx status code
func (o *BudgetAddBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this budget add bad request response a status code equal to that given
func (o *BudgetAddBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the budget add bad request response
func (o *BudgetAddBadRequest) Code() int {
	return 400
}

func (o *BudgetAddBadRequest) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /budget][%d] budgetAddBadRequest %s", 400, payload)
}

func (o *BudgetAddBadRequest) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /budget][%d] budgetAddBadRequest %s", 400, payload)
}

func (o *BudgetAddBadRequest) GetPayload() *models.Response {
	return o.Payload
}

func (o *BudgetAddBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewBudgetAddUnauthorized creates a BudgetAddUnauthorized with default headers values
func NewBudgetAddUnauthorized() *BudgetAddUnauthorized {
	return &BudgetAddUnauthorized{}
}

/*
BudgetAddUnauthorized describes a response with status code 401, with default header values.

Access Denied
*/
type BudgetAddUnauthorized struct {
	Payload *models.Response
}

// IsSuccess returns true when this budget add unauthorized response has a 2xx status code
func (o *BudgetAddUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this budget add unauthorized response has a 3xx status code
func (o *BudgetAddUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this budget add unauthorized response has a 4xx status code
func (o *BudgetAddUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this budget add unauthorized response has a 5xx status code
func (o *BudgetAddUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this budget add unauthorized response a status code equal to that given
func (o *BudgetAddUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the budget add unauthorized response
func (o *BudgetAddUnauthorized) Code() int {
	return 401
}

func (o *BudgetAddUnauthorized) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /budget][%d] budgetAddUnauthorized %s", 401, payload)
}

func (o *BudgetAddUnauthorized) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /budget][%d] budgetAddUnauthorized %s", 401, payload)
}

func (o *BudgetAddUnauthorized) GetPayload() *models.Response {
	return o.Payload
}

func (o *BudgetAddUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewBudgetAddInternalServerError creates a BudgetAddInternalServerError with default headers values
func NewBudgetAddInternalServerError() *BudgetAddInternalServerError {
	return &BudgetAddInternalServerError{}
}

/*
BudgetAddInternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type BudgetAddInternalServerError struct {
	Payload *models.Response
}

// IsSuccess returns true when this budget add internal server error response has a 2xx status code
func (o *BudgetAddInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this budget add internal server error response has a 3xx status code
func (o *BudgetAddInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this budget add internal server error response has a 4xx status code
func (o *BudgetAddInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this budget add internal server error response has a 5xx status code
func (o *BudgetAddInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this budget add internal server error response a status code equal to that given
func (o *BudgetAddInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the budget add internal server error response
func (o *BudgetAddInternalServerError) Code() int {
	return 500
}

func (o *BudgetAddInternalServerError) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /budget][%d] budgetAddInternalServerError %s", 500, payload)
}

func (o *BudgetAddInternalServerError) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /budget][%d] budgetAddInternalServerError %s", 500, payload)
}

func (o *BudgetAddInternalServerError) GetPayload() *models.Response {
	return o.Payload
}

func (o *BudgetAddInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Response)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
