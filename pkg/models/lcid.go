package models

import (
	"time"

	"github.com/guregu/null"
)

// LCID represents a Lifecycle ID entity, including both the ID itself and additional data such as the expiration date and scope
type LCID struct {
	BaseStruct
	LifecycleID       string      `json:"lifecycleId" db:"lcid"`
	ExpiresAt         *time.Time  `json:"expiresAt" db:"lcid_expires_at"`
	Scope             null.String `json:"scope" db:"lcid_scope"`
	CostBaseline      null.String `json:"costBaseline" db:"lcid_scope"`
	ExpirationAlertTS *time.Time  `json:"lcidExpirationAlertTS" db:"lcid_expiration_alert_ts"`
}
