package storage_test

import (
	"context"
	"fmt"
	"strings"
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq" // required for postgres driver in sqlx
	"github.com/stretchr/testify/suite"
	"go.uber.org/zap"

	"github.com/cmsgov/easi-app/pkg/appcontext"
	"github.com/cmsgov/easi-app/pkg/authentication"
	"github.com/cmsgov/easi-app/pkg/models"
	"github.com/cmsgov/easi-app/pkg/storage"
	"github.com/cmsgov/easi-app/pkg/testhelpers"
)

type StoreTestSuite struct {
	suite.Suite
	db        *sqlx.DB
	logger    *zap.Logger
	store     *storage.Store
	Principal *authentication.EUAPrincipal
}

// EqualTime uses time.Time's Equal() to check for equality
// and wraps failures with useful error messages.
func (s *StoreTestSuite) EqualTime(expected, actual time.Time) {
	if !actual.Equal(expected) {
		s.Failf("times were not equal", "expected %v, got %v", expected, actual)
	}
}

func (s *StoreTestSuite) emptyDatabaseTables() error {
	statement := `
	DELETE FROM accessibility_request_status_records;
	DELETE FROM accessibility_request_notes;
	DELETE FROM accessibility_request_documents;
	DELETE FROM test_dates;
	DELETE FROM accessibility_requests;
	DELETE FROM notes;
	DELETE FROM actions;
	DELETE FROM estimated_lifecycle_costs;
	DELETE FROM business_cases;
	DELETE FROM governance_request_feedback;
	DELETE FROM system_intake_contacts;
	DELETE FROM system_intake_funding_sources;
	DELETE FROM system_intakes;
`
	_, err := s.db.Exec(statement)
	return err
}

func TestStoreTestSuite(t *testing.T) {
	testHelper := testhelpers.NewTestHelper()
	princ := createTestPrincipal(testHelper.Store(), "ANON")

	logger, ok := appcontext.Logger(testHelper.Context())

	if !ok {
		t.Fatal("failed to acquire logger for storage test")
	}

	s := testHelper.Store()
	storeTestSuite := &StoreTestSuite{
		Suite:     suite.Suite{},
		db:        testHelper.Store(),
		logger:    logger,
		store:     testHelper.Store(),
		Principal: princ,
	}

	suite.Run(t, storeTestSuite)
}

// utility function for testing TRB-related methods
func createTRBRequest(ctx context.Context, s *StoreTestSuite, createdBy string) uuid.UUID {
	//Note: this  only creates the TRB request, not the form or attendee. The business logic is called in the resolver, not the store method
	// resolvers.CreateTRBRequest(ctx,models.TRBTNeedHelp, s.store)

	trbRequest := models.NewTRBRequest(createdBy)
	trbRequest.Type = models.TRBTNeedHelp
	trbRequest.State = models.TRBRequestStateOpen
	createdRequest, err := s.store.CreateTRBRequest(ctx, s.store, trbRequest)
	s.NoError(err)

	return createdRequest.ID
}

// createTestPrincipal creates a test principal in the database. It bypasses a call to OKTA, and just creates mock data
func createTestPrincipal(store *storage.Store, userName string) *authentication.EUAPrincipal {

	tAccount := authentication.UserAccount{
		Username:    userName,
		CommonName:  userName + "Doe",
		Locale:      "en_US",
		Email:       userName + "@local.cms.gov",
		GivenName:   userName,
		FamilyName:  "Doe",
		ZoneInfo:    "America/Los_Angeles",
		HasLoggedIn: true,
	}

	userAccount, _ := store.UserAccountCreate(store, &tAccount) //swallow error
	princ := &authentication.EUAPrincipal{
		EUAID:            userName,
		JobCodeEASi:      true,
		JobCodeGRT:       true,
		JobCode508User:   true,
		JobCode508Tester: true,
		UserAccount:      userAccount,
	}
	return princ

}

// formatParamTableJSON returns a string in this format `[{"system_intake_id":"84f41936-9d81-4c06-aa8e-df8010bfec72"}]`
func formatParamTableJSON(key string, ids []uuid.UUID) string {
	var out []string

	for _, id := range ids {
		out = append(out, fmt.Sprintf(`{"%[1]s":"%[2]s"}`, key, id.String()))
	}

	return fmt.Sprintf(`[%s]`, strings.Join(out, ","))
}
