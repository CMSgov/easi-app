/*
import {
  GetLinkedRequests_cedarSystemDetails_cedarSystem_linkedSystemIntakes as LinkedSystemIntake,
  GetLinkedRequests_cedarSystemDetails_cedarSystem_linkedTrbRequests as LinkedTrbRequest
} from 'queries/types/GetLinkedRequests';
*/

import {
  GetSystemLinkedRequests_cedarSystemDetails_cedarSystem_linkedSystemIntakes as LinkedSystemIntake,
  GetSystemLinkedRequests_cedarSystemDetails_cedarSystem_linkedTrbRequests as LinkedTrbRequest
} from 'gql/gen/types/GetSystemLinkedRequests';

export type { LinkedSystemIntake, LinkedTrbRequest };
export type SystemLinkedRequest = LinkedSystemIntake | LinkedTrbRequest;
