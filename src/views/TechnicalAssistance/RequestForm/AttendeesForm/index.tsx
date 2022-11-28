import React, { useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ApolloError, FetchResult } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, IconArrowBack } from '@trussworks/react-uswds';

import UswdsReactLink from 'components/LinkWrapper';
import PageHeading from 'components/PageHeading';
import useTRBAttendees from 'hooks/useTRBAttendees';
import { PersonRole } from 'types/graphql-global-types';
import {
  AttendeeFieldLabels,
  TRBAttendeeData,
  TRBAttendeeFields
} from 'types/technicalAssistance';
import { trbAttendeeSchema } from 'validations/trbRequestSchema';

import Breadcrumbs from '../../Breadcrumbs';
import Pager from '../Pager';

import { AttendeeFields } from './components';

interface AttendeesFormProps {
  backToFormUrl?: string;
  activeAttendee: TRBAttendeeData;
  trbRequestId: string;
  setFormError: React.Dispatch<React.SetStateAction<string | false>>;
}

function AttendeesForm({
  backToFormUrl,
  activeAttendee,
  trbRequestId,
  setFormError
}: AttendeesFormProps) {
  const { t } = useTranslation('technicalAssistance');
  const history = useHistory();

  // Attendee data
  const {
    data: { attendees, requester },
    createAttendee,
    updateAttendee
  } = useTRBAttendees(trbRequestId);

  /** Field labels object from translation file */
  const fieldLabels: {
    create: AttendeeFieldLabels;
    edit: AttendeeFieldLabels;
  } = t('attendees.fieldLabels.attendee', {
    returnObjects: true
  });

  /** Initial attendee values before form values are updated */
  const defaultValues: TRBAttendeeFields = useRef({
    euaUserId: activeAttendee.userInfo?.euaUserId || '',
    component: activeAttendee.component,
    role: activeAttendee.role
  }).current;

  /** Type of form - edit or create */
  const formType = activeAttendee.id ? 'edit' : 'create';

  // Initialize form
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isDirty }
  } = useForm<TRBAttendeeFields>({
    resolver: yupResolver(trbAttendeeSchema),
    defaultValues
  });

  /** Whether or not the submitted attendee EUA ID is unique compared to the requester and additional attendees */
  const euaUserIdIsUnique = useCallback(
    euaUserId => {
      return [
        // If editing, filter out default euaUserId value
        ...attendees.filter(
          attendee => attendee.userInfo?.euaUserId !== defaultValues.euaUserId
        ),
        requester
      ].every(attendee => attendee.userInfo?.euaUserId !== euaUserId);
    },
    [defaultValues.euaUserId, requester, attendees]
  );

  /** Execute attendee mutation */
  const submitAttendee = (
    formData: TRBAttendeeFields
  ): Promise<FetchResult> => {
    const { component, role, euaUserId } = formData;
    const { id } = activeAttendee;

    // If attendee object has ID, update attendee
    if (id) {
      return updateAttendee({
        variables: {
          input: {
            id,
            component,
            role: role as PersonRole
          }
        }
      });
    }
    // If no ID is present, create new attendee
    return createAttendee({
      variables: {
        input: {
          trbRequestId,
          euaUserId,
          component,
          role: role as PersonRole
        }
      }
    });
  };

  if (backToFormUrl) {
    /** Submit additional attendee fields and return to main attendees form */
    const submitForm = (formData: TRBAttendeeFields) => {
      if (isDirty) {
        // If euaUserId is not unique, set field error
        if (!euaUserIdIsUnique) {
          setError('euaUserId', {
            message: 'Attendee name must be unique'
          });
        } else {
          // Submit attendee fields
          submitAttendee(formData)
            .then(() => {
              // Clear errors
              clearErrors('euaUserId');
              // Return to attendees form
              history.push(backToFormUrl);
            })
            .catch(err => {
              if (err instanceof ApolloError) {
                // Set form error
                setFormError(t<string>('attendees.alerts.error'));
                // Return to attendees form
                history.push(backToFormUrl);
              }
            });
        }
      }
    };

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
                activeAttendee.id
                  ? 'attendees.editAttendee'
                  : 'attendees.addAnAttendee'
              )
            }
          ]}
        />
        <PageHeading className="margin-bottom-1">
          {t(
            activeAttendee.id
              ? 'attendees.editAttendee'
              : 'attendees.addAnAttendee'
          )}
        </PageHeading>
        <p className="font-body-md">{t('attendees.attendeeHelpText')}</p>

        <Form onSubmit={handleSubmit(submitForm)} className="maxw-full">
          <AttendeeFields
            type="attendee"
            activeAttendee={activeAttendee}
            errors={errors}
            clearErrors={clearErrors}
            control={control}
            setValue={setValue}
            fieldLabels={fieldLabels[formType]}
          />
          <Pager
            next={{
              text: t(
                fieldLabels[formType as keyof typeof fieldLabels].submit || ''
              ),
              disabled: isSubmitting
            }}
            back={{
              text: t('Cancel'),
              onClick: () => history.push(backToFormUrl),
              disabled: isSubmitting
            }}
            className="border-top-0"
            saveExitHidden
          />
          <div className="margin-top-2">
            <UswdsReactLink to={backToFormUrl}>
              <IconArrowBack className="margin-right-05 margin-bottom-2px text-tbottom" />
              {t(
                activeAttendee.id
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
