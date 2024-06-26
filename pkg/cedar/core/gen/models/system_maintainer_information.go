// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// SystemMaintainerInformation system maintainer information
//
// swagger:model SystemMaintainerInformation
type SystemMaintainerInformation struct {

	// ad hoc agile deployment frequency
	// Enum: [Annually Semi-Annually Quarterly Monthly Every Two Weeks Weekly Twice a Week Daily Hourly Ad Hoc/As Needed Not Applicable Other]
	AdHocAgileDeploymentFrequency string `json:"adHocAgileDeploymentFrequency,omitempty"`

	// agile used
	// Example: true
	AgileUsed bool `json:"agileUsed,omitempty"`

	// authoritative datasource
	AuthoritativeDatasource string `json:"authoritativeDatasource,omitempty"`

	// business artifacts on demand
	// Example: true
	BusinessArtifactsOnDemand bool `json:"businessArtifactsOnDemand,omitempty"`

	// data at rest encryption key management
	// Enum: [We do not encrypt data at rest. We perform ad hoc management of encryption keys. We have a process for managing encryption keys. We have a process for managing encryption keys and it is automated.]
	DataAtRestEncryptionKeyManagement string `json:"dataAtRestEncryptionKeyManagement,omitempty"`

	// deployment frequency
	// Example: Monthly
	// Enum: [Annually Semi-Annually Quarterly Monthly Every Two Weeks Weekly Twice a Week Daily Hourly Ad Hoc/As Needed Not Applicable Other]
	DeploymentFrequency string `json:"deploymentFrequency,omitempty"`

	// dev completion percent
	// Example: 10-14%
	DevCompletionPercent string `json:"devCompletionPercent,omitempty"`

	// dev work description
	// Example: The type of development work underway...
	DevWorkDescription string `json:"devWorkDescription,omitempty"`

	// ecap participation
	// Example: true
	EcapParticipation bool `json:"ecapParticipation,omitempty"`

	// frontend access type
	// Example: IPv4 and IPv6
	// Enum: [IPv4 Only IPv4 and IPv6 IPv6 Only]
	FrontendAccessType string `json:"frontendAccessType,omitempty"`

	// hard coded Ip address
	// Example: true
	HardCodedIPAddress bool `json:"hardCodedIpAddress,omitempty"`

	// ip6 enabled asset percent
	// Example: Between 20% and 49%
	// Enum: [Less than 20% Between 20% and 49% Between 50% and 79% 80% or above]
	Ip6EnabledAssetPercent string `json:"ip6EnabledAssetPercent,omitempty"`

	// ip6 transition plan
	// Example: Yes, transition to IPv6
	// Enum: [Yes transition to IPv6 No decommission/replace before 2026]
	Ip6TransitionPlan string `json:"ip6TransitionPlan,omitempty"`

	// ip enabled asset count
	// Example: 1
	IPEnabledAssetCount int32 `json:"ipEnabledAssetCount,omitempty"`

	// legal hold case name
	LegalHoldCaseName string `json:"legalHoldCaseName,omitempty"`

	// locally stored user information
	LocallyStoredUserInformation bool `json:"locallyStoredUserInformation,omitempty"`

	// major refresh date
	// Format: date
	MajorRefreshDate strfmt.Date `json:"majorRefreshDate,omitempty"`

	// multifactor authentication method
	// Example: \"\
	MultifactorAuthenticationMethod []string `json:"multifactorAuthenticationMethod"`

	// multifactor authentication method other
	MultifactorAuthenticationMethodOther string `json:"multifactorAuthenticationMethodOther,omitempty"`

	// net accessibility
	// Example: Accessible to a CMS-internal network only
	// Enum: [Accessible to the Public Internet (non-restricted access) Accessible to a CMS-internal network only Accessible to both public internet and to CMS-internal network]
	NetAccessibility string `json:"netAccessibility,omitempty"`

	// network traffic encryption key management
	// Enum: [We do not encrypt any network traffic. We perform ad hoc management of encryption keys. We have a process for managing encryption keys. We have a process for managing encryption keys and it is automated.]
	NetworkTrafficEncryptionKeyManagement string `json:"networkTrafficEncryptionKeyManagement,omitempty"`

	// no major refresh
	NoMajorRefresh bool `json:"noMajorRefresh,omitempty"`

	// no persistent records flag
	NoPersistentRecordsFlag bool `json:"noPersistentRecordsFlag,omitempty"`

	// no planned major refresh
	NoPlannedMajorRefresh bool `json:"noPlannedMajorRefresh,omitempty"`

	// om documentation on demand
	// Example: true
	OmDocumentationOnDemand bool `json:"omDocumentationOnDemand,omitempty"`

	// plans to retire replace
	// Example: Yes - Retire and Replace
	// Enum: [No Yes - Retire and Replace Yes - Retire but NOT Replace]
	PlansToRetireReplace string `json:"plansToRetireReplace,omitempty"`

	// quarter to retire replace
	// Example: 3
	QuarterToRetireReplace string `json:"quarterToRetireReplace,omitempty"`

	// records management bucket
	RecordsManagementBucket []string `json:"recordsManagementBucket"`

	// records management disposal location
	RecordsManagementDisposalLocation string `json:"recordsManagementDisposalLocation,omitempty"`

	// records management disposal plan
	RecordsManagementDisposalPlan string `json:"recordsManagementDisposalPlan,omitempty"`

	// records under legal hold
	RecordsUnderLegalHold bool `json:"recordsUnderLegalHold,omitempty"`

	// source code on demand
	// Example: true
	SourceCodeOnDemand bool `json:"sourceCodeOnDemand,omitempty"`

	// system customization
	// Example: Less Than 20% Customization
	// Enum: [COTS - Less than 20% custom coding GOTS – less than 20% custom coding Mixed – Uses COTS or GOTS and has more than 20% custom coding Custom developed]
	SystemCustomization string `json:"systemCustomization,omitempty"`

	// system data location
	SystemDataLocation []string `json:"systemDataLocation"`

	// system data location notes
	SystemDataLocationNotes string `json:"systemDataLocationNotes,omitempty"`

	// system design on demand
	// Example: true
	SystemDesignOnDemand bool `json:"systemDesignOnDemand,omitempty"`

	// system production date
	// Format: date
	SystemProductionDate strfmt.Date `json:"systemProductionDate,omitempty"`

	// system requirements on demand
	// Example: true
	SystemRequirementsOnDemand bool `json:"systemRequirementsOnDemand,omitempty"`

	// test plan on demand
	// Example: true
	TestPlanOnDemand bool `json:"testPlanOnDemand,omitempty"`

	// test reports on demand
	// Example: true
	TestReportsOnDemand bool `json:"testReportsOnDemand,omitempty"`

	// test scripts on demand
	// Example: true
	TestScriptsOnDemand bool `json:"testScriptsOnDemand,omitempty"`

	// year to retire replace
	// Example: 2023
	YearToRetireReplace string `json:"yearToRetireReplace,omitempty"`
}

// Validate validates this system maintainer information
func (m *SystemMaintainerInformation) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAdHocAgileDeploymentFrequency(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateDataAtRestEncryptionKeyManagement(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateDeploymentFrequency(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateFrontendAccessType(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateIp6EnabledAssetPercent(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateIp6TransitionPlan(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateMajorRefreshDate(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateMultifactorAuthenticationMethod(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateNetAccessibility(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateNetworkTrafficEncryptionKeyManagement(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validatePlansToRetireReplace(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateRecordsManagementBucket(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSystemCustomization(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSystemDataLocation(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSystemProductionDate(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

var systemMaintainerInformationTypeAdHocAgileDeploymentFrequencyPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["Annually","Semi-Annually","Quarterly","Monthly","Every Two Weeks","Weekly","Twice a Week","Daily","Hourly","Ad Hoc/As Needed","Not Applicable","Other"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationTypeAdHocAgileDeploymentFrequencyPropEnum = append(systemMaintainerInformationTypeAdHocAgileDeploymentFrequencyPropEnum, v)
	}
}

const (

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyAnnually captures enum value "Annually"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyAnnually string = "Annually"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencySemiDashAnnually captures enum value "Semi-Annually"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencySemiDashAnnually string = "Semi-Annually"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyQuarterly captures enum value "Quarterly"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyQuarterly string = "Quarterly"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyMonthly captures enum value "Monthly"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyMonthly string = "Monthly"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyEveryTwoWeeks captures enum value "Every Two Weeks"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyEveryTwoWeeks string = "Every Two Weeks"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyWeekly captures enum value "Weekly"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyWeekly string = "Weekly"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyTwiceaWeek captures enum value "Twice a Week"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyTwiceaWeek string = "Twice a Week"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyDaily captures enum value "Daily"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyDaily string = "Daily"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyHourly captures enum value "Hourly"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyHourly string = "Hourly"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyAdHocAsNeeded captures enum value "Ad Hoc/As Needed"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyAdHocAsNeeded string = "Ad Hoc/As Needed"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyNotApplicable captures enum value "Not Applicable"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyNotApplicable string = "Not Applicable"

	// SystemMaintainerInformationAdHocAgileDeploymentFrequencyOther captures enum value "Other"
	SystemMaintainerInformationAdHocAgileDeploymentFrequencyOther string = "Other"
)

// prop value enum
func (m *SystemMaintainerInformation) validateAdHocAgileDeploymentFrequencyEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationTypeAdHocAgileDeploymentFrequencyPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateAdHocAgileDeploymentFrequency(formats strfmt.Registry) error {
	if swag.IsZero(m.AdHocAgileDeploymentFrequency) { // not required
		return nil
	}

	// value enum
	if err := m.validateAdHocAgileDeploymentFrequencyEnum("adHocAgileDeploymentFrequency", "body", m.AdHocAgileDeploymentFrequency); err != nil {
		return err
	}

	return nil
}

var systemMaintainerInformationTypeDataAtRestEncryptionKeyManagementPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["We do not encrypt data at rest.","We perform ad hoc management of encryption keys.","We have a process for managing encryption keys.","We have a process for managing encryption keys and it is automated."]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationTypeDataAtRestEncryptionKeyManagementPropEnum = append(systemMaintainerInformationTypeDataAtRestEncryptionKeyManagementPropEnum, v)
	}
}

const (

	// SystemMaintainerInformationDataAtRestEncryptionKeyManagementWeDoNotEncryptDataAtRestDot captures enum value "We do not encrypt data at rest."
	SystemMaintainerInformationDataAtRestEncryptionKeyManagementWeDoNotEncryptDataAtRestDot string = "We do not encrypt data at rest."

	// SystemMaintainerInformationDataAtRestEncryptionKeyManagementWePerformAdHocManagementOfEncryptionKeysDot captures enum value "We perform ad hoc management of encryption keys."
	SystemMaintainerInformationDataAtRestEncryptionKeyManagementWePerformAdHocManagementOfEncryptionKeysDot string = "We perform ad hoc management of encryption keys."

	// SystemMaintainerInformationDataAtRestEncryptionKeyManagementWeHaveaProcessForManagingEncryptionKeysDot captures enum value "We have a process for managing encryption keys."
	SystemMaintainerInformationDataAtRestEncryptionKeyManagementWeHaveaProcessForManagingEncryptionKeysDot string = "We have a process for managing encryption keys."

	// SystemMaintainerInformationDataAtRestEncryptionKeyManagementWeHaveaProcessForManagingEncryptionKeysAndItIsAutomatedDot captures enum value "We have a process for managing encryption keys and it is automated."
	SystemMaintainerInformationDataAtRestEncryptionKeyManagementWeHaveaProcessForManagingEncryptionKeysAndItIsAutomatedDot string = "We have a process for managing encryption keys and it is automated."
)

// prop value enum
func (m *SystemMaintainerInformation) validateDataAtRestEncryptionKeyManagementEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationTypeDataAtRestEncryptionKeyManagementPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateDataAtRestEncryptionKeyManagement(formats strfmt.Registry) error {
	if swag.IsZero(m.DataAtRestEncryptionKeyManagement) { // not required
		return nil
	}

	// value enum
	if err := m.validateDataAtRestEncryptionKeyManagementEnum("dataAtRestEncryptionKeyManagement", "body", m.DataAtRestEncryptionKeyManagement); err != nil {
		return err
	}

	return nil
}

var systemMaintainerInformationTypeDeploymentFrequencyPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["Annually","Semi-Annually","Quarterly","Monthly","Every Two Weeks","Weekly","Twice a Week","Daily","Hourly","Ad Hoc/As Needed","Not Applicable","Other"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationTypeDeploymentFrequencyPropEnum = append(systemMaintainerInformationTypeDeploymentFrequencyPropEnum, v)
	}
}

const (

	// SystemMaintainerInformationDeploymentFrequencyAnnually captures enum value "Annually"
	SystemMaintainerInformationDeploymentFrequencyAnnually string = "Annually"

	// SystemMaintainerInformationDeploymentFrequencySemiDashAnnually captures enum value "Semi-Annually"
	SystemMaintainerInformationDeploymentFrequencySemiDashAnnually string = "Semi-Annually"

	// SystemMaintainerInformationDeploymentFrequencyQuarterly captures enum value "Quarterly"
	SystemMaintainerInformationDeploymentFrequencyQuarterly string = "Quarterly"

	// SystemMaintainerInformationDeploymentFrequencyMonthly captures enum value "Monthly"
	SystemMaintainerInformationDeploymentFrequencyMonthly string = "Monthly"

	// SystemMaintainerInformationDeploymentFrequencyEveryTwoWeeks captures enum value "Every Two Weeks"
	SystemMaintainerInformationDeploymentFrequencyEveryTwoWeeks string = "Every Two Weeks"

	// SystemMaintainerInformationDeploymentFrequencyWeekly captures enum value "Weekly"
	SystemMaintainerInformationDeploymentFrequencyWeekly string = "Weekly"

	// SystemMaintainerInformationDeploymentFrequencyTwiceaWeek captures enum value "Twice a Week"
	SystemMaintainerInformationDeploymentFrequencyTwiceaWeek string = "Twice a Week"

	// SystemMaintainerInformationDeploymentFrequencyDaily captures enum value "Daily"
	SystemMaintainerInformationDeploymentFrequencyDaily string = "Daily"

	// SystemMaintainerInformationDeploymentFrequencyHourly captures enum value "Hourly"
	SystemMaintainerInformationDeploymentFrequencyHourly string = "Hourly"

	// SystemMaintainerInformationDeploymentFrequencyAdHocAsNeeded captures enum value "Ad Hoc/As Needed"
	SystemMaintainerInformationDeploymentFrequencyAdHocAsNeeded string = "Ad Hoc/As Needed"

	// SystemMaintainerInformationDeploymentFrequencyNotApplicable captures enum value "Not Applicable"
	SystemMaintainerInformationDeploymentFrequencyNotApplicable string = "Not Applicable"

	// SystemMaintainerInformationDeploymentFrequencyOther captures enum value "Other"
	SystemMaintainerInformationDeploymentFrequencyOther string = "Other"
)

// prop value enum
func (m *SystemMaintainerInformation) validateDeploymentFrequencyEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationTypeDeploymentFrequencyPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateDeploymentFrequency(formats strfmt.Registry) error {
	if swag.IsZero(m.DeploymentFrequency) { // not required
		return nil
	}

	// value enum
	if err := m.validateDeploymentFrequencyEnum("deploymentFrequency", "body", m.DeploymentFrequency); err != nil {
		return err
	}

	return nil
}

var systemMaintainerInformationTypeFrontendAccessTypePropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["IPv4 Only","IPv4 and IPv6","IPv6 Only"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationTypeFrontendAccessTypePropEnum = append(systemMaintainerInformationTypeFrontendAccessTypePropEnum, v)
	}
}

const (

	// SystemMaintainerInformationFrontendAccessTypeIPV4Only captures enum value "IPv4 Only"
	SystemMaintainerInformationFrontendAccessTypeIPV4Only string = "IPv4 Only"

	// SystemMaintainerInformationFrontendAccessTypeIPV4AndIPV6 captures enum value "IPv4 and IPv6"
	SystemMaintainerInformationFrontendAccessTypeIPV4AndIPV6 string = "IPv4 and IPv6"

	// SystemMaintainerInformationFrontendAccessTypeIPV6Only captures enum value "IPv6 Only"
	SystemMaintainerInformationFrontendAccessTypeIPV6Only string = "IPv6 Only"
)

// prop value enum
func (m *SystemMaintainerInformation) validateFrontendAccessTypeEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationTypeFrontendAccessTypePropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateFrontendAccessType(formats strfmt.Registry) error {
	if swag.IsZero(m.FrontendAccessType) { // not required
		return nil
	}

	// value enum
	if err := m.validateFrontendAccessTypeEnum("frontendAccessType", "body", m.FrontendAccessType); err != nil {
		return err
	}

	return nil
}

var systemMaintainerInformationTypeIp6EnabledAssetPercentPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["Less than 20%","Between 20% and 49%","Between 50% and 79%","80% or above"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationTypeIp6EnabledAssetPercentPropEnum = append(systemMaintainerInformationTypeIp6EnabledAssetPercentPropEnum, v)
	}
}

const (

	// SystemMaintainerInformationIp6EnabledAssetPercentLessThan20 captures enum value "Less than 20%"
	SystemMaintainerInformationIp6EnabledAssetPercentLessThan20 string = "Less than 20%"

	// SystemMaintainerInformationIp6EnabledAssetPercentBetween20And49 captures enum value "Between 20% and 49%"
	SystemMaintainerInformationIp6EnabledAssetPercentBetween20And49 string = "Between 20% and 49%"

	// SystemMaintainerInformationIp6EnabledAssetPercentBetween50And79 captures enum value "Between 50% and 79%"
	SystemMaintainerInformationIp6EnabledAssetPercentBetween50And79 string = "Between 50% and 79%"

	// SystemMaintainerInformationIp6EnabledAssetPercentNr80OrAbove captures enum value "80% or above"
	SystemMaintainerInformationIp6EnabledAssetPercentNr80OrAbove string = "80% or above"
)

// prop value enum
func (m *SystemMaintainerInformation) validateIp6EnabledAssetPercentEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationTypeIp6EnabledAssetPercentPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateIp6EnabledAssetPercent(formats strfmt.Registry) error {
	if swag.IsZero(m.Ip6EnabledAssetPercent) { // not required
		return nil
	}

	// value enum
	if err := m.validateIp6EnabledAssetPercentEnum("ip6EnabledAssetPercent", "body", m.Ip6EnabledAssetPercent); err != nil {
		return err
	}

	return nil
}

var systemMaintainerInformationTypeIp6TransitionPlanPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["Yes","transition to IPv6","No","decommission/replace before 2026"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationTypeIp6TransitionPlanPropEnum = append(systemMaintainerInformationTypeIp6TransitionPlanPropEnum, v)
	}
}

const (

	// SystemMaintainerInformationIp6TransitionPlanYes captures enum value "Yes"
	SystemMaintainerInformationIp6TransitionPlanYes string = "Yes"

	// SystemMaintainerInformationIp6TransitionPlanTransitionToIPV6 captures enum value "transition to IPv6"
	SystemMaintainerInformationIp6TransitionPlanTransitionToIPV6 string = "transition to IPv6"

	// SystemMaintainerInformationIp6TransitionPlanNo captures enum value "No"
	SystemMaintainerInformationIp6TransitionPlanNo string = "No"

	// SystemMaintainerInformationIp6TransitionPlanDecommissionReplaceBefore2026 captures enum value "decommission/replace before 2026"
	SystemMaintainerInformationIp6TransitionPlanDecommissionReplaceBefore2026 string = "decommission/replace before 2026"
)

// prop value enum
func (m *SystemMaintainerInformation) validateIp6TransitionPlanEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationTypeIp6TransitionPlanPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateIp6TransitionPlan(formats strfmt.Registry) error {
	if swag.IsZero(m.Ip6TransitionPlan) { // not required
		return nil
	}

	// value enum
	if err := m.validateIp6TransitionPlanEnum("ip6TransitionPlan", "body", m.Ip6TransitionPlan); err != nil {
		return err
	}

	return nil
}

func (m *SystemMaintainerInformation) validateMajorRefreshDate(formats strfmt.Registry) error {
	if swag.IsZero(m.MajorRefreshDate) { // not required
		return nil
	}

	if err := validate.FormatOf("majorRefreshDate", "body", "date", m.MajorRefreshDate.String(), formats); err != nil {
		return err
	}

	return nil
}

var systemMaintainerInformationMultifactorAuthenticationMethodItemsEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["One Time Password sent via Email","One Time Password sent via SMS","One Time Password or Push from an authenticator app e.g. Google Authenticator DUO","One time Password from a hardware token e.g. RSA SecurID","FIDO U2F (e.g. YubiKey as a second factor)","PIV/certificate","FIDO2/WebAuthn (passwordless authentication includes Windows Hello)","None","Other"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationMultifactorAuthenticationMethodItemsEnum = append(systemMaintainerInformationMultifactorAuthenticationMethodItemsEnum, v)
	}
}

func (m *SystemMaintainerInformation) validateMultifactorAuthenticationMethodItemsEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationMultifactorAuthenticationMethodItemsEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateMultifactorAuthenticationMethod(formats strfmt.Registry) error {
	if swag.IsZero(m.MultifactorAuthenticationMethod) { // not required
		return nil
	}

	for i := 0; i < len(m.MultifactorAuthenticationMethod); i++ {

		// value enum
		if err := m.validateMultifactorAuthenticationMethodItemsEnum("multifactorAuthenticationMethod"+"."+strconv.Itoa(i), "body", m.MultifactorAuthenticationMethod[i]); err != nil {
			return err
		}

	}

	return nil
}

var systemMaintainerInformationTypeNetAccessibilityPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["Accessible to the Public Internet (non-restricted access)","Accessible to a CMS-internal network only","Accessible to both public internet and to CMS-internal network"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationTypeNetAccessibilityPropEnum = append(systemMaintainerInformationTypeNetAccessibilityPropEnum, v)
	}
}

const (

	// SystemMaintainerInformationNetAccessibilityAccessibleToThePublicInternetNonDashRestrictedAccess captures enum value "Accessible to the Public Internet (non-restricted access)"
	SystemMaintainerInformationNetAccessibilityAccessibleToThePublicInternetNonDashRestrictedAccess string = "Accessible to the Public Internet (non-restricted access)"

	// SystemMaintainerInformationNetAccessibilityAccessibleToaCMSDashInternalNetworkOnly captures enum value "Accessible to a CMS-internal network only"
	SystemMaintainerInformationNetAccessibilityAccessibleToaCMSDashInternalNetworkOnly string = "Accessible to a CMS-internal network only"

	// SystemMaintainerInformationNetAccessibilityAccessibleToBothPublicInternetAndToCMSDashInternalNetwork captures enum value "Accessible to both public internet and to CMS-internal network"
	SystemMaintainerInformationNetAccessibilityAccessibleToBothPublicInternetAndToCMSDashInternalNetwork string = "Accessible to both public internet and to CMS-internal network"
)

// prop value enum
func (m *SystemMaintainerInformation) validateNetAccessibilityEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationTypeNetAccessibilityPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateNetAccessibility(formats strfmt.Registry) error {
	if swag.IsZero(m.NetAccessibility) { // not required
		return nil
	}

	// value enum
	if err := m.validateNetAccessibilityEnum("netAccessibility", "body", m.NetAccessibility); err != nil {
		return err
	}

	return nil
}

var systemMaintainerInformationTypeNetworkTrafficEncryptionKeyManagementPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["We do not encrypt any network traffic.","We perform ad hoc management of encryption keys.","We have a process for managing encryption keys.","We have a process for managing encryption keys and it is automated."]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationTypeNetworkTrafficEncryptionKeyManagementPropEnum = append(systemMaintainerInformationTypeNetworkTrafficEncryptionKeyManagementPropEnum, v)
	}
}

const (

	// SystemMaintainerInformationNetworkTrafficEncryptionKeyManagementWeDoNotEncryptAnyNetworkTrafficDot captures enum value "We do not encrypt any network traffic."
	SystemMaintainerInformationNetworkTrafficEncryptionKeyManagementWeDoNotEncryptAnyNetworkTrafficDot string = "We do not encrypt any network traffic."

	// SystemMaintainerInformationNetworkTrafficEncryptionKeyManagementWePerformAdHocManagementOfEncryptionKeysDot captures enum value "We perform ad hoc management of encryption keys."
	SystemMaintainerInformationNetworkTrafficEncryptionKeyManagementWePerformAdHocManagementOfEncryptionKeysDot string = "We perform ad hoc management of encryption keys."

	// SystemMaintainerInformationNetworkTrafficEncryptionKeyManagementWeHaveaProcessForManagingEncryptionKeysDot captures enum value "We have a process for managing encryption keys."
	SystemMaintainerInformationNetworkTrafficEncryptionKeyManagementWeHaveaProcessForManagingEncryptionKeysDot string = "We have a process for managing encryption keys."

	// SystemMaintainerInformationNetworkTrafficEncryptionKeyManagementWeHaveaProcessForManagingEncryptionKeysAndItIsAutomatedDot captures enum value "We have a process for managing encryption keys and it is automated."
	SystemMaintainerInformationNetworkTrafficEncryptionKeyManagementWeHaveaProcessForManagingEncryptionKeysAndItIsAutomatedDot string = "We have a process for managing encryption keys and it is automated."
)

// prop value enum
func (m *SystemMaintainerInformation) validateNetworkTrafficEncryptionKeyManagementEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationTypeNetworkTrafficEncryptionKeyManagementPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateNetworkTrafficEncryptionKeyManagement(formats strfmt.Registry) error {
	if swag.IsZero(m.NetworkTrafficEncryptionKeyManagement) { // not required
		return nil
	}

	// value enum
	if err := m.validateNetworkTrafficEncryptionKeyManagementEnum("networkTrafficEncryptionKeyManagement", "body", m.NetworkTrafficEncryptionKeyManagement); err != nil {
		return err
	}

	return nil
}

var systemMaintainerInformationTypePlansToRetireReplacePropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["No","Yes - Retire and Replace","Yes - Retire but NOT Replace"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationTypePlansToRetireReplacePropEnum = append(systemMaintainerInformationTypePlansToRetireReplacePropEnum, v)
	}
}

const (

	// SystemMaintainerInformationPlansToRetireReplaceNo captures enum value "No"
	SystemMaintainerInformationPlansToRetireReplaceNo string = "No"

	// SystemMaintainerInformationPlansToRetireReplaceYesDashRetireAndReplace captures enum value "Yes - Retire and Replace"
	SystemMaintainerInformationPlansToRetireReplaceYesDashRetireAndReplace string = "Yes - Retire and Replace"

	// SystemMaintainerInformationPlansToRetireReplaceYesDashRetireButNOTReplace captures enum value "Yes - Retire but NOT Replace"
	SystemMaintainerInformationPlansToRetireReplaceYesDashRetireButNOTReplace string = "Yes - Retire but NOT Replace"
)

// prop value enum
func (m *SystemMaintainerInformation) validatePlansToRetireReplaceEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationTypePlansToRetireReplacePropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validatePlansToRetireReplace(formats strfmt.Registry) error {
	if swag.IsZero(m.PlansToRetireReplace) { // not required
		return nil
	}

	// value enum
	if err := m.validatePlansToRetireReplaceEnum("plansToRetireReplace", "body", m.PlansToRetireReplace); err != nil {
		return err
	}

	return nil
}

var systemMaintainerInformationRecordsManagementBucketItemsEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["Leadership and Operations (Hint=1)","Policy and Regulations (Hint=2)","Senior Leadership Records (Administrator) (Hint=2)","Formal Reports and Studies (Hint=2)","Committee Files (non FACA) (Hint=2)","Other Leadership and Operations Records (Hint=2)","Administrative Management (Hint=1)","Routine Administrative Records (Hint=2)","Other Administrative Management Records (Hint=2)","Financial Records (Hint=1)","Claims Records (Hint=2)","Financial Reporting Records (Hint=2)","Non-perm HCPCS codes (Hint=2)","Other Financial Records (Hint=2)","Enrollment Records (Hint=1)","Beneficiary Records (Hint=1)","Provider and Health Plan Records (Hint=1)","Provider Applications and Certifications (Hint=2)","Records Related to Health Plans (Hint=2)","Program Review and Audit Records (Hint=2)","Hearings Files (Hint=2)","Administrative Records (Hint=2)","Other Provider and Health Plan Records (Hint=2)","Research and Program Analysis (Hint=1)","Public Use Statistical and Summary Files (Hint=2)","Supporting Records (Hint=2)","Other Research and Program Analysis","Public Outreach and Engagement (Hint=1)","Significant Public Outreach and Engagement Records (Hint=2)","Photographs and Videos (Hint=2)","Other Public Outreach and Engagement Records (Hint=2)","Compliance and Integrity (Hint=1)","Plans and Agreements (Hint=2)","Administrative Records (Hint= 2)","Review / Audit Records (Hint=2)","Reports (Hint=2)","Legal Records (Hint=2)","Clinical Laboratory Improvement Amendments (CLIA) records (Hint=2)","Other Compliance and Integrity Records (Hint=2)"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationRecordsManagementBucketItemsEnum = append(systemMaintainerInformationRecordsManagementBucketItemsEnum, v)
	}
}

func (m *SystemMaintainerInformation) validateRecordsManagementBucketItemsEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationRecordsManagementBucketItemsEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateRecordsManagementBucket(formats strfmt.Registry) error {
	if swag.IsZero(m.RecordsManagementBucket) { // not required
		return nil
	}

	for i := 0; i < len(m.RecordsManagementBucket); i++ {

		// value enum
		if err := m.validateRecordsManagementBucketItemsEnum("recordsManagementBucket"+"."+strconv.Itoa(i), "body", m.RecordsManagementBucket[i]); err != nil {
			return err
		}

	}

	return nil
}

var systemMaintainerInformationTypeSystemCustomizationPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["COTS - Less than 20% custom coding","GOTS – less than 20% custom coding","Mixed – Uses COTS or GOTS and has more than 20% custom coding","Custom developed"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationTypeSystemCustomizationPropEnum = append(systemMaintainerInformationTypeSystemCustomizationPropEnum, v)
	}
}

const (

	// SystemMaintainerInformationSystemCustomizationCOTSDashLessThan20CustomCoding captures enum value "COTS - Less than 20% custom coding"
	SystemMaintainerInformationSystemCustomizationCOTSDashLessThan20CustomCoding string = "COTS - Less than 20% custom coding"

	// SystemMaintainerInformationSystemCustomizationGOTSLessThan20CustomCoding captures enum value "GOTS – less than 20% custom coding"
	SystemMaintainerInformationSystemCustomizationGOTSLessThan20CustomCoding string = "GOTS – less than 20% custom coding"

	// SystemMaintainerInformationSystemCustomizationMixedUsesCOTSOrGOTSAndHasMoreThan20CustomCoding captures enum value "Mixed – Uses COTS or GOTS and has more than 20% custom coding"
	SystemMaintainerInformationSystemCustomizationMixedUsesCOTSOrGOTSAndHasMoreThan20CustomCoding string = "Mixed – Uses COTS or GOTS and has more than 20% custom coding"

	// SystemMaintainerInformationSystemCustomizationCustomDeveloped captures enum value "Custom developed"
	SystemMaintainerInformationSystemCustomizationCustomDeveloped string = "Custom developed"
)

// prop value enum
func (m *SystemMaintainerInformation) validateSystemCustomizationEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationTypeSystemCustomizationPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateSystemCustomization(formats strfmt.Registry) error {
	if swag.IsZero(m.SystemCustomization) { // not required
		return nil
	}

	// value enum
	if err := m.validateSystemCustomizationEnum("systemCustomization", "body", m.SystemCustomization); err != nil {
		return err
	}

	return nil
}

var systemMaintainerInformationSystemDataLocationItemsEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["Integrated Data Repository (IDR)","Chronic Condition Warehouse (CCW)","This system","Another CMS system - Describe in Notes"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		systemMaintainerInformationSystemDataLocationItemsEnum = append(systemMaintainerInformationSystemDataLocationItemsEnum, v)
	}
}

func (m *SystemMaintainerInformation) validateSystemDataLocationItemsEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, systemMaintainerInformationSystemDataLocationItemsEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *SystemMaintainerInformation) validateSystemDataLocation(formats strfmt.Registry) error {
	if swag.IsZero(m.SystemDataLocation) { // not required
		return nil
	}

	for i := 0; i < len(m.SystemDataLocation); i++ {

		// value enum
		if err := m.validateSystemDataLocationItemsEnum("systemDataLocation"+"."+strconv.Itoa(i), "body", m.SystemDataLocation[i]); err != nil {
			return err
		}

	}

	return nil
}

func (m *SystemMaintainerInformation) validateSystemProductionDate(formats strfmt.Registry) error {
	if swag.IsZero(m.SystemProductionDate) { // not required
		return nil
	}

	if err := validate.FormatOf("systemProductionDate", "body", "date", m.SystemProductionDate.String(), formats); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this system maintainer information based on context it is used
func (m *SystemMaintainerInformation) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *SystemMaintainerInformation) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *SystemMaintainerInformation) UnmarshalBinary(b []byte) error {
	var res SystemMaintainerInformation
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
