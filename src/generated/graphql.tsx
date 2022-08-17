import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Email addresses are represented as strings */
  EmailAddress: any;
  /** Time values are represented as strings using RFC3339 format, for example 2019-10-12T07:20:50.52Z */
  Time: any;
  /** UUIDs are represented using 36 ASCII characters, for example B0511859-ADE6-4A67-8969-16EC280C0E1A */
  UUID: any;
};

/**
 * An accessibility request represents a system that needs to go through
 * the 508 process
 */
export type AccessibilityRequest = {
  __typename?: 'AccessibilityRequest';
  cedarSystemId?: Maybe<Scalars['String']>;
  documents: Array<AccessibilityRequestDocument>;
  euaUserId: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  notes: Array<AccessibilityRequestNote>;
  relevantTestDate?: Maybe<TestDate>;
  statusRecord: AccessibilityRequestStatusRecord;
  submittedAt: Scalars['Time'];
  system?: Maybe<System>;
  testDates: Array<TestDate>;
};

/** Denotes the reason a 508/accessibility request was deleted */
export enum AccessibilityRequestDeletionReason {
  IncorrectApplicationAndLifecycleId = 'INCORRECT_APPLICATION_AND_LIFECYCLE_ID',
  NoTestingNeeded = 'NO_TESTING_NEEDED',
  Other = 'OTHER'
}

/** Represents a document attached to a 508/accessibility request */
export type AccessibilityRequestDocument = {
  __typename?: 'AccessibilityRequestDocument';
  documentType: AccessibilityRequestDocumentType;
  id: Scalars['UUID'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  requestID: Scalars['UUID'];
  size: Scalars['Int'];
  status: AccessibilityRequestDocumentStatus;
  uploadedAt: Scalars['Time'];
  url: Scalars['String'];
};

/**
 * Represents the common options for document type that is attached to a
 * 508/accessibility request
 */
export enum AccessibilityRequestDocumentCommonType {
  AwardedVpat = 'AWARDED_VPAT',
  Other = 'OTHER',
  RemediationPlan = 'REMEDIATION_PLAN',
  TestingVpat = 'TESTING_VPAT',
  TestPlan = 'TEST_PLAN',
  TestResults = 'TEST_RESULTS'
}

/**
 * Indicates the status of a document that has been attached to 508/accessibility
 * request, which will be scanned for viruses before it is made available
 */
export enum AccessibilityRequestDocumentStatus {
  Available = 'AVAILABLE',
  Pending = 'PENDING',
  Unavailable = 'UNAVAILABLE'
}

/**
 * Denotes type of a document that is attached to a 508/accessibility request,
 * which can be one of a number of common types, or another user-specified type
 */
export type AccessibilityRequestDocumentType = {
  __typename?: 'AccessibilityRequestDocumentType';
  commonType: AccessibilityRequestDocumentCommonType;
  otherTypeDescription?: Maybe<Scalars['String']>;
};

export type AccessibilityRequestEdge = {
  __typename?: 'AccessibilityRequestEdge';
  node: AccessibilityRequest;
};

/** Represents a note added to a 508/accessibility request by a user */
export type AccessibilityRequestNote = {
  __typename?: 'AccessibilityRequestNote';
  authorName: Scalars['String'];
  createdAt: Scalars['Time'];
  id: Scalars['UUID'];
  note: Scalars['String'];
  requestID: Scalars['UUID'];
};

/** Indicates the status of a 508/accessibility request */
export enum AccessibilityRequestStatus {
  Closed = 'CLOSED',
  Deleted = 'DELETED',
  InRemediation = 'IN_REMEDIATION',
  Open = 'OPEN'
}

/** An accessibility request status record is the data related to a status action */
export type AccessibilityRequestStatusRecord = {
  __typename?: 'AccessibilityRequestStatusRecord';
  createdAt: Scalars['Time'];
  euaUserId: Scalars['String'];
  id: Scalars['UUID'];
  requestID: Scalars['UUID'];
  status: AccessibilityRequestStatus;
};

export type AccessibilityRequestsConnection = {
  __typename?: 'AccessibilityRequestsConnection';
  edges: Array<AccessibilityRequestEdge>;
};

/**
 * Feedback intended for a business owner before they proceed to writing a
 * business case for a system request
 */
export type AddGrtFeedbackInput = {
  emailBody: Scalars['String'];
  feedback: Scalars['String'];
  intakeID: Scalars['UUID'];
  notificationRecipients?: InputMaybe<EmailNotificationRecipients>;
  shouldSendEmail?: Scalars['Boolean'];
};

/**
 * Payload for adding GRT feedback to a system request (contains the system
 * request ID)
 */
export type AddGrtFeedbackPayload = {
  __typename?: 'AddGRTFeedbackPayload';
  id?: Maybe<Scalars['UUID']>;
};

/** Represents a contact associated with a system intake, including additional fields from CEDAR */
export type AugmentedSystemIntakeContact = {
  __typename?: 'AugmentedSystemIntakeContact';
  commonName?: Maybe<Scalars['String']>;
  component: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  euaUserId: Scalars['String'];
  id: Scalars['UUID'];
  role: Scalars['String'];
  systemIntakeId: Scalars['UUID'];
};

/** Input to add feedback to a system request */
export type BasicActionInput = {
  feedback: Scalars['String'];
  intakeId: Scalars['UUID'];
  notificationRecipients?: InputMaybe<EmailNotificationRecipients>;
  shouldSendEmail?: Scalars['Boolean'];
};

/**
 * A business case associated with an system IT governence request; contains
 * equester's justification for their system request
 */
export type BusinessCase = {
  __typename?: 'BusinessCase';
  alternativeASolution?: Maybe<BusinessCaseSolution>;
  alternativeBSolution?: Maybe<BusinessCaseSolution>;
  businessNeed?: Maybe<Scalars['String']>;
  businessOwner?: Maybe<Scalars['String']>;
  cmsBenefit?: Maybe<Scalars['String']>;
  createdAt: Scalars['Time'];
  currentSolutionSummary?: Maybe<Scalars['String']>;
  euaUserId: Scalars['String'];
  id: Scalars['UUID'];
  lifecycleCostLines?: Maybe<Array<EstimatedLifecycleCost>>;
  preferredSolution?: Maybe<BusinessCaseSolution>;
  priorityAlignment?: Maybe<Scalars['String']>;
  projectName?: Maybe<Scalars['String']>;
  requester?: Maybe<Scalars['String']>;
  requesterPhoneNumber?: Maybe<Scalars['String']>;
  status: BusinessCaseStatus;
  successIndicators?: Maybe<Scalars['String']>;
  systemIntake: SystemIntake;
  updatedAt: Scalars['Time'];
};

/** A solution proposal within a business case */
export type BusinessCaseSolution = {
  __typename?: 'BusinessCaseSolution';
  acquisitionApproach?: Maybe<Scalars['String']>;
  cons?: Maybe<Scalars['String']>;
  costSavings?: Maybe<Scalars['String']>;
  hasUi?: Maybe<Scalars['String']>;
  hostingCloudServiceType?: Maybe<Scalars['String']>;
  hostingLocation?: Maybe<Scalars['String']>;
  hostingType?: Maybe<Scalars['String']>;
  pros?: Maybe<Scalars['String']>;
  securityIsApproved?: Maybe<Scalars['Boolean']>;
  securityIsBeingReviewed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** The status of a business case associated with an system IT governence request */
export enum BusinessCaseStatus {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

/** A business owner is the person at CMS responsible for a system */
export type BusinessOwner = {
  __typename?: 'BusinessOwner';
  component: Scalars['String'];
  name: Scalars['String'];
};

/** The possible types of assignees for CedarRoles */
export enum CedarAssigneeType {
  Organization = 'ORGANIZATION',
  Person = 'PERSON'
}

/** CedarAuthorityToOperate represents the response from the /authorityToOperate endpoint from the CEDAR Core API. */
export type CedarAuthorityToOperate = {
  __typename?: 'CedarAuthorityToOperate';
  actualDispositionDate?: Maybe<Scalars['Time']>;
  cedarId: Scalars['String'];
  containsPersonallyIdentifiableInformation?: Maybe<Scalars['Boolean']>;
  countOfOpenPoams: Scalars['Int'];
  countOfTotalNonPrivilegedUserPopulation: Scalars['Int'];
  countOfTotalPrivilegedUserPopulation: Scalars['Int'];
  dateAuthorizationMemoExpires?: Maybe<Scalars['Time']>;
  dateAuthorizationMemoSigned?: Maybe<Scalars['Time']>;
  eAuthenticationLevel?: Maybe<Scalars['String']>;
  fips199OverallImpactRating?: Maybe<Scalars['Int']>;
  fismaSystemAcronym?: Maybe<Scalars['String']>;
  fismaSystemName?: Maybe<Scalars['String']>;
  isAccessedByNonOrganizationalUsers?: Maybe<Scalars['Boolean']>;
  isPiiLimitedToUserNameAndPass?: Maybe<Scalars['Boolean']>;
  isProtectedHealthInformation?: Maybe<Scalars['Boolean']>;
  lastActScaDate?: Maybe<Scalars['Time']>;
  lastAssessmentDate?: Maybe<Scalars['Time']>;
  lastContingencyPlanCompletionDate?: Maybe<Scalars['Time']>;
  lastPenTestDate?: Maybe<Scalars['Time']>;
  piaCompletionDate?: Maybe<Scalars['Time']>;
  primaryCyberRiskAdvisor?: Maybe<Scalars['String']>;
  privacySubjectMatterExpert?: Maybe<Scalars['String']>;
  recoveryPointObjective?: Maybe<Scalars['Float']>;
  recoveryTimeObjective?: Maybe<Scalars['Float']>;
  systemOfRecordsNotice: Array<Scalars['String']>;
  tlcPhase?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
  xlcPhase?: Maybe<Scalars['String']>;
};

/** BusinessOwnerInformation contains information about the business owner for a CEDAR system */
export type CedarBusinessOwnerInformation = {
  __typename?: 'CedarBusinessOwnerInformation';
  beneficiaryAddressPurpose: Array<Scalars['String']>;
  beneficiaryAddressPurposeOther?: Maybe<Scalars['String']>;
  beneficiaryAddressSource: Array<Scalars['String']>;
  beneficiaryAddressSourceOther?: Maybe<Scalars['String']>;
  costPerYear?: Maybe<Scalars['String']>;
  isCmsOwned?: Maybe<Scalars['Boolean']>;
  numberOfContractorFte?: Maybe<Scalars['String']>;
  numberOfFederalFte?: Maybe<Scalars['String']>;
  numberOfSupportedUsersPerMonth?: Maybe<Scalars['String']>;
  storesBankingData?: Maybe<Scalars['Boolean']>;
  storesBeneficiaryAddress?: Maybe<Scalars['Boolean']>;
};

/** CedarDataCenter represents the data center used by a CedarDeployment */
export type CedarDataCenter = {
  __typename?: 'CedarDataCenter';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  addressState?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Time']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** CedarDeployment represents a deployment of a system; this information is returned from the CEDAR Core API */
export type CedarDeployment = {
  __typename?: 'CedarDeployment';
  contractorName?: Maybe<Scalars['String']>;
  dataCenter?: Maybe<CedarDataCenter>;
  deploymentElementID?: Maybe<Scalars['String']>;
  deploymentType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Time']>;
  hasProductionData?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isHotSite?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  replicatedSystemElements: Array<Scalars['String']>;
  startDate?: Maybe<Scalars['Time']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  systemID: Scalars['String'];
  systemName?: Maybe<Scalars['String']>;
  systemVersion?: Maybe<Scalars['String']>;
  wanType?: Maybe<Scalars['String']>;
};

/** CedarExchange represents info about how data is exchanged between a CEDAR system and another system */
export type CedarExchange = {
  __typename?: 'CedarExchange';
  connectionFrequency: Array<Scalars['String']>;
  containsBankingData?: Maybe<Scalars['Boolean']>;
  containsBeneficiaryAddress?: Maybe<Scalars['Boolean']>;
  containsPhi?: Maybe<Scalars['Boolean']>;
  containsPii?: Maybe<Scalars['Boolean']>;
  dataExchangeAgreement?: Maybe<Scalars['String']>;
  dataFormat?: Maybe<Scalars['String']>;
  dataFormatOther?: Maybe<Scalars['String']>;
  exchangeDescription?: Maybe<Scalars['String']>;
  exchangeDirection?: Maybe<ExchangeDirection>;
  exchangeEndDate?: Maybe<Scalars['Time']>;
  exchangeId?: Maybe<Scalars['String']>;
  exchangeName?: Maybe<Scalars['String']>;
  exchangeRetiredDate?: Maybe<Scalars['Time']>;
  exchangeStartDate?: Maybe<Scalars['Time']>;
  exchangeState?: Maybe<Scalars['String']>;
  exchangeVersion?: Maybe<Scalars['String']>;
  fromOwnerId?: Maybe<Scalars['String']>;
  fromOwnerName?: Maybe<Scalars['String']>;
  fromOwnerType?: Maybe<Scalars['String']>;
  isBeneficiaryMailingFile?: Maybe<Scalars['Boolean']>;
  numOfRecords?: Maybe<Scalars['String']>;
  sharedViaApi?: Maybe<Scalars['Boolean']>;
  toOwnerId?: Maybe<Scalars['String']>;
  toOwnerName?: Maybe<Scalars['String']>;
  toOwnerType?: Maybe<Scalars['String']>;
  typeOfData: Array<CedarExchangeTypeOfDataItem>;
};

/** CedarExchangeTypeOfDataItem is one item of the TypeofData slice in a CedarExchange */
export type CedarExchangeTypeOfDataItem = {
  __typename?: 'CedarExchangeTypeOfDataItem';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** CedarRole represents a role assigned to a person or organization for a system; this information is returned from the CEDAR Core API */
export type CedarRole = {
  __typename?: 'CedarRole';
  application: Scalars['String'];
  assigneeDesc?: Maybe<Scalars['String']>;
  assigneeEmail?: Maybe<Scalars['String']>;
  assigneeFirstName?: Maybe<Scalars['String']>;
  assigneeLastName?: Maybe<Scalars['String']>;
  assigneeOrgID?: Maybe<Scalars['String']>;
  assigneeOrgName?: Maybe<Scalars['String']>;
  assigneePhone?: Maybe<Scalars['String']>;
  assigneeType?: Maybe<CedarAssigneeType>;
  assigneeUsername?: Maybe<Scalars['String']>;
  objectID: Scalars['String'];
  objectType?: Maybe<Scalars['String']>;
  roleID?: Maybe<Scalars['String']>;
  roleTypeDesc?: Maybe<Scalars['String']>;
  roleTypeID: Scalars['String'];
  roleTypeName?: Maybe<Scalars['String']>;
};

/**
 * CedarSystem represents the response from the /system/detail endpoint from the CEDAR Core API.
 * Right now, this does not tie in with any other types defined here, and is a root node until that changes.
 */
export type CedarSystem = {
  __typename?: 'CedarSystem';
  acronym?: Maybe<Scalars['String']>;
  businessOwnerOrg?: Maybe<Scalars['String']>;
  businessOwnerOrgComp?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  systemMaintainerOrg?: Maybe<Scalars['String']>;
  systemMaintainerOrgComp?: Maybe<Scalars['String']>;
  versionId?: Maybe<Scalars['String']>;
};

/** Represents a user's bookmark of a cedar system */
export type CedarSystemBookmark = {
  __typename?: 'CedarSystemBookmark';
  cedarSystemId: Scalars['String'];
  euaUserId: Scalars['String'];
};

/** This is the Representation of Cedar system with additional related information */
export type CedarSystemDetails = {
  __typename?: 'CedarSystemDetails';
  businessOwnerInformation: CedarBusinessOwnerInformation;
  cedarSystem: CedarSystem;
  deployments: Array<CedarDeployment>;
  roles: Array<CedarRole>;
  systemMaintainerInformation: CedarSystemMaintainerInformation;
  threats: Array<CedarThreat>;
  urls: Array<CedarUrl>;
};

/** SystemMaintainerInformation contains information about the system maintainer of a CEDAR system */
export type CedarSystemMaintainerInformation = {
  __typename?: 'CedarSystemMaintainerInformation';
  agileUsed?: Maybe<Scalars['Boolean']>;
  businessArtifactsOnDemand?: Maybe<Scalars['Boolean']>;
  deploymentFrequency?: Maybe<Scalars['String']>;
  devCompletionPercent?: Maybe<Scalars['String']>;
  devWorkDescription?: Maybe<Scalars['String']>;
  ecapParticipation?: Maybe<Scalars['Boolean']>;
  frontendAccessType?: Maybe<Scalars['String']>;
  hardCodedIPAddress?: Maybe<Scalars['Boolean']>;
  ip6EnabledAssetPercent?: Maybe<Scalars['String']>;
  ip6TransitionPlan?: Maybe<Scalars['String']>;
  ipEnabledAssetCount?: Maybe<Scalars['Int']>;
  majorRefreshDate?: Maybe<Scalars['String']>;
  netAccessibility?: Maybe<Scalars['String']>;
  omDocumentationOnDemand?: Maybe<Scalars['Boolean']>;
  plansToRetireReplace?: Maybe<Scalars['String']>;
  quarterToRetireReplace?: Maybe<Scalars['String']>;
  recordsManagementBucket: Array<Scalars['String']>;
  sourceCodeOnDemand?: Maybe<Scalars['Boolean']>;
  systemCustomization?: Maybe<Scalars['String']>;
  systemDesignOnDemand?: Maybe<Scalars['Boolean']>;
  systemProductionDate?: Maybe<Scalars['String']>;
  systemRequirementsOnDemand?: Maybe<Scalars['Boolean']>;
  testPlanOnDemand?: Maybe<Scalars['Boolean']>;
  testReportsOnDemand?: Maybe<Scalars['Boolean']>;
  testScriptsOnDemand?: Maybe<Scalars['Boolean']>;
  yearToRetireReplace?: Maybe<Scalars['String']>;
};

/** CedarThreat represents the response from the /threat endpoint from the CEDAR Core API. */
export type CedarThreat = {
  __typename?: 'CedarThreat';
  alternativeId?: Maybe<Scalars['String']>;
  controlFamily?: Maybe<Scalars['String']>;
  daysOpen?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  weaknessRiskLevel?: Maybe<Scalars['String']>;
};

/** CedarURL represents info about a URL associated with a CEDAR object (usually a system); this information is returned from the CEDAR Core API */
export type CedarUrl = {
  __typename?: 'CedarURL';
  address?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isAPIEndpoint?: Maybe<Scalars['Boolean']>;
  isBehindWebApplicationFirewall?: Maybe<Scalars['Boolean']>;
  isVersionCodeRepository?: Maybe<Scalars['Boolean']>;
  urlHostingEnv?: Maybe<Scalars['String']>;
};

/** Represents a date used for start and end dates on a contract */
export type ContractDate = {
  __typename?: 'ContractDate';
  day?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

/** The input data used for adding a document to a 508/accessibility request */
export type CreateAccessibilityRequestDocumentInput = {
  commonDocumentType: AccessibilityRequestDocumentCommonType;
  mimeType: Scalars['String'];
  name: Scalars['String'];
  otherDocumentTypeDescription?: InputMaybe<Scalars['String']>;
  requestID: Scalars['UUID'];
  size: Scalars['Int'];
  url: Scalars['String'];
};

/**
 * The payload containing the input data used for adding a document to a
 * 508/accessibility request
 */
export type CreateAccessibilityRequestDocumentPayload = {
  __typename?: 'CreateAccessibilityRequestDocumentPayload';
  accessibilityRequestDocument?: Maybe<AccessibilityRequestDocument>;
  userErrors?: Maybe<Array<UserError>>;
};

/** The data needed to initialize a 508/accessibility request */
export type CreateAccessibilityRequestInput = {
  cedarSystemId?: InputMaybe<Scalars['String']>;
  intakeID?: InputMaybe<Scalars['UUID']>;
  name: Scalars['String'];
};

/** The data used when adding a note to a 508/accessibility request */
export type CreateAccessibilityRequestNoteInput = {
  note: Scalars['String'];
  requestID: Scalars['UUID'];
  shouldSendEmail: Scalars['Boolean'];
};

/** The payload for adding a note to a 508/accessibility request */
export type CreateAccessibilityRequestNotePayload = {
  __typename?: 'CreateAccessibilityRequestNotePayload';
  accessibilityRequestNote: AccessibilityRequestNote;
  userErrors?: Maybe<Array<UserError>>;
};

/** The payload containing the data needed to initialize an AccessibilityRequest */
export type CreateAccessibilityRequestPayload = {
  __typename?: 'CreateAccessibilityRequestPayload';
  accessibilityRequest?: Maybe<AccessibilityRequest>;
  userErrors?: Maybe<Array<UserError>>;
};

/** The data needed to bookmark a cedar system */
export type CreateCedarSystemBookmarkInput = {
  cedarSystemId: Scalars['String'];
};

/** The payload when bookmarking a cedar system */
export type CreateCedarSystemBookmarkPayload = {
  __typename?: 'CreateCedarSystemBookmarkPayload';
  cedarSystemBookmark?: Maybe<CedarSystemBookmark>;
};

/** Input data for extending a system request's lifecycle ID */
export type CreateSystemIntakeActionExtendLifecycleIdInput = {
  costBaseline?: InputMaybe<Scalars['String']>;
  expirationDate?: InputMaybe<Scalars['Time']>;
  id: Scalars['UUID'];
  nextSteps?: InputMaybe<Scalars['String']>;
  notificationRecipients?: InputMaybe<EmailNotificationRecipients>;
  scope: Scalars['String'];
  shouldSendEmail?: Scalars['Boolean'];
};

/** Payload data for extending a system request's lifecycle ID */
export type CreateSystemIntakeActionExtendLifecycleIdPayload = {
  __typename?: 'CreateSystemIntakeActionExtendLifecycleIdPayload';
  systemIntake?: Maybe<SystemIntake>;
  userErrors?: Maybe<Array<UserError>>;
};

/** The data needed to associate a contact with a system intake */
export type CreateSystemIntakeContactInput = {
  component: Scalars['String'];
  euaUserId: Scalars['String'];
  role: Scalars['String'];
  systemIntakeId: Scalars['UUID'];
};

/** The payload when creating a system intake contact */
export type CreateSystemIntakeContactPayload = {
  __typename?: 'CreateSystemIntakeContactPayload';
  systemIntakeContact?: Maybe<SystemIntakeContact>;
};

/** The input data used to initialize an IT governance request for a system */
export type CreateSystemIntakeInput = {
  requestType: SystemIntakeRequestType;
  requester: SystemIntakeRequesterInput;
};

/** Input data for adding a note to a system request */
export type CreateSystemIntakeNoteInput = {
  authorName: Scalars['String'];
  content: Scalars['String'];
  intakeId: Scalars['UUID'];
};

/** The input required to add a test date/score to a 508/accessibility request */
export type CreateTestDateInput = {
  date: Scalars['Time'];
  requestID: Scalars['UUID'];
  score?: InputMaybe<Scalars['Int']>;
  testType: TestDateTestType;
};

/**
 * The payload for the input required to add a test date/score to a
 * 508/accessibility request
 */
export type CreateTestDatePayload = {
  __typename?: 'CreateTestDatePayload';
  testDate?: Maybe<TestDate>;
  userErrors?: Maybe<Array<UserError>>;
};

/** The current user of the application */
export type CurrentUser = {
  __typename?: 'CurrentUser';
  launchDarkly: LaunchDarklySettings;
};

/** The input used to delete a document from a 508/accessibility request */
export type DeleteAccessibilityRequestDocumentInput = {
  id: Scalars['UUID'];
};

/** The payload used to delete a document from a 508/accessibility request */
export type DeleteAccessibilityRequestDocumentPayload = {
  __typename?: 'DeleteAccessibilityRequestDocumentPayload';
  id?: Maybe<Scalars['UUID']>;
};

/** The input data needed to delete a 508/accessibility request */
export type DeleteAccessibilityRequestInput = {
  id: Scalars['UUID'];
  reason: AccessibilityRequestDeletionReason;
};

/** The payload data sent when deleting a 508/accessibility request */
export type DeleteAccessibilityRequestPayload = {
  __typename?: 'DeleteAccessibilityRequestPayload';
  id?: Maybe<Scalars['UUID']>;
  userErrors?: Maybe<Array<UserError>>;
};

/** The payload when deleting a bookmark for a cedar system */
export type DeleteCedarSystemBookmarkPayload = {
  __typename?: 'DeleteCedarSystemBookmarkPayload';
  cedarSystemId: Scalars['String'];
};

/** The data needed to delete a system intake contact */
export type DeleteSystemIntakeContactInput = {
  id: Scalars['UUID'];
};

/** The payload when deleting a system intake contact */
export type DeleteSystemIntakeContactPayload = {
  __typename?: 'DeleteSystemIntakeContactPayload';
  systemIntakeContact?: Maybe<SystemIntakeContact>;
};

/** The input required to delete a test date/score */
export type DeleteTestDateInput = {
  id: Scalars['UUID'];
};

/** The payload for the input required to delete a test date/score */
export type DeleteTestDatePayload = {
  __typename?: 'DeleteTestDatePayload';
  testDate?: Maybe<TestDate>;
  userErrors?: Maybe<Array<UserError>>;
};

export type EmailNotificationRecipients = {
  regularRecipientEmails: Array<Scalars['EmailAddress']>;
  shouldNotifyITGovernance: Scalars['Boolean'];
  shouldNotifyITInvestment: Scalars['Boolean'];
};

/**
 * Information related to the estimated costs over one lifecycle phase for a
 * system with a given solution
 */
export type EstimatedLifecycleCost = {
  __typename?: 'EstimatedLifecycleCost';
  businessCaseId: Scalars['UUID'];
  cost?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  phase?: Maybe<LifecycleCostPhase>;
  solution?: Maybe<LifecycleCostSolution>;
  year?: Maybe<LifecycleCostYear>;
};

export enum ExchangeDirection {
  Receiver = 'RECEIVER',
  Sender = 'SENDER'
}

/** Feedback from the GRT to a business owner or GRB */
export type GrtFeedback = {
  __typename?: 'GRTFeedback';
  createdAt: Scalars['Time'];
  feedback?: Maybe<Scalars['String']>;
  feedbackType?: Maybe<GrtFeedbackType>;
  id?: Maybe<Scalars['UUID']>;
};

/** Indicates who the source is of feedback on a system request */
export enum GrtFeedbackType {
  BusinessOwner = 'BUSINESS_OWNER',
  Grb = 'GRB'
}

/** Input associated with a document to be uploaded to a 508/accessibility request */
export type GeneratePresignedUploadUrlInput = {
  fileName: Scalars['String'];
  mimeType: Scalars['String'];
  size: Scalars['Int'];
};

/** URL generated for a document to be uploaded to a 508/accessibility request */
export type GeneratePresignedUploadUrlPayload = {
  __typename?: 'GeneratePresignedUploadURLPayload';
  url?: Maybe<Scalars['String']>;
  userErrors?: Maybe<Array<UserError>>;
};

/**
 * The input data required to issue a lifecycle ID for a system's IT governance
 * request
 */
export type IssueLifecycleIdInput = {
  costBaseline?: InputMaybe<Scalars['String']>;
  expiresAt: Scalars['Time'];
  feedback: Scalars['String'];
  intakeId: Scalars['UUID'];
  lcid?: InputMaybe<Scalars['String']>;
  nextSteps?: InputMaybe<Scalars['String']>;
  notificationRecipients?: InputMaybe<EmailNotificationRecipients>;
  scope: Scalars['String'];
  shouldSendEmail?: Scalars['Boolean'];
};

/** The most recent note added by an admin to a system request */
export type LastAdminNote = {
  __typename?: 'LastAdminNote';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
};

/** The current user's Launch Darkly key */
export type LaunchDarklySettings = {
  __typename?: 'LaunchDarklySettings';
  signedHash: Scalars['String'];
  userKey: Scalars['String'];
};

/** The cost phase of a */
export enum LifecycleCostPhase {
  Development = 'DEVELOPMENT',
  OperationsAndMaintenance = 'OPERATIONS_AND_MAINTENANCE',
  Other = 'OTHER'
}

/** The type of a lifecycle cost solution, part of a business case */
export enum LifecycleCostSolution {
  A = 'A',
  B = 'B',
  Preferred = 'PREFERRED'
}

/** Represents a lifecycle cost phase */
export enum LifecycleCostYear {
  LifecycleCostYear_1 = 'LIFECYCLE_COST_YEAR_1',
  LifecycleCostYear_2 = 'LIFECYCLE_COST_YEAR_2',
  LifecycleCostYear_3 = 'LIFECYCLE_COST_YEAR_3',
  LifecycleCostYear_4 = 'LIFECYCLE_COST_YEAR_4',
  LifecycleCostYear_5 = 'LIFECYCLE_COST_YEAR_5'
}

/** Defines the mutations for the schema */
export type Mutation = {
  __typename?: 'Mutation';
  addGRTFeedbackAndKeepBusinessCaseInDraft?: Maybe<AddGrtFeedbackPayload>;
  addGRTFeedbackAndProgressToFinalBusinessCase?: Maybe<AddGrtFeedbackPayload>;
  addGRTFeedbackAndRequestBusinessCase?: Maybe<AddGrtFeedbackPayload>;
  createAccessibilityRequest?: Maybe<CreateAccessibilityRequestPayload>;
  createAccessibilityRequestDocument?: Maybe<CreateAccessibilityRequestDocumentPayload>;
  createAccessibilityRequestNote?: Maybe<CreateAccessibilityRequestNotePayload>;
  createCedarSystemBookmark?: Maybe<CreateCedarSystemBookmarkPayload>;
  createSystemIntake?: Maybe<SystemIntake>;
  createSystemIntakeActionBusinessCaseNeeded?: Maybe<UpdateSystemIntakePayload>;
  createSystemIntakeActionBusinessCaseNeedsChanges?: Maybe<UpdateSystemIntakePayload>;
  createSystemIntakeActionExtendLifecycleId?: Maybe<CreateSystemIntakeActionExtendLifecycleIdPayload>;
  createSystemIntakeActionGuideReceievedClose?: Maybe<UpdateSystemIntakePayload>;
  createSystemIntakeActionNoGovernanceNeeded?: Maybe<UpdateSystemIntakePayload>;
  createSystemIntakeActionNotItRequest?: Maybe<UpdateSystemIntakePayload>;
  createSystemIntakeActionNotRespondingClose?: Maybe<UpdateSystemIntakePayload>;
  createSystemIntakeActionReadyForGRT?: Maybe<UpdateSystemIntakePayload>;
  createSystemIntakeActionSendEmail?: Maybe<UpdateSystemIntakePayload>;
  createSystemIntakeContact?: Maybe<CreateSystemIntakeContactPayload>;
  createSystemIntakeNote?: Maybe<SystemIntakeNote>;
  createTestDate?: Maybe<CreateTestDatePayload>;
  deleteAccessibilityRequest?: Maybe<DeleteAccessibilityRequestPayload>;
  deleteAccessibilityRequestDocument?: Maybe<DeleteAccessibilityRequestDocumentPayload>;
  deleteCedarSystemBookmark?: Maybe<DeleteCedarSystemBookmarkPayload>;
  deleteSystemIntakeContact?: Maybe<DeleteSystemIntakeContactPayload>;
  deleteTestDate?: Maybe<DeleteTestDatePayload>;
  generatePresignedUploadURL?: Maybe<GeneratePresignedUploadUrlPayload>;
  issueLifecycleId?: Maybe<UpdateSystemIntakePayload>;
  markSystemIntakeReadyForGRB?: Maybe<AddGrtFeedbackPayload>;
  rejectIntake?: Maybe<UpdateSystemIntakePayload>;
  sendCantFindSomethingEmail?: Maybe<Scalars['String']>;
  sendFeedbackEmail?: Maybe<Scalars['String']>;
  sendReportAProblemEmail?: Maybe<Scalars['String']>;
  submitIntake?: Maybe<UpdateSystemIntakePayload>;
  updateAccessibilityRequestCedarSystem?: Maybe<UpdateAccessibilityRequestCedarSystemPayload>;
  updateAccessibilityRequestStatus?: Maybe<UpdateAccessibilityRequestStatusPayload>;
  updateSystemIntakeAdminLead?: Maybe<UpdateSystemIntakePayload>;
  updateSystemIntakeContact?: Maybe<CreateSystemIntakeContactPayload>;
  updateSystemIntakeContactDetails?: Maybe<UpdateSystemIntakePayload>;
  updateSystemIntakeContractDetails?: Maybe<UpdateSystemIntakePayload>;
  updateSystemIntakeRequestDetails?: Maybe<UpdateSystemIntakePayload>;
  updateSystemIntakeReviewDates?: Maybe<UpdateSystemIntakePayload>;
  updateTestDate?: Maybe<UpdateTestDatePayload>;
};


/** Defines the mutations for the schema */
export type MutationAddGrtFeedbackAndKeepBusinessCaseInDraftArgs = {
  input: AddGrtFeedbackInput;
};


/** Defines the mutations for the schema */
export type MutationAddGrtFeedbackAndProgressToFinalBusinessCaseArgs = {
  input: AddGrtFeedbackInput;
};


/** Defines the mutations for the schema */
export type MutationAddGrtFeedbackAndRequestBusinessCaseArgs = {
  input: AddGrtFeedbackInput;
};


/** Defines the mutations for the schema */
export type MutationCreateAccessibilityRequestArgs = {
  input: CreateAccessibilityRequestInput;
};


/** Defines the mutations for the schema */
export type MutationCreateAccessibilityRequestDocumentArgs = {
  input: CreateAccessibilityRequestDocumentInput;
};


/** Defines the mutations for the schema */
export type MutationCreateAccessibilityRequestNoteArgs = {
  input: CreateAccessibilityRequestNoteInput;
};


/** Defines the mutations for the schema */
export type MutationCreateCedarSystemBookmarkArgs = {
  input: CreateCedarSystemBookmarkInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeArgs = {
  input: CreateSystemIntakeInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeActionBusinessCaseNeededArgs = {
  input: BasicActionInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeActionBusinessCaseNeedsChangesArgs = {
  input: BasicActionInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeActionExtendLifecycleIdArgs = {
  input: CreateSystemIntakeActionExtendLifecycleIdInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeActionGuideReceievedCloseArgs = {
  input: BasicActionInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeActionNoGovernanceNeededArgs = {
  input: BasicActionInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeActionNotItRequestArgs = {
  input: BasicActionInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeActionNotRespondingCloseArgs = {
  input: BasicActionInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeActionReadyForGrtArgs = {
  input: BasicActionInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeActionSendEmailArgs = {
  input: BasicActionInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeContactArgs = {
  input: CreateSystemIntakeContactInput;
};


/** Defines the mutations for the schema */
export type MutationCreateSystemIntakeNoteArgs = {
  input: CreateSystemIntakeNoteInput;
};


/** Defines the mutations for the schema */
export type MutationCreateTestDateArgs = {
  input: CreateTestDateInput;
};


/** Defines the mutations for the schema */
export type MutationDeleteAccessibilityRequestArgs = {
  input: DeleteAccessibilityRequestInput;
};


/** Defines the mutations for the schema */
export type MutationDeleteAccessibilityRequestDocumentArgs = {
  input: DeleteAccessibilityRequestDocumentInput;
};


/** Defines the mutations for the schema */
export type MutationDeleteCedarSystemBookmarkArgs = {
  input: CreateCedarSystemBookmarkInput;
};


/** Defines the mutations for the schema */
export type MutationDeleteSystemIntakeContactArgs = {
  input: DeleteSystemIntakeContactInput;
};


/** Defines the mutations for the schema */
export type MutationDeleteTestDateArgs = {
  input: DeleteTestDateInput;
};


/** Defines the mutations for the schema */
export type MutationGeneratePresignedUploadUrlArgs = {
  input: GeneratePresignedUploadUrlInput;
};


/** Defines the mutations for the schema */
export type MutationIssueLifecycleIdArgs = {
  input: IssueLifecycleIdInput;
};


/** Defines the mutations for the schema */
export type MutationMarkSystemIntakeReadyForGrbArgs = {
  input: AddGrtFeedbackInput;
};


/** Defines the mutations for the schema */
export type MutationRejectIntakeArgs = {
  input: RejectIntakeInput;
};


/** Defines the mutations for the schema */
export type MutationSendCantFindSomethingEmailArgs = {
  input: SendCantFindSomethingEmailInput;
};


/** Defines the mutations for the schema */
export type MutationSendFeedbackEmailArgs = {
  input: SendFeedbackEmailInput;
};


/** Defines the mutations for the schema */
export type MutationSendReportAProblemEmailArgs = {
  input: SendReportAProblemEmailInput;
};


/** Defines the mutations for the schema */
export type MutationSubmitIntakeArgs = {
  input: SubmitIntakeInput;
};


/** Defines the mutations for the schema */
export type MutationUpdateAccessibilityRequestCedarSystemArgs = {
  input?: InputMaybe<UpdateAccessibilityRequestCedarSystemInput>;
};


/** Defines the mutations for the schema */
export type MutationUpdateAccessibilityRequestStatusArgs = {
  input?: InputMaybe<UpdateAccessibilityRequestStatus>;
};


/** Defines the mutations for the schema */
export type MutationUpdateSystemIntakeAdminLeadArgs = {
  input: UpdateSystemIntakeAdminLeadInput;
};


/** Defines the mutations for the schema */
export type MutationUpdateSystemIntakeContactArgs = {
  input: UpdateSystemIntakeContactInput;
};


/** Defines the mutations for the schema */
export type MutationUpdateSystemIntakeContactDetailsArgs = {
  input: UpdateSystemIntakeContactDetailsInput;
};


/** Defines the mutations for the schema */
export type MutationUpdateSystemIntakeContractDetailsArgs = {
  input: UpdateSystemIntakeContractDetailsInput;
};


/** Defines the mutations for the schema */
export type MutationUpdateSystemIntakeRequestDetailsArgs = {
  input: UpdateSystemIntakeRequestDetailsInput;
};


/** Defines the mutations for the schema */
export type MutationUpdateSystemIntakeReviewDatesArgs = {
  input: UpdateSystemIntakeReviewDatesInput;
};


/** Defines the mutations for the schema */
export type MutationUpdateTestDateArgs = {
  input: UpdateTestDateInput;
};

/** Query definition for the schema */
export type Query = {
  __typename?: 'Query';
  accessibilityRequest?: Maybe<AccessibilityRequest>;
  accessibilityRequests?: Maybe<AccessibilityRequestsConnection>;
  cedarAuthorityToOperate: Array<CedarAuthorityToOperate>;
  cedarPersonsByCommonName: Array<UserInfo>;
  cedarSystem?: Maybe<CedarSystem>;
  cedarSystemBookmarks: Array<CedarSystemBookmark>;
  cedarSystemDetails?: Maybe<CedarSystemDetails>;
  cedarSystems?: Maybe<Array<Maybe<CedarSystem>>>;
  cedarThreat: Array<CedarThreat>;
  currentUser?: Maybe<CurrentUser>;
  deployments: Array<CedarDeployment>;
  exchanges: Array<CedarExchange>;
  requests?: Maybe<RequestsConnection>;
  roles: Array<CedarRole>;
  systemIntake?: Maybe<SystemIntake>;
  systemIntakeContacts: SystemIntakeContactsPayload;
  systems?: Maybe<SystemConnection>;
  urls: Array<CedarUrl>;
};


/** Query definition for the schema */
export type QueryAccessibilityRequestArgs = {
  id: Scalars['UUID'];
};


/** Query definition for the schema */
export type QueryAccessibilityRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** Query definition for the schema */
export type QueryCedarAuthorityToOperateArgs = {
  cedarSystemID: Scalars['String'];
};


/** Query definition for the schema */
export type QueryCedarPersonsByCommonNameArgs = {
  commonName: Scalars['String'];
};


/** Query definition for the schema */
export type QueryCedarSystemArgs = {
  cedarSystemId: Scalars['String'];
};


/** Query definition for the schema */
export type QueryCedarSystemDetailsArgs = {
  cedarSystemId: Scalars['String'];
};


/** Query definition for the schema */
export type QueryCedarThreatArgs = {
  cedarSystemId: Scalars['String'];
};


/** Query definition for the schema */
export type QueryDeploymentsArgs = {
  cedarSystemId: Scalars['String'];
  deploymentType?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};


/** Query definition for the schema */
export type QueryExchangesArgs = {
  cedarSystemId: Scalars['String'];
};


/** Query definition for the schema */
export type QueryRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** Query definition for the schema */
export type QueryRolesArgs = {
  cedarSystemId: Scalars['String'];
  roleTypeID?: InputMaybe<Scalars['String']>;
};


/** Query definition for the schema */
export type QuerySystemIntakeArgs = {
  id: Scalars['UUID'];
};


/** Query definition for the schema */
export type QuerySystemIntakeContactsArgs = {
  id: Scalars['UUID'];
};


/** Query definition for the schema */
export type QuerySystemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** Query definition for the schema */
export type QueryUrlsArgs = {
  cedarSystemId: Scalars['String'];
};

/** Input data for rejection of a system's IT governance request */
export type RejectIntakeInput = {
  feedback: Scalars['String'];
  intakeId: Scalars['UUID'];
  nextSteps?: InputMaybe<Scalars['String']>;
  notificationRecipients?: InputMaybe<EmailNotificationRecipients>;
  reason: Scalars['String'];
  shouldSendEmail?: Scalars['Boolean'];
};

/** Represents a request being made with the EASi system */
export type Request = {
  __typename?: 'Request';
  id: Scalars['UUID'];
  lcid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nextMeetingDate?: Maybe<Scalars['Time']>;
  status: Scalars['String'];
  statusCreatedAt?: Maybe<Scalars['Time']>;
  submittedAt?: Maybe<Scalars['Time']>;
  type: RequestType;
};

export type RequestEdge = {
  __typename?: 'RequestEdge';
  node: Request;
};

/** Indicates the type of a request being made with the EASi system */
export enum RequestType {
  AccessibilityRequest = 'ACCESSIBILITY_REQUEST',
  GovernanceRequest = 'GOVERNANCE_REQUEST'
}

export type RequestsConnection = {
  __typename?: 'RequestsConnection';
  edges: Array<RequestEdge>;
};

/** A user role associated with a job code */
export enum Role {
  /** A 508 Tester */
  Easi_508Tester = 'EASI_508_TESTER',
  /** A 508 request program team member or tester */
  Easi_508TesterOrUser = 'EASI_508_TESTER_OR_USER',
  /** A 508 request program team member */
  Easi_508User = 'EASI_508_USER',
  /** A member of the GRT */
  EasiGovteam = 'EASI_GOVTEAM',
  /** A generic EASi user */
  EasiUser = 'EASI_USER'
}

export type SendCantFindSomethingEmailInput = {
  body: Scalars['String'];
};

/** The inputs to the user feedback form */
export type SendFeedbackEmailInput = {
  canBeContacted: Scalars['Boolean'];
  cmsRole: Scalars['String'];
  didntNeedHelpAnswering: Scalars['String'];
  easiServicesUsed: Array<Scalars['String']>;
  hadAccessToInformation: Scalars['String'];
  howCanWeImprove: Scalars['String'];
  howSatisfied: Scalars['String'];
  isAnonymous: Scalars['Boolean'];
  questionsWereRelevant: Scalars['String'];
  systemEasyToUse: Scalars['String'];
};

export type SendReportAProblemEmailInput = {
  canBeContacted: Scalars['Boolean'];
  easiService: Scalars['String'];
  howSevereWasTheProblem: Scalars['String'];
  isAnonymous: Scalars['Boolean'];
  whatWentWrong: Scalars['String'];
  whatWereYouDoing: Scalars['String'];
};

/** Input to submit an intake for review */
export type SubmitIntakeInput = {
  id: Scalars['UUID'];
};

/**
 * A System is derived from a system intake and represents a computer system
 * managed by CMS
 */
export type System = {
  __typename?: 'System';
  businessOwner: BusinessOwner;
  id: Scalars['UUID'];
  lcid: Scalars['String'];
  name: Scalars['String'];
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges: Array<SystemEdge>;
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  node: System;
};

/** Represents an IT governance request for a system */
export type SystemIntake = {
  __typename?: 'SystemIntake';
  actions: Array<SystemIntakeAction>;
  adminLead?: Maybe<Scalars['String']>;
  archivedAt?: Maybe<Scalars['Time']>;
  businessCase?: Maybe<BusinessCase>;
  businessCaseId?: Maybe<Scalars['UUID']>;
  businessNeed?: Maybe<Scalars['String']>;
  businessOwner: SystemIntakeBusinessOwner;
  businessSolution?: Maybe<Scalars['String']>;
  cedarSystemId?: Maybe<Scalars['String']>;
  contract: SystemIntakeContract;
  costs: SystemIntakeCosts;
  createdAt: Scalars['Time'];
  currentStage?: Maybe<Scalars['String']>;
  decidedAt?: Maybe<Scalars['Time']>;
  decisionNextSteps?: Maybe<Scalars['String']>;
  eaCollaborator?: Maybe<Scalars['String']>;
  eaCollaboratorName?: Maybe<Scalars['String']>;
  euaUserId: Scalars['String'];
  existingFunding?: Maybe<Scalars['Boolean']>;
  fundingSources: Array<SystemIntakeFundingSource>;
  governanceTeams: SystemIntakeGovernanceTeam;
  grbDate?: Maybe<Scalars['Time']>;
  grtDate?: Maybe<Scalars['Time']>;
  grtFeedbacks: Array<GrtFeedback>;
  grtReviewEmailBody?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  isso: SystemIntakeIsso;
  lastAdminNote: LastAdminNote;
  lcid?: Maybe<Scalars['String']>;
  lcidCostBaseline?: Maybe<Scalars['String']>;
  lcidExpiresAt?: Maybe<Scalars['Time']>;
  lcidScope?: Maybe<Scalars['String']>;
  needsEaSupport?: Maybe<Scalars['Boolean']>;
  notes: Array<SystemIntakeNote>;
  oitSecurityCollaborator?: Maybe<Scalars['String']>;
  oitSecurityCollaboratorName?: Maybe<Scalars['String']>;
  productManager: SystemIntakeProductManager;
  projectAcronym?: Maybe<Scalars['String']>;
  rejectionReason?: Maybe<Scalars['String']>;
  requestName?: Maybe<Scalars['String']>;
  requestType: SystemIntakeRequestType;
  requester: SystemIntakeRequester;
  status: SystemIntakeStatus;
  submittedAt?: Maybe<Scalars['Time']>;
  trbCollaborator?: Maybe<Scalars['String']>;
  trbCollaboratorName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

/** An action taken on a system intake, often resulting in a change in status. */
export type SystemIntakeAction = {
  __typename?: 'SystemIntakeAction';
  actor: SystemIntakeActionActor;
  createdAt: Scalars['Time'];
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  lcidExpirationChange?: Maybe<SystemIntakeLcidExpirationChange>;
  systemIntake: SystemIntake;
  type: SystemIntakeActionType;
};

/** The contact who is associated with an action being done to a system request */
export type SystemIntakeActionActor = {
  __typename?: 'SystemIntakeActionActor';
  email: Scalars['String'];
  name: Scalars['String'];
};

/** Represents the type of an action that is being done to a system request */
export enum SystemIntakeActionType {
  BizCaseNeedsChanges = 'BIZ_CASE_NEEDS_CHANGES',
  CreateBizCase = 'CREATE_BIZ_CASE',
  ExtendLcid = 'EXTEND_LCID',
  GuideReceivedClose = 'GUIDE_RECEIVED_CLOSE',
  IssueLcid = 'ISSUE_LCID',
  NeedBizCase = 'NEED_BIZ_CASE',
  NotItRequest = 'NOT_IT_REQUEST',
  NotRespondingClose = 'NOT_RESPONDING_CLOSE',
  NoGovernanceNeeded = 'NO_GOVERNANCE_NEEDED',
  ProvideFeedbackNeedBizCase = 'PROVIDE_FEEDBACK_NEED_BIZ_CASE',
  ProvideGrtFeedbackBizCaseDraft = 'PROVIDE_GRT_FEEDBACK_BIZ_CASE_DRAFT',
  ProvideGrtFeedbackBizCaseFinal = 'PROVIDE_GRT_FEEDBACK_BIZ_CASE_FINAL',
  ReadyForGrb = 'READY_FOR_GRB',
  ReadyForGrt = 'READY_FOR_GRT',
  Reject = 'REJECT',
  SendEmail = 'SEND_EMAIL',
  SubmitBizCase = 'SUBMIT_BIZ_CASE',
  SubmitFinalBizCase = 'SUBMIT_FINAL_BIZ_CASE',
  SubmitIntake = 'SUBMIT_INTAKE'
}

/** Represents the OIT business owner of a system */
export type SystemIntakeBusinessOwner = {
  __typename?: 'SystemIntakeBusinessOwner';
  component?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** The input data used to set the CMS business owner of a system */
export type SystemIntakeBusinessOwnerInput = {
  component: Scalars['String'];
  name: Scalars['String'];
};

/**
 * Represents a contact in OIT who is collaborating with the user
 * creating a system IT governance request
 */
export type SystemIntakeCollaborator = {
  __typename?: 'SystemIntakeCollaborator';
  acronym: Scalars['String'];
  collaborator: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  name: Scalars['String'];
};

/** The input data used to add an OIT collaborator for a system request */
export type SystemIntakeCollaboratorInput = {
  collaborator: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
};

/** Represents a contact associated with a system intake */
export type SystemIntakeContact = {
  __typename?: 'SystemIntakeContact';
  component: Scalars['String'];
  euaUserId: Scalars['String'];
  id: Scalars['UUID'];
  role: Scalars['String'];
  systemIntakeId: Scalars['UUID'];
};

/** The payload when retrieving system intake contacts */
export type SystemIntakeContactsPayload = {
  __typename?: 'SystemIntakeContactsPayload';
  invalidEUAIDs: Array<Scalars['String']>;
  systemIntakeContacts: Array<AugmentedSystemIntakeContact>;
};

/** Represents a contract for work on a system */
export type SystemIntakeContract = {
  __typename?: 'SystemIntakeContract';
  contractor?: Maybe<Scalars['String']>;
  endDate: ContractDate;
  hasContract?: Maybe<Scalars['String']>;
  startDate: ContractDate;
  vehicle?: Maybe<Scalars['String']>;
};

/** Input data containing information about a contract related to a system request */
export type SystemIntakeContractInput = {
  contractor?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  hasContract?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Time']>;
  vehicle?: InputMaybe<Scalars['String']>;
};

/** Represents expectations about a system's additional costs */
export type SystemIntakeCosts = {
  __typename?: 'SystemIntakeCosts';
  expectedIncreaseAmount?: Maybe<Scalars['String']>;
  isExpectingIncrease?: Maybe<Scalars['String']>;
};

/** Input data for estimated system cost increases associated with a system request */
export type SystemIntakeCostsInput = {
  expectedIncreaseAmount?: InputMaybe<Scalars['String']>;
  isExpectingIncrease?: InputMaybe<Scalars['String']>;
};

/** Represents the source of funding for a system */
export type SystemIntakeFundingSource = {
  __typename?: 'SystemIntakeFundingSource';
  fundingNumber?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  source?: Maybe<Scalars['String']>;
};

/** Represents the source of funding for a system */
export type SystemIntakeFundingSourceInput = {
  fundingNumber?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};

/** The input required to specify the funding source(s) for a system intake */
export type SystemIntakeFundingSourcesInput = {
  existingFunding?: InputMaybe<Scalars['Boolean']>;
  fundingSources: Array<SystemIntakeFundingSourceInput>;
};

/** Contains multiple system request collaborators, if any */
export type SystemIntakeGovernanceTeam = {
  __typename?: 'SystemIntakeGovernanceTeam';
  isPresent?: Maybe<Scalars['Boolean']>;
  teams?: Maybe<Array<SystemIntakeCollaborator>>;
};

/** The input data used to set the list of OIT collaborators for a system request */
export type SystemIntakeGovernanceTeamInput = {
  isPresent?: InputMaybe<Scalars['Boolean']>;
  teams?: InputMaybe<Array<InputMaybe<SystemIntakeCollaboratorInput>>>;
};

/**
 * The Information System Security Officer (ISSO) that is
 * assicuated with a system request, if any
 */
export type SystemIntakeIsso = {
  __typename?: 'SystemIntakeISSO';
  isPresent?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

/** The input data used to set the ISSO associated with a system request, if any */
export type SystemIntakeIssoInput = {
  isPresent?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/**
 * Contains the data needed to change the expiration date of a system request's
 * lifecycle ID
 */
export type SystemIntakeLcidExpirationChange = {
  __typename?: 'SystemIntakeLCIDExpirationChange';
  newCostBaseline?: Maybe<Scalars['String']>;
  newDate: Scalars['Time'];
  newNextSteps?: Maybe<Scalars['String']>;
  newScope?: Maybe<Scalars['String']>;
  previousCostBaseline?: Maybe<Scalars['String']>;
  previousDate: Scalars['Time'];
  previousNextSteps?: Maybe<Scalars['String']>;
  previousScope?: Maybe<Scalars['String']>;
};

/** A note added to a system request */
export type SystemIntakeNote = {
  __typename?: 'SystemIntakeNote';
  author: SystemIntakeNoteAuthor;
  content: Scalars['String'];
  createdAt: Scalars['Time'];
  id: Scalars['UUID'];
};

/** The author of a note added to a system request */
export type SystemIntakeNoteAuthor = {
  __typename?: 'SystemIntakeNoteAuthor';
  eua: Scalars['String'];
  name: Scalars['String'];
};

/** The product manager associated with a system */
export type SystemIntakeProductManager = {
  __typename?: 'SystemIntakeProductManager';
  component?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** The input data used to set the CMS product manager/lead of a system */
export type SystemIntakeProductManagerInput = {
  component: Scalars['String'];
  name: Scalars['String'];
};

/** The type of an IT governance (system) request */
export enum SystemIntakeRequestType {
  MajorChanges = 'MAJOR_CHANGES',
  New = 'NEW',
  Recompete = 'RECOMPETE',
  Shutdown = 'SHUTDOWN'
}

/** The contact who made an IT governance request for a system */
export type SystemIntakeRequester = {
  __typename?: 'SystemIntakeRequester';
  component?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** The input data used to set the requester of a system request */
export type SystemIntakeRequesterInput = {
  name: Scalars['String'];
};

/**
 * The input data used to set the requester for a system request along with the
 * requester's business component
 */
export type SystemIntakeRequesterWithComponentInput = {
  component: Scalars['String'];
  name: Scalars['String'];
};

/** The status of a system's IT governence request */
export enum SystemIntakeStatus {
  BizCaseChangesNeeded = 'BIZ_CASE_CHANGES_NEEDED',
  BizCaseDraft = 'BIZ_CASE_DRAFT',
  BizCaseDraftSubmitted = 'BIZ_CASE_DRAFT_SUBMITTED',
  BizCaseFinalNeeded = 'BIZ_CASE_FINAL_NEEDED',
  BizCaseFinalSubmitted = 'BIZ_CASE_FINAL_SUBMITTED',
  IntakeDraft = 'INTAKE_DRAFT',
  IntakeSubmitted = 'INTAKE_SUBMITTED',
  LcidIssued = 'LCID_ISSUED',
  NeedBizCase = 'NEED_BIZ_CASE',
  NotApproved = 'NOT_APPROVED',
  /** Request is not an IT request */
  NotItRequest = 'NOT_IT_REQUEST',
  /** Request requires no further governance */
  NoGovernance = 'NO_GOVERNANCE',
  /** Request is ready for Governance Review Board meeting */
  ReadyForGrb = 'READY_FOR_GRB',
  /** Request is ready for Governance Review Team meeting */
  ReadyForGrt = 'READY_FOR_GRT',
  /** Request for shutdown of existing system is complete */
  ShutdownComplete = 'SHUTDOWN_COMPLETE',
  /** Request for shutdown of existing system is in progress */
  ShutdownInProgress = 'SHUTDOWN_IN_PROGRESS',
  Withdrawn = 'WITHDRAWN'
}

/** A 508 test instance */
export type TestDate = {
  __typename?: 'TestDate';
  date: Scalars['Time'];
  id: Scalars['UUID'];
  score?: Maybe<Scalars['Int']>;
  testType: TestDateTestType;
};

/** The type of test added to a 508/accessibility request */
export enum TestDateTestType {
  Initial = 'INITIAL',
  Remediation = 'REMEDIATION'
}

/** Parameters for updating a 508/accessibility request's associated CEDAR system */
export type UpdateAccessibilityRequestCedarSystemInput = {
  cedarSystemId: Scalars['String'];
  id: Scalars['UUID'];
};

/** Result of updating a 508/accessibility request's associated CEDAR system */
export type UpdateAccessibilityRequestCedarSystemPayload = {
  __typename?: 'UpdateAccessibilityRequestCedarSystemPayload';
  accessibilityRequest?: Maybe<AccessibilityRequest>;
  id: Scalars['UUID'];
};

/** Parameters for updating a 508/accessibility request's status */
export type UpdateAccessibilityRequestStatus = {
  requestID: Scalars['UUID'];
  status: AccessibilityRequestStatus;
};

/** Result of updating a 508/accessibility request's status */
export type UpdateAccessibilityRequestStatusPayload = {
  __typename?: 'UpdateAccessibilityRequestStatusPayload';
  euaUserId: Scalars['String'];
  id: Scalars['UUID'];
  requestID: Scalars['UUID'];
  status: AccessibilityRequestStatus;
  userErrors?: Maybe<Array<UserError>>;
};

/**
 * Input data used to update the admin lead assigned to a system IT governance
 * request
 */
export type UpdateSystemIntakeAdminLeadInput = {
  adminLead: Scalars['String'];
  id: Scalars['UUID'];
};

/**
 * The input data used to update the contact details of the people associated with
 * a system request
 */
export type UpdateSystemIntakeContactDetailsInput = {
  businessOwner: SystemIntakeBusinessOwnerInput;
  governanceTeams: SystemIntakeGovernanceTeamInput;
  id: Scalars['UUID'];
  isso: SystemIntakeIssoInput;
  productManager: SystemIntakeProductManagerInput;
  requester: SystemIntakeRequesterWithComponentInput;
};

/** The data needed to update a contact associated with a system intake */
export type UpdateSystemIntakeContactInput = {
  component: Scalars['String'];
  euaUserId: Scalars['String'];
  id: Scalars['UUID'];
  role: Scalars['String'];
  systemIntakeId: Scalars['UUID'];
};

/** Input data for updating contract details related to a system request */
export type UpdateSystemIntakeContractDetailsInput = {
  contract?: InputMaybe<SystemIntakeContractInput>;
  costs?: InputMaybe<SystemIntakeCostsInput>;
  fundingSources?: InputMaybe<SystemIntakeFundingSourcesInput>;
  id: Scalars['UUID'];
};

/** The payload for updating a system's IT governance request */
export type UpdateSystemIntakePayload = {
  __typename?: 'UpdateSystemIntakePayload';
  systemIntake?: Maybe<SystemIntake>;
  userErrors?: Maybe<Array<UserError>>;
};

/** Input to update some fields on a system request */
export type UpdateSystemIntakeRequestDetailsInput = {
  businessNeed?: InputMaybe<Scalars['String']>;
  businessSolution?: InputMaybe<Scalars['String']>;
  cedarSystemId?: InputMaybe<Scalars['String']>;
  currentStage?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  needsEaSupport?: InputMaybe<Scalars['Boolean']>;
  requestName?: InputMaybe<Scalars['String']>;
};

/** Input data used to update GRT and GRB dates for a system request */
export type UpdateSystemIntakeReviewDatesInput = {
  grbDate?: InputMaybe<Scalars['Time']>;
  grtDate?: InputMaybe<Scalars['Time']>;
  id: Scalars['UUID'];
};

/** The input required to update a test date/score */
export type UpdateTestDateInput = {
  date: Scalars['Time'];
  id: Scalars['UUID'];
  score?: InputMaybe<Scalars['Int']>;
  testType: TestDateTestType;
};

/** The payload for the input required to update a test date/score */
export type UpdateTestDatePayload = {
  __typename?: 'UpdateTestDatePayload';
  testDate?: Maybe<TestDate>;
  userErrors?: Maybe<Array<UserError>>;
};

/**
 * UserError represents application-level errors that are the result of
 * either user or application developer error.
 */
export type UserError = {
  __typename?: 'UserError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

/** Represents a person response from CEDAR LDAP */
export type UserInfo = {
  __typename?: 'UserInfo';
  commonName: Scalars['String'];
  email: Scalars['String'];
  euaUserId: Scalars['String'];
};

export type CreateAccessibilityRequestDocumentMutationVariables = Exact<{
  input: CreateAccessibilityRequestDocumentInput;
}>;


export type CreateAccessibilityRequestDocumentMutation = { __typename?: 'Mutation', createAccessibilityRequestDocument?: { __typename?: 'CreateAccessibilityRequestDocumentPayload', accessibilityRequestDocument?: { __typename?: 'AccessibilityRequestDocument', id: any, mimeType: string, name: string, status: AccessibilityRequestDocumentStatus, uploadedAt: any, requestID: any } | null, userErrors?: Array<{ __typename?: 'UserError', message: string, path: Array<string> }> | null } | null };

export type DeleteAccessibilityRequestDocumentMutationVariables = Exact<{
  input: DeleteAccessibilityRequestDocumentInput;
}>;


export type DeleteAccessibilityRequestDocumentMutation = { __typename?: 'Mutation', deleteAccessibilityRequestDocument?: { __typename?: 'DeleteAccessibilityRequestDocumentPayload', id?: any | null } | null };

export type AddGrtFeedbackKeepDraftBizCaseMutationVariables = Exact<{
  input: AddGrtFeedbackInput;
}>;


export type AddGrtFeedbackKeepDraftBizCaseMutation = { __typename?: 'Mutation', addGRTFeedbackAndKeepBusinessCaseInDraft?: { __typename?: 'AddGRTFeedbackPayload', id?: any | null } | null };

export type AddGrtFeedbackProgressToFinalMutationVariables = Exact<{
  input: AddGrtFeedbackInput;
}>;


export type AddGrtFeedbackProgressToFinalMutation = { __typename?: 'Mutation', addGRTFeedbackAndProgressToFinalBusinessCase?: { __typename?: 'AddGRTFeedbackPayload', id?: any | null } | null };

export type AddGrtFeedbackRequestBizCaseMutationVariables = Exact<{
  input: AddGrtFeedbackInput;
}>;


export type AddGrtFeedbackRequestBizCaseMutation = { __typename?: 'Mutation', addGRTFeedbackAndRequestBusinessCase?: { __typename?: 'AddGRTFeedbackPayload', id?: any | null } | null };

export type CreateAccessibilityRequestNoteMutationVariables = Exact<{
  input: CreateAccessibilityRequestNoteInput;
}>;


export type CreateAccessibilityRequestNoteMutation = { __typename?: 'Mutation', createAccessibilityRequestNote?: { __typename?: 'CreateAccessibilityRequestNotePayload', accessibilityRequestNote: { __typename?: 'AccessibilityRequestNote', id: any, note: string, authorName: string, requestID: any, createdAt: any }, userErrors?: Array<{ __typename?: 'UserError', message: string, path: Array<string> }> | null } | null };

export type CreateAccessibilityRequestMutationVariables = Exact<{
  input: CreateAccessibilityRequestInput;
}>;


export type CreateAccessibilityRequestMutation = { __typename?: 'Mutation', createAccessibilityRequest?: { __typename?: 'CreateAccessibilityRequestPayload', accessibilityRequest?: { __typename?: 'AccessibilityRequest', id: any, name: string } | null, userErrors?: Array<{ __typename?: 'UserError', message: string, path: Array<string> }> | null } | null };

export type CreateCedarSystemBookmarkMutationVariables = Exact<{
  input: CreateCedarSystemBookmarkInput;
}>;


export type CreateCedarSystemBookmarkMutation = { __typename?: 'Mutation', createCedarSystemBookmark?: { __typename?: 'CreateCedarSystemBookmarkPayload', cedarSystemBookmark?: { __typename?: 'CedarSystemBookmark', cedarSystemId: string } | null } | null };

export type CreateSystemIntakeActionBusinessCaseNeededMutationVariables = Exact<{
  input: BasicActionInput;
}>;


export type CreateSystemIntakeActionBusinessCaseNeededMutation = { __typename?: 'Mutation', createSystemIntakeActionBusinessCaseNeeded?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', status: SystemIntakeStatus, id: any } | null } | null };

export type CreateSystemIntakeActionBusinessCaseNeedsChangesMutationVariables = Exact<{
  input: BasicActionInput;
}>;


export type CreateSystemIntakeActionBusinessCaseNeedsChangesMutation = { __typename?: 'Mutation', createSystemIntakeActionBusinessCaseNeedsChanges?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', status: SystemIntakeStatus, id: any } | null } | null };

export type CreateSystemIntakeActionExtendLifecycleIdMutationVariables = Exact<{
  input: CreateSystemIntakeActionExtendLifecycleIdInput;
}>;


export type CreateSystemIntakeActionExtendLifecycleIdMutation = { __typename?: 'Mutation', createSystemIntakeActionExtendLifecycleId?: { __typename?: 'CreateSystemIntakeActionExtendLifecycleIdPayload', systemIntake?: { __typename?: 'SystemIntake', id: any, lcidScope?: string | null, decisionNextSteps?: string | null, lcidExpiresAt?: any | null, lcidCostBaseline?: string | null } | null } | null };

export type CreateSystemIntakeActionGuideReceievedCloseMutationVariables = Exact<{
  input: BasicActionInput;
}>;


export type CreateSystemIntakeActionGuideReceievedCloseMutation = { __typename?: 'Mutation', createSystemIntakeActionGuideReceievedClose?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', status: SystemIntakeStatus, id: any } | null } | null };

export type CreateSystemIntakeActionNoGovernanceNeededMutationVariables = Exact<{
  input: BasicActionInput;
}>;


export type CreateSystemIntakeActionNoGovernanceNeededMutation = { __typename?: 'Mutation', createSystemIntakeActionNoGovernanceNeeded?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', status: SystemIntakeStatus, id: any } | null } | null };

export type CreateSystemIntakeActionNotItRequestMutationVariables = Exact<{
  input: BasicActionInput;
}>;


export type CreateSystemIntakeActionNotItRequestMutation = { __typename?: 'Mutation', createSystemIntakeActionNotItRequest?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', status: SystemIntakeStatus, id: any } | null } | null };

export type CreateSystemIntakeActionNotRespondingCloseMutationVariables = Exact<{
  input: BasicActionInput;
}>;


export type CreateSystemIntakeActionNotRespondingCloseMutation = { __typename?: 'Mutation', createSystemIntakeActionNotRespondingClose?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', status: SystemIntakeStatus, id: any } | null } | null };

export type CreateSystemIntakeActionReadyForGrtMutationVariables = Exact<{
  input: BasicActionInput;
}>;


export type CreateSystemIntakeActionReadyForGrtMutation = { __typename?: 'Mutation', createSystemIntakeActionReadyForGRT?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', status: SystemIntakeStatus, id: any } | null } | null };

export type CreateSystemIntakeActionSendEmailMutationVariables = Exact<{
  input: BasicActionInput;
}>;


export type CreateSystemIntakeActionSendEmailMutation = { __typename?: 'Mutation', createSystemIntakeActionSendEmail?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', status: SystemIntakeStatus, id: any } | null } | null };

export type CreateSystemIntakeNoteMutationVariables = Exact<{
  input: CreateSystemIntakeNoteInput;
}>;


export type CreateSystemIntakeNoteMutation = { __typename?: 'Mutation', createSystemIntakeNote?: { __typename?: 'SystemIntakeNote', id: any, createdAt: any, content: string, author: { __typename?: 'SystemIntakeNoteAuthor', name: string, eua: string } } | null };

export type CreateTestDateMutationVariables = Exact<{
  input: CreateTestDateInput;
}>;


export type CreateTestDateMutation = { __typename?: 'Mutation', createTestDate?: { __typename?: 'CreateTestDatePayload', testDate?: { __typename?: 'TestDate', id: any } | null } | null };

export type DeleteAccessibilityRequestMutationVariables = Exact<{
  input: DeleteAccessibilityRequestInput;
}>;


export type DeleteAccessibilityRequestMutation = { __typename?: 'Mutation', deleteAccessibilityRequest?: { __typename?: 'DeleteAccessibilityRequestPayload', id?: any | null } | null };

export type DeleteCedarSystemBookmarkMutationVariables = Exact<{
  input: CreateCedarSystemBookmarkInput;
}>;


export type DeleteCedarSystemBookmarkMutation = { __typename?: 'Mutation', deleteCedarSystemBookmark?: { __typename?: 'DeleteCedarSystemBookmarkPayload', cedarSystemId: string } | null };

export type DeleteTestDateMutationVariables = Exact<{
  input: DeleteTestDateInput;
}>;


export type DeleteTestDateMutation = { __typename?: 'Mutation', deleteTestDate?: { __typename?: 'DeleteTestDatePayload', testDate?: { __typename?: 'TestDate', id: any } | null } | null };

export type GeneratePresignedUploadUrlMutationVariables = Exact<{
  input: GeneratePresignedUploadUrlInput;
}>;


export type GeneratePresignedUploadUrlMutation = { __typename?: 'Mutation', generatePresignedUploadURL?: { __typename?: 'GeneratePresignedUploadURLPayload', url?: string | null, userErrors?: Array<{ __typename?: 'UserError', message: string, path: Array<string> }> | null } | null };

export type GetAccessibilityRequestAccessibilityTeamOnlyQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetAccessibilityRequestAccessibilityTeamOnlyQuery = { __typename?: 'Query', accessibilityRequest?: { __typename?: 'AccessibilityRequest', id: any, euaUserId: string, submittedAt: any, name: string, system?: { __typename?: 'System', name: string, lcid: string, businessOwner: { __typename?: 'BusinessOwner', name: string, component: string } } | null, documents: Array<{ __typename?: 'AccessibilityRequestDocument', id: any, url: string, uploadedAt: any, status: AccessibilityRequestDocumentStatus, documentType: { __typename?: 'AccessibilityRequestDocumentType', commonType: AccessibilityRequestDocumentCommonType, otherTypeDescription?: string | null } }>, testDates: Array<{ __typename?: 'TestDate', id: any, testType: TestDateTestType, date: any, score?: number | null }>, statusRecord: { __typename?: 'AccessibilityRequestStatusRecord', status: AccessibilityRequestStatus }, notes: Array<{ __typename?: 'AccessibilityRequestNote', id: any, createdAt: any, authorName: string, note: string }> } | null };

export type AccessibilityRequestQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type AccessibilityRequestQuery = { __typename?: 'Query', accessibilityRequest?: { __typename?: 'AccessibilityRequest', id: any, name: string, statusRecord: { __typename?: 'AccessibilityRequestStatusRecord', status: AccessibilityRequestStatus } } | null };

export type GetAccessibilityRequestQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetAccessibilityRequestQuery = { __typename?: 'Query', accessibilityRequest?: { __typename?: 'AccessibilityRequest', id: any, euaUserId: string, submittedAt: any, name: string, system?: { __typename?: 'System', name: string, lcid: string, businessOwner: { __typename?: 'BusinessOwner', name: string, component: string } } | null, documents: Array<{ __typename?: 'AccessibilityRequestDocument', id: any, url: string, uploadedAt: any, status: AccessibilityRequestDocumentStatus, documentType: { __typename?: 'AccessibilityRequestDocumentType', commonType: AccessibilityRequestDocumentCommonType, otherTypeDescription?: string | null } }>, testDates: Array<{ __typename?: 'TestDate', id: any, testType: TestDateTestType, date: any, score?: number | null }>, statusRecord: { __typename?: 'AccessibilityRequestStatusRecord', status: AccessibilityRequestStatus } } | null };

export type GetAccessibilityRequestsQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type GetAccessibilityRequestsQuery = { __typename?: 'Query', accessibilityRequests?: { __typename?: 'AccessibilityRequestsConnection', edges: Array<{ __typename?: 'AccessibilityRequestEdge', node: { __typename?: 'AccessibilityRequest', id: any, name: string, submittedAt: any, relevantTestDate?: { __typename?: 'TestDate', date: any } | null, system?: { __typename?: 'System', lcid: string, businessOwner: { __typename?: 'BusinessOwner', name: string, component: string } } | null, statusRecord: { __typename?: 'AccessibilityRequestStatusRecord', status: AccessibilityRequestStatus, createdAt: any } } }> } | null };

export type GetAdminNotesAndActionsQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetAdminNotesAndActionsQuery = { __typename?: 'Query', systemIntake?: { __typename?: 'SystemIntake', lcid?: string | null, notes: Array<{ __typename?: 'SystemIntakeNote', id: any, createdAt: any, content: string, author: { __typename?: 'SystemIntakeNoteAuthor', name: string, eua: string } }>, actions: Array<{ __typename?: 'SystemIntakeAction', id: any, createdAt: any, feedback?: string | null, type: SystemIntakeActionType, lcidExpirationChange?: { __typename?: 'SystemIntakeLCIDExpirationChange', previousDate: any, newDate: any, previousScope?: string | null, newScope?: string | null, previousNextSteps?: string | null, newNextSteps?: string | null, previousCostBaseline?: string | null, newCostBaseline?: string | null } | null, actor: { __typename?: 'SystemIntakeActionActor', name: string, email: string } }> } | null };

export type GetCedarContactsQueryVariables = Exact<{
  commonName: Scalars['String'];
}>;


export type GetCedarContactsQuery = { __typename?: 'Query', cedarPersonsByCommonName: Array<{ __typename?: 'UserInfo', commonName: string, email: string, euaUserId: string }> };

export type GetCedarSystemBookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCedarSystemBookmarksQuery = { __typename?: 'Query', cedarSystemBookmarks: Array<{ __typename?: 'CedarSystemBookmark', euaUserId: string, cedarSystemId: string }> };

export type GetCedarSystemIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCedarSystemIdsQuery = { __typename?: 'Query', cedarSystems?: Array<{ __typename?: 'CedarSystem', id: string, name: string } | null> | null };

export type GetCedarSystemQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCedarSystemQuery = { __typename?: 'Query', cedarSystem?: { __typename?: 'CedarSystem', id: string, name: string, description?: string | null, acronym?: string | null, status?: string | null, businessOwnerOrg?: string | null, businessOwnerOrgComp?: string | null, systemMaintainerOrg?: string | null, systemMaintainerOrgComp?: string | null } | null };

export type GetCedarSystemsAndBookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCedarSystemsAndBookmarksQuery = { __typename?: 'Query', cedarSystemBookmarks: Array<{ __typename?: 'CedarSystemBookmark', euaUserId: string, cedarSystemId: string }>, cedarSystems?: Array<{ __typename?: 'CedarSystem', id: string, name: string, description?: string | null, acronym?: string | null, status?: string | null, businessOwnerOrg?: string | null, businessOwnerOrgComp?: string | null, systemMaintainerOrg?: string | null, systemMaintainerOrgComp?: string | null } | null> | null };

export type GetCedarSystemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCedarSystemsQuery = { __typename?: 'Query', cedarSystems?: Array<{ __typename?: 'CedarSystem', id: string, name: string, description?: string | null, acronym?: string | null, status?: string | null, businessOwnerOrg?: string | null, businessOwnerOrgComp?: string | null, systemMaintainerOrg?: string | null, systemMaintainerOrgComp?: string | null } | null> | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'CurrentUser', launchDarkly: { __typename?: 'LaunchDarklySettings', userKey: string, signedHash: string } } | null };

export type GetGrtFeedbackQueryVariables = Exact<{
  intakeID: Scalars['UUID'];
}>;


export type GetGrtFeedbackQuery = { __typename?: 'Query', systemIntake?: { __typename?: 'SystemIntake', grtFeedbacks: Array<{ __typename?: 'GRTFeedback', id?: any | null, feedbackType?: GrtFeedbackType | null, feedback?: string | null, createdAt: any }> } | null };

export type GetRequestsQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type GetRequestsQuery = { __typename?: 'Query', requests?: { __typename?: 'RequestsConnection', edges: Array<{ __typename?: 'RequestEdge', node: { __typename?: 'Request', id: any, name?: string | null, submittedAt?: any | null, type: RequestType, status: string, statusCreatedAt?: any | null, lcid?: string | null, nextMeetingDate?: any | null } }> } | null };

export type GetSystemIntakeQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetSystemIntakeQuery = { __typename?: 'Query', systemIntake?: { __typename?: 'SystemIntake', id: any, adminLead?: string | null, businessNeed?: string | null, businessSolution?: string | null, currentStage?: string | null, decisionNextSteps?: string | null, grbDate?: any | null, grtDate?: any | null, existingFunding?: boolean | null, lcid?: string | null, lcidExpiresAt?: any | null, lcidScope?: string | null, lcidCostBaseline?: string | null, needsEaSupport?: boolean | null, rejectionReason?: string | null, requestName?: string | null, requestType: SystemIntakeRequestType, status: SystemIntakeStatus, grtReviewEmailBody?: string | null, decidedAt?: any | null, businessCaseId?: any | null, submittedAt?: any | null, updatedAt?: any | null, createdAt: any, archivedAt?: any | null, euaUserId: string, businessOwner: { __typename?: 'SystemIntakeBusinessOwner', component?: string | null, name?: string | null }, contract: { __typename?: 'SystemIntakeContract', contractor?: string | null, hasContract?: string | null, vehicle?: string | null, endDate: { __typename?: 'ContractDate', day?: string | null, month?: string | null, year?: string | null }, startDate: { __typename?: 'ContractDate', day?: string | null, month?: string | null, year?: string | null } }, costs: { __typename?: 'SystemIntakeCosts', isExpectingIncrease?: string | null, expectedIncreaseAmount?: string | null }, grtFeedbacks: Array<{ __typename?: 'GRTFeedback', feedback?: string | null, feedbackType?: GrtFeedbackType | null, createdAt: any }>, governanceTeams: { __typename?: 'SystemIntakeGovernanceTeam', isPresent?: boolean | null, teams?: Array<{ __typename?: 'SystemIntakeCollaborator', acronym: string, collaborator: string, key: string, label: string, name: string }> | null }, isso: { __typename?: 'SystemIntakeISSO', isPresent?: boolean | null, name?: string | null }, fundingSources: Array<{ __typename?: 'SystemIntakeFundingSource', source?: string | null, fundingNumber?: string | null }>, productManager: { __typename?: 'SystemIntakeProductManager', component?: string | null, name?: string | null }, requester: { __typename?: 'SystemIntakeRequester', component?: string | null, email?: string | null, name: string }, lastAdminNote: { __typename?: 'LastAdminNote', content?: string | null, createdAt?: any | null } } | null };

export type GetSystemProfileQueryVariables = Exact<{
  cedarSystemId: Scalars['String'];
}>;


export type GetSystemProfileQuery = { __typename?: 'Query', cedarAuthorityToOperate: Array<{ __typename?: 'CedarAuthorityToOperate', uuid: string, tlcPhase?: string | null, dateAuthorizationMemoExpires?: any | null, countOfOpenPoams: number, lastAssessmentDate?: any | null }>, cedarThreat: Array<{ __typename?: 'CedarThreat', weaknessRiskLevel?: string | null }>, cedarSystemDetails?: { __typename?: 'CedarSystemDetails', businessOwnerInformation: { __typename?: 'CedarBusinessOwnerInformation', isCmsOwned?: boolean | null, numberOfContractorFte?: string | null, numberOfFederalFte?: string | null, numberOfSupportedUsersPerMonth?: string | null }, cedarSystem: { __typename?: 'CedarSystem', id: string, name: string, description?: string | null, acronym?: string | null, status?: string | null, businessOwnerOrg?: string | null, businessOwnerOrgComp?: string | null, systemMaintainerOrg?: string | null, systemMaintainerOrgComp?: string | null }, deployments: Array<{ __typename?: 'CedarDeployment', id: string, deploymentType?: string | null, name: string, dataCenter?: { __typename?: 'CedarDataCenter', name?: string | null } | null }>, roles: Array<{ __typename?: 'CedarRole', application: string, objectID: string, roleTypeID: string, assigneeType?: CedarAssigneeType | null, assigneeUsername?: string | null, assigneeEmail?: string | null, assigneeOrgID?: string | null, assigneeOrgName?: string | null, assigneeFirstName?: string | null, assigneeLastName?: string | null, roleTypeName?: string | null, roleID?: string | null }>, urls: Array<{ __typename?: 'CedarURL', id: string, address?: string | null, isAPIEndpoint?: boolean | null, isBehindWebApplicationFirewall?: boolean | null, isVersionCodeRepository?: boolean | null, urlHostingEnv?: string | null }>, systemMaintainerInformation: { __typename?: 'CedarSystemMaintainerInformation', agileUsed?: boolean | null, deploymentFrequency?: string | null, devCompletionPercent?: string | null, devWorkDescription?: string | null, netAccessibility?: string | null } } | null };

export type GetSystemsQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type GetSystemsQuery = { __typename?: 'Query', systems?: { __typename?: 'SystemConnection', edges: Array<{ __typename?: 'SystemEdge', node: { __typename?: 'System', id: any, lcid: string, name: string, businessOwner: { __typename?: 'BusinessOwner', name: string, component: string } } }> } | null };

export type IssueLifecycleIdMutationVariables = Exact<{
  input: IssueLifecycleIdInput;
}>;


export type IssueLifecycleIdMutation = { __typename?: 'Mutation', issueLifecycleId?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', decisionNextSteps?: string | null, id: any, lcid?: string | null, lcidExpiresAt?: any | null, lcidScope?: string | null } | null } | null };

export type MarkSystemIntakeReadyForGrbMutationVariables = Exact<{
  input: AddGrtFeedbackInput;
}>;


export type MarkSystemIntakeReadyForGrbMutation = { __typename?: 'Mutation', markSystemIntakeReadyForGRB?: { __typename?: 'AddGRTFeedbackPayload', id?: any | null } | null };

export type RejectIntakeMutationVariables = Exact<{
  input: RejectIntakeInput;
}>;


export type RejectIntakeMutation = { __typename?: 'Mutation', rejectIntake?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', decisionNextSteps?: string | null, id: any, rejectionReason?: string | null } | null } | null };

export type SendFeedbackEmailMutationVariables = Exact<{
  input: SendFeedbackEmailInput;
}>;


export type SendFeedbackEmailMutation = { __typename?: 'Mutation', sendFeedbackEmail?: string | null };

export type GetSystemIntakeContactsQueryQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetSystemIntakeContactsQueryQuery = { __typename?: 'Query', systemIntakeContacts: { __typename?: 'SystemIntakeContactsPayload', systemIntakeContacts: Array<{ __typename?: 'AugmentedSystemIntakeContact', id: any, euaUserId: string, systemIntakeId: any, component: string, role: string, commonName?: string | null, email?: string | null }> } };

export type CreateSystemIntakeContactMutationVariables = Exact<{
  input: CreateSystemIntakeContactInput;
}>;


export type CreateSystemIntakeContactMutation = { __typename?: 'Mutation', createSystemIntakeContact?: { __typename?: 'CreateSystemIntakeContactPayload', systemIntakeContact?: { __typename?: 'SystemIntakeContact', euaUserId: string, systemIntakeId: any, component: string, role: string } | null } | null };

export type UpdateSystemIntakeContactMutationVariables = Exact<{
  input: UpdateSystemIntakeContactInput;
}>;


export type UpdateSystemIntakeContactMutation = { __typename?: 'Mutation', updateSystemIntakeContact?: { __typename?: 'CreateSystemIntakeContactPayload', systemIntakeContact?: { __typename?: 'SystemIntakeContact', id: any, euaUserId: string, systemIntakeId: any, component: string, role: string } | null } | null };

export type DeleteSystemIntakeContactMutationVariables = Exact<{
  input: DeleteSystemIntakeContactInput;
}>;


export type DeleteSystemIntakeContactMutation = { __typename?: 'Mutation', deleteSystemIntakeContact?: { __typename?: 'DeleteSystemIntakeContactPayload', systemIntakeContact?: { __typename?: 'SystemIntakeContact', id: any, euaUserId: string, systemIntakeId: any, component: string, role: string } | null } | null };

export type CreateSystemIntakeMutationVariables = Exact<{
  input: CreateSystemIntakeInput;
}>;


export type CreateSystemIntakeMutation = { __typename?: 'Mutation', createSystemIntake?: { __typename?: 'SystemIntake', id: any, status: SystemIntakeStatus, requestType: SystemIntakeRequestType, requester: { __typename?: 'SystemIntakeRequester', name: string } } | null };

export type UpdateSystemIntakeContractDetailsMutationVariables = Exact<{
  input: UpdateSystemIntakeContractDetailsInput;
}>;


export type UpdateSystemIntakeContractDetailsMutation = { __typename?: 'Mutation', updateSystemIntakeContractDetails?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', id: any, currentStage?: string | null, fundingSources: Array<{ __typename?: 'SystemIntakeFundingSource', source?: string | null, fundingNumber?: string | null }>, costs: { __typename?: 'SystemIntakeCosts', expectedIncreaseAmount?: string | null, isExpectingIncrease?: string | null }, contract: { __typename?: 'SystemIntakeContract', contractor?: string | null, hasContract?: string | null, vehicle?: string | null, endDate: { __typename?: 'ContractDate', day?: string | null, month?: string | null, year?: string | null }, startDate: { __typename?: 'ContractDate', day?: string | null, month?: string | null, year?: string | null } } } | null } | null };

export type UpdateSystemIntakeRequestDetailsMutationVariables = Exact<{
  input: UpdateSystemIntakeRequestDetailsInput;
}>;


export type UpdateSystemIntakeRequestDetailsMutation = { __typename?: 'Mutation', updateSystemIntakeRequestDetails?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', id: any, requestName?: string | null, businessNeed?: string | null, businessSolution?: string | null, needsEaSupport?: boolean | null } | null } | null };

export type UpdateSystemIntakeContactDetailsMutationVariables = Exact<{
  input: UpdateSystemIntakeContactDetailsInput;
}>;


export type UpdateSystemIntakeContactDetailsMutation = { __typename?: 'Mutation', updateSystemIntakeContactDetails?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', id: any, businessOwner: { __typename?: 'SystemIntakeBusinessOwner', component?: string | null, name?: string | null }, governanceTeams: { __typename?: 'SystemIntakeGovernanceTeam', isPresent?: boolean | null, teams?: Array<{ __typename?: 'SystemIntakeCollaborator', acronym: string, collaborator: string, key: string, label: string, name: string }> | null }, isso: { __typename?: 'SystemIntakeISSO', isPresent?: boolean | null, name?: string | null }, productManager: { __typename?: 'SystemIntakeProductManager', component?: string | null, name?: string | null }, requester: { __typename?: 'SystemIntakeRequester', component?: string | null, name: string } } | null } | null };

export type SubmitIntakeMutationVariables = Exact<{
  input: SubmitIntakeInput;
}>;


export type SubmitIntakeMutation = { __typename?: 'Mutation', submitIntake?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', status: SystemIntakeStatus, id: any } | null } | null };

export type UpdateAccessibilityRequestMutationVariables = Exact<{
  input: UpdateAccessibilityRequestCedarSystemInput;
}>;


export type UpdateAccessibilityRequestMutation = { __typename?: 'Mutation', updateAccessibilityRequestCedarSystem?: { __typename?: 'UpdateAccessibilityRequestCedarSystemPayload', id: any, accessibilityRequest?: { __typename?: 'AccessibilityRequest', id: any, name: string } | null } | null };

export type UpdateAccessibilityRequestStatusMutationVariables = Exact<{
  input: UpdateAccessibilityRequestStatus;
}>;


export type UpdateAccessibilityRequestStatusMutation = { __typename?: 'Mutation', updateAccessibilityRequestStatus?: { __typename?: 'UpdateAccessibilityRequestStatusPayload', id: any, requestID: any, status: AccessibilityRequestStatus, euaUserId: string, userErrors?: Array<{ __typename?: 'UserError', message: string, path: Array<string> }> | null } | null };

export type UpdateSystemIntakeAdminLeadMutationVariables = Exact<{
  input: UpdateSystemIntakeAdminLeadInput;
}>;


export type UpdateSystemIntakeAdminLeadMutation = { __typename?: 'Mutation', updateSystemIntakeAdminLead?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', adminLead?: string | null, id: any } | null } | null };

export type UpdateSystemIntakeReviewDatesMutationVariables = Exact<{
  input: UpdateSystemIntakeReviewDatesInput;
}>;


export type UpdateSystemIntakeReviewDatesMutation = { __typename?: 'Mutation', updateSystemIntakeReviewDates?: { __typename?: 'UpdateSystemIntakePayload', systemIntake?: { __typename?: 'SystemIntake', id: any, grbDate?: any | null, grtDate?: any | null } | null } | null };

export type UpdateTestDateMutationVariables = Exact<{
  input: UpdateTestDateInput;
}>;


export type UpdateTestDateMutation = { __typename?: 'Mutation', updateTestDate?: { __typename?: 'UpdateTestDatePayload', testDate?: { __typename?: 'TestDate', id: any } | null } | null };


export const CreateAccessibilityRequestDocumentDocument = gql`
    mutation CreateAccessibilityRequestDocument($input: CreateAccessibilityRequestDocumentInput!) {
  createAccessibilityRequestDocument(input: $input) {
    accessibilityRequestDocument {
      id
      mimeType
      name
      status
      uploadedAt
      requestID
    }
    userErrors {
      message
      path
    }
  }
}
    `;
export type CreateAccessibilityRequestDocumentMutationFn = Apollo.MutationFunction<CreateAccessibilityRequestDocumentMutation, CreateAccessibilityRequestDocumentMutationVariables>;

/**
 * __useCreateAccessibilityRequestDocumentMutation__
 *
 * To run a mutation, you first call `useCreateAccessibilityRequestDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccessibilityRequestDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccessibilityRequestDocumentMutation, { data, loading, error }] = useCreateAccessibilityRequestDocumentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAccessibilityRequestDocumentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccessibilityRequestDocumentMutation, CreateAccessibilityRequestDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccessibilityRequestDocumentMutation, CreateAccessibilityRequestDocumentMutationVariables>(CreateAccessibilityRequestDocumentDocument, options);
      }
export type CreateAccessibilityRequestDocumentMutationHookResult = ReturnType<typeof useCreateAccessibilityRequestDocumentMutation>;
export type CreateAccessibilityRequestDocumentMutationResult = Apollo.MutationResult<CreateAccessibilityRequestDocumentMutation>;
export type CreateAccessibilityRequestDocumentMutationOptions = Apollo.BaseMutationOptions<CreateAccessibilityRequestDocumentMutation, CreateAccessibilityRequestDocumentMutationVariables>;
export const DeleteAccessibilityRequestDocumentDocument = gql`
    mutation DeleteAccessibilityRequestDocument($input: DeleteAccessibilityRequestDocumentInput!) {
  deleteAccessibilityRequestDocument(input: $input) {
    id
  }
}
    `;
export type DeleteAccessibilityRequestDocumentMutationFn = Apollo.MutationFunction<DeleteAccessibilityRequestDocumentMutation, DeleteAccessibilityRequestDocumentMutationVariables>;

/**
 * __useDeleteAccessibilityRequestDocumentMutation__
 *
 * To run a mutation, you first call `useDeleteAccessibilityRequestDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccessibilityRequestDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccessibilityRequestDocumentMutation, { data, loading, error }] = useDeleteAccessibilityRequestDocumentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteAccessibilityRequestDocumentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAccessibilityRequestDocumentMutation, DeleteAccessibilityRequestDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAccessibilityRequestDocumentMutation, DeleteAccessibilityRequestDocumentMutationVariables>(DeleteAccessibilityRequestDocumentDocument, options);
      }
export type DeleteAccessibilityRequestDocumentMutationHookResult = ReturnType<typeof useDeleteAccessibilityRequestDocumentMutation>;
export type DeleteAccessibilityRequestDocumentMutationResult = Apollo.MutationResult<DeleteAccessibilityRequestDocumentMutation>;
export type DeleteAccessibilityRequestDocumentMutationOptions = Apollo.BaseMutationOptions<DeleteAccessibilityRequestDocumentMutation, DeleteAccessibilityRequestDocumentMutationVariables>;
export const AddGrtFeedbackKeepDraftBizCaseDocument = gql`
    mutation AddGRTFeedbackKeepDraftBizCase($input: AddGRTFeedbackInput!) {
  addGRTFeedbackAndKeepBusinessCaseInDraft(input: $input) {
    id
  }
}
    `;
export type AddGrtFeedbackKeepDraftBizCaseMutationFn = Apollo.MutationFunction<AddGrtFeedbackKeepDraftBizCaseMutation, AddGrtFeedbackKeepDraftBizCaseMutationVariables>;

/**
 * __useAddGrtFeedbackKeepDraftBizCaseMutation__
 *
 * To run a mutation, you first call `useAddGrtFeedbackKeepDraftBizCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGrtFeedbackKeepDraftBizCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGrtFeedbackKeepDraftBizCaseMutation, { data, loading, error }] = useAddGrtFeedbackKeepDraftBizCaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddGrtFeedbackKeepDraftBizCaseMutation(baseOptions?: Apollo.MutationHookOptions<AddGrtFeedbackKeepDraftBizCaseMutation, AddGrtFeedbackKeepDraftBizCaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGrtFeedbackKeepDraftBizCaseMutation, AddGrtFeedbackKeepDraftBizCaseMutationVariables>(AddGrtFeedbackKeepDraftBizCaseDocument, options);
      }
export type AddGrtFeedbackKeepDraftBizCaseMutationHookResult = ReturnType<typeof useAddGrtFeedbackKeepDraftBizCaseMutation>;
export type AddGrtFeedbackKeepDraftBizCaseMutationResult = Apollo.MutationResult<AddGrtFeedbackKeepDraftBizCaseMutation>;
export type AddGrtFeedbackKeepDraftBizCaseMutationOptions = Apollo.BaseMutationOptions<AddGrtFeedbackKeepDraftBizCaseMutation, AddGrtFeedbackKeepDraftBizCaseMutationVariables>;
export const AddGrtFeedbackProgressToFinalDocument = gql`
    mutation AddGRTFeedbackProgressToFinal($input: AddGRTFeedbackInput!) {
  addGRTFeedbackAndProgressToFinalBusinessCase(input: $input) {
    id
  }
}
    `;
export type AddGrtFeedbackProgressToFinalMutationFn = Apollo.MutationFunction<AddGrtFeedbackProgressToFinalMutation, AddGrtFeedbackProgressToFinalMutationVariables>;

/**
 * __useAddGrtFeedbackProgressToFinalMutation__
 *
 * To run a mutation, you first call `useAddGrtFeedbackProgressToFinalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGrtFeedbackProgressToFinalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGrtFeedbackProgressToFinalMutation, { data, loading, error }] = useAddGrtFeedbackProgressToFinalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddGrtFeedbackProgressToFinalMutation(baseOptions?: Apollo.MutationHookOptions<AddGrtFeedbackProgressToFinalMutation, AddGrtFeedbackProgressToFinalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGrtFeedbackProgressToFinalMutation, AddGrtFeedbackProgressToFinalMutationVariables>(AddGrtFeedbackProgressToFinalDocument, options);
      }
export type AddGrtFeedbackProgressToFinalMutationHookResult = ReturnType<typeof useAddGrtFeedbackProgressToFinalMutation>;
export type AddGrtFeedbackProgressToFinalMutationResult = Apollo.MutationResult<AddGrtFeedbackProgressToFinalMutation>;
export type AddGrtFeedbackProgressToFinalMutationOptions = Apollo.BaseMutationOptions<AddGrtFeedbackProgressToFinalMutation, AddGrtFeedbackProgressToFinalMutationVariables>;
export const AddGrtFeedbackRequestBizCaseDocument = gql`
    mutation AddGRTFeedbackRequestBizCase($input: AddGRTFeedbackInput!) {
  addGRTFeedbackAndRequestBusinessCase(input: $input) {
    id
  }
}
    `;
export type AddGrtFeedbackRequestBizCaseMutationFn = Apollo.MutationFunction<AddGrtFeedbackRequestBizCaseMutation, AddGrtFeedbackRequestBizCaseMutationVariables>;

/**
 * __useAddGrtFeedbackRequestBizCaseMutation__
 *
 * To run a mutation, you first call `useAddGrtFeedbackRequestBizCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGrtFeedbackRequestBizCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGrtFeedbackRequestBizCaseMutation, { data, loading, error }] = useAddGrtFeedbackRequestBizCaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddGrtFeedbackRequestBizCaseMutation(baseOptions?: Apollo.MutationHookOptions<AddGrtFeedbackRequestBizCaseMutation, AddGrtFeedbackRequestBizCaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGrtFeedbackRequestBizCaseMutation, AddGrtFeedbackRequestBizCaseMutationVariables>(AddGrtFeedbackRequestBizCaseDocument, options);
      }
export type AddGrtFeedbackRequestBizCaseMutationHookResult = ReturnType<typeof useAddGrtFeedbackRequestBizCaseMutation>;
export type AddGrtFeedbackRequestBizCaseMutationResult = Apollo.MutationResult<AddGrtFeedbackRequestBizCaseMutation>;
export type AddGrtFeedbackRequestBizCaseMutationOptions = Apollo.BaseMutationOptions<AddGrtFeedbackRequestBizCaseMutation, AddGrtFeedbackRequestBizCaseMutationVariables>;
export const CreateAccessibilityRequestNoteDocument = gql`
    mutation CreateAccessibilityRequestNote($input: CreateAccessibilityRequestNoteInput!) {
  createAccessibilityRequestNote(input: $input) {
    accessibilityRequestNote {
      id
      note
      authorName
      requestID
      createdAt
    }
    userErrors {
      message
      path
    }
  }
}
    `;
export type CreateAccessibilityRequestNoteMutationFn = Apollo.MutationFunction<CreateAccessibilityRequestNoteMutation, CreateAccessibilityRequestNoteMutationVariables>;

/**
 * __useCreateAccessibilityRequestNoteMutation__
 *
 * To run a mutation, you first call `useCreateAccessibilityRequestNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccessibilityRequestNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccessibilityRequestNoteMutation, { data, loading, error }] = useCreateAccessibilityRequestNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAccessibilityRequestNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccessibilityRequestNoteMutation, CreateAccessibilityRequestNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccessibilityRequestNoteMutation, CreateAccessibilityRequestNoteMutationVariables>(CreateAccessibilityRequestNoteDocument, options);
      }
export type CreateAccessibilityRequestNoteMutationHookResult = ReturnType<typeof useCreateAccessibilityRequestNoteMutation>;
export type CreateAccessibilityRequestNoteMutationResult = Apollo.MutationResult<CreateAccessibilityRequestNoteMutation>;
export type CreateAccessibilityRequestNoteMutationOptions = Apollo.BaseMutationOptions<CreateAccessibilityRequestNoteMutation, CreateAccessibilityRequestNoteMutationVariables>;
export const CreateAccessibilityRequestDocument = gql`
    mutation CreateAccessibilityRequest($input: CreateAccessibilityRequestInput!) {
  createAccessibilityRequest(input: $input) {
    accessibilityRequest {
      id
      name
    }
    userErrors {
      message
      path
    }
  }
}
    `;
export type CreateAccessibilityRequestMutationFn = Apollo.MutationFunction<CreateAccessibilityRequestMutation, CreateAccessibilityRequestMutationVariables>;

/**
 * __useCreateAccessibilityRequestMutation__
 *
 * To run a mutation, you first call `useCreateAccessibilityRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccessibilityRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccessibilityRequestMutation, { data, loading, error }] = useCreateAccessibilityRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAccessibilityRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccessibilityRequestMutation, CreateAccessibilityRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccessibilityRequestMutation, CreateAccessibilityRequestMutationVariables>(CreateAccessibilityRequestDocument, options);
      }
export type CreateAccessibilityRequestMutationHookResult = ReturnType<typeof useCreateAccessibilityRequestMutation>;
export type CreateAccessibilityRequestMutationResult = Apollo.MutationResult<CreateAccessibilityRequestMutation>;
export type CreateAccessibilityRequestMutationOptions = Apollo.BaseMutationOptions<CreateAccessibilityRequestMutation, CreateAccessibilityRequestMutationVariables>;
export const CreateCedarSystemBookmarkDocument = gql`
    mutation CreateCedarSystemBookmark($input: CreateCedarSystemBookmarkInput!) {
  createCedarSystemBookmark(input: $input) {
    cedarSystemBookmark {
      cedarSystemId
    }
  }
}
    `;
export type CreateCedarSystemBookmarkMutationFn = Apollo.MutationFunction<CreateCedarSystemBookmarkMutation, CreateCedarSystemBookmarkMutationVariables>;

/**
 * __useCreateCedarSystemBookmarkMutation__
 *
 * To run a mutation, you first call `useCreateCedarSystemBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCedarSystemBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCedarSystemBookmarkMutation, { data, loading, error }] = useCreateCedarSystemBookmarkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCedarSystemBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<CreateCedarSystemBookmarkMutation, CreateCedarSystemBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCedarSystemBookmarkMutation, CreateCedarSystemBookmarkMutationVariables>(CreateCedarSystemBookmarkDocument, options);
      }
export type CreateCedarSystemBookmarkMutationHookResult = ReturnType<typeof useCreateCedarSystemBookmarkMutation>;
export type CreateCedarSystemBookmarkMutationResult = Apollo.MutationResult<CreateCedarSystemBookmarkMutation>;
export type CreateCedarSystemBookmarkMutationOptions = Apollo.BaseMutationOptions<CreateCedarSystemBookmarkMutation, CreateCedarSystemBookmarkMutationVariables>;
export const CreateSystemIntakeActionBusinessCaseNeededDocument = gql`
    mutation CreateSystemIntakeActionBusinessCaseNeeded($input: BasicActionInput!) {
  createSystemIntakeActionBusinessCaseNeeded(input: $input) {
    systemIntake {
      status
      id
    }
  }
}
    `;
export type CreateSystemIntakeActionBusinessCaseNeededMutationFn = Apollo.MutationFunction<CreateSystemIntakeActionBusinessCaseNeededMutation, CreateSystemIntakeActionBusinessCaseNeededMutationVariables>;

/**
 * __useCreateSystemIntakeActionBusinessCaseNeededMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeActionBusinessCaseNeededMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeActionBusinessCaseNeededMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeActionBusinessCaseNeededMutation, { data, loading, error }] = useCreateSystemIntakeActionBusinessCaseNeededMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeActionBusinessCaseNeededMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeActionBusinessCaseNeededMutation, CreateSystemIntakeActionBusinessCaseNeededMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeActionBusinessCaseNeededMutation, CreateSystemIntakeActionBusinessCaseNeededMutationVariables>(CreateSystemIntakeActionBusinessCaseNeededDocument, options);
      }
export type CreateSystemIntakeActionBusinessCaseNeededMutationHookResult = ReturnType<typeof useCreateSystemIntakeActionBusinessCaseNeededMutation>;
export type CreateSystemIntakeActionBusinessCaseNeededMutationResult = Apollo.MutationResult<CreateSystemIntakeActionBusinessCaseNeededMutation>;
export type CreateSystemIntakeActionBusinessCaseNeededMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeActionBusinessCaseNeededMutation, CreateSystemIntakeActionBusinessCaseNeededMutationVariables>;
export const CreateSystemIntakeActionBusinessCaseNeedsChangesDocument = gql`
    mutation CreateSystemIntakeActionBusinessCaseNeedsChanges($input: BasicActionInput!) {
  createSystemIntakeActionBusinessCaseNeedsChanges(input: $input) {
    systemIntake {
      status
      id
    }
  }
}
    `;
export type CreateSystemIntakeActionBusinessCaseNeedsChangesMutationFn = Apollo.MutationFunction<CreateSystemIntakeActionBusinessCaseNeedsChangesMutation, CreateSystemIntakeActionBusinessCaseNeedsChangesMutationVariables>;

/**
 * __useCreateSystemIntakeActionBusinessCaseNeedsChangesMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeActionBusinessCaseNeedsChangesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeActionBusinessCaseNeedsChangesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeActionBusinessCaseNeedsChangesMutation, { data, loading, error }] = useCreateSystemIntakeActionBusinessCaseNeedsChangesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeActionBusinessCaseNeedsChangesMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeActionBusinessCaseNeedsChangesMutation, CreateSystemIntakeActionBusinessCaseNeedsChangesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeActionBusinessCaseNeedsChangesMutation, CreateSystemIntakeActionBusinessCaseNeedsChangesMutationVariables>(CreateSystemIntakeActionBusinessCaseNeedsChangesDocument, options);
      }
export type CreateSystemIntakeActionBusinessCaseNeedsChangesMutationHookResult = ReturnType<typeof useCreateSystemIntakeActionBusinessCaseNeedsChangesMutation>;
export type CreateSystemIntakeActionBusinessCaseNeedsChangesMutationResult = Apollo.MutationResult<CreateSystemIntakeActionBusinessCaseNeedsChangesMutation>;
export type CreateSystemIntakeActionBusinessCaseNeedsChangesMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeActionBusinessCaseNeedsChangesMutation, CreateSystemIntakeActionBusinessCaseNeedsChangesMutationVariables>;
export const CreateSystemIntakeActionExtendLifecycleIdDocument = gql`
    mutation CreateSystemIntakeActionExtendLifecycleId($input: CreateSystemIntakeActionExtendLifecycleIdInput!) {
  createSystemIntakeActionExtendLifecycleId(input: $input) {
    systemIntake {
      id
      lcidScope
      decisionNextSteps
      lcidExpiresAt
      lcidCostBaseline
    }
  }
}
    `;
export type CreateSystemIntakeActionExtendLifecycleIdMutationFn = Apollo.MutationFunction<CreateSystemIntakeActionExtendLifecycleIdMutation, CreateSystemIntakeActionExtendLifecycleIdMutationVariables>;

/**
 * __useCreateSystemIntakeActionExtendLifecycleIdMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeActionExtendLifecycleIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeActionExtendLifecycleIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeActionExtendLifecycleIdMutation, { data, loading, error }] = useCreateSystemIntakeActionExtendLifecycleIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeActionExtendLifecycleIdMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeActionExtendLifecycleIdMutation, CreateSystemIntakeActionExtendLifecycleIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeActionExtendLifecycleIdMutation, CreateSystemIntakeActionExtendLifecycleIdMutationVariables>(CreateSystemIntakeActionExtendLifecycleIdDocument, options);
      }
export type CreateSystemIntakeActionExtendLifecycleIdMutationHookResult = ReturnType<typeof useCreateSystemIntakeActionExtendLifecycleIdMutation>;
export type CreateSystemIntakeActionExtendLifecycleIdMutationResult = Apollo.MutationResult<CreateSystemIntakeActionExtendLifecycleIdMutation>;
export type CreateSystemIntakeActionExtendLifecycleIdMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeActionExtendLifecycleIdMutation, CreateSystemIntakeActionExtendLifecycleIdMutationVariables>;
export const CreateSystemIntakeActionGuideReceievedCloseDocument = gql`
    mutation CreateSystemIntakeActionGuideReceievedClose($input: BasicActionInput!) {
  createSystemIntakeActionGuideReceievedClose(input: $input) {
    systemIntake {
      status
      id
    }
  }
}
    `;
export type CreateSystemIntakeActionGuideReceievedCloseMutationFn = Apollo.MutationFunction<CreateSystemIntakeActionGuideReceievedCloseMutation, CreateSystemIntakeActionGuideReceievedCloseMutationVariables>;

/**
 * __useCreateSystemIntakeActionGuideReceievedCloseMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeActionGuideReceievedCloseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeActionGuideReceievedCloseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeActionGuideReceievedCloseMutation, { data, loading, error }] = useCreateSystemIntakeActionGuideReceievedCloseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeActionGuideReceievedCloseMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeActionGuideReceievedCloseMutation, CreateSystemIntakeActionGuideReceievedCloseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeActionGuideReceievedCloseMutation, CreateSystemIntakeActionGuideReceievedCloseMutationVariables>(CreateSystemIntakeActionGuideReceievedCloseDocument, options);
      }
export type CreateSystemIntakeActionGuideReceievedCloseMutationHookResult = ReturnType<typeof useCreateSystemIntakeActionGuideReceievedCloseMutation>;
export type CreateSystemIntakeActionGuideReceievedCloseMutationResult = Apollo.MutationResult<CreateSystemIntakeActionGuideReceievedCloseMutation>;
export type CreateSystemIntakeActionGuideReceievedCloseMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeActionGuideReceievedCloseMutation, CreateSystemIntakeActionGuideReceievedCloseMutationVariables>;
export const CreateSystemIntakeActionNoGovernanceNeededDocument = gql`
    mutation CreateSystemIntakeActionNoGovernanceNeeded($input: BasicActionInput!) {
  createSystemIntakeActionNoGovernanceNeeded(input: $input) {
    systemIntake {
      status
      id
    }
  }
}
    `;
export type CreateSystemIntakeActionNoGovernanceNeededMutationFn = Apollo.MutationFunction<CreateSystemIntakeActionNoGovernanceNeededMutation, CreateSystemIntakeActionNoGovernanceNeededMutationVariables>;

/**
 * __useCreateSystemIntakeActionNoGovernanceNeededMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeActionNoGovernanceNeededMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeActionNoGovernanceNeededMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeActionNoGovernanceNeededMutation, { data, loading, error }] = useCreateSystemIntakeActionNoGovernanceNeededMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeActionNoGovernanceNeededMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeActionNoGovernanceNeededMutation, CreateSystemIntakeActionNoGovernanceNeededMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeActionNoGovernanceNeededMutation, CreateSystemIntakeActionNoGovernanceNeededMutationVariables>(CreateSystemIntakeActionNoGovernanceNeededDocument, options);
      }
export type CreateSystemIntakeActionNoGovernanceNeededMutationHookResult = ReturnType<typeof useCreateSystemIntakeActionNoGovernanceNeededMutation>;
export type CreateSystemIntakeActionNoGovernanceNeededMutationResult = Apollo.MutationResult<CreateSystemIntakeActionNoGovernanceNeededMutation>;
export type CreateSystemIntakeActionNoGovernanceNeededMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeActionNoGovernanceNeededMutation, CreateSystemIntakeActionNoGovernanceNeededMutationVariables>;
export const CreateSystemIntakeActionNotItRequestDocument = gql`
    mutation CreateSystemIntakeActionNotItRequest($input: BasicActionInput!) {
  createSystemIntakeActionNotItRequest(input: $input) {
    systemIntake {
      status
      id
    }
  }
}
    `;
export type CreateSystemIntakeActionNotItRequestMutationFn = Apollo.MutationFunction<CreateSystemIntakeActionNotItRequestMutation, CreateSystemIntakeActionNotItRequestMutationVariables>;

/**
 * __useCreateSystemIntakeActionNotItRequestMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeActionNotItRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeActionNotItRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeActionNotItRequestMutation, { data, loading, error }] = useCreateSystemIntakeActionNotItRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeActionNotItRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeActionNotItRequestMutation, CreateSystemIntakeActionNotItRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeActionNotItRequestMutation, CreateSystemIntakeActionNotItRequestMutationVariables>(CreateSystemIntakeActionNotItRequestDocument, options);
      }
export type CreateSystemIntakeActionNotItRequestMutationHookResult = ReturnType<typeof useCreateSystemIntakeActionNotItRequestMutation>;
export type CreateSystemIntakeActionNotItRequestMutationResult = Apollo.MutationResult<CreateSystemIntakeActionNotItRequestMutation>;
export type CreateSystemIntakeActionNotItRequestMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeActionNotItRequestMutation, CreateSystemIntakeActionNotItRequestMutationVariables>;
export const CreateSystemIntakeActionNotRespondingCloseDocument = gql`
    mutation CreateSystemIntakeActionNotRespondingClose($input: BasicActionInput!) {
  createSystemIntakeActionNotRespondingClose(input: $input) {
    systemIntake {
      status
      id
    }
  }
}
    `;
export type CreateSystemIntakeActionNotRespondingCloseMutationFn = Apollo.MutationFunction<CreateSystemIntakeActionNotRespondingCloseMutation, CreateSystemIntakeActionNotRespondingCloseMutationVariables>;

/**
 * __useCreateSystemIntakeActionNotRespondingCloseMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeActionNotRespondingCloseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeActionNotRespondingCloseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeActionNotRespondingCloseMutation, { data, loading, error }] = useCreateSystemIntakeActionNotRespondingCloseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeActionNotRespondingCloseMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeActionNotRespondingCloseMutation, CreateSystemIntakeActionNotRespondingCloseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeActionNotRespondingCloseMutation, CreateSystemIntakeActionNotRespondingCloseMutationVariables>(CreateSystemIntakeActionNotRespondingCloseDocument, options);
      }
export type CreateSystemIntakeActionNotRespondingCloseMutationHookResult = ReturnType<typeof useCreateSystemIntakeActionNotRespondingCloseMutation>;
export type CreateSystemIntakeActionNotRespondingCloseMutationResult = Apollo.MutationResult<CreateSystemIntakeActionNotRespondingCloseMutation>;
export type CreateSystemIntakeActionNotRespondingCloseMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeActionNotRespondingCloseMutation, CreateSystemIntakeActionNotRespondingCloseMutationVariables>;
export const CreateSystemIntakeActionReadyForGrtDocument = gql`
    mutation CreateSystemIntakeActionReadyForGRT($input: BasicActionInput!) {
  createSystemIntakeActionReadyForGRT(input: $input) {
    systemIntake {
      status
      id
    }
  }
}
    `;
export type CreateSystemIntakeActionReadyForGrtMutationFn = Apollo.MutationFunction<CreateSystemIntakeActionReadyForGrtMutation, CreateSystemIntakeActionReadyForGrtMutationVariables>;

/**
 * __useCreateSystemIntakeActionReadyForGrtMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeActionReadyForGrtMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeActionReadyForGrtMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeActionReadyForGrtMutation, { data, loading, error }] = useCreateSystemIntakeActionReadyForGrtMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeActionReadyForGrtMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeActionReadyForGrtMutation, CreateSystemIntakeActionReadyForGrtMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeActionReadyForGrtMutation, CreateSystemIntakeActionReadyForGrtMutationVariables>(CreateSystemIntakeActionReadyForGrtDocument, options);
      }
export type CreateSystemIntakeActionReadyForGrtMutationHookResult = ReturnType<typeof useCreateSystemIntakeActionReadyForGrtMutation>;
export type CreateSystemIntakeActionReadyForGrtMutationResult = Apollo.MutationResult<CreateSystemIntakeActionReadyForGrtMutation>;
export type CreateSystemIntakeActionReadyForGrtMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeActionReadyForGrtMutation, CreateSystemIntakeActionReadyForGrtMutationVariables>;
export const CreateSystemIntakeActionSendEmailDocument = gql`
    mutation CreateSystemIntakeActionSendEmail($input: BasicActionInput!) {
  createSystemIntakeActionSendEmail(input: $input) {
    systemIntake {
      status
      id
    }
  }
}
    `;
export type CreateSystemIntakeActionSendEmailMutationFn = Apollo.MutationFunction<CreateSystemIntakeActionSendEmailMutation, CreateSystemIntakeActionSendEmailMutationVariables>;

/**
 * __useCreateSystemIntakeActionSendEmailMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeActionSendEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeActionSendEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeActionSendEmailMutation, { data, loading, error }] = useCreateSystemIntakeActionSendEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeActionSendEmailMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeActionSendEmailMutation, CreateSystemIntakeActionSendEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeActionSendEmailMutation, CreateSystemIntakeActionSendEmailMutationVariables>(CreateSystemIntakeActionSendEmailDocument, options);
      }
export type CreateSystemIntakeActionSendEmailMutationHookResult = ReturnType<typeof useCreateSystemIntakeActionSendEmailMutation>;
export type CreateSystemIntakeActionSendEmailMutationResult = Apollo.MutationResult<CreateSystemIntakeActionSendEmailMutation>;
export type CreateSystemIntakeActionSendEmailMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeActionSendEmailMutation, CreateSystemIntakeActionSendEmailMutationVariables>;
export const CreateSystemIntakeNoteDocument = gql`
    mutation CreateSystemIntakeNote($input: CreateSystemIntakeNoteInput!) {
  createSystemIntakeNote(input: $input) {
    id
    createdAt
    content
    author {
      name
      eua
    }
  }
}
    `;
export type CreateSystemIntakeNoteMutationFn = Apollo.MutationFunction<CreateSystemIntakeNoteMutation, CreateSystemIntakeNoteMutationVariables>;

/**
 * __useCreateSystemIntakeNoteMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeNoteMutation, { data, loading, error }] = useCreateSystemIntakeNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeNoteMutation, CreateSystemIntakeNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeNoteMutation, CreateSystemIntakeNoteMutationVariables>(CreateSystemIntakeNoteDocument, options);
      }
export type CreateSystemIntakeNoteMutationHookResult = ReturnType<typeof useCreateSystemIntakeNoteMutation>;
export type CreateSystemIntakeNoteMutationResult = Apollo.MutationResult<CreateSystemIntakeNoteMutation>;
export type CreateSystemIntakeNoteMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeNoteMutation, CreateSystemIntakeNoteMutationVariables>;
export const CreateTestDateDocument = gql`
    mutation CreateTestDate($input: CreateTestDateInput!) {
  createTestDate(input: $input) {
    testDate {
      id
    }
  }
}
    `;
export type CreateTestDateMutationFn = Apollo.MutationFunction<CreateTestDateMutation, CreateTestDateMutationVariables>;

/**
 * __useCreateTestDateMutation__
 *
 * To run a mutation, you first call `useCreateTestDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestDateMutation, { data, loading, error }] = useCreateTestDateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTestDateMutation(baseOptions?: Apollo.MutationHookOptions<CreateTestDateMutation, CreateTestDateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTestDateMutation, CreateTestDateMutationVariables>(CreateTestDateDocument, options);
      }
export type CreateTestDateMutationHookResult = ReturnType<typeof useCreateTestDateMutation>;
export type CreateTestDateMutationResult = Apollo.MutationResult<CreateTestDateMutation>;
export type CreateTestDateMutationOptions = Apollo.BaseMutationOptions<CreateTestDateMutation, CreateTestDateMutationVariables>;
export const DeleteAccessibilityRequestDocument = gql`
    mutation DeleteAccessibilityRequest($input: DeleteAccessibilityRequestInput!) {
  deleteAccessibilityRequest(input: $input) {
    id
  }
}
    `;
export type DeleteAccessibilityRequestMutationFn = Apollo.MutationFunction<DeleteAccessibilityRequestMutation, DeleteAccessibilityRequestMutationVariables>;

/**
 * __useDeleteAccessibilityRequestMutation__
 *
 * To run a mutation, you first call `useDeleteAccessibilityRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccessibilityRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccessibilityRequestMutation, { data, loading, error }] = useDeleteAccessibilityRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteAccessibilityRequestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAccessibilityRequestMutation, DeleteAccessibilityRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAccessibilityRequestMutation, DeleteAccessibilityRequestMutationVariables>(DeleteAccessibilityRequestDocument, options);
      }
export type DeleteAccessibilityRequestMutationHookResult = ReturnType<typeof useDeleteAccessibilityRequestMutation>;
export type DeleteAccessibilityRequestMutationResult = Apollo.MutationResult<DeleteAccessibilityRequestMutation>;
export type DeleteAccessibilityRequestMutationOptions = Apollo.BaseMutationOptions<DeleteAccessibilityRequestMutation, DeleteAccessibilityRequestMutationVariables>;
export const DeleteCedarSystemBookmarkDocument = gql`
    mutation DeleteCedarSystemBookmark($input: CreateCedarSystemBookmarkInput!) {
  deleteCedarSystemBookmark(input: $input) {
    cedarSystemId
  }
}
    `;
export type DeleteCedarSystemBookmarkMutationFn = Apollo.MutationFunction<DeleteCedarSystemBookmarkMutation, DeleteCedarSystemBookmarkMutationVariables>;

/**
 * __useDeleteCedarSystemBookmarkMutation__
 *
 * To run a mutation, you first call `useDeleteCedarSystemBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCedarSystemBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCedarSystemBookmarkMutation, { data, loading, error }] = useDeleteCedarSystemBookmarkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCedarSystemBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCedarSystemBookmarkMutation, DeleteCedarSystemBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCedarSystemBookmarkMutation, DeleteCedarSystemBookmarkMutationVariables>(DeleteCedarSystemBookmarkDocument, options);
      }
export type DeleteCedarSystemBookmarkMutationHookResult = ReturnType<typeof useDeleteCedarSystemBookmarkMutation>;
export type DeleteCedarSystemBookmarkMutationResult = Apollo.MutationResult<DeleteCedarSystemBookmarkMutation>;
export type DeleteCedarSystemBookmarkMutationOptions = Apollo.BaseMutationOptions<DeleteCedarSystemBookmarkMutation, DeleteCedarSystemBookmarkMutationVariables>;
export const DeleteTestDateDocument = gql`
    mutation DeleteTestDate($input: DeleteTestDateInput!) {
  deleteTestDate(input: $input) {
    testDate {
      id
    }
  }
}
    `;
export type DeleteTestDateMutationFn = Apollo.MutationFunction<DeleteTestDateMutation, DeleteTestDateMutationVariables>;

/**
 * __useDeleteTestDateMutation__
 *
 * To run a mutation, you first call `useDeleteTestDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTestDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTestDateMutation, { data, loading, error }] = useDeleteTestDateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTestDateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTestDateMutation, DeleteTestDateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTestDateMutation, DeleteTestDateMutationVariables>(DeleteTestDateDocument, options);
      }
export type DeleteTestDateMutationHookResult = ReturnType<typeof useDeleteTestDateMutation>;
export type DeleteTestDateMutationResult = Apollo.MutationResult<DeleteTestDateMutation>;
export type DeleteTestDateMutationOptions = Apollo.BaseMutationOptions<DeleteTestDateMutation, DeleteTestDateMutationVariables>;
export const GeneratePresignedUploadUrlDocument = gql`
    mutation GeneratePresignedUploadURL($input: GeneratePresignedUploadURLInput!) {
  generatePresignedUploadURL(input: $input) {
    url
    userErrors {
      message
      path
    }
  }
}
    `;
export type GeneratePresignedUploadUrlMutationFn = Apollo.MutationFunction<GeneratePresignedUploadUrlMutation, GeneratePresignedUploadUrlMutationVariables>;

/**
 * __useGeneratePresignedUploadUrlMutation__
 *
 * To run a mutation, you first call `useGeneratePresignedUploadUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGeneratePresignedUploadUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generatePresignedUploadUrlMutation, { data, loading, error }] = useGeneratePresignedUploadUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGeneratePresignedUploadUrlMutation(baseOptions?: Apollo.MutationHookOptions<GeneratePresignedUploadUrlMutation, GeneratePresignedUploadUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GeneratePresignedUploadUrlMutation, GeneratePresignedUploadUrlMutationVariables>(GeneratePresignedUploadUrlDocument, options);
      }
export type GeneratePresignedUploadUrlMutationHookResult = ReturnType<typeof useGeneratePresignedUploadUrlMutation>;
export type GeneratePresignedUploadUrlMutationResult = Apollo.MutationResult<GeneratePresignedUploadUrlMutation>;
export type GeneratePresignedUploadUrlMutationOptions = Apollo.BaseMutationOptions<GeneratePresignedUploadUrlMutation, GeneratePresignedUploadUrlMutationVariables>;
export const GetAccessibilityRequestAccessibilityTeamOnlyDocument = gql`
    query GetAccessibilityRequestAccessibilityTeamOnly($id: UUID!) {
  accessibilityRequest(id: $id) {
    id
    euaUserId
    submittedAt
    name
    system {
      name
      lcid
      businessOwner {
        name
        component
      }
    }
    documents {
      id
      url
      uploadedAt
      status
      documentType {
        commonType
        otherTypeDescription
      }
    }
    testDates {
      id
      testType
      date
      score
    }
    statusRecord {
      status
    }
    notes {
      id
      createdAt
      authorName
      note
    }
  }
}
    `;

/**
 * __useGetAccessibilityRequestAccessibilityTeamOnlyQuery__
 *
 * To run a query within a React component, call `useGetAccessibilityRequestAccessibilityTeamOnlyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccessibilityRequestAccessibilityTeamOnlyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccessibilityRequestAccessibilityTeamOnlyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAccessibilityRequestAccessibilityTeamOnlyQuery(baseOptions: Apollo.QueryHookOptions<GetAccessibilityRequestAccessibilityTeamOnlyQuery, GetAccessibilityRequestAccessibilityTeamOnlyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccessibilityRequestAccessibilityTeamOnlyQuery, GetAccessibilityRequestAccessibilityTeamOnlyQueryVariables>(GetAccessibilityRequestAccessibilityTeamOnlyDocument, options);
      }
export function useGetAccessibilityRequestAccessibilityTeamOnlyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccessibilityRequestAccessibilityTeamOnlyQuery, GetAccessibilityRequestAccessibilityTeamOnlyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccessibilityRequestAccessibilityTeamOnlyQuery, GetAccessibilityRequestAccessibilityTeamOnlyQueryVariables>(GetAccessibilityRequestAccessibilityTeamOnlyDocument, options);
        }
export type GetAccessibilityRequestAccessibilityTeamOnlyQueryHookResult = ReturnType<typeof useGetAccessibilityRequestAccessibilityTeamOnlyQuery>;
export type GetAccessibilityRequestAccessibilityTeamOnlyLazyQueryHookResult = ReturnType<typeof useGetAccessibilityRequestAccessibilityTeamOnlyLazyQuery>;
export type GetAccessibilityRequestAccessibilityTeamOnlyQueryResult = Apollo.QueryResult<GetAccessibilityRequestAccessibilityTeamOnlyQuery, GetAccessibilityRequestAccessibilityTeamOnlyQueryVariables>;
export const AccessibilityRequestDocument = gql`
    query accessibilityRequest($id: UUID!) {
  accessibilityRequest(id: $id) {
    id
    name
    statusRecord {
      status
    }
  }
}
    `;

/**
 * __useAccessibilityRequestQuery__
 *
 * To run a query within a React component, call `useAccessibilityRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccessibilityRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccessibilityRequestQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAccessibilityRequestQuery(baseOptions: Apollo.QueryHookOptions<AccessibilityRequestQuery, AccessibilityRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccessibilityRequestQuery, AccessibilityRequestQueryVariables>(AccessibilityRequestDocument, options);
      }
export function useAccessibilityRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccessibilityRequestQuery, AccessibilityRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccessibilityRequestQuery, AccessibilityRequestQueryVariables>(AccessibilityRequestDocument, options);
        }
export type AccessibilityRequestQueryHookResult = ReturnType<typeof useAccessibilityRequestQuery>;
export type AccessibilityRequestLazyQueryHookResult = ReturnType<typeof useAccessibilityRequestLazyQuery>;
export type AccessibilityRequestQueryResult = Apollo.QueryResult<AccessibilityRequestQuery, AccessibilityRequestQueryVariables>;
export const GetAccessibilityRequestDocument = gql`
    query GetAccessibilityRequest($id: UUID!) {
  accessibilityRequest(id: $id) {
    id
    euaUserId
    submittedAt
    name
    system {
      name
      lcid
      businessOwner {
        name
        component
      }
    }
    documents {
      id
      url
      uploadedAt
      status
      documentType {
        commonType
        otherTypeDescription
      }
    }
    testDates {
      id
      testType
      date
      score
    }
    statusRecord {
      status
    }
  }
}
    `;

/**
 * __useGetAccessibilityRequestQuery__
 *
 * To run a query within a React component, call `useGetAccessibilityRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccessibilityRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccessibilityRequestQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAccessibilityRequestQuery(baseOptions: Apollo.QueryHookOptions<GetAccessibilityRequestQuery, GetAccessibilityRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccessibilityRequestQuery, GetAccessibilityRequestQueryVariables>(GetAccessibilityRequestDocument, options);
      }
export function useGetAccessibilityRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccessibilityRequestQuery, GetAccessibilityRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccessibilityRequestQuery, GetAccessibilityRequestQueryVariables>(GetAccessibilityRequestDocument, options);
        }
export type GetAccessibilityRequestQueryHookResult = ReturnType<typeof useGetAccessibilityRequestQuery>;
export type GetAccessibilityRequestLazyQueryHookResult = ReturnType<typeof useGetAccessibilityRequestLazyQuery>;
export type GetAccessibilityRequestQueryResult = Apollo.QueryResult<GetAccessibilityRequestQuery, GetAccessibilityRequestQueryVariables>;
export const GetAccessibilityRequestsDocument = gql`
    query GetAccessibilityRequests($first: Int!) {
  accessibilityRequests(first: $first) {
    edges {
      node {
        id
        name
        relevantTestDate {
          date
        }
        submittedAt
        system {
          lcid
          businessOwner {
            name
            component
          }
        }
        statusRecord {
          status
          createdAt
        }
      }
    }
  }
}
    `;

/**
 * __useGetAccessibilityRequestsQuery__
 *
 * To run a query within a React component, call `useGetAccessibilityRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccessibilityRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccessibilityRequestsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetAccessibilityRequestsQuery(baseOptions: Apollo.QueryHookOptions<GetAccessibilityRequestsQuery, GetAccessibilityRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccessibilityRequestsQuery, GetAccessibilityRequestsQueryVariables>(GetAccessibilityRequestsDocument, options);
      }
export function useGetAccessibilityRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccessibilityRequestsQuery, GetAccessibilityRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccessibilityRequestsQuery, GetAccessibilityRequestsQueryVariables>(GetAccessibilityRequestsDocument, options);
        }
export type GetAccessibilityRequestsQueryHookResult = ReturnType<typeof useGetAccessibilityRequestsQuery>;
export type GetAccessibilityRequestsLazyQueryHookResult = ReturnType<typeof useGetAccessibilityRequestsLazyQuery>;
export type GetAccessibilityRequestsQueryResult = Apollo.QueryResult<GetAccessibilityRequestsQuery, GetAccessibilityRequestsQueryVariables>;
export const GetAdminNotesAndActionsDocument = gql`
    query GetAdminNotesAndActions($id: UUID!) {
  systemIntake(id: $id) {
    lcid
    notes {
      id
      createdAt
      content
      author {
        name
        eua
      }
    }
    actions {
      id
      createdAt
      feedback
      type
      lcidExpirationChange {
        previousDate
        newDate
        previousScope
        newScope
        previousNextSteps
        newNextSteps
        previousCostBaseline
        newCostBaseline
      }
      actor {
        name
        email
      }
    }
  }
}
    `;

/**
 * __useGetAdminNotesAndActionsQuery__
 *
 * To run a query within a React component, call `useGetAdminNotesAndActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminNotesAndActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminNotesAndActionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdminNotesAndActionsQuery(baseOptions: Apollo.QueryHookOptions<GetAdminNotesAndActionsQuery, GetAdminNotesAndActionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminNotesAndActionsQuery, GetAdminNotesAndActionsQueryVariables>(GetAdminNotesAndActionsDocument, options);
      }
export function useGetAdminNotesAndActionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminNotesAndActionsQuery, GetAdminNotesAndActionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminNotesAndActionsQuery, GetAdminNotesAndActionsQueryVariables>(GetAdminNotesAndActionsDocument, options);
        }
export type GetAdminNotesAndActionsQueryHookResult = ReturnType<typeof useGetAdminNotesAndActionsQuery>;
export type GetAdminNotesAndActionsLazyQueryHookResult = ReturnType<typeof useGetAdminNotesAndActionsLazyQuery>;
export type GetAdminNotesAndActionsQueryResult = Apollo.QueryResult<GetAdminNotesAndActionsQuery, GetAdminNotesAndActionsQueryVariables>;
export const GetCedarContactsDocument = gql`
    query GetCedarContacts($commonName: String!) {
  cedarPersonsByCommonName(commonName: $commonName) {
    commonName
    email
    euaUserId
  }
}
    `;

/**
 * __useGetCedarContactsQuery__
 *
 * To run a query within a React component, call `useGetCedarContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCedarContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCedarContactsQuery({
 *   variables: {
 *      commonName: // value for 'commonName'
 *   },
 * });
 */
export function useGetCedarContactsQuery(baseOptions: Apollo.QueryHookOptions<GetCedarContactsQuery, GetCedarContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCedarContactsQuery, GetCedarContactsQueryVariables>(GetCedarContactsDocument, options);
      }
export function useGetCedarContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCedarContactsQuery, GetCedarContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCedarContactsQuery, GetCedarContactsQueryVariables>(GetCedarContactsDocument, options);
        }
export type GetCedarContactsQueryHookResult = ReturnType<typeof useGetCedarContactsQuery>;
export type GetCedarContactsLazyQueryHookResult = ReturnType<typeof useGetCedarContactsLazyQuery>;
export type GetCedarContactsQueryResult = Apollo.QueryResult<GetCedarContactsQuery, GetCedarContactsQueryVariables>;
export const GetCedarSystemBookmarksDocument = gql`
    query GetCedarSystemBookmarks {
  cedarSystemBookmarks {
    euaUserId
    cedarSystemId
  }
}
    `;

/**
 * __useGetCedarSystemBookmarksQuery__
 *
 * To run a query within a React component, call `useGetCedarSystemBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCedarSystemBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCedarSystemBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCedarSystemBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<GetCedarSystemBookmarksQuery, GetCedarSystemBookmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCedarSystemBookmarksQuery, GetCedarSystemBookmarksQueryVariables>(GetCedarSystemBookmarksDocument, options);
      }
export function useGetCedarSystemBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCedarSystemBookmarksQuery, GetCedarSystemBookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCedarSystemBookmarksQuery, GetCedarSystemBookmarksQueryVariables>(GetCedarSystemBookmarksDocument, options);
        }
export type GetCedarSystemBookmarksQueryHookResult = ReturnType<typeof useGetCedarSystemBookmarksQuery>;
export type GetCedarSystemBookmarksLazyQueryHookResult = ReturnType<typeof useGetCedarSystemBookmarksLazyQuery>;
export type GetCedarSystemBookmarksQueryResult = Apollo.QueryResult<GetCedarSystemBookmarksQuery, GetCedarSystemBookmarksQueryVariables>;
export const GetCedarSystemIdsDocument = gql`
    query GetCedarSystemIds {
  cedarSystems {
    id
    name
  }
}
    `;

/**
 * __useGetCedarSystemIdsQuery__
 *
 * To run a query within a React component, call `useGetCedarSystemIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCedarSystemIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCedarSystemIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCedarSystemIdsQuery(baseOptions?: Apollo.QueryHookOptions<GetCedarSystemIdsQuery, GetCedarSystemIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCedarSystemIdsQuery, GetCedarSystemIdsQueryVariables>(GetCedarSystemIdsDocument, options);
      }
export function useGetCedarSystemIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCedarSystemIdsQuery, GetCedarSystemIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCedarSystemIdsQuery, GetCedarSystemIdsQueryVariables>(GetCedarSystemIdsDocument, options);
        }
export type GetCedarSystemIdsQueryHookResult = ReturnType<typeof useGetCedarSystemIdsQuery>;
export type GetCedarSystemIdsLazyQueryHookResult = ReturnType<typeof useGetCedarSystemIdsLazyQuery>;
export type GetCedarSystemIdsQueryResult = Apollo.QueryResult<GetCedarSystemIdsQuery, GetCedarSystemIdsQueryVariables>;
export const GetCedarSystemDocument = gql`
    query GetCedarSystem($id: String!) {
  cedarSystem(cedarSystemId: $id) {
    id
    name
    description
    acronym
    status
    businessOwnerOrg
    businessOwnerOrgComp
    systemMaintainerOrg
    systemMaintainerOrgComp
  }
}
    `;

/**
 * __useGetCedarSystemQuery__
 *
 * To run a query within a React component, call `useGetCedarSystemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCedarSystemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCedarSystemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCedarSystemQuery(baseOptions: Apollo.QueryHookOptions<GetCedarSystemQuery, GetCedarSystemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCedarSystemQuery, GetCedarSystemQueryVariables>(GetCedarSystemDocument, options);
      }
export function useGetCedarSystemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCedarSystemQuery, GetCedarSystemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCedarSystemQuery, GetCedarSystemQueryVariables>(GetCedarSystemDocument, options);
        }
export type GetCedarSystemQueryHookResult = ReturnType<typeof useGetCedarSystemQuery>;
export type GetCedarSystemLazyQueryHookResult = ReturnType<typeof useGetCedarSystemLazyQuery>;
export type GetCedarSystemQueryResult = Apollo.QueryResult<GetCedarSystemQuery, GetCedarSystemQueryVariables>;
export const GetCedarSystemsAndBookmarksDocument = gql`
    query GetCedarSystemsAndBookmarks {
  cedarSystemBookmarks {
    euaUserId
    cedarSystemId
  }
  cedarSystems {
    id
    name
    description
    acronym
    status
    businessOwnerOrg
    businessOwnerOrgComp
    systemMaintainerOrg
    systemMaintainerOrgComp
  }
}
    `;

/**
 * __useGetCedarSystemsAndBookmarksQuery__
 *
 * To run a query within a React component, call `useGetCedarSystemsAndBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCedarSystemsAndBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCedarSystemsAndBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCedarSystemsAndBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<GetCedarSystemsAndBookmarksQuery, GetCedarSystemsAndBookmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCedarSystemsAndBookmarksQuery, GetCedarSystemsAndBookmarksQueryVariables>(GetCedarSystemsAndBookmarksDocument, options);
      }
export function useGetCedarSystemsAndBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCedarSystemsAndBookmarksQuery, GetCedarSystemsAndBookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCedarSystemsAndBookmarksQuery, GetCedarSystemsAndBookmarksQueryVariables>(GetCedarSystemsAndBookmarksDocument, options);
        }
export type GetCedarSystemsAndBookmarksQueryHookResult = ReturnType<typeof useGetCedarSystemsAndBookmarksQuery>;
export type GetCedarSystemsAndBookmarksLazyQueryHookResult = ReturnType<typeof useGetCedarSystemsAndBookmarksLazyQuery>;
export type GetCedarSystemsAndBookmarksQueryResult = Apollo.QueryResult<GetCedarSystemsAndBookmarksQuery, GetCedarSystemsAndBookmarksQueryVariables>;
export const GetCedarSystemsDocument = gql`
    query GetCedarSystems {
  cedarSystems {
    id
    name
    description
    acronym
    status
    businessOwnerOrg
    businessOwnerOrgComp
    systemMaintainerOrg
    systemMaintainerOrgComp
  }
}
    `;

/**
 * __useGetCedarSystemsQuery__
 *
 * To run a query within a React component, call `useGetCedarSystemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCedarSystemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCedarSystemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCedarSystemsQuery(baseOptions?: Apollo.QueryHookOptions<GetCedarSystemsQuery, GetCedarSystemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCedarSystemsQuery, GetCedarSystemsQueryVariables>(GetCedarSystemsDocument, options);
      }
export function useGetCedarSystemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCedarSystemsQuery, GetCedarSystemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCedarSystemsQuery, GetCedarSystemsQueryVariables>(GetCedarSystemsDocument, options);
        }
export type GetCedarSystemsQueryHookResult = ReturnType<typeof useGetCedarSystemsQuery>;
export type GetCedarSystemsLazyQueryHookResult = ReturnType<typeof useGetCedarSystemsLazyQuery>;
export type GetCedarSystemsQueryResult = Apollo.QueryResult<GetCedarSystemsQuery, GetCedarSystemsQueryVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  currentUser {
    launchDarkly {
      userKey
      signedHash
    }
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetGrtFeedbackDocument = gql`
    query GetGRTFeedback($intakeID: UUID!) {
  systemIntake(id: $intakeID) {
    grtFeedbacks {
      id
      feedbackType
      feedback
      createdAt
    }
  }
}
    `;

/**
 * __useGetGrtFeedbackQuery__
 *
 * To run a query within a React component, call `useGetGrtFeedbackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGrtFeedbackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGrtFeedbackQuery({
 *   variables: {
 *      intakeID: // value for 'intakeID'
 *   },
 * });
 */
export function useGetGrtFeedbackQuery(baseOptions: Apollo.QueryHookOptions<GetGrtFeedbackQuery, GetGrtFeedbackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGrtFeedbackQuery, GetGrtFeedbackQueryVariables>(GetGrtFeedbackDocument, options);
      }
export function useGetGrtFeedbackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGrtFeedbackQuery, GetGrtFeedbackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGrtFeedbackQuery, GetGrtFeedbackQueryVariables>(GetGrtFeedbackDocument, options);
        }
export type GetGrtFeedbackQueryHookResult = ReturnType<typeof useGetGrtFeedbackQuery>;
export type GetGrtFeedbackLazyQueryHookResult = ReturnType<typeof useGetGrtFeedbackLazyQuery>;
export type GetGrtFeedbackQueryResult = Apollo.QueryResult<GetGrtFeedbackQuery, GetGrtFeedbackQueryVariables>;
export const GetRequestsDocument = gql`
    query GetRequests($first: Int!) {
  requests(first: $first) {
    edges {
      node {
        id
        name
        submittedAt
        type
        status
        statusCreatedAt
        lcid
        nextMeetingDate
      }
    }
  }
}
    `;

/**
 * __useGetRequestsQuery__
 *
 * To run a query within a React component, call `useGetRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetRequestsQuery(baseOptions: Apollo.QueryHookOptions<GetRequestsQuery, GetRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRequestsQuery, GetRequestsQueryVariables>(GetRequestsDocument, options);
      }
export function useGetRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRequestsQuery, GetRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRequestsQuery, GetRequestsQueryVariables>(GetRequestsDocument, options);
        }
export type GetRequestsQueryHookResult = ReturnType<typeof useGetRequestsQuery>;
export type GetRequestsLazyQueryHookResult = ReturnType<typeof useGetRequestsLazyQuery>;
export type GetRequestsQueryResult = Apollo.QueryResult<GetRequestsQuery, GetRequestsQueryVariables>;
export const GetSystemIntakeDocument = gql`
    query GetSystemIntake($id: UUID!) {
  systemIntake(id: $id) {
    id
    adminLead
    businessNeed
    businessSolution
    businessOwner {
      component
      name
    }
    contract {
      contractor
      endDate {
        day
        month
        year
      }
      hasContract
      startDate {
        day
        month
        year
      }
      vehicle
    }
    costs {
      isExpectingIncrease
      expectedIncreaseAmount
    }
    currentStage
    decisionNextSteps
    grbDate
    grtDate
    grtFeedbacks {
      feedback
      feedbackType
      createdAt
    }
    governanceTeams {
      isPresent
      teams {
        acronym
        collaborator
        key
        label
        name
      }
    }
    isso {
      isPresent
      name
    }
    existingFunding
    fundingSources {
      source
      fundingNumber
    }
    lcid
    lcidExpiresAt
    lcidScope
    lcidCostBaseline
    needsEaSupport
    productManager {
      component
      name
    }
    rejectionReason
    requester {
      component
      email
      name
    }
    requestName
    requestType
    status
    grtReviewEmailBody
    decidedAt
    businessCaseId
    submittedAt
    updatedAt
    createdAt
    archivedAt
    euaUserId
    lastAdminNote {
      content
      createdAt
    }
  }
}
    `;

/**
 * __useGetSystemIntakeQuery__
 *
 * To run a query within a React component, call `useGetSystemIntakeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSystemIntakeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSystemIntakeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSystemIntakeQuery(baseOptions: Apollo.QueryHookOptions<GetSystemIntakeQuery, GetSystemIntakeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSystemIntakeQuery, GetSystemIntakeQueryVariables>(GetSystemIntakeDocument, options);
      }
export function useGetSystemIntakeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSystemIntakeQuery, GetSystemIntakeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSystemIntakeQuery, GetSystemIntakeQueryVariables>(GetSystemIntakeDocument, options);
        }
export type GetSystemIntakeQueryHookResult = ReturnType<typeof useGetSystemIntakeQuery>;
export type GetSystemIntakeLazyQueryHookResult = ReturnType<typeof useGetSystemIntakeLazyQuery>;
export type GetSystemIntakeQueryResult = Apollo.QueryResult<GetSystemIntakeQuery, GetSystemIntakeQueryVariables>;
export const GetSystemProfileDocument = gql`
    query GetSystemProfile($cedarSystemId: String!) {
  cedarAuthorityToOperate(cedarSystemID: $cedarSystemId) {
    uuid
    tlcPhase
    dateAuthorizationMemoExpires
    countOfOpenPoams
    lastAssessmentDate
  }
  cedarThreat(cedarSystemId: $cedarSystemId) {
    weaknessRiskLevel
  }
  cedarSystemDetails(cedarSystemId: $cedarSystemId) {
    businessOwnerInformation {
      isCmsOwned
      numberOfContractorFte
      numberOfFederalFte
      numberOfSupportedUsersPerMonth
    }
    cedarSystem {
      id
      name
      description
      acronym
      status
      businessOwnerOrg
      businessOwnerOrgComp
      systemMaintainerOrg
      systemMaintainerOrgComp
    }
    deployments {
      id
      dataCenter {
        name
      }
      deploymentType
      name
    }
    roles {
      application
      objectID
      roleTypeID
      assigneeType
      assigneeUsername
      assigneeEmail
      assigneeOrgID
      assigneeOrgName
      assigneeFirstName
      assigneeLastName
      roleTypeName
      roleID
    }
    urls {
      id
      address
      isAPIEndpoint
      isBehindWebApplicationFirewall
      isVersionCodeRepository
      urlHostingEnv
    }
    systemMaintainerInformation {
      agileUsed
      deploymentFrequency
      devCompletionPercent
      devWorkDescription
      netAccessibility
    }
  }
}
    `;

/**
 * __useGetSystemProfileQuery__
 *
 * To run a query within a React component, call `useGetSystemProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSystemProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSystemProfileQuery({
 *   variables: {
 *      cedarSystemId: // value for 'cedarSystemId'
 *   },
 * });
 */
export function useGetSystemProfileQuery(baseOptions: Apollo.QueryHookOptions<GetSystemProfileQuery, GetSystemProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSystemProfileQuery, GetSystemProfileQueryVariables>(GetSystemProfileDocument, options);
      }
export function useGetSystemProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSystemProfileQuery, GetSystemProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSystemProfileQuery, GetSystemProfileQueryVariables>(GetSystemProfileDocument, options);
        }
export type GetSystemProfileQueryHookResult = ReturnType<typeof useGetSystemProfileQuery>;
export type GetSystemProfileLazyQueryHookResult = ReturnType<typeof useGetSystemProfileLazyQuery>;
export type GetSystemProfileQueryResult = Apollo.QueryResult<GetSystemProfileQuery, GetSystemProfileQueryVariables>;
export const GetSystemsDocument = gql`
    query GetSystems($first: Int!) {
  systems(first: $first) {
    edges {
      node {
        id
        lcid
        name
        businessOwner {
          name
          component
        }
      }
    }
  }
}
    `;

/**
 * __useGetSystemsQuery__
 *
 * To run a query within a React component, call `useGetSystemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSystemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSystemsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetSystemsQuery(baseOptions: Apollo.QueryHookOptions<GetSystemsQuery, GetSystemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSystemsQuery, GetSystemsQueryVariables>(GetSystemsDocument, options);
      }
export function useGetSystemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSystemsQuery, GetSystemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSystemsQuery, GetSystemsQueryVariables>(GetSystemsDocument, options);
        }
export type GetSystemsQueryHookResult = ReturnType<typeof useGetSystemsQuery>;
export type GetSystemsLazyQueryHookResult = ReturnType<typeof useGetSystemsLazyQuery>;
export type GetSystemsQueryResult = Apollo.QueryResult<GetSystemsQuery, GetSystemsQueryVariables>;
export const IssueLifecycleIdDocument = gql`
    mutation IssueLifecycleId($input: IssueLifecycleIdInput!) {
  issueLifecycleId(input: $input) {
    systemIntake {
      decisionNextSteps
      id
      lcid
      lcidExpiresAt
      lcidScope
    }
  }
}
    `;
export type IssueLifecycleIdMutationFn = Apollo.MutationFunction<IssueLifecycleIdMutation, IssueLifecycleIdMutationVariables>;

/**
 * __useIssueLifecycleIdMutation__
 *
 * To run a mutation, you first call `useIssueLifecycleIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIssueLifecycleIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [issueLifecycleIdMutation, { data, loading, error }] = useIssueLifecycleIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useIssueLifecycleIdMutation(baseOptions?: Apollo.MutationHookOptions<IssueLifecycleIdMutation, IssueLifecycleIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IssueLifecycleIdMutation, IssueLifecycleIdMutationVariables>(IssueLifecycleIdDocument, options);
      }
export type IssueLifecycleIdMutationHookResult = ReturnType<typeof useIssueLifecycleIdMutation>;
export type IssueLifecycleIdMutationResult = Apollo.MutationResult<IssueLifecycleIdMutation>;
export type IssueLifecycleIdMutationOptions = Apollo.BaseMutationOptions<IssueLifecycleIdMutation, IssueLifecycleIdMutationVariables>;
export const MarkSystemIntakeReadyForGrbDocument = gql`
    mutation MarkSystemIntakeReadyForGRB($input: AddGRTFeedbackInput!) {
  markSystemIntakeReadyForGRB(input: $input) {
    id
  }
}
    `;
export type MarkSystemIntakeReadyForGrbMutationFn = Apollo.MutationFunction<MarkSystemIntakeReadyForGrbMutation, MarkSystemIntakeReadyForGrbMutationVariables>;

/**
 * __useMarkSystemIntakeReadyForGrbMutation__
 *
 * To run a mutation, you first call `useMarkSystemIntakeReadyForGrbMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkSystemIntakeReadyForGrbMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markSystemIntakeReadyForGrbMutation, { data, loading, error }] = useMarkSystemIntakeReadyForGrbMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMarkSystemIntakeReadyForGrbMutation(baseOptions?: Apollo.MutationHookOptions<MarkSystemIntakeReadyForGrbMutation, MarkSystemIntakeReadyForGrbMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkSystemIntakeReadyForGrbMutation, MarkSystemIntakeReadyForGrbMutationVariables>(MarkSystemIntakeReadyForGrbDocument, options);
      }
export type MarkSystemIntakeReadyForGrbMutationHookResult = ReturnType<typeof useMarkSystemIntakeReadyForGrbMutation>;
export type MarkSystemIntakeReadyForGrbMutationResult = Apollo.MutationResult<MarkSystemIntakeReadyForGrbMutation>;
export type MarkSystemIntakeReadyForGrbMutationOptions = Apollo.BaseMutationOptions<MarkSystemIntakeReadyForGrbMutation, MarkSystemIntakeReadyForGrbMutationVariables>;
export const RejectIntakeDocument = gql`
    mutation RejectIntake($input: RejectIntakeInput!) {
  rejectIntake(input: $input) {
    systemIntake {
      decisionNextSteps
      id
      rejectionReason
    }
  }
}
    `;
export type RejectIntakeMutationFn = Apollo.MutationFunction<RejectIntakeMutation, RejectIntakeMutationVariables>;

/**
 * __useRejectIntakeMutation__
 *
 * To run a mutation, you first call `useRejectIntakeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectIntakeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectIntakeMutation, { data, loading, error }] = useRejectIntakeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRejectIntakeMutation(baseOptions?: Apollo.MutationHookOptions<RejectIntakeMutation, RejectIntakeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectIntakeMutation, RejectIntakeMutationVariables>(RejectIntakeDocument, options);
      }
export type RejectIntakeMutationHookResult = ReturnType<typeof useRejectIntakeMutation>;
export type RejectIntakeMutationResult = Apollo.MutationResult<RejectIntakeMutation>;
export type RejectIntakeMutationOptions = Apollo.BaseMutationOptions<RejectIntakeMutation, RejectIntakeMutationVariables>;
export const SendFeedbackEmailDocument = gql`
    mutation SendFeedbackEmail($input: SendFeedbackEmailInput!) {
  sendFeedbackEmail(input: $input)
}
    `;
export type SendFeedbackEmailMutationFn = Apollo.MutationFunction<SendFeedbackEmailMutation, SendFeedbackEmailMutationVariables>;

/**
 * __useSendFeedbackEmailMutation__
 *
 * To run a mutation, you first call `useSendFeedbackEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendFeedbackEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendFeedbackEmailMutation, { data, loading, error }] = useSendFeedbackEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendFeedbackEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendFeedbackEmailMutation, SendFeedbackEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendFeedbackEmailMutation, SendFeedbackEmailMutationVariables>(SendFeedbackEmailDocument, options);
      }
export type SendFeedbackEmailMutationHookResult = ReturnType<typeof useSendFeedbackEmailMutation>;
export type SendFeedbackEmailMutationResult = Apollo.MutationResult<SendFeedbackEmailMutation>;
export type SendFeedbackEmailMutationOptions = Apollo.BaseMutationOptions<SendFeedbackEmailMutation, SendFeedbackEmailMutationVariables>;
export const GetSystemIntakeContactsQueryDocument = gql`
    query GetSystemIntakeContactsQuery($id: UUID!) {
  systemIntakeContacts(id: $id) {
    systemIntakeContacts {
      id
      euaUserId
      systemIntakeId
      component
      role
      commonName
      email
    }
  }
}
    `;

/**
 * __useGetSystemIntakeContactsQueryQuery__
 *
 * To run a query within a React component, call `useGetSystemIntakeContactsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSystemIntakeContactsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSystemIntakeContactsQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSystemIntakeContactsQueryQuery(baseOptions: Apollo.QueryHookOptions<GetSystemIntakeContactsQueryQuery, GetSystemIntakeContactsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSystemIntakeContactsQueryQuery, GetSystemIntakeContactsQueryQueryVariables>(GetSystemIntakeContactsQueryDocument, options);
      }
export function useGetSystemIntakeContactsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSystemIntakeContactsQueryQuery, GetSystemIntakeContactsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSystemIntakeContactsQueryQuery, GetSystemIntakeContactsQueryQueryVariables>(GetSystemIntakeContactsQueryDocument, options);
        }
export type GetSystemIntakeContactsQueryQueryHookResult = ReturnType<typeof useGetSystemIntakeContactsQueryQuery>;
export type GetSystemIntakeContactsQueryLazyQueryHookResult = ReturnType<typeof useGetSystemIntakeContactsQueryLazyQuery>;
export type GetSystemIntakeContactsQueryQueryResult = Apollo.QueryResult<GetSystemIntakeContactsQueryQuery, GetSystemIntakeContactsQueryQueryVariables>;
export const CreateSystemIntakeContactDocument = gql`
    mutation CreateSystemIntakeContact($input: CreateSystemIntakeContactInput!) {
  createSystemIntakeContact(input: $input) {
    systemIntakeContact {
      euaUserId
      systemIntakeId
      component
      role
    }
  }
}
    `;
export type CreateSystemIntakeContactMutationFn = Apollo.MutationFunction<CreateSystemIntakeContactMutation, CreateSystemIntakeContactMutationVariables>;

/**
 * __useCreateSystemIntakeContactMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeContactMutation, { data, loading, error }] = useCreateSystemIntakeContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeContactMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeContactMutation, CreateSystemIntakeContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeContactMutation, CreateSystemIntakeContactMutationVariables>(CreateSystemIntakeContactDocument, options);
      }
export type CreateSystemIntakeContactMutationHookResult = ReturnType<typeof useCreateSystemIntakeContactMutation>;
export type CreateSystemIntakeContactMutationResult = Apollo.MutationResult<CreateSystemIntakeContactMutation>;
export type CreateSystemIntakeContactMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeContactMutation, CreateSystemIntakeContactMutationVariables>;
export const UpdateSystemIntakeContactDocument = gql`
    mutation UpdateSystemIntakeContact($input: UpdateSystemIntakeContactInput!) {
  updateSystemIntakeContact(input: $input) {
    systemIntakeContact {
      id
      euaUserId
      systemIntakeId
      component
      role
    }
  }
}
    `;
export type UpdateSystemIntakeContactMutationFn = Apollo.MutationFunction<UpdateSystemIntakeContactMutation, UpdateSystemIntakeContactMutationVariables>;

/**
 * __useUpdateSystemIntakeContactMutation__
 *
 * To run a mutation, you first call `useUpdateSystemIntakeContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSystemIntakeContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSystemIntakeContactMutation, { data, loading, error }] = useUpdateSystemIntakeContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSystemIntakeContactMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSystemIntakeContactMutation, UpdateSystemIntakeContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSystemIntakeContactMutation, UpdateSystemIntakeContactMutationVariables>(UpdateSystemIntakeContactDocument, options);
      }
export type UpdateSystemIntakeContactMutationHookResult = ReturnType<typeof useUpdateSystemIntakeContactMutation>;
export type UpdateSystemIntakeContactMutationResult = Apollo.MutationResult<UpdateSystemIntakeContactMutation>;
export type UpdateSystemIntakeContactMutationOptions = Apollo.BaseMutationOptions<UpdateSystemIntakeContactMutation, UpdateSystemIntakeContactMutationVariables>;
export const DeleteSystemIntakeContactDocument = gql`
    mutation DeleteSystemIntakeContact($input: DeleteSystemIntakeContactInput!) {
  deleteSystemIntakeContact(input: $input) {
    systemIntakeContact {
      id
      euaUserId
      systemIntakeId
      component
      role
    }
  }
}
    `;
export type DeleteSystemIntakeContactMutationFn = Apollo.MutationFunction<DeleteSystemIntakeContactMutation, DeleteSystemIntakeContactMutationVariables>;

/**
 * __useDeleteSystemIntakeContactMutation__
 *
 * To run a mutation, you first call `useDeleteSystemIntakeContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSystemIntakeContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSystemIntakeContactMutation, { data, loading, error }] = useDeleteSystemIntakeContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteSystemIntakeContactMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSystemIntakeContactMutation, DeleteSystemIntakeContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSystemIntakeContactMutation, DeleteSystemIntakeContactMutationVariables>(DeleteSystemIntakeContactDocument, options);
      }
export type DeleteSystemIntakeContactMutationHookResult = ReturnType<typeof useDeleteSystemIntakeContactMutation>;
export type DeleteSystemIntakeContactMutationResult = Apollo.MutationResult<DeleteSystemIntakeContactMutation>;
export type DeleteSystemIntakeContactMutationOptions = Apollo.BaseMutationOptions<DeleteSystemIntakeContactMutation, DeleteSystemIntakeContactMutationVariables>;
export const CreateSystemIntakeDocument = gql`
    mutation CreateSystemIntake($input: CreateSystemIntakeInput!) {
  createSystemIntake(input: $input) {
    id
    status
    requestType
    requester {
      name
    }
  }
}
    `;
export type CreateSystemIntakeMutationFn = Apollo.MutationFunction<CreateSystemIntakeMutation, CreateSystemIntakeMutationVariables>;

/**
 * __useCreateSystemIntakeMutation__
 *
 * To run a mutation, you first call `useCreateSystemIntakeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSystemIntakeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSystemIntakeMutation, { data, loading, error }] = useCreateSystemIntakeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSystemIntakeMutation(baseOptions?: Apollo.MutationHookOptions<CreateSystemIntakeMutation, CreateSystemIntakeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSystemIntakeMutation, CreateSystemIntakeMutationVariables>(CreateSystemIntakeDocument, options);
      }
export type CreateSystemIntakeMutationHookResult = ReturnType<typeof useCreateSystemIntakeMutation>;
export type CreateSystemIntakeMutationResult = Apollo.MutationResult<CreateSystemIntakeMutation>;
export type CreateSystemIntakeMutationOptions = Apollo.BaseMutationOptions<CreateSystemIntakeMutation, CreateSystemIntakeMutationVariables>;
export const UpdateSystemIntakeContractDetailsDocument = gql`
    mutation UpdateSystemIntakeContractDetails($input: UpdateSystemIntakeContractDetailsInput!) {
  updateSystemIntakeContractDetails(input: $input) {
    systemIntake {
      id
      currentStage
      fundingSources {
        source
        fundingNumber
      }
      costs {
        expectedIncreaseAmount
        isExpectingIncrease
      }
      contract {
        contractor
        endDate {
          day
          month
          year
        }
        hasContract
        startDate {
          day
          month
          year
        }
        vehicle
      }
    }
  }
}
    `;
export type UpdateSystemIntakeContractDetailsMutationFn = Apollo.MutationFunction<UpdateSystemIntakeContractDetailsMutation, UpdateSystemIntakeContractDetailsMutationVariables>;

/**
 * __useUpdateSystemIntakeContractDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateSystemIntakeContractDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSystemIntakeContractDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSystemIntakeContractDetailsMutation, { data, loading, error }] = useUpdateSystemIntakeContractDetailsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSystemIntakeContractDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSystemIntakeContractDetailsMutation, UpdateSystemIntakeContractDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSystemIntakeContractDetailsMutation, UpdateSystemIntakeContractDetailsMutationVariables>(UpdateSystemIntakeContractDetailsDocument, options);
      }
export type UpdateSystemIntakeContractDetailsMutationHookResult = ReturnType<typeof useUpdateSystemIntakeContractDetailsMutation>;
export type UpdateSystemIntakeContractDetailsMutationResult = Apollo.MutationResult<UpdateSystemIntakeContractDetailsMutation>;
export type UpdateSystemIntakeContractDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateSystemIntakeContractDetailsMutation, UpdateSystemIntakeContractDetailsMutationVariables>;
export const UpdateSystemIntakeRequestDetailsDocument = gql`
    mutation UpdateSystemIntakeRequestDetails($input: UpdateSystemIntakeRequestDetailsInput!) {
  updateSystemIntakeRequestDetails(input: $input) {
    systemIntake {
      id
      requestName
      businessNeed
      businessSolution
      needsEaSupport
    }
  }
}
    `;
export type UpdateSystemIntakeRequestDetailsMutationFn = Apollo.MutationFunction<UpdateSystemIntakeRequestDetailsMutation, UpdateSystemIntakeRequestDetailsMutationVariables>;

/**
 * __useUpdateSystemIntakeRequestDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateSystemIntakeRequestDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSystemIntakeRequestDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSystemIntakeRequestDetailsMutation, { data, loading, error }] = useUpdateSystemIntakeRequestDetailsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSystemIntakeRequestDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSystemIntakeRequestDetailsMutation, UpdateSystemIntakeRequestDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSystemIntakeRequestDetailsMutation, UpdateSystemIntakeRequestDetailsMutationVariables>(UpdateSystemIntakeRequestDetailsDocument, options);
      }
export type UpdateSystemIntakeRequestDetailsMutationHookResult = ReturnType<typeof useUpdateSystemIntakeRequestDetailsMutation>;
export type UpdateSystemIntakeRequestDetailsMutationResult = Apollo.MutationResult<UpdateSystemIntakeRequestDetailsMutation>;
export type UpdateSystemIntakeRequestDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateSystemIntakeRequestDetailsMutation, UpdateSystemIntakeRequestDetailsMutationVariables>;
export const UpdateSystemIntakeContactDetailsDocument = gql`
    mutation UpdateSystemIntakeContactDetails($input: UpdateSystemIntakeContactDetailsInput!) {
  updateSystemIntakeContactDetails(input: $input) {
    systemIntake {
      id
      businessOwner {
        component
        name
      }
      governanceTeams {
        isPresent
        teams {
          acronym
          collaborator
          key
          label
          name
        }
      }
      isso {
        isPresent
        name
      }
      productManager {
        component
        name
      }
      requester {
        component
        name
      }
    }
  }
}
    `;
export type UpdateSystemIntakeContactDetailsMutationFn = Apollo.MutationFunction<UpdateSystemIntakeContactDetailsMutation, UpdateSystemIntakeContactDetailsMutationVariables>;

/**
 * __useUpdateSystemIntakeContactDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateSystemIntakeContactDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSystemIntakeContactDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSystemIntakeContactDetailsMutation, { data, loading, error }] = useUpdateSystemIntakeContactDetailsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSystemIntakeContactDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSystemIntakeContactDetailsMutation, UpdateSystemIntakeContactDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSystemIntakeContactDetailsMutation, UpdateSystemIntakeContactDetailsMutationVariables>(UpdateSystemIntakeContactDetailsDocument, options);
      }
export type UpdateSystemIntakeContactDetailsMutationHookResult = ReturnType<typeof useUpdateSystemIntakeContactDetailsMutation>;
export type UpdateSystemIntakeContactDetailsMutationResult = Apollo.MutationResult<UpdateSystemIntakeContactDetailsMutation>;
export type UpdateSystemIntakeContactDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateSystemIntakeContactDetailsMutation, UpdateSystemIntakeContactDetailsMutationVariables>;
export const SubmitIntakeDocument = gql`
    mutation SubmitIntake($input: SubmitIntakeInput!) {
  submitIntake(input: $input) {
    systemIntake {
      status
      id
    }
  }
}
    `;
export type SubmitIntakeMutationFn = Apollo.MutationFunction<SubmitIntakeMutation, SubmitIntakeMutationVariables>;

/**
 * __useSubmitIntakeMutation__
 *
 * To run a mutation, you first call `useSubmitIntakeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitIntakeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitIntakeMutation, { data, loading, error }] = useSubmitIntakeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitIntakeMutation(baseOptions?: Apollo.MutationHookOptions<SubmitIntakeMutation, SubmitIntakeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitIntakeMutation, SubmitIntakeMutationVariables>(SubmitIntakeDocument, options);
      }
export type SubmitIntakeMutationHookResult = ReturnType<typeof useSubmitIntakeMutation>;
export type SubmitIntakeMutationResult = Apollo.MutationResult<SubmitIntakeMutation>;
export type SubmitIntakeMutationOptions = Apollo.BaseMutationOptions<SubmitIntakeMutation, SubmitIntakeMutationVariables>;
export const UpdateAccessibilityRequestDocument = gql`
    mutation UpdateAccessibilityRequest($input: UpdateAccessibilityRequestCedarSystemInput!) {
  updateAccessibilityRequestCedarSystem(input: $input) {
    id
    accessibilityRequest {
      id
      name
    }
  }
}
    `;
export type UpdateAccessibilityRequestMutationFn = Apollo.MutationFunction<UpdateAccessibilityRequestMutation, UpdateAccessibilityRequestMutationVariables>;

/**
 * __useUpdateAccessibilityRequestMutation__
 *
 * To run a mutation, you first call `useUpdateAccessibilityRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccessibilityRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccessibilityRequestMutation, { data, loading, error }] = useUpdateAccessibilityRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAccessibilityRequestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccessibilityRequestMutation, UpdateAccessibilityRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccessibilityRequestMutation, UpdateAccessibilityRequestMutationVariables>(UpdateAccessibilityRequestDocument, options);
      }
export type UpdateAccessibilityRequestMutationHookResult = ReturnType<typeof useUpdateAccessibilityRequestMutation>;
export type UpdateAccessibilityRequestMutationResult = Apollo.MutationResult<UpdateAccessibilityRequestMutation>;
export type UpdateAccessibilityRequestMutationOptions = Apollo.BaseMutationOptions<UpdateAccessibilityRequestMutation, UpdateAccessibilityRequestMutationVariables>;
export const UpdateAccessibilityRequestStatusDocument = gql`
    mutation UpdateAccessibilityRequestStatus($input: UpdateAccessibilityRequestStatus!) {
  updateAccessibilityRequestStatus(input: $input) {
    id
    requestID
    status
    euaUserId
    userErrors {
      message
      path
    }
  }
}
    `;
export type UpdateAccessibilityRequestStatusMutationFn = Apollo.MutationFunction<UpdateAccessibilityRequestStatusMutation, UpdateAccessibilityRequestStatusMutationVariables>;

/**
 * __useUpdateAccessibilityRequestStatusMutation__
 *
 * To run a mutation, you first call `useUpdateAccessibilityRequestStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccessibilityRequestStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccessibilityRequestStatusMutation, { data, loading, error }] = useUpdateAccessibilityRequestStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAccessibilityRequestStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccessibilityRequestStatusMutation, UpdateAccessibilityRequestStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccessibilityRequestStatusMutation, UpdateAccessibilityRequestStatusMutationVariables>(UpdateAccessibilityRequestStatusDocument, options);
      }
export type UpdateAccessibilityRequestStatusMutationHookResult = ReturnType<typeof useUpdateAccessibilityRequestStatusMutation>;
export type UpdateAccessibilityRequestStatusMutationResult = Apollo.MutationResult<UpdateAccessibilityRequestStatusMutation>;
export type UpdateAccessibilityRequestStatusMutationOptions = Apollo.BaseMutationOptions<UpdateAccessibilityRequestStatusMutation, UpdateAccessibilityRequestStatusMutationVariables>;
export const UpdateSystemIntakeAdminLeadDocument = gql`
    mutation UpdateSystemIntakeAdminLead($input: UpdateSystemIntakeAdminLeadInput!) {
  updateSystemIntakeAdminLead(input: $input) {
    systemIntake {
      adminLead
      id
    }
  }
}
    `;
export type UpdateSystemIntakeAdminLeadMutationFn = Apollo.MutationFunction<UpdateSystemIntakeAdminLeadMutation, UpdateSystemIntakeAdminLeadMutationVariables>;

/**
 * __useUpdateSystemIntakeAdminLeadMutation__
 *
 * To run a mutation, you first call `useUpdateSystemIntakeAdminLeadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSystemIntakeAdminLeadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSystemIntakeAdminLeadMutation, { data, loading, error }] = useUpdateSystemIntakeAdminLeadMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSystemIntakeAdminLeadMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSystemIntakeAdminLeadMutation, UpdateSystemIntakeAdminLeadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSystemIntakeAdminLeadMutation, UpdateSystemIntakeAdminLeadMutationVariables>(UpdateSystemIntakeAdminLeadDocument, options);
      }
export type UpdateSystemIntakeAdminLeadMutationHookResult = ReturnType<typeof useUpdateSystemIntakeAdminLeadMutation>;
export type UpdateSystemIntakeAdminLeadMutationResult = Apollo.MutationResult<UpdateSystemIntakeAdminLeadMutation>;
export type UpdateSystemIntakeAdminLeadMutationOptions = Apollo.BaseMutationOptions<UpdateSystemIntakeAdminLeadMutation, UpdateSystemIntakeAdminLeadMutationVariables>;
export const UpdateSystemIntakeReviewDatesDocument = gql`
    mutation UpdateSystemIntakeReviewDates($input: UpdateSystemIntakeReviewDatesInput!) {
  updateSystemIntakeReviewDates(input: $input) {
    systemIntake {
      id
      grbDate
      grtDate
    }
  }
}
    `;
export type UpdateSystemIntakeReviewDatesMutationFn = Apollo.MutationFunction<UpdateSystemIntakeReviewDatesMutation, UpdateSystemIntakeReviewDatesMutationVariables>;

/**
 * __useUpdateSystemIntakeReviewDatesMutation__
 *
 * To run a mutation, you first call `useUpdateSystemIntakeReviewDatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSystemIntakeReviewDatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSystemIntakeReviewDatesMutation, { data, loading, error }] = useUpdateSystemIntakeReviewDatesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSystemIntakeReviewDatesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSystemIntakeReviewDatesMutation, UpdateSystemIntakeReviewDatesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSystemIntakeReviewDatesMutation, UpdateSystemIntakeReviewDatesMutationVariables>(UpdateSystemIntakeReviewDatesDocument, options);
      }
export type UpdateSystemIntakeReviewDatesMutationHookResult = ReturnType<typeof useUpdateSystemIntakeReviewDatesMutation>;
export type UpdateSystemIntakeReviewDatesMutationResult = Apollo.MutationResult<UpdateSystemIntakeReviewDatesMutation>;
export type UpdateSystemIntakeReviewDatesMutationOptions = Apollo.BaseMutationOptions<UpdateSystemIntakeReviewDatesMutation, UpdateSystemIntakeReviewDatesMutationVariables>;
export const UpdateTestDateDocument = gql`
    mutation UpdateTestDate($input: UpdateTestDateInput!) {
  updateTestDate(input: $input) {
    testDate {
      id
    }
  }
}
    `;
export type UpdateTestDateMutationFn = Apollo.MutationFunction<UpdateTestDateMutation, UpdateTestDateMutationVariables>;

/**
 * __useUpdateTestDateMutation__
 *
 * To run a mutation, you first call `useUpdateTestDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTestDateMutation, { data, loading, error }] = useUpdateTestDateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTestDateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTestDateMutation, UpdateTestDateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTestDateMutation, UpdateTestDateMutationVariables>(UpdateTestDateDocument, options);
      }
export type UpdateTestDateMutationHookResult = ReturnType<typeof useUpdateTestDateMutation>;
export type UpdateTestDateMutationResult = Apollo.MutationResult<UpdateTestDateMutation>;
export type UpdateTestDateMutationOptions = Apollo.BaseMutationOptions<UpdateTestDateMutation, UpdateTestDateMutationVariables>;