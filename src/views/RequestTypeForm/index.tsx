import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useOktaAuth } from '@okta/okta-react';
import {
  Breadcrumb,
  BreadcrumbBar,
  BreadcrumbLink,
  Button
} from '@trussworks/react-uswds';
import { Field, Form, Formik, FormikProps } from 'formik';

import MainContent from 'components/MainContent';
import PageHeading from 'components/PageHeading';
import CollapsableLink from 'components/shared/CollapsableLink';
import { ErrorAlert, ErrorAlertMessage } from 'components/shared/ErrorAlert';
import FieldGroup from 'components/shared/FieldGroup';
import { RadioField } from 'components/shared/RadioField';
import {
  CreateSystemIntake,
  UpdateSystemIntakeRequestType as UpdateSystemIntakeRequestTypeQuery
} from 'queries/SystemIntakeQueries';
import {
  UpdateSystemIntakeRequestType,
  UpdateSystemIntakeRequestTypeVariables
} from 'queries/types/UpdateSystemIntakeRequestType';
import { SystemIntakeRequestType } from 'types/graphql-global-types';
import flattenErrors from 'utils/flattenErrors';
import SystemIntakeValidationSchema from 'validations/systemIntakeSchema';

const RequestTypeForm = () => {
  const { systemId } = useParams<{
    systemId?: string;
  }>();

  const { state } = useLocation<{ isNew?: boolean }>();

  // Set isNew from checking loc state false explicitly
  // This is done in such a way as a stop gap to fix the problem where
  // changing Intake Request Types, from the overview page, will create new intake requests
  const isNew = state?.isNew !== false;

  const { t } = useTranslation('intake');
  const { oktaAuth } = useOktaAuth();
  const history = useHistory();
  const [mutate] = useMutation(CreateSystemIntake);

  const [edit] = useMutation<
    UpdateSystemIntakeRequestType,
    UpdateSystemIntakeRequestTypeVariables
  >(UpdateSystemIntakeRequestTypeQuery);

  const majorChangesExamples: string[] = t(
    'requestTypeForm.helpAndGuidance.majorChanges.list',
    {
      returnObjects: true
    }
  );

  const handleCreateIntake = (formikValues: { requestType: string }) => {
    oktaAuth.getUser().then((user: any) => {
      const { requestType } = formikValues;
      const input = {
        requestType,
        requester: {
          name: user.name
        }
      };

      const nextPage = (id: string) => {
        const navigationLink = `/system/link/${id}`;

        switch (requestType) {
          case 'NEW':
            history.push(`/governance-overview/${id}`, { isNew });
            break;
          case 'MAJOR_CHANGES':
            history.push(navigationLink, { isNew });
            break;
          case 'RECOMPETE':
            history.push(navigationLink, { isNew });
            break;
          default:
            // console.warn(`Unknown request type: ${systemIntake.requestType}`);
            break;
        }
      };

      if (!systemId) {
        mutate({ variables: { input } }).then(response => {
          if (!response.errors) {
            const { id } = response.data.createSystemIntake;
            nextPage(id);
          }
        });
      } else {
        // Edit is actually only available when backtracking from the "new system or service" option
        edit({
          variables: {
            id: systemId,
            requestType: requestType as SystemIntakeRequestType
          }
        }).then(response => {
          if (!response.errors) {
            const id = systemId;
            nextPage(id);
          }
        });
      }
    });
  };

  return (
    <MainContent
      className="grid-container margin-bottom-5"
      data-testid="request-type-form"
    >
      <BreadcrumbBar variant="wrap">
        <Breadcrumb>
          <BreadcrumbLink asCustom={Link} to="/">
            <span>{t('navigation.itGovernance')}</span>
          </BreadcrumbLink>
        </Breadcrumb>
        <Breadcrumb current>{t('navigation.startRequest')}</Breadcrumb>
      </BreadcrumbBar>
      <PageHeading>{t('requestTypeForm.heading')}</PageHeading>
      <Formik
        initialValues={{ requestType: '' }}
        onSubmit={handleCreateIntake}
        validationSchema={SystemIntakeValidationSchema.requestType}
        validateOnBlur={false}
        validateOnChange={false}
        validateOnMount={false}
      >
        {(formikProps: FormikProps<{ requestType: string }>) => {
          const { values, errors, setErrors, handleSubmit } = formikProps;
          const flatErrors = flattenErrors(errors);
          return (
            <>
              {Object.keys(errors).length > 0 && (
                <ErrorAlert
                  testId="formik-validation-errors"
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
              <Form
                onSubmit={e => {
                  handleSubmit(e);
                  window.scrollTo(0, 0);
                }}
              >
                <FieldGroup
                  error={!!flatErrors.requestType}
                  scrollElement="requestType"
                >
                  <fieldset
                    className="usa-fieldset"
                    aria-describedby="RequestType-HelpText"
                  >
                    <legend className="font-heading-xl margin-bottom-4">
                      {t('requestTypeForm.subheading')}
                    </legend>
                    <Field
                      as={RadioField}
                      id="RequestType-NewSystem"
                      className="margin-bottom-4"
                      label={t('requestTypeForm.fields.addNewSystem')}
                      name="requestType"
                      value="NEW"
                      checked={values.requestType === 'NEW'}
                    />
                    <Field
                      as={RadioField}
                      id="RequestType-MajorChangesSystem"
                      className="margin-bottom-4"
                      label={t('requestTypeForm.fields.majorChanges')}
                      name="requestType"
                      value="MAJOR_CHANGES"
                      checked={values.requestType === 'MAJOR_CHANGES'}
                    />
                    <Field
                      as={RadioField}
                      id="RequestType-RecompeteSystem"
                      className="margin-bottom-4"
                      label={t('requestTypeForm.fields.recompete')}
                      name="requestType"
                      value="RECOMPETE"
                      checked={values.requestType === 'RECOMPETE'}
                    />
                  </fieldset>
                </FieldGroup>
                <CollapsableLink
                  id="MajorChangesAccordion"
                  label={t(
                    'requestTypeForm.helpAndGuidance.majorChanges.label'
                  )}
                >
                  <p>
                    {t('requestTypeForm.helpAndGuidance.majorChanges.para')}
                  </p>
                  <ul className="line-height-body-6">
                    {majorChangesExamples.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CollapsableLink>
                <Button
                  className="margin-top-5 display-block"
                  type="submit"
                  onClick={() => setErrors({})}
                >
                  Continue
                </Button>
              </Form>
            </>
          );
        }}
      </Formik>
    </MainContent>
  );
};

export default RequestTypeForm;
