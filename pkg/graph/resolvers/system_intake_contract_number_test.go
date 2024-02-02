package resolvers

import (
	"time"

	"github.com/guregu/null/zero"

	"github.com/cmsgov/easi-app/pkg/graph/model"
	"github.com/cmsgov/easi-app/pkg/models"
)

func (suite *ResolverSuite) TestSetSystemIntakeRelationNewSystem() {
	ctx := suite.testConfigs.Context
	store := suite.testConfigs.Store

	submittedAt := time.Now()

	// Create an inital intake that has an existing contract name
	openIntake, err := store.CreateSystemIntake(ctx, &models.SystemIntake{
		State:        models.SystemIntakeStateOPEN,
		Status:       models.SystemIntakeStatusINTAKESUBMITTED,
		RequestType:  models.SystemIntakeRequestTypeNEW,
		SubmittedAt:  &submittedAt,
		ContractName: zero.StringFrom("My Test Contract Name"),
	})
	suite.NoError(err)
	suite.NotNil(openIntake)

	// Set the "new system" relationship
	input := &model.SetSystemIntakeRelationNewSystemInput{
		SystemIntakeID: openIntake.ID,
		// TODO: ContractNumbers
	}
	updatedIntake, err := SetSystemIntakeRelationNewSystem(ctx, store, input)
	suite.NoError(err)

	// Once fully implemented, we'll need to add tests that ensure the following
	// 1. TODO - Removal of CEDAR System ID relationships that might be existing
	// 2. TODO - That contract number relationships are deleted and recreated properly
	//
	// These may best be tested by other tests, or can be added to this test

	// Ensure the contract name was deleted properly
	suite.True(updatedIntake.ContractName.IsZero())
}
func (suite *ResolverSuite) TestSetSystemIntakeRelationExistingSystem() {
	ctx := suite.testConfigs.Context
	store := suite.testConfigs.Store

	submittedAt := time.Now()

	// Create an inital intake that has an existing contract name
	openIntake, err := store.CreateSystemIntake(ctx, &models.SystemIntake{
		State:        models.SystemIntakeStateOPEN,
		Status:       models.SystemIntakeStatusINTAKESUBMITTED,
		RequestType:  models.SystemIntakeRequestTypeNEW,
		SubmittedAt:  &submittedAt,
		ContractName: zero.StringFrom("My Test Contract Name"),
	})
	suite.NoError(err)
	suite.NotNil(openIntake)

	// Set the "new system" relationship
	input := &model.SetSystemIntakeRelationExistingSystemInput{
		SystemIntakeID: openIntake.ID,
		// TODO: ContractNumbers
	}
	updatedIntake, err := SetSystemIntakeRelationExistingSystem(ctx, store, input)
	suite.NoError(err)

	// Once fully implemented, we'll need to add tests that ensure the following
	// 1. TODO - Setting of CEDAR System ID relationships that might be existing
	// 2. TODO - That contract number relationships are deleted and recreated properly
	//
	// These may best be tested by other tests, or can be added to this test

	// Ensure the contract name was deleted properly
	suite.True(updatedIntake.ContractName.IsZero())
}

func (suite *ResolverSuite) TestSetSystemIntakeRelationExistingService() {
	ctx := suite.testConfigs.Context
	store := suite.testConfigs.Store

	submittedAt := time.Now()

	// Create an inital intake
	openIntake, err := store.CreateSystemIntake(ctx, &models.SystemIntake{
		State:       models.SystemIntakeStateOPEN,
		Status:      models.SystemIntakeStatusINTAKESUBMITTED,
		RequestType: models.SystemIntakeRequestTypeNEW,
		SubmittedAt: &submittedAt,
	})
	suite.NoError(err)
	suite.NotNil(openIntake)

	// Set the existing service relationship
	contractName := "My Test Contract Name"
	input := &model.SetSystemIntakeRelationExistingServiceInput{
		SystemIntakeID: openIntake.ID,
		ContractName:   contractName,
		// TODO: ContractNumbers
	}
	updatedIntake, err := SetSystemIntakeRelationExistingService(ctx, store, input)
	suite.NoError(err)

	// Once implemented, we'll need to add tests that ensure the following
	// 1. TODO - Removal of CEDAR System ID relationships that might be existing
	// 2. TODO - That contract number relationships are deleted and recreated properly
	//
	// These may best be tested by other tests, or can be added to this test

	// Ensure the contract name was set properly
	suite.Equal(updatedIntake.ContractName.ValueOrZero(), contractName)
}