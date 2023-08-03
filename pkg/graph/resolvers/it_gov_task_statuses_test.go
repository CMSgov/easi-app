package resolvers

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"

	"github.com/cmsgov/easi-app/pkg/models"
)

type testSystemIntakeFormStatusType struct {
	testCase       string
	intake         models.SystemIntake
	expectedStatus models.ITGovIntakeFormStatus
	expectError    bool
}
type testSystemIntakeFormFeedbackStatusType struct {
	testCase       string
	intake         models.SystemIntake
	expectedStatus models.ITGovFeedbackStatus
	expectError    bool
}

type testSystemIntakeGRTStatusType struct {
	testCase       string
	intake         models.SystemIntake
	expectedStatus models.ITGovGRTStatus
	expectError    bool
}

type testSystemIntakeDecisionStateStatusType struct {
	testCase       string
	intake         models.SystemIntake
	expectedStatus models.ITGovDecisionStatus
	expectError    bool
}

func TestIntakeFormStatus(t *testing.T) {

	defaultTestState := models.SystemIntakeFormState("Testing Default State")

	intakeFormTests := []testSystemIntakeFormStatusType{
		//Test cases when the step is the Intake Form
		{
			testCase: "Request form not started",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepINITIALFORM,
				RequestFormState: models.SIRFSNotStarted,
			},
			expectedStatus: models.ITGISReady,
			expectError:    false,
		},
		{
			testCase: "Request form started",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepINITIALFORM,
				RequestFormState: models.SIRFSInProgress,
			},
			expectedStatus: models.ITGISInProgress,
			expectError:    false,
		},
		{
			testCase: "Request form edits requested",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepINITIALFORM,
				RequestFormState: models.SIRFSEditsRequested,
			},
			expectedStatus: models.ITGISEditsRequested,
			expectError:    false,
		},
		{
			testCase: "Request form submitted",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepINITIALFORM,
				RequestFormState: models.SIRFSSubmitted,
			},
			expectedStatus: models.ITGISCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form default case",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepINITIALFORM,
				RequestFormState: defaultTestState,
			},
			expectedStatus: "",
			expectError:    true,
		},

		//Tests when the step is not the Intake form
		{
			testCase: "Request form not started: not at intake form step",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepGRBMEETING,
				RequestFormState: models.SIRFSNotStarted,
			},
			expectedStatus: models.ITGISCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form started: not at intake form step",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepGRBMEETING,
				RequestFormState: models.SIRFSInProgress,
			},
			expectedStatus: models.ITGISCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form edits requested: not at intake form step",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepGRBMEETING,
				RequestFormState: models.SIRFSEditsRequested,
			},
			expectedStatus: models.ITGISCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form submitted: not at intake form step",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepGRBMEETING,
				RequestFormState: models.SIRFSSubmitted,
			},
			expectedStatus: models.ITGISCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form default state: not at intake form step, expect complete",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepGRBMEETING,
				RequestFormState: defaultTestState,
			},
			expectedStatus: models.ITGISCompleted,
			expectError:    false,
		},
	}

	for _, test := range intakeFormTests {
		t.Run(test.testCase, func(t *testing.T) {
			status, err := IntakeFormStatus(&test.intake)
			assert.EqualValues(t, test.expectedStatus, status)
			if test.expectError {
				assert.Error(t, err)
			} else {
				assert.NoError(t, err)
			}

		})
	}

}

func TestFeedbackFromInitialReviewStatus(t *testing.T) {
	defaultTestState := models.SystemIntakeFormState("Testing Default State")

	intakeFormFeedbackTests := []testSystemIntakeFormFeedbackStatusType{
		//Test cases when the step is the Intake Form
		{
			testCase: "Request form not started",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepINITIALFORM,
				RequestFormState: models.SIRFSNotStarted,
			},
			expectedStatus: models.ITGFBSCantStart,
			expectError:    false,
		},
		{
			testCase: "Request form started",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepINITIALFORM,
				RequestFormState: models.SIRFSInProgress,
			},
			expectedStatus: models.ITGFBSCantStart,
			expectError:    false,
		},
		{
			testCase: "Request form Submitted",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepINITIALFORM,
				RequestFormState: models.SIRFSSubmitted,
			},
			expectedStatus: models.ITGFBSInReview,
			expectError:    false,
		},

		{
			testCase: "Request form edits requested",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepINITIALFORM,
				RequestFormState: models.SIRFSEditsRequested,
			},
			expectedStatus: models.ITGFBSCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form default case",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepINITIALFORM,
				RequestFormState: defaultTestState,
			},
			expectedStatus: "",
			expectError:    true,
		},

		//Tests when the step is not the Intake form
		{
			testCase: "Request form not started: not at intake form step",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepGRBMEETING,
				RequestFormState: models.SIRFSNotStarted,
			},
			expectedStatus: models.ITGFBSCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form started: not at intake form step",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepGRBMEETING,
				RequestFormState: models.SIRFSInProgress,
			},
			expectedStatus: models.ITGFBSCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form edits requested: not at intake form step",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepGRBMEETING,
				RequestFormState: models.SIRFSEditsRequested,
			},
			expectedStatus: models.ITGFBSCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form submitted: not at intake form step",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepGRBMEETING,
				RequestFormState: models.SIRFSSubmitted,
			},
			expectedStatus: models.ITGFBSCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form default state: not at intake form step, expect complete",
			intake: models.SystemIntake{
				Step:             models.SystemIntakeStepGRBMEETING,
				RequestFormState: defaultTestState,
			},
			expectedStatus: models.ITGFBSCompleted,
			expectError:    false,
		},
	}

	for _, test := range intakeFormFeedbackTests {
		t.Run(test.testCase, func(t *testing.T) {
			status, err := FeedbackFromInitialReviewStatus(&test.intake)
			assert.EqualValues(t, test.expectedStatus, status)
			if test.expectError {
				assert.Error(t, err)
			} else {
				assert.NoError(t, err)
			}

		})
	}

}
func TestDecisionAndNextStepsStatus(t *testing.T) {
	yesterday := time.Now().Add(time.Hour * -24)
	tomorrow := time.Now().Add(time.Hour * 24)

	decisionStateTests := []testSystemIntakeDecisionStateStatusType{
		{
			testCase: "Request form not started",
			intake: models.SystemIntake{
				Step: models.SystemIntakeStepINITIALFORM,
			},
			expectedStatus: models.ITGDSCantStart,
			expectError:    false,
		},
		{
			testCase: "Draft Business Case",
			intake: models.SystemIntake{
				Step: models.SystemIntakeStepDRAFTBIZCASE,
			},
			expectedStatus: models.ITGDSCantStart,
			expectError:    false,
		},
		{
			testCase: "GRT Meeting",
			intake: models.SystemIntake{
				Step: models.SystemIntakeStepGRTMEETING,
			},
			expectedStatus: models.ITGDSCantStart,
			expectError:    false,
		},
		{
			testCase: "Final Business Case",
			intake: models.SystemIntake{
				Step: models.SystemIntakeStepFINALBIZCASE,
			},
			expectedStatus: models.ITGDSCantStart,
			expectError:    false,
		},
		//Testing GRB Meeting States
		{
			testCase: "GRB Meeting: no meeting scheduled",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepGRBMEETING,
				GRBDate: nil,
			},
			expectedStatus: models.ITGDSCantStart,
			expectError:    false,
		},
		{
			testCase: "GRB Meeting: meeting scheduled, but hasn't happened",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepGRBMEETING,
				GRBDate: &tomorrow,
			},
			expectedStatus: models.ITGDSCantStart,
			expectError:    false,
		},
		{
			testCase: "GRB Meeting: meeting scheduled, it already happened",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepGRBMEETING,
				GRBDate: &yesterday,
			},
			expectedStatus: models.ITGDSInReview,
			expectError:    false,
		},
		{
			testCase: "Decision issued step: LCID Issued",
			intake: models.SystemIntake{
				Step:          models.SystemIntakeStepDECISION,
				DecisionState: models.SIDSLcidIssued,
			},
			expectedStatus: models.ITGDSCompleted,
			expectError:    false,
		},
		{
			testCase: "Decision issued step: Not Approved",
			intake: models.SystemIntake{
				Step:          models.SystemIntakeStepDECISION,
				DecisionState: models.SIDSNotApproved,
			},
			expectedStatus: models.ITGDSCompleted,
			expectError:    false,
		},
		{
			testCase: "Decision issued step: Not an IT Governance Request",
			intake: models.SystemIntake{
				Step:          models.SystemIntakeStepDECISION,
				DecisionState: models.SIDSNotGovernance,
			},
			expectedStatus: models.ITGDSCompleted,
			expectError:    false,
		},
		{
			testCase: "Decision issued step: No decision issued",
			intake: models.SystemIntake{
				Step:          models.SystemIntakeStepDECISION,
				DecisionState: models.SIDSNoDecision,
			},
			expectedStatus: "",
			expectError:    true,
		},
	}

	for _, test := range decisionStateTests {
		t.Run(test.testCase, func(t *testing.T) {
			status, err := DecisionAndNextStepsStatus(&test.intake)
			assert.EqualValues(t, test.expectedStatus, status)
			if test.expectError {
				assert.Error(t, err)
			} else {
				assert.NoError(t, err)
			}

		})
	}

}
func (suite *ResolverSuite) TestBizCaseDraftStatus() {
	intake := models.SystemIntake{
		Status: models.SystemIntakeStatusCLOSED,
	}

	status := BizCaseDraftStatus(&intake)

	suite.EqualValues(models.ITGDBCSCantStart, status)

}
func TestGrtMeetingStatus(t *testing.T) {
	yesterday := time.Now().Add(time.Hour * -24)
	tomorrow := time.Now().Add(time.Hour * 24)
	defaultTestStep := models.SystemIntakeStep("Testing Default State")

	decisionStateTests := []testSystemIntakeGRTStatusType{
		{
			testCase: "Request form: No GRT Date Scheduled",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepINITIALFORM,
				GRTDate: nil,
			},
			expectedStatus: models.ITGGRTSCantStart,
			expectError:    false,
		},
		{
			testCase: "Request form: GRT Date Yesterday",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepINITIALFORM,
				GRTDate: &yesterday,
			},
			expectedStatus: models.ITGGRTSCompleted,
			expectError:    false,
		},
		{
			testCase: "Request form: GRT Date Tommorrow",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepINITIALFORM,
				GRTDate: &tomorrow,
			},
			expectedStatus: models.ITGGRTSScheduled,
			expectError:    false,
		},
		{
			testCase: "Draft Business Case: No GRT Date Scheduled",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepDRAFTBIZCASE,
				GRTDate: nil,
			},
			expectedStatus: models.ITGGRTSCantStart,
			expectError:    false,
		},
		{
			testCase: "Draft Business Case: GRT Date Yesterday",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepDRAFTBIZCASE,
				GRTDate: &yesterday,
			},
			expectedStatus: models.ITGGRTSCompleted,
			expectError:    false,
		},
		{
			testCase: "Draft Business Case: GRT Date Tommorrow",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepDRAFTBIZCASE,
				GRTDate: &tomorrow,
			},
			expectedStatus: models.ITGGRTSScheduled,
			expectError:    false,
		},
		{
			testCase: "GRT Step: No GRT Date Scheduled",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepGRTMEETING,
				GRTDate: nil,
			},
			expectedStatus: models.ITGGRTSReadyToSchedule,
			expectError:    false,
		},
		{
			testCase: "GRT Step: GRT Date Yesterday",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepGRTMEETING,
				GRTDate: &yesterday,
			},
			expectedStatus: models.ITGGRTSAwaitingDecision,
			expectError:    false,
		},
		{
			testCase: "GRT Step: GRT Date Tommorrow",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepGRTMEETING,
				GRTDate: &tomorrow,
			},
			expectedStatus: models.ITGGRTSScheduled,
			expectError:    false,
		},
		{
			testCase: "Final Business Case Step: No GRT Date Scheduled",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepFINALBIZCASE,
				GRTDate: nil,
			},
			expectedStatus: models.ITGGRTSNotNeeded,
			expectError:    false,
		},
		{
			testCase: "Final Business Case Step: GRT Date Yesterday",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepFINALBIZCASE,
				GRTDate: &yesterday,
			},
			expectedStatus: models.ITGGRTSCompleted,
			expectError:    false,
		},
		{
			testCase: "Final Business Case Step: GRT Date Tommorrow",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepFINALBIZCASE,
				GRTDate: &tomorrow,
			},
			expectedStatus: models.ITGGRTSScheduled,
			expectError:    false,
		},
		{
			testCase: "GRB Step: No GRT Date Scheduled",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepGRBMEETING,
				GRTDate: nil,
			},
			expectedStatus: models.ITGGRTSNotNeeded,
			expectError:    false,
		},
		{
			testCase: "GRB Step: GRT Date Yesterday",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepGRBMEETING,
				GRTDate: &yesterday,
			},
			expectedStatus: models.ITGGRTSCompleted,
			expectError:    false,
		},
		{
			testCase: "GRB Step: GRT Date Tommorrow",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepGRBMEETING,
				GRTDate: &tomorrow,
			},
			expectedStatus: models.ITGGRTSScheduled,
			expectError:    false,
		},
		{
			testCase: "Decision Step: No GRT Date Scheduled",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepDECISION,
				GRTDate: nil,
			},
			expectedStatus: models.ITGGRTSNotNeeded,
			expectError:    false,
		},
		{
			testCase: "Decision Step: GRT Date Yesterday",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepDECISION,
				GRTDate: &yesterday,
			},
			expectedStatus: models.ITGGRTSCompleted,
			expectError:    false,
		},
		{
			testCase: "Decision Step: GRT Date Tommorrow",
			intake: models.SystemIntake{
				Step:    models.SystemIntakeStepDECISION,
				GRTDate: &tomorrow,
			},
			expectedStatus: models.ITGGRTSScheduled,
			expectError:    false,
		},
		{
			testCase: "Decision Step: No GRT Date Scheduled",
			intake: models.SystemIntake{
				Step:    defaultTestStep,
				GRTDate: nil,
			},
			expectedStatus: "",
			expectError:    true,
		},
		{
			testCase: "Decision Step: GRT Date Yesterday",
			intake: models.SystemIntake{
				Step:    defaultTestStep,
				GRTDate: &yesterday,
			},
			expectedStatus: models.ITGGRTSCompleted,
			expectError:    false,
		},
		{
			testCase: "Decision Step: GRT Date Tommorrow",
			intake: models.SystemIntake{
				Step:    defaultTestStep,
				GRTDate: &tomorrow,
			},
			expectedStatus: models.ITGGRTSScheduled,
			expectError:    false,
		},
	}

	for _, test := range decisionStateTests {
		t.Run(test.testCase, func(t *testing.T) {
			status, err := GrtMeetingStatus(&test.intake)
			assert.EqualValues(t, test.expectedStatus, status)
			if test.expectError {
				assert.Error(t, err)
			} else {
				assert.NoError(t, err)
			}

		})
	}

}
func (suite *ResolverSuite) TestBizCaseFinalStatus() {
	intake := models.SystemIntake{
		Status: models.SystemIntakeStatusCLOSED,
	}

	status := BizCaseFinalStatus(&intake)

	suite.EqualValues(models.ITGFBCSCantStart, status)

}
func (suite *ResolverSuite) TestGrbMeetingStatus() {
	intake := models.SystemIntake{
		Status: models.SystemIntakeStatusCLOSED,
	}

	status := GrbMeetingStatus(&intake)

	suite.EqualValues(models.ITGGRBSCantStart, status)

}
