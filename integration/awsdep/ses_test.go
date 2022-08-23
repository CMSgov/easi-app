package awsdep

import (
	"context"
	"testing"

	"github.com/stretchr/testify/suite"
	"go.uber.org/zap"

	"github.com/cmsgov/easi-app/pkg/appconfig"
	"github.com/cmsgov/easi-app/pkg/appses"
	"github.com/cmsgov/easi-app/pkg/models"
	"github.com/cmsgov/easi-app/pkg/testhelpers"
)

type SESTestSuite struct {
	suite.Suite
	logger *zap.Logger
	sender appses.Sender
}

func TestSESTestSuite(t *testing.T) {
	logger := zap.NewNop()
	config := testhelpers.NewConfig()

	sourceARN := config.GetString(appconfig.AWSSESSourceARNKey)
	source := config.GetString(appconfig.AWSSESSourceKey)
	sessionToken := config.GetString("AWS_SESSION_TOKEN")

	if sourceARN == "" {
		t.Fatal(appconfig.AWSSESSourceARNKey + " is not set")
	}
	if source == "" {
		t.Fatal(appconfig.AWSSESSourceKey + " is not set")
	}
	if sessionToken == "" {
		t.Fatal("AWS_SESSION_TOKEN" + " is not set")
	}

	sesConfig := appses.Config{
		SourceARN: sourceARN,
		Source:    source,
	}

	sender := appses.NewSender(sesConfig)

	sesTestSuite := &SESTestSuite{
		Suite:  suite.Suite{},
		logger: logger,
		sender: sender,
	}

	suite.Run(t, sesTestSuite)
}

func (s SESTestSuite) TestSend() {
	s.Run("Sends successfully", func() {
		err := s.sender.Send(
			context.Background(),
			models.NewEmailAddress("success@simulator.amazonses.com"),
			nil,
			"Test Subject",
			"Test Body",
		)

		s.NoError(err)
	})
}
