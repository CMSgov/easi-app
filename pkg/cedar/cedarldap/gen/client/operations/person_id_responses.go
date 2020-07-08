// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"
)

// PersonIDReader is a Reader for the PersonID structure.
type PersonIDReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PersonIDReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPersonIDOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewPersonIDBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewPersonIDUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewPersonIDInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewPersonIDOK creates a PersonIDOK with default headers values
func NewPersonIDOK() *PersonIDOK {
	return &PersonIDOK{}
}

/*PersonIDOK handles this case with default header values.

OK
*/
type PersonIDOK struct {
}

func (o *PersonIDOK) Error() string {
	return fmt.Sprintf("[GET /person/{id}][%d] personIdOK ", 200)
}

func (o *PersonIDOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPersonIDBadRequest creates a PersonIDBadRequest with default headers values
func NewPersonIDBadRequest() *PersonIDBadRequest {
	return &PersonIDBadRequest{}
}

/*PersonIDBadRequest handles this case with default header values.

Bad Request
*/
type PersonIDBadRequest struct {
}

func (o *PersonIDBadRequest) Error() string {
	return fmt.Sprintf("[GET /person/{id}][%d] personIdBadRequest ", 400)
}

func (o *PersonIDBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPersonIDUnauthorized creates a PersonIDUnauthorized with default headers values
func NewPersonIDUnauthorized() *PersonIDUnauthorized {
	return &PersonIDUnauthorized{}
}

/*PersonIDUnauthorized handles this case with default header values.

Access Denied
*/
type PersonIDUnauthorized struct {
}

func (o *PersonIDUnauthorized) Error() string {
	return fmt.Sprintf("[GET /person/{id}][%d] personIdUnauthorized ", 401)
}

func (o *PersonIDUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPersonIDInternalServerError creates a PersonIDInternalServerError with default headers values
func NewPersonIDInternalServerError() *PersonIDInternalServerError {
	return &PersonIDInternalServerError{}
}

/*PersonIDInternalServerError handles this case with default header values.

Internal Server Error
*/
type PersonIDInternalServerError struct {
}

func (o *PersonIDInternalServerError) Error() string {
	return fmt.Sprintf("[GET /person/{id}][%d] personIdInternalServerError ", 500)
}

func (o *PersonIDInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}
