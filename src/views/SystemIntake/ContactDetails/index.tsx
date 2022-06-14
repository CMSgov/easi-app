import React, { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import {
  Button,
  Checkbox,
  ComboBox,
  Dropdown,
  IconNavigateBefore,
  Label,
  Radio,
  TextInput
} from '@trussworks/react-uswds';
import { Field, Form, Formik, FormikProps } from 'formik';

import MandatoryFieldsAlert from 'components/MandatoryFieldsAlert';
import PageHeading from 'components/PageHeading';
import PageNumber from 'components/PageNumber';
import AutoSave from 'components/shared/AutoSave';
import { ErrorAlert, ErrorAlertMessage } from 'components/shared/ErrorAlert';
import FieldErrorMsg from 'components/shared/FieldErrorMsg';
import FieldGroup from 'components/shared/FieldGroup';
import HelpText from 'components/shared/HelpText';
import GetCedarContactsQuery from 'queries/GetCedarContactsQuery';
import GetSystemIntakeQuery from 'queries/GetSystemIntakeQuery';
import { UpdateSystemIntakeContactDetails as UpdateSystemIntakeContactDetailsQuery } from 'queries/SystemIntakeQueries';
import { GetCedarContacts } from 'queries/types/GetCedarContacts';
import { GetSystemIntake_systemIntake as SystemIntake } from 'queries/types/GetSystemIntake';
import {
  UpdateSystemIntakeContactDetails,
  UpdateSystemIntakeContactDetailsVariables
} from 'queries/types/UpdateSystemIntakeContactDetails';
import { CedarContactProps } from 'types/systemIntake';
import flattenErrors from 'utils/flattenErrors';
import SystemIntakeValidationSchema from 'validations/systemIntakeSchema';

import AdditionalContacts from './AdditionalContacts';
import GovernanceTeamOptions from './GovernanceTeamOptions';
import { cmsDivionsAndOfficesOptions } from './utilities';

import './index.scss';

export type ContactDetailsForm = {
  requester: {
    name: string;
    component: string;
  };
  businessOwner: {
    name: string;
    component: string;
  };
  productManager: {
    name: string;
    component: string;
  };
  isso: {
    isPresent: boolean | null;
    name: string;
  };
  governanceTeams: {
    isPresent: boolean | null;
    teams:
      | {
          collaborator: string;
          key: string;
          name: string;
        }[]
      | null;
  };
};

type ContactDetailsProps = {
  systemIntake: SystemIntake;
};

const ContactDetails = ({ systemIntake }: ContactDetailsProps) => {
  const {
    id,
    requestType,
    requester,
    businessOwner,
    productManager,
    isso,
    governanceTeams
  } = systemIntake;
  const formikRef = useRef<FormikProps<ContactDetailsForm>>(null);
  const { t } = useTranslation('intake');
  const history = useHistory();
  const [isReqAndBusOwnerSame, setReqAndBusOwnerSame] = useState(false);
  const [isReqAndProductManagerSame, setReqAndProductManagerSame] = useState(
    false
  );

  const initialValues = {
    requester: {
      name: requester.name || '',
      component: requester.component || ''
    },
    businessOwner: {
      name: businessOwner.name || '',
      component: businessOwner.component || ''
    },
    productManager: {
      name: productManager.name || '',
      component: productManager.component || ''
    },
    isso: {
      isPresent: isso.isPresent,
      name: isso.name || ''
    },
    governanceTeams: {
      isPresent: governanceTeams.isPresent,
      teams:
        governanceTeams.teams?.map(team => ({
          collaborator: team.collaborator,
          name: team.name,
          key: team.key
        })) || []
    }
  };

  const [mutate] = useMutation<
    UpdateSystemIntakeContactDetails,
    UpdateSystemIntakeContactDetailsVariables
  >(UpdateSystemIntakeContactDetailsQuery, {
    refetchQueries: [
      {
        query: GetSystemIntakeQuery,
        variables: {
          id
        }
      }
    ]
  });

  const { data, loading } = useQuery<GetCedarContacts>(GetCedarContactsQuery, {
    variables: { commonName: '' }
  });

  const contacts = useMemo(() => {
    return (data?.cedarPersonsByCommonName || []).map(
      (contact: CedarContactProps) => ({
        label: contact.commonName || '',
        value: contact.commonName || ''
      })
    );
  }, [data?.cedarPersonsByCommonName]);

  const saveExitLink = (() => {
    let link = '';
    if (requestType === 'SHUTDOWN') {
      link = '/';
    } else {
      link = `/governance-task-list/${id}`;
    }
    return link;
  })();

  const onSubmit = (values?: ContactDetailsForm) => {
    if (values) {
      mutate({
        variables: {
          input: {
            id,
            ...values,
            governanceTeams: values.governanceTeams || []
          }
        }
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SystemIntakeValidationSchema.contactDetails}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
      innerRef={formikRef}
    >
      {(formikProps: FormikProps<ContactDetailsForm>) => {
        const { values, setFieldValue, errors } = formikProps;
        const flatErrors = flattenErrors(errors);
        return (
          <>
            {Object.keys(errors).length > 0 && (
              <ErrorAlert
                testId="contact-details-errors"
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
            <p className="line-height-body-5">
              {t('contactDetails.intakeProcessDescription')}
            </p>

            <div className="tablet:grid-col-6 margin-bottom-7">
              <MandatoryFieldsAlert />
              <PageHeading>{t('contactDetails.heading')}</PageHeading>
              <Form>
                {/* Requester Name */}
                <FieldGroup
                  scrollElement="requester.name"
                  error={!!flatErrors['requester.name']}
                >
                  <Label htmlFor="IntakeForm-Requester">
                    {t('contactDetails.requester')}
                  </Label>
                  <FieldErrorMsg>{flatErrors['requester.name']}</FieldErrorMsg>
                  <Field
                    as={TextInput}
                    error={!!flatErrors['requester.name']}
                    id="IntakeForm-Requester"
                    maxLength={50}
                    name="requester.name"
                    disabled
                  />
                </FieldGroup>

                {/* Requester Component */}
                <FieldGroup
                  scrollElement="requester.component"
                  error={!!flatErrors['requester.component']}
                >
                  <Label htmlFor="IntakeForm-RequesterComponent">
                    {t('contactDetails.requesterComponent')}
                  </Label>
                  <FieldErrorMsg>
                    {flatErrors['requester.component']}
                  </FieldErrorMsg>
                  <Field
                    as={Dropdown}
                    id="IntakeForm-RequesterComponent"
                    name="requester.component"
                    onChange={(e: any) => {
                      if (isReqAndBusOwnerSame) {
                        setFieldValue(
                          'businessOwner.component',
                          e.target.value
                        );
                      }
                      if (isReqAndProductManagerSame) {
                        setFieldValue(
                          'productManager.component',
                          e.target.value
                        );
                      }
                      setFieldValue('requester.component', e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {cmsDivionsAndOfficesOptions('RequesterComponent')}
                  </Field>
                </FieldGroup>

                {/* Business Owner Name */}
                <FieldGroup
                  scrollElement="businessOwner.name"
                  error={!!flatErrors['businessOwner.name']}
                >
                  <h4 className="margin-bottom-1">
                    {t('contactDetails.businessOwner.name')}
                  </h4>
                  <HelpText id="IntakeForm-BusinessOwnerHelp">
                    {t('contactDetails.businessOwner.helpText')}
                  </HelpText>
                  <Field
                    as={Checkbox}
                    id="IntakeForm-IsBusinessOwnerSameAsRequester"
                    label="CMS Business Owner is same as requester"
                    name="isBusinessOwnerSameAsRequester"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.checked) {
                        setReqAndBusOwnerSame(true);
                        setFieldValue(
                          'businessOwner.name',
                          values.requester.name
                        );
                        setFieldValue(
                          'businessOwner.component',
                          values.requester.component
                        );
                      } else {
                        setReqAndBusOwnerSame(false);
                      }
                    }}
                    value=""
                  />
                  <Label
                    className="margin-bottom-1"
                    htmlFor="IntakeForm-BusinessOwner"
                  >
                    {t('contactDetails.businessOwner.nameField')}
                  </Label>
                  <FieldErrorMsg>
                    {flatErrors['businessOwner.name']}
                  </FieldErrorMsg>
                  {!loading && (
                    <ComboBox
                      id="IntakeForm-BusinessOwner"
                      name="businessOwner.name"
                      inputProps={{
                        id: 'IntakeForm-BusinessOwner',
                        name: 'businessOwner.name',
                        'aria-describedby': 'IntakeForm-BusinessOwnerHelp'
                      }}
                      options={contacts}
                      onChange={contact =>
                        setFieldValue('businessOwner.name', contact || '')
                      }
                      defaultValue={businessOwner.name || undefined}
                      disabled={isReqAndBusOwnerSame}
                    />
                  )}
                </FieldGroup>

                {/* Business Owner Component */}
                <FieldGroup
                  scrollElement="businessOwner.component"
                  error={!!flatErrors['businessOwner.component']}
                >
                  <Label htmlFor="IntakeForm-BusinessOwnerComponent">
                    {t('contactDetails.businessOwner.component')}
                  </Label>
                  <FieldErrorMsg>
                    {flatErrors['businessOwner.component']}
                  </FieldErrorMsg>
                  <Field
                    as={Dropdown}
                    disabled={isReqAndBusOwnerSame}
                    id="IntakeForm-BusinessOwnerComponent"
                    name="businessOwner.component"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {cmsDivionsAndOfficesOptions('BusinessOwnerComponent')}
                  </Field>
                </FieldGroup>

                {/* Product Manager Name */}
                <FieldGroup
                  scrollElement="productManager.name"
                  error={!!flatErrors['productManager.name']}
                >
                  <h4 className="margin-bottom-1">
                    {t('contactDetails.productManager.name')}
                  </h4>
                  <HelpText id="IntakeForm-ProductManagerHelp">
                    {t('contactDetails.productManager.helpText')}
                  </HelpText>
                  <Field
                    as={Checkbox}
                    id="IntakeForm-IsProductManagerSameAsRequester"
                    label="CMS Project/Product Manager, or lead is same as requester"
                    name="isProductManagerSameAsRequester"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.checked) {
                        setReqAndProductManagerSame(true);
                        setFieldValue(
                          'productManager.name',
                          values.requester.name
                        );
                        setFieldValue(
                          'productManager.component',
                          values.requester.component
                        );
                      } else {
                        setReqAndProductManagerSame(false);
                      }
                    }}
                    value=""
                  />
                  <Label
                    className="margin-bottom-1"
                    htmlFor="IntakeForm-ProductManager"
                  >
                    {t('contactDetails.productManager.nameField')}
                  </Label>
                  <FieldErrorMsg>
                    {flatErrors['productManager.name']}
                  </FieldErrorMsg>
                  {!loading && (
                    <ComboBox
                      id="IntakeForm-ProductManager"
                      name="productManager.name"
                      inputProps={{
                        id: 'IntakeForm-ProductManager',
                        name: 'productManager.name',
                        'aria-describedby': 'IntakeForm-ProductManagerHelp'
                      }}
                      options={contacts}
                      onChange={contact =>
                        setFieldValue('productManager.name', contact || '')
                      }
                      defaultValue={productManager.name || undefined}
                      disabled={isReqAndProductManagerSame}
                    />
                  )}
                </FieldGroup>

                {/* Product Manager Component */}
                <FieldGroup
                  scrollElement="productManager.component"
                  error={!!flatErrors['productManager.component']}
                >
                  <Label htmlFor="IntakeForm-ProductManagerComponent">
                    {t('contactDetails.productManager.component')}
                  </Label>
                  <FieldErrorMsg>
                    {flatErrors['productManager.component']}
                  </FieldErrorMsg>
                  <Field
                    as={Dropdown}
                    id="IntakeForm-ProductManagerComponent"
                    label="Product Manager Component"
                    name="productManager.component"
                    disabled={isReqAndProductManagerSame}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {cmsDivionsAndOfficesOptions('ProductManagerComponent')}
                  </Field>
                </FieldGroup>

                {/* ISSO */}
                <FieldGroup
                  scrollElement="isso.isPresent"
                  error={!!flatErrors['isso.isPresent']}
                >
                  <fieldset
                    data-testid="isso-fieldset"
                    className="usa-fieldset margin-top-4"
                  >
                    <legend className="usa-label margin-bottom-1">
                      {t('contactDetails.isso.label')}
                    </legend>
                    <HelpText id="IntakeForm-ISSOHelp">
                      {t('contactDetails.isso.helpText')}
                    </HelpText>
                    <FieldErrorMsg>
                      {flatErrors['isso.isPresent']}
                    </FieldErrorMsg>

                    <Field
                      as={Radio}
                      checked={values.isso.isPresent === true}
                      id="IntakeForm-HasIssoYes"
                      name="isso.isPresent"
                      label="Yes"
                      onChange={() => {
                        setFieldValue('isso.isPresent', true);
                      }}
                      value
                      aria-describedby="IntakeForm-ISSOHelp"
                      aria-expanded={values.isso.isPresent === true}
                      aria-controls="isso-name-container"
                    />
                    {values.isso.isPresent && (
                      <div
                        data-testid="isso-name-container"
                        className="margin-left-4 margin-bottom-1"
                      >
                        <FieldGroup
                          scrollElement="isso.name"
                          error={!!flatErrors['isso.name']}
                          className="margin-top-2"
                        >
                          <Label htmlFor="IntakeForm-IssoName">
                            {t('contactDetails.isso.name')}
                          </Label>
                          <FieldErrorMsg>
                            {flatErrors['isso.name']}
                          </FieldErrorMsg>
                          {!loading && (
                            <ComboBox
                              id="IntakeForm-IssoName"
                              name="isso.name"
                              inputProps={{
                                id: 'IntakeForm-IssoName',
                                name: 'isso.name'
                              }}
                              options={contacts}
                              onChange={contact =>
                                setFieldValue('isso.name', contact || '')
                              }
                              defaultValue={isso.name || undefined}
                            />
                          )}
                        </FieldGroup>
                        <FieldGroup
                          scrollElement="isso.component"
                          error={!!flatErrors['isso.component']}
                        >
                          <Label htmlFor="IntakeForm-IssoComponent">
                            {t('contactDetails.isso.component')}
                          </Label>
                          <FieldErrorMsg>
                            {flatErrors['isso.component']}
                          </FieldErrorMsg>
                          <Field
                            as={Dropdown}
                            id="IntakeForm-IssoComponent"
                            label="ISSO Component"
                            name="isso.component"
                          >
                            <option value="" disabled>
                              Select an option
                            </option>
                            {cmsDivionsAndOfficesOptions('IssoComponent')}
                          </Field>
                        </FieldGroup>
                      </div>
                    )}
                    <Field
                      as={Radio}
                      checked={values.isso.isPresent === false}
                      id="IntakeForm-HasIssoNo"
                      name="isso.isPresent"
                      label="No"
                      onChange={() => {
                        setFieldValue('isso.isPresent', false);
                        setFieldValue('isso.name', '');
                      }}
                      value={false}
                    />
                  </fieldset>
                </FieldGroup>

                {/* Add new contacts */}
                {/* {!loading && ( */}
                <AdditionalContacts
                  systemIntakeId={id}
                  contacts={data?.cedarPersonsByCommonName ?? []}
                />
                {/* )} */}

                {/* Governance Teams */}
                <FieldGroup
                  scrollElement="governanceTeams.isPresent"
                  error={!!flatErrors['governanceTeams.isPresent']}
                >
                  <fieldset
                    data-testid="governance-teams-fieldset"
                    className="usa-fieldset margin-top-3 margin-bottom-105"
                  >
                    <legend className="usa-label margin-bottom-1">
                      {t('contactDetails.collaboration.label')}
                    </legend>
                    <HelpText id="IntakeForm-Collaborators">
                      {t('contactDetails.collaboration.helpText')}
                    </HelpText>
                    <FieldErrorMsg>
                      {flatErrors['governanceTeams.isPresent']}
                    </FieldErrorMsg>

                    <Field
                      as={Radio}
                      checked={values.governanceTeams.isPresent === true}
                      id="IntakeForm-YesGovernanceTeams"
                      name="governanceTeams.isPresent"
                      label={t('contactDetails.collaboration.oneOrMore')}
                      onChange={() => {
                        setFieldValue('governanceTeams.isPresent', true);
                      }}
                      value
                      aria-describedby="IntakeForm-Collaborators"
                    />
                    <div className="margin-left-3">
                      <FieldGroup
                        scrollElement="governanceTeams.teams"
                        error={!!flatErrors['governanceTeams.teams']}
                        className="margin-top-105"
                      >
                        <FieldErrorMsg>
                          {flatErrors['governanceTeams.teams']}
                        </FieldErrorMsg>
                        <GovernanceTeamOptions formikProps={formikProps} />
                      </FieldGroup>
                    </div>

                    <Field
                      as={Radio}
                      checked={values.governanceTeams.isPresent === false}
                      id="IntakeForm-NoGovernanceTeam"
                      name="governanceTeams.isPresent"
                      label={t('contactDetails.collaboration.none')}
                      onChange={() => {
                        setFieldValue('governanceTeams.isPresent', false);
                        setFieldValue('governanceTeams.teams', []);
                      }}
                      value={false}
                    />
                  </fieldset>
                </FieldGroup>
                <Button
                  type="button"
                  onClick={() => {
                    formikProps.validateForm().then(err => {
                      if (Object.keys(err).length === 0) {
                        mutate({
                          variables: {
                            input: { id, ...values }
                          }
                        }).then(response => {
                          if (!response.errors) {
                            const newUrl = 'request-details';
                            history.push(newUrl);
                          }
                        });
                      } else {
                        window.scrollTo(0, 0);
                      }
                    });
                  }}
                >
                  Next
                </Button>
                <div className="margin-y-3">
                  <Button
                    type="button"
                    unstyled
                    onClick={() => {
                      mutate({
                        variables: {
                          input: { id, ...values }
                        }
                      }).then(response => {
                        if (!response.errors) {
                          history.push(saveExitLink);
                        }
                      });
                    }}
                  >
                    <span className="display-flex flex-align-center">
                      <IconNavigateBefore /> Save & Exit
                    </span>
                  </Button>
                </div>
              </Form>
            </div>
            <AutoSave
              values={values}
              onSave={() => {
                onSubmit(formikRef?.current?.values);
              }}
              debounceDelay={3000}
            />
            <PageNumber currentPage={1} totalPages={3} />
          </>
        );
      }}
    </Formik>
  );
};

export default ContactDetails;
