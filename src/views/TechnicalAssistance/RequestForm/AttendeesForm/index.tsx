import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Dropdown,
  ErrorMessage,
  Form,
  FormGroup,
  IconArrowBack,
  Label
} from '@trussworks/react-uswds';

import cmsDivisionsAndOfficesOptions from 'components/AdditionalContacts/cmsDivisionsAndOfficesOptions';
import CedarContactSelect from 'components/CedarContactSelect';
import UswdsReactLink from 'components/LinkWrapper';
import PageHeading from 'components/PageHeading';
import contactRoles from 'constants/enums/contactRoles';
import useTRBAttendees from 'hooks/useTRBAttendees';
// eslint-disable-next-line camelcase
import { CreateTrbRequest_createTRBRequest } from 'queries/types/CreateTrbRequest';
import {
  CreateTRBRequestAttendeeInput,
  UpdateTRBRequestAttendeeInput
} from 'types/graphql-global-types';
// import { TRBAttendeeFields } from 'types/technicalAssistance';
import { trbAttendeeSchema } from 'validations/trbRequestSchema';

import Breadcrumbs from '../../Breadcrumbs';
import { initialAttendee } from '../Attendees';

interface AttendeesFormProps {
  // eslint-disable-next-line camelcase
  request: CreateTrbRequest_createTRBRequest;
  backToFormUrl?: string;
  activeAttendee: TRBAttendeeFields;
  setActiveAttendee: (value: TRBAttendeeFields) => void;
}

type TRBAttendeeFields =
  | CreateTRBRequestAttendeeInput
  | UpdateTRBRequestAttendeeInput;

function AttendeesForm({
  request,
  backToFormUrl,
  activeAttendee,
  setActiveAttendee
}: AttendeesFormProps) {
  const { t } = useTranslation('technicalAssistance');
  const history = useHistory();

  /** Initial attendee values before form values are updated */
  const defaultValues: TRBAttendeeFields = useRef(activeAttendee).current;

  // Attendee mutations
  const { createAttendee, updateAttendee } = useTRBAttendees({
    trbRequestId: request.id,
    requesterId: request.createdBy
  });

  const formType = defaultValues.id ? 'edit' : 'create';

  const { control, handleSubmit, formState } = useForm<TRBAttendeeFields>({
    resolver: yupResolver(trbAttendeeSchema),
    defaultValues
  });

  if (backToFormUrl) {
    /** Create or update attendee with field values */
    const submitAttendee = (formData: TRBAttendeeFields) => {
      /** Attendee component and role */
      const input = {
        component: formData.component,
        role: formData.role as PersonRole
      };
      // If editing attendee, add ID to input and update attendee
      if (defaultValues.id) {
        updateAttendee({
          ...input,
          id: defaultValues.id
        }).catch(e => null);
      } else {
        // If creating attendee, add EUA and TRB request id and create attendee
        createAttendee({
          ...input,
          trbRequestId: request.id,
          euaUserId: formData.euaUserId || ''
        }).catch(e => null);
      }
      // TODO: Request error handling
      history.push(backToFormUrl);
      setActiveAttendee(initialAttendee);
    };

    console.log('FORM STATE ERRORS', formState.errors);

    return (
      <div className="trb-attendees-list">
        <Breadcrumbs
          items={[
            { text: t('heading'), url: '/trb' },
            { text: t('breadcrumbs.taskList'), url: '/trb/task-list' },
            {
              text: t('requestForm.heading'),
              url: backToFormUrl
            },
            {
              text: t(
                defaultValues.id
                  ? 'attendees.editAttendee'
                  : 'attendees.addAnAttendee'
              )
            }
          ]}
        />
        <PageHeading>
          {t(
            defaultValues.id
              ? 'attendees.editAttendee'
              : 'attendees.addAnAttendee'
          )}
        </PageHeading>

        <Form
          onSubmit={handleSubmit(formData => {
            console.log('FORM DATA ON SUBMIT', formData);
            // TODO: Fix
            submitAttendee(formData);
          })}
        >
          {/* <Alert
            heading={t('basic.errors.checkFix')}
            type="error"
            className="margin-bottom-2"
          >
            {Object.keys(errors).map(fieldName => {
              return (
                <ErrorAlertMessage
                  key={fieldName}
                  errorKey={fieldName}
                  message={t(`attendees.fieldLabels.requester.${fieldName}`)}
                />
              );
            })}
          </Alert> */}
          {/* Attendee name */}
          <Controller
            name="euaUserId"
            control={control}
            render={({ field }) => {
              return (
                <FormGroup>
                  <Label htmlFor="euaUserId">
                    {t(`attendees.fieldLabels.${formType}.commonName`)}
                  </Label>
                  <CedarContactSelect
                    name="euaUserId"
                    id="euaUserId"
                    value={activeAttendee.userInfo}
                    onChange={cedarData => {
                      field.onChange(cedarData?.euaUserId);
                    }}
                  />
                </FormGroup>
              );
            }}
          />

          {/* Attendee component */}
          <Controller
            name="component"
            control={control}
            render={({ field, fieldState: { error } }) => {
              return (
                <FormGroup error={!!error}>
                  <Label htmlFor="component">
                    {t(`attendees.fieldLabels.${formType}.component`)}
                  </Label>
                  {error && (
                    <ErrorMessage>
                      {t('basic.errors.makeSelection')}
                    </ErrorMessage>
                  )}
                  <Dropdown
                    {...field}
                    ref={null}
                    id="component"
                    data-testid="component"
                  >
                    <option label={`- ${t('basic.options.select')} -`} />
                    {cmsDivisionsAndOfficesOptions('component')}
                  </Dropdown>
                </FormGroup>
              );
            }}
          />

          {/* Attendee role */}
          <Controller
            name="role"
            control={control}
            render={({ field, fieldState: { error } }) => {
              return (
                <FormGroup error={!!error}>
                  <Label htmlFor="role">
                    {t(`attendees.fieldLabels.${formType}.role`)}
                  </Label>
                  {error && (
                    <ErrorMessage>
                      {t('basic.errors.makeSelection')}
                    </ErrorMessage>
                  )}
                  <Dropdown
                    {...field}
                    ref={null}
                    id="role"
                    data-testid="role"
                    value={(field.value as PersonRole) || ''}
                  >
                    <option label={`- ${t('basic.options.select')} -`} />
                    {contactRoles.map(({ key, label }) => (
                      <option key={key} value={key} label={label} />
                    ))}
                  </Dropdown>
                </FormGroup>
              );
            }}
          />
          <div>
            {/* Cancel */}
            <UswdsReactLink
              variant="unstyled"
              className="usa-button usa-button--outline"
              to={backToFormUrl}
            >
              {t('attendees.cancel')}
            </UswdsReactLink>
            {/* Add Attendee */}
            {/* <UswdsReactLink
              variant="unstyled"
              className="usa-button"
              to={backToFormUrl}
              onClick={() => handleSubmit()}
            >
              {t(defaultValues.id ? 'Save' : 'attendees.addAttendee')}
            </UswdsReactLink> */}
            <Button type="submit">
              {t(defaultValues.id ? 'Save' : 'attendees.addAttendee')}
            </Button>
          </div>
          <div className="margin-top-2">
            <UswdsReactLink to={backToFormUrl}>
              <IconArrowBack className="margin-right-05 margin-bottom-2px text-tbottom" />
              {t(
                defaultValues.id
                  ? 'attendees.dontEditAndReturn'
                  : 'attendees.dontAddAndReturn'
              )}
            </UswdsReactLink>
          </div>
        </Form>
      </div>
    );
  }

  return null;
}

export default AttendeesForm;
