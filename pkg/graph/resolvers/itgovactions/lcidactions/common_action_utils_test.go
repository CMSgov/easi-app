package lcidactions

import (
	"testing"
	"time"

	"github.com/guregu/null"
	"github.com/stretchr/testify/assert"

	"github.com/cmsgov/easi-app/pkg/models"
)

func TestGetBaseLCIDAction(t *testing.T) {

	lcid := null.StringFrom("123456")
	oldCostBaseline := null.StringFrom("$3")
	newCostBaseline := "$2"
	expirationDate := time.Now() //same for both
	nextSteps := models.HTML("<strong> My Next Steps! </strong>")
	newScope := models.HTML("Scope Scope Scope")
	userInfo := models.UserInfo{
		CommonName: "tester",
		Email:      "test@email.email",
		EuaUserID:  "TEST",
	}
	intake := models.SystemIntake{
		LifecycleID:           lcid,
		LifecycleCostBaseline: oldCostBaseline,
		LifecycleExpiresAt:    &expirationDate,
	}
	action := getBaseLCIDAction(intake, &expirationDate, &nextSteps, &newScope, &newCostBaseline, userInfo)
	assert.EqualValues(t, oldCostBaseline, action.LCIDExpirationChangePreviousCostBaseline)
	assert.EqualValues(t, null.StringFrom(newCostBaseline), action.LCIDExpirationChangeNewCostBaseline)

	assert.EqualValues(t, &expirationDate, action.LCIDExpirationChangeNewDate)
	assert.EqualValues(t, &expirationDate, action.LCIDExpirationChangePreviousDate)

	assert.EqualValues(t, &nextSteps, action.LCIDExpirationChangeNewNextSteps)
	assert.EqualValues(t, &newScope, action.LCIDExpirationChangeNewScope)
}