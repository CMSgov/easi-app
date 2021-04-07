import { DateTime } from 'luxon';

/**
 * Parsing date as if you are in UTC
 * @param date ISO string
 * @returns DateTime
 */
export const parseDateInUTC = (date: string) =>
  DateTime.fromISO(date, { zone: 'utc' });

/**
 * Formats ISO String (UTC+0) into MMMM d YYYY
 * @param date ISO String
 */
export const formatDateInUTC = (date: string) => {
  return parseDateInUTC(date).toFormat('MMMM d yyyy');
};

/**
 * Formats ISO String or luxon.DateTime into local timezone
 * @param date string | DateTime
 * @returns string
 */
export const formatDate = (date: string | DateTime) => {
  // ISO String
  if (typeof date === 'string') {
    return DateTime.fromISO(date).toFormat('MMMM d yyyy');
  }

  // luxon DateTime
  if (date instanceof DateTime) {
    return date.toFormat('MMMM d yyyy');
  }

  return '';
};

type ContractDate = {
  day: string;
  month: string;
  year: string;
};

export const formatContractDate = (date: ContractDate): string => {
  const { month, day, year } = date;
  const parts = [month, day, year];
  return parts.filter((value: string) => value && value.length > 0).join('/');
};

/**
 * Returns the input parameter's fiscal year
 * FY 2021 : October 1 2020 - September 30 2021
 * FY 2022 : October 1 2021 - September 30 2022
 * @param date DateTime date object
 */
export const getFiscalYear = (date: DateTime): number => {
  const { month, year } = date;
  if (month >= 10) {
    return year + 1;
  }
  return year;
};
