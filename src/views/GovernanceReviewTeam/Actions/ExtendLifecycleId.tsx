import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory, useParams } from 'react-router-dom';
import { ApolloQueryResult, useMutation } from '@apollo/client';
import { Button } from '@trussworks/react-uswds';
import { Field, Form, Formik, FormikProps } from 'formik';
import { DateTime } from 'luxon';

import MandatoryFieldsAlert from 'components/MandatoryFieldsAlert';
import PageHeading from 'components/PageHeading';
import {
  DateInputDay,
  DateInputMonth,
  DateInputYear
} from 'components/shared/DateInput';
import { ErrorAlert, ErrorAlertMessage } from 'components/shared/ErrorAlert';
import FieldErrorMsg from 'components/shared/FieldErrorMsg';
import FieldGroup from 'components/shared/FieldGroup';
import HelpText from 'components/shared/HelpText';
import Label from 'components/shared/Label';
import TextAreaField from 'components/shared/TextAreaField';
import CreateSystemIntakeActionExtendLifecycleIdQuery from 'queries/CreateSystemIntakeActionExtendLifecycleIdQuery';
import {
  CreateSystemIntakeActionExtendLifecycleId,
  CreateSystemIntakeActionExtendLifecycleIdVariables
} from 'queries/types/CreateSystemIntakeActionExtendLifecycleId';
import { GetSystemIntake } from 'queries/types/GetSystemIntake';
import { formatDateAndIgnoreTimezone } from 'utils/date';
import flattenErrors from 'utils/flattenErrors';
import { sharedLifecycleIdSchema } from 'validations/actionSchema';

type ExtendLCIDForm = {
  currentCostBaseline: string;
  currentExpiresAt: string;
  currentNextSteps: string;
  currentScope: string;
  expirationDateDay: string;
  expirationDateMonth: string;
  expirationDateYear: string;
  newCostBaseline: string;
  nextSteps: string;
  scope: string;
};

type ExtendLifecycleIdProps = {
  lcid: string;
  lcidExpiresAt: string;
  lcidScope: string;
  lcidNextSteps: string;
  lcidCostBaseline: string;
  onSubmit(): Promise<ApolloQueryResult<GetSystemIntake>>;
};

const RADIX = 10;

const ExtendLifecycleId = ({
  lcid,
  lcidExpiresAt,
  lcidScope,
  lcidNextSteps,
  lcidCostBaseline,
  onSubmit
}: ExtendLifecycleIdProps) => {
  const { t } = useTranslation('action');
  const { systemId } = useParams<{ systemId: string }>();
  const history = useHistory();
  const initialValues: ExtendLCIDForm = {
    currentExpiresAt: lcidExpiresAt,
    expirationDateDay: '',
    expirationDateMonth: '',
    expirationDateYear: '',
    currentScope: lcidScope,
    scope: '',
    currentNextSteps: lcidNextSteps,
    nextSteps: '',
    currentCostBaseline: lcidCostBaseline,
    newCostBaseline: ''
  };

  const [extendLifecycleID, extendLifecycleIDStatus] = useMutation<
    CreateSystemIntakeActionExtendLifecycleId,
    CreateSystemIntakeActionExtendLifecycleIdVariables
  >(CreateSystemIntakeActionExtendLifecycleIdQuery);

  const handleSubmit = (values: ExtendLCIDForm) => {
    const {
      expirationDateMonth = '',
      expirationDateDay = '',
      expirationDateYear = '',
      scope = '',
      nextSteps = '',
      newCostBaseline = ''
    } = values;
    const expiresAt = DateTime.utc(
      parseInt(expirationDateYear, RADIX),
      parseInt(expirationDateMonth, RADIX),
      parseInt(expirationDateDay, RADIX)
    ).toISO();
    extendLifecycleID({
      variables: {
        input: {
          id: systemId,
          expirationDate: expiresAt,
          scope,
          nextSteps,
          costBaseline: newCostBaseline
        }
      }
    }).then(response => {
      if (!response.errors) {
        history.push(`/governance-review-team/${systemId}/notes`);
        onSubmit();
      }
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={sharedLifecycleIdSchema}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
    >
      {(formikProps: FormikProps<ExtendLCIDForm>) => {
        const { errors, setErrors } = formikProps;
        const flatErrors = flattenErrors(errors);

        return (
          <>
            {Object.keys(errors).length > 0 && (
              <ErrorAlert
                testId="extend-lcid-errors"
                classNames="margin-top-3"
                heading="Please check and fix the following"
              >
                {Object.keys(flatErrors).map(key => {
                  return (
                    <ErrorAlertMessage
                      key={`Error.${key}`}
                      errorKey={key}
                      message={flatErrors[key]}
                    />
                  );
                })}
              </ErrorAlert>
            )}

            <PageHeading>{t('extendLcid.heading')}</PageHeading>
            <h2>{t('extendLcid.subheading')}</h2>
            <p>
              {t('extendLcid.action')}{' '}
              <Link to={`/governance-review-team/${systemId}/actions`}>
                {t('extendLcid.back')}
              </Link>
            </p>
            <div className="tablet:grid-col-6">
              <MandatoryFieldsAlert />
            </div>
            <div className="tablet:grid-col-9 margin-bottom-7">
              <dl title="Existing Lifecycle ID">
                <dt className="text-bold margin-bottom-1">
                  {t('extendLcid.currentLcid')}
                </dt>
                <dd className="margin-left-0 margin-bottom-2">{lcid}</dd>

                <dt className="text-bold margin-bottom-1">
                  {t('extendLcid.currentLcidExpiration')}
                </dt>
                <dd className="margin-left-0 margin-bottom-2">
                  {formatDateAndIgnoreTimezone(lcidExpiresAt)}
                </dd>
                <dt className="text-bold margin-bottom-1">
                  {t('extendLcid.currentScope')}
                </dt>
                <dd className="margin-left-0 margin-bottom-2">{lcidScope}</dd>
                <dt className="text-bold margin-bottom-1">
                  {t('extendLcid.currentNextSteps')}
                </dt>
                <dd className="margin-left-0 margin-bottom-2">
                  {lcidNextSteps}
                </dd>
                <dt className="text-bold margin-bottom-1">
                  {t('extendLcid.currentCostBaseline')}
                </dt>
                <dd className="margin-left-0 margin-bottom-2">
                  {lcidCostBaseline || t('extendLcid.noCostBaseline')}
                </dd>
              </dl>
              <hr />
              <Form>
                <FieldGroup scrollElement="validDate">
                  <fieldset className="usa-fieldset margin-top-2">
                    <legend className="usa-label margin-bottom-1">
                      {t('extendLcid.expirationDate.label')}
                    </legend>
                    <HelpText>
                      {t('extendLcid.expirationDate.helpText')}
                    </HelpText>
                    <FieldErrorMsg>
                      {flatErrors.expirationDateDay}
                    </FieldErrorMsg>
                    <FieldErrorMsg>
                      {flatErrors.expirationDateMonth}
                    </FieldErrorMsg>
                    <FieldErrorMsg>
                      {flatErrors.expirationDateYear}
                    </FieldErrorMsg>
                    <FieldErrorMsg>{flatErrors.validDate}</FieldErrorMsg>
                    <div className="usa-memorable-date">
                      <div className="usa-form-group usa-form-group--month">
                        <Label htmlFor="ExtendLifecycleId-expirationDateMonth">
                          {t('extendLcid.expirationDate.month')}
                        </Label>
                        <Field
                          as={DateInputMonth}
                          error={
                            !!flatErrors.expirationDateMonth ||
                            !!flatErrors.validDate
                          }
                          id="ExtendLifecycleId-expirationDateMonth"
                          name="expirationDateMonth"
                        />
                      </div>
                      <div className="usa-form-group usa-form-group--day">
                        <Label htmlFor="ExtendLifecycleId-expirationDateDay">
                          {t('extendLcid.expirationDate.day')}
                        </Label>
                        <Field
                          as={DateInputDay}
                          error={
                            !!flatErrors.expirationDateDay ||
                            !!flatErrors.validDate
                          }
                          id="ExtendLifecycleId-expirationDateDay"
                          name="expirationDateDay"
                        />
                      </div>
                      <div className="usa-form-group usa-form-group--year">
                        <Label htmlFor="ExtendLifecycleId-expirationDateYear">
                          {t('extendLcid.expirationDate.year')}
                        </Label>
                        <Field
                          as={DateInputYear}
                          error={!!flatErrors.expirationDateYear}
                          id="ExtendLifecycleId-expirationDateYear"
                          name="expirationDateYear"
                        />
                      </div>
                    </div>
                  </fieldset>
                </FieldGroup>
                <FieldGroup scrollElement="scope" error={!!flatErrors.scope}>
                  <Label htmlFor="ExtendLifecycleIdForm-Scope">
                    {t('issueLCID.scopeLabel')}
                  </Label>
                  <HelpText>{t('issueLCID.scopeHelpText')}</HelpText>
                  <FieldErrorMsg>{flatErrors.scope}</FieldErrorMsg>
                  <Field
                    as={TextAreaField}
                    error={!!flatErrors.scope}
                    id="ExtendLifecycleIdForm-Scope"
                    maxLength={3000}
                    name="scope"
                  />
                </FieldGroup>
                <FieldGroup
                  scrollElement="nextSteps"
                  error={!!flatErrors.nextSteps}
                >
                  <Label htmlFor="ExtendLifecycleIdForm-NextSteps">
                    {t('issueLCID.nextStepsLabel')}
                  </Label>
                  <HelpText>{t('issueLCID.nextStepsHelpText')}</HelpText>
                  <FieldErrorMsg>{flatErrors.nextSteps}</FieldErrorMsg>
                  <Field
                    as={TextAreaField}
                    error={!!flatErrors.nextSteps}
                    id="ExtendLifecycleIdForm-NextSteps"
                    maxLength={3000}
                    name="nextSteps"
                  />
                </FieldGroup>
                <FieldGroup>
                  <Label htmlFor="ExtendLifecycleIdForm-CostBaseline">
                    {t('issueLCID.costBaselineLabel')}
                  </Label>
                  <HelpText>{t('issueLCID.costBaselineHelpText')}</HelpText>
                  <Field
                    as={TextAreaField}
                    id="ExtendLifecycleIdForm-CostBaseline"
                    maxLength={3000}
                    name="newCostBaseline"
                  />
                </FieldGroup>
                <p className="margin-top-6 line-height-body-3">
                  {t('extendLcid.submissionInfo')}
                </p>
                <Button
                  className="margin-y-2"
                  type="submit"
                  onClick={() => setErrors({})}
                  disabled={extendLifecycleIDStatus.loading}
                >
                  {t('extendLcid.submit')}
                </Button>
              </Form>
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export default ExtendLifecycleId;
