/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TRBRequestType, TRBWhereInProcessOption, TRBCollabGroupOption, TRBTechnicalReferenceArchitectureOption, TRBNetworkAndSecurityOption, TRBCloudAndInfrastructureOption, TRBApplicationDevelopmentOption, TRBDataAndDataManagementOption, TRBGovernmentProcessesAndPoliciesOption, TRBOtherTechnicalTopicsOption } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateTrbRequest
// ====================================================

export interface CreateTrbRequest_createTRBRequest_form {
  __typename: "TRBRequestForm";
  id: UUID;
  component: string | null;
  needsAssistanceWith: string | null;
  hasSolutionInMind: boolean | null;
  proposedSolution: string | null;
  whereInProcess: TRBWhereInProcessOption | null;
  whereInProcessOther: string | null;
  hasExpectedStartEndDates: boolean | null;
  expectedStartDate: Time | null;
  expectedEndDate: Time | null;
  collabGroups: TRBCollabGroupOption[];
  collabDateSecurity: string | null;
  collabDateEnterpriseArchitecture: string | null;
  collabDateCloud: string | null;
  collabDatePrivacyAdvisor: string | null;
  collabDateGovernanceReviewBoard: string | null;
  collabDateOther: string | null;
  collabGroupOther: string | null;
  subjectAreaTechnicalReferenceArchitecture: TRBTechnicalReferenceArchitectureOption[] | null;
  subjectAreaNetworkAndSecurity: TRBNetworkAndSecurityOption[] | null;
  subjectAreaCloudAndInfrastructure: TRBCloudAndInfrastructureOption[] | null;
  subjectAreaApplicationDevelopment: TRBApplicationDevelopmentOption[] | null;
  subjectAreaDataAndDataManagement: TRBDataAndDataManagementOption[] | null;
  subjectAreaGovernmentProcessesAndPolicies: TRBGovernmentProcessesAndPoliciesOption[] | null;
  subjectAreaOtherTechnicalTopics: TRBOtherTechnicalTopicsOption[] | null;
  subjectAreaTechnicalReferenceArchitectureOther: string | null;
  subjectAreaNetworkAndSecurityOther: string | null;
  subjectAreaCloudAndInfrastructureOther: string | null;
  subjectAreaApplicationDevelopmentOther: string | null;
  subjectAreaDataAndDataManagementOther: string | null;
  subjectAreaGovernmentProcessesAndPoliciesOther: string | null;
  subjectAreaOtherTechnicalTopicsOther: string | null;
}

export interface CreateTrbRequest_createTRBRequest {
  __typename: "TRBRequest";
  id: UUID;
  name: string;
  createdBy: string;
  form: CreateTrbRequest_createTRBRequest_form;
}

export interface CreateTrbRequest {
  createTRBRequest: CreateTrbRequest_createTRBRequest;
}

export interface CreateTrbRequestVariables {
  requestType: TRBRequestType;
}
