import i18next from 'i18next';

import cmsDivisionsAndOffices from 'constants/enums/cmsDivisionsAndOffices';
import {
  closedIntakeStatusesV1,
  openIntakeStatusesV1,
  RequestType,
  SystemIntakeStatusV1
} from 'types/systemIntake';

// NOTE: these utility functions take strings rather than more restricted types so they can operate on values coming from GraphQL queries,
// which are typed according to the autogenerated types in src/types/graphql-global-types.ts
// To improve this, we could make the status parameter use the GraphQL SystemIntakeStatus type, which would closely couple these functions to the GraphQL API
// or we could add a translation layer between the GraphQL types and our domain types in src/types/systemIntake.ts.

/**
 * Checks whenther an intake is closed
 * @param status - the intake's status
 */
export const isIntakeClosed = (status: string) => {
  return closedIntakeStatusesV1.includes(status);
};

/**
 * Checks whenther an intake is open
 * @param status - the intake's status
 */
export const isIntakeOpen = (status: string) => {
  return openIntakeStatusesV1.includes(status);
};

/**
 * Checks whether an intake has a "decision"
 * @param status - the intake's status
 */
export const intakeHasDecision = (status: string) => {
  return [
    'NO_GOVERNANCE',
    'NOT_IT_REQUEST',
    'LCID_ISSUED',
    'NOT_APPROVED'
  ].includes(status || '');
};

/**
 * Translate the API enum to a human readable string
 */
export const translateRequestType = (requestType: RequestType) => {
  switch (requestType) {
    case 'NEW':
      return i18next.t('intake:requestType.new');
    case 'RECOMPETE':
      return i18next.t('intake:requestType.recompete');
    case 'MAJOR_CHANGES':
      return i18next.t('intake:requestType.majorChanges');
    case 'SHUTDOWN':
      return i18next.t('intake:requestType.shutdown');
    default:
      return '';
  }
};

/**
 * Get the acronym representation of the component name
 * @param componentToTranslate - component name string that needs to be converted to an acronym
 */
export const getAcronymForComponent = (componentToTranslate: string) => {
  const component = cmsDivisionsAndOffices.find(
    c => c.name === componentToTranslate
  );

  // TODO: what do we return if not found? (should be impossible)
  return component ? component.acronym : 'Other';
};

/**
 * Translate the API status enum to a human readable string
 * @param statusEnum - intake status represented by enum value
 */
export const translateStatus = (
  statusEnum: SystemIntakeStatusV1,
  lcid: string | null
) => {
  let statusTranslation = '';

  if (statusEnum === 'LCID_ISSUED') {
    // if status is LCID_ISSUED, translate from enum to i18n and append LCID
    // Display not available message if LCID is null (usually due to bad SharePoint data migration)
    statusTranslation = `${i18next.t(`intake:statusMap.${statusEnum}`)}: ${
      lcid || 'ID Not Available'
    }`;
  } else {
    // if not just translate from enum to i18n
    statusTranslation = i18next.t(`intake:statusMap.${statusEnum}`);
  }

  return statusTranslation;
};
