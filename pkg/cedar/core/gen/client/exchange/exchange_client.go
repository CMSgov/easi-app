// Code generated by go-swagger; DO NOT EDIT.

package exchange

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new exchange API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for exchange API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	ExchangeAdd(params *ExchangeAddParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ExchangeAddOK, error)

	ExchangeDeleteList(params *ExchangeDeleteListParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ExchangeDeleteListOK, error)

	ExchangeFindByID(params *ExchangeFindByIDParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ExchangeFindByIDOK, error)

	ExchangeFindList(params *ExchangeFindListParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ExchangeFindListOK, error)

	ExchangeUpdate(params *ExchangeUpdateParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ExchangeUpdateOK, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
ExchangeAdd adds a list of data exchange records to alfabet this interface takes in an array of exchanges

Add a list of data exchange records to Alfabet. This interface takes in an array of exchanges.
*/
func (a *Client) ExchangeAdd(params *ExchangeAddParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ExchangeAddOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewExchangeAddParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "exchangeAdd",
		Method:             "POST",
		PathPattern:        "/exchange",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &ExchangeAddReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*ExchangeAddOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for exchangeAdd: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
ExchangeDeleteList deletes a list of data exchanges by ID this interface takes an array of exchange ids

Delete a list of data exchanges by ID. This interface takes an array of exchange ids.
*/
func (a *Client) ExchangeDeleteList(params *ExchangeDeleteListParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ExchangeDeleteListOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewExchangeDeleteListParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "exchangeDeleteList",
		Method:             "DELETE",
		PathPattern:        "/exchange",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &ExchangeDeleteListReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*ExchangeDeleteListOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for exchangeDeleteList: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
ExchangeFindByID retrieves a data exchange record from alfabet this interface takes in a system Id direction and version

Retrieve a data exchange record from Alfabet. This interface takes in a systemId, direction and version.
*/
func (a *Client) ExchangeFindByID(params *ExchangeFindByIDParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ExchangeFindByIDOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewExchangeFindByIDParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "exchangeFindById",
		Method:             "GET",
		PathPattern:        "/exchange/{id}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &ExchangeFindByIDReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*ExchangeFindByIDOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for exchangeFindById: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
ExchangeFindList retrieves a data exchange record from alfabet this interface takes in a system Id direction and version

Retrieve a data exchange record from Alfabet. This interface takes in a systemId, direction and version.
*/
func (a *Client) ExchangeFindList(params *ExchangeFindListParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ExchangeFindListOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewExchangeFindListParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "exchangeFindList",
		Method:             "GET",
		PathPattern:        "/exchange",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &ExchangeFindListReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*ExchangeFindListOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for exchangeFindList: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
ExchangeUpdate updates a list of data exchange records to alfabet this interface takes in an array of exchanges

Update a list of data exchange records to Alfabet. This interface takes in an array of exchanges.
*/
func (a *Client) ExchangeUpdate(params *ExchangeUpdateParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ExchangeUpdateOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewExchangeUpdateParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "exchangeUpdate",
		Method:             "PUT",
		PathPattern:        "/exchange",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &ExchangeUpdateReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*ExchangeUpdateOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for exchangeUpdate: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
