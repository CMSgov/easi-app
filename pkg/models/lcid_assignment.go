package models

import (
	"time"

	"github.com/guregu/null"
)

// LCIDAssignment represents a Lifecycle ID entity, including both the ID itself and additional data such as the expiration date and scope
type LCIDAssignment struct {
	BaseStruct
	LifecycleID       string      `json:"lcid" db:"lcid"`
	ExpiresAt         *time.Time  `json:"expiresAt" db:"expires_at"`
	Scope             null.String `json:"scope" db:"scope"`
	CostBaseline      null.String `json:"costBaseline" db:"cost_baseline"`
	ExpirationAlertTS *time.Time  `json:"lcidExpirationAlertTS" db:"lcid_expiration_alert_ts"`
}
