package email

import (
	"fmt"

	"github.com/google/uuid"

	"github.com/cmsgov/easi-app/pkg/apperrors"
)

func (s *SESTestSuite) TestSendSystemIntakeEmail() {
	sender := mockSender{}

	tester := "Test McTester"
	intakeID, _ := uuid.Parse("1abc2671-c5df-45a0-b2be-c30899b473bf")

	s.Run("successful call has the right content", func() {
		client, err := NewClient(s.config, &sender)
		s.NoError(err)

		expectedEmail := "<p>Hello,</p>\n\n" +
			"<p>\n  You have a new intake request pending in EASi.\n  " +
			"Please get back to the requester as soon as possible with your response.\n</p>\n\n" +
			fmt.Sprintf(
				"<a href=\"%s://%s/system/%s/grt-review\" >",
				s.config.URLScheme,
				s.config.URLHost,
				intakeID.String(),
			) +
			"Open intake request in EASi</a>\n"
		err = client.SendSystemIntakeSubmissionEmail(tester, intakeID)

		s.NoError(err)
		s.Equal(s.config.GRTEmail, sender.toAddress)
		s.Equal(fmt.Sprintf("New intake request: %s", tester), sender.subject)
		s.Equal(expectedEmail, sender.body)
	})

	s.Run("if the template is nil, we get the error from it", func() {
		client, err := NewClient(s.config, &sender)
		s.NoError(err)
		client.templates = templates{}

		err = client.SendSystemIntakeSubmissionEmail(tester, intakeID)

		s.Error(err)
		s.IsType(err, &apperrors.NotificationError{})
		e := err.(*apperrors.NotificationError)
		s.Equal(apperrors.DestinationEmail, e.Destination)
		s.Equal("system intake submission template is nil", e.Err.Error())
	})

	s.Run("if the template fails to execute, we get the error from it", func() {
		client, err := NewClient(s.config, &sender)
		s.NoError(err)
		client.templates.systemIntakeSubmissionTemplate = mockFailedTemplateCaller{}

		err = client.SendSystemIntakeSubmissionEmail(tester, intakeID)

		s.Error(err)
		s.IsType(err, &apperrors.NotificationError{})
		e := err.(*apperrors.NotificationError)
		s.Equal(apperrors.DestinationEmail, e.Destination)
		s.Equal("template caller had an error", e.Err.Error())
	})

	s.Run("if the sender fails, we get the error from it", func() {
		sender := mockFailedSender{}

		client, err := NewClient(s.config, &sender)
		s.NoError(err)

		err = client.SendSystemIntakeSubmissionEmail(tester, intakeID)

		s.Error(err)
		s.IsType(err, &apperrors.NotificationError{})
		e := err.(*apperrors.NotificationError)
		s.Equal(apperrors.DestinationEmail, e.Destination)
		s.Equal("sender had an error", e.Err.Error())
	})
}
