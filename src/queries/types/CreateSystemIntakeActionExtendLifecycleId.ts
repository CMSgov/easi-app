/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateSystemIntakeActionExtendLifecycleIdInput } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateSystemIntakeActionExtendLifecycleId
// ====================================================

export interface CreateSystemIntakeActionExtendLifecycleId_createSystemIntakeActionExtendLifecycleId_systemIntake {
  __typename: "SystemIntake";
  id: UUID;
  lcidScope: HTML | null;
  decisionNextSteps: HTML | null;
  lcidExpiresAt: Time | null;
  lcidCostBaseline: string | null;
}

export interface CreateSystemIntakeActionExtendLifecycleId_createSystemIntakeActionExtendLifecycleId {
  __typename: "CreateSystemIntakeActionExtendLifecycleIdPayload";
  systemIntake: CreateSystemIntakeActionExtendLifecycleId_createSystemIntakeActionExtendLifecycleId_systemIntake | null;
}

export interface CreateSystemIntakeActionExtendLifecycleId {
  /**
   * Used for IT Gov v1 workflow; for v2, use createSystemIntakeActionUpdateLCID
   */
  createSystemIntakeActionExtendLifecycleId: CreateSystemIntakeActionExtendLifecycleId_createSystemIntakeActionExtendLifecycleId | null;
}

export interface CreateSystemIntakeActionExtendLifecycleIdVariables {
  input: CreateSystemIntakeActionExtendLifecycleIdInput;
}
