// Code generated by go-swagger; DO NOT EDIT.

package deployment

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new deployment API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for deployment API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	DeploymentAdd(params *DeploymentAddParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeploymentAddOK, error)

	DeploymentDeleteList(params *DeploymentDeleteListParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeploymentDeleteListOK, error)

	DeploymentFindList(params *DeploymentFindListParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeploymentFindListOK, error)

	DeploymentUpdate(params *DeploymentUpdateParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeploymentUpdateOK, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  DeploymentAdd adds a list of new deployment records to alfabet this interface takes in an array of deployments

  Add a list of new deployment records to Alfabet.  This interface takes in an array of deployments.
*/
func (a *Client) DeploymentAdd(params *DeploymentAddParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeploymentAddOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeploymentAddParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "deploymentAdd",
		Method:             "POST",
		PathPattern:        "/deployment",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &DeploymentAddReader{formats: a.formats},
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
	success, ok := result.(*DeploymentAddOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for deploymentAdd: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
  DeploymentDeleteList deletes a list of deployments based on the ids passed in this interface takes an array of deployment ids

  Delete a list of deployments based on the ids passed in. This interface takes an array of deploymentIds.
*/
func (a *Client) DeploymentDeleteList(params *DeploymentDeleteListParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeploymentDeleteListOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeploymentDeleteListParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "deploymentDeleteList",
		Method:             "DELETE",
		PathPattern:        "/deployment",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &DeploymentDeleteListReader{formats: a.formats},
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
	success, ok := result.(*DeploymentDeleteListOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for deploymentDeleteList: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
  DeploymentFindList retrieves a list of deployments based on query criteria system Id state status and deployment type

  Retrieve a list of deployments based on query criteria (systemId, state, status and deploymentType).
*/
func (a *Client) DeploymentFindList(params *DeploymentFindListParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeploymentFindListOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeploymentFindListParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "deploymentFindList",
		Method:             "GET",
		PathPattern:        "/deployment",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &DeploymentFindListReader{formats: a.formats},
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
	success, ok := result.(*DeploymentFindListOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for deploymentFindList: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
  DeploymentUpdate updates a list of new deployment records to alfabet this interface takes in an array of deployment documents

  Update a list of new deployment records to Alfabet. This interface takes in an array of deployment documents.
*/
func (a *Client) DeploymentUpdate(params *DeploymentUpdateParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeploymentUpdateOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeploymentUpdateParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "deploymentUpdate",
		Method:             "PUT",
		PathPattern:        "/deployment",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &DeploymentUpdateReader{formats: a.formats},
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
	success, ok := result.(*DeploymentUpdateOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for deploymentUpdate: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
