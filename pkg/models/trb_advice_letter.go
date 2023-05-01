package models

import (
	"time"

	"github.com/google/uuid"
)

// TRBAdviceLetterStatus is an enumeration of the possible statuses of a TRBAdviceLetter
type TRBAdviceLetterStatus string

// These are the possible statuses for a TRB advice letter
const (
	TRBAdviceLetterStatusCannotStartYet TRBAdviceLetterStatus = "CANNOT_START_YET"
	TRBAdviceLetterStatusReadyToStart   TRBAdviceLetterStatus = "READY_TO_START"
	TRBAdviceLetterStatusInProgress     TRBAdviceLetterStatus = "IN_PROGRESS"
	TRBAdviceLetterStatusReadyForReview TRBAdviceLetterStatus = "READY_FOR_REVIEW"
	TRBAdviceLetterStatusCompleted      TRBAdviceLetterStatus = "COMPLETED"
)

// TRBAdviceLetter represents the data for a TRB advice letter
type TRBAdviceLetter struct {
	BaseStruct
	TRBRequestID          uuid.UUID             `json:"trbRequestId" db:"trb_request_id"`
	Status                TRBAdviceLetterStatus `json:"status" db:"status"`
	MeetingSummary        *string               `json:"meetingSummary" db:"meeting_summary"`
	NextSteps             *string               `json:"nextSteps" db:"next_steps"`
	IsFollowupRecommended *bool                 `json:"isFollowupRecommended" db:"is_followup_recommended"`
	DateSent              *time.Time            `json:"dateSent" db:"date_sent"`

	// not necessarily a firm date; can be something like "In 6 months or when development is complete"
	FollowupPoint *string `json:"followupPoint" db:"followup_point"`
}
