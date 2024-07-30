/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SystemIntakeState, TRBRequestState, SystemIntakeStatusRequester, TRBRequestStatus } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetSystemLinkedRequests
// ====================================================

export interface GetSystemLinkedRequests_cedarSystemDetails_cedarSystem_linkedSystemIntakes {
  __typename: "SystemIntake";
  id: UUID;
  name: string | null;
  submittedAt: Time | null;
  status: SystemIntakeStatusRequester;
  lcid: string | null;
  requesterName: string | null;
}

export interface GetSystemLinkedRequests_cedarSystemDetails_cedarSystem_linkedTrbRequests_form {
  __typename: "TRBRequestForm";
  submittedAt: Time | null;
}

export interface GetSystemLinkedRequests_cedarSystemDetails_cedarSystem_linkedTrbRequests_requesterInfo {
  __typename: "UserInfo";
  commonName: string;
}

export interface GetSystemLinkedRequests_cedarSystemDetails_cedarSystem_linkedTrbRequests {
  __typename: "TRBRequest";
  id: UUID;
  name: string | null;
  form: GetSystemLinkedRequests_cedarSystemDetails_cedarSystem_linkedTrbRequests_form;
  status: TRBRequestStatus;
  state: TRBRequestState;
  requesterInfo: GetSystemLinkedRequests_cedarSystemDetails_cedarSystem_linkedTrbRequests_requesterInfo;
}

export interface GetSystemLinkedRequests_cedarSystemDetails_cedarSystem {
  __typename: "CedarSystem";
  id: string;
  linkedSystemIntakes: GetSystemLinkedRequests_cedarSystemDetails_cedarSystem_linkedSystemIntakes[];
  linkedTrbRequests: GetSystemLinkedRequests_cedarSystemDetails_cedarSystem_linkedTrbRequests[];
}

export interface GetSystemLinkedRequests_cedarSystemDetails {
  __typename: "CedarSystemDetails";
  cedarSystem: GetSystemLinkedRequests_cedarSystemDetails_cedarSystem;
}

export interface GetSystemLinkedRequests {
  cedarSystemDetails: GetSystemLinkedRequests_cedarSystemDetails | null;
}

export interface GetSystemLinkedRequestsVariables {
  cedarSystemId: string;
  systemIntakeState: SystemIntakeState;
  trbRequestState: TRBRequestState;
}
