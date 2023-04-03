import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import { ApolloError, ApolloQueryResult } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, IconArrowBack } from '@trussworks/react-uswds';
import classNames from 'classnames';

import UswdsReactLink from 'components/LinkWrapper';
import PageLoading from 'components/PageLoading';
import Divider from 'components/shared/Divider';
import useTRBAttendees from 'hooks/useTRBAttendees';
import {
  GetTrbRequest,
  GetTrbRequest_trbRequest as TrbRequest,
  GetTrbRequestVariables
} from 'queries/types/GetTrbRequest';
import { TRBAttendee } from 'queries/types/TRBAttendee';
import {
  AttendeeFieldLabels,
  TRBAttendeeFields
} from 'types/technicalAssistance';
import { trbRequesterSchema } from 'validations/trbRequestSchema';

import { AttendeeFields, AttendeesTable } from './AttendeesForm/components';
import AttendeesForm from './AttendeesForm';
import Pager from './Pager';
import { FormStepComponentProps, StepSubmit, TrbFormAlert } from '.';

// Make FormStepComponentProps conditionally required on the presence of fromTaskList
// Used to render Attendees/form from task list outside the scope of initial request form
type AttendeesProps =
  | {
      fromTaskList?: true;
      request?: TrbRequest;
      /** Refetch the trb request from the form wrapper */
      refetchRequest?: (
        variables?: Partial<GetTrbRequestVariables> | undefined
      ) => Promise<ApolloQueryResult<GetTrbRequest>>;
      /**
       * Set the current form step component submit handler
       * so that in can be used in other places like the header.
       * Form step components need to reassign the handler.
       */
      setStepSubmit?: React.Dispatch<React.SetStateAction<StepSubmit | null>>;
      /** Set to update the submitting state from step components to the parent request form */
      setIsStepSubmitting?: React.Dispatch<React.SetStateAction<boolean>>;
      /** Set a form level alert message from within step components */
      setFormAlert: React.Dispatch<React.SetStateAction<TrbFormAlert>>;
      stepUrl?: {
        current: string;
        next: string;
        back: string;
      };
      taskListUrl: string;
    }
  | ({ fromTaskList?: false } & FormStepComponentProps);

/** Initial blank attendee object */
export const initialAttendee: TRBAttendee = {
  __typename: 'TRBRequestAttendee',
  trbRequestId: '',
  id: '',
  userInfo: {
    __typename: 'UserInfo',
    commonName: '',
    euaUserId: '',
    email: ''
  },
  component: null,
  role: null,
  createdAt: ''
};

function Attendees({
  request,
  stepUrl,
  setFormAlert,
  refetchRequest,
  setIsStepSubmitting,
  setStepSubmit,
  taskListUrl,
  fromTaskList
}: AttendeesProps) {
  const { t } = useTranslation('technicalAssistance');
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const { id: trbID } = useParams<{
    id: string;
  }>();

  const taskListAttendeesURL = `/trb/task-list/${trbID}/attendees`;

  /** Field labels object from translation file */
  const fieldLabels: AttendeeFieldLabels = t(
    'attendees.fieldLabels.requester',
    {
      returnObjects: true
    }
  );

  /**
   * Active attendee for form fields
   *
   * Used to set field values when creating or editing attendee
   */
  const [activeAttendee, setActiveAttendee] = useState<TRBAttendee>({
    ...initialAttendee,
    trbRequestId: request?.id || trbID
  });

  // Initialize form
  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    getValues,
    reset,
    formState: { errors, isSubmitting, isDirty }
  } = useForm<TRBAttendeeFields>({
    resolver: yupResolver(trbRequesterSchema)
  });

  /**
   * Get TRB attendees data and mutations
   */
  const {
    data: { attendees, requester, loading },
    updateAttendee,
    deleteAttendee
  } = useTRBAttendees(request?.id || trbID);

  /**
   * Reset form with default values after useTRBAttendees query returns requester
   */
  useEffect(() => {
    /** Default reqiester values */
    const defaultValues: TRBAttendeeFields = {
      euaUserId: requester?.userInfo?.euaUserId || '',
      component: requester?.component,
      role: requester?.role
    };
    // Reset form
    reset(defaultValues);
  }, [requester, reset]);

  /** Submit requester as attendee */
  const submitForm = useCallback<StepSubmit>(
    callback =>
      // Start the submit promise
      handleSubmit(
        // Validation passed
        async formData => {
          // Submit the input only if there are changes
          if (isDirty && requester.id) {
            // Update requester
            await updateAttendee({
              variables: {
                input: {
                  id: requester.id,
                  component: formData.component,
                  role: formData.role
                }
              }
            })
              // Refresh the RequestForm parent request query
              // to update things like `stepsCompleted`
              .then(() => refetchRequest && refetchRequest())
              .catch(() => {
                throw new Error(t<string>('attendees.alerts.error'));
              });
          }
        },
        // Validation did not pass
        () => {
          // Need to throw from this error handler so that the promise is rejected
          throw new Error(t<string>('attendees.alerts.invalidForm'));
        }
      )()
        // Wait for submit to finish before continuing.
        // This essentially makes sure any effects like
        // `setIsStepSubmitting` are called before unmount.
        .then(
          () => {
            callback?.();
          },
          err => {
            if (err instanceof ApolloError) {
              setFormAlert({
                type: 'error',
                message: t<string>('attendees.alerts.error')
              });
            }
          }
        ),
    [
      t,
      handleSubmit,
      isDirty,
      refetchRequest,
      setFormAlert,
      requester,
      updateAttendee
    ]
  );

  useEffect(() => {
    if (setStepSubmit) setStepSubmit(() => submitForm);
  }, [setStepSubmit, submitForm]);

  useEffect(() => {
    if (setIsStepSubmitting) setIsStepSubmitting(isSubmitting);
  }, [setIsStepSubmitting, isSubmitting]);

  // Wait until attendees query has completed to load form
  if (loading) return <PageLoading />;

  if (fromTaskList && attendees.length === 0 && !path.includes('list')) {
    history.push(`${taskListAttendeesURL}/list`);
  }

  return (
    <div
      className={classNames('trb-attendees', {
        'margin-top-2': !fromTaskList
      })}
    >
      <Switch>
        <Route exact path={`${path}/list`}>
          <AttendeesForm
            backToFormUrl={stepUrl?.current || taskListAttendeesURL}
            activeAttendee={activeAttendee}
            setActiveAttendee={setActiveAttendee}
            trbRequestId={request?.id || trbID}
            setFormAlert={setFormAlert}
            taskListUrl={taskListUrl}
            fromTaskList={fromTaskList}
          />
        </Route>

        <Route exact path={`${path}`}>
          <Form
            data-testid="trb-attendees-form"
            className="margin-bottom-4 maxw-full"
            onSubmit={e => e.preventDefault()}
          >
            {/* Requester Fields */}
            {!fromTaskList && (
              <>
                <AttendeeFields
                  type="requester"
                  activeAttendee={requester}
                  fieldLabels={fieldLabels}
                  errors={errors}
                  clearErrors={clearErrors}
                  setValue={setValue}
                  control={control}
                />

                <Divider />
              </>
            )}

            {fromTaskList && (
              <>
                <h1 className="margin-bottom-0 margin-top-6">
                  {t('attendees.heading')}
                </h1>
                <p className="line-height-body-5 margin-top-0 margin-bottom-2">
                  {t('attendees.description')}
                </p>
                <div className="margin-bottom-6">
                  <UswdsReactLink to={`/trb/task-list/${trbID}`}>
                    <IconArrowBack className="margin-right-1 text-middle" />
                    <span className="line-height-body-5">
                      {t('requestFeedback.returnToTaskList')}
                    </span>
                  </UswdsReactLink>
                </div>
              </>
            )}

            <div className="margin-bottom-6">
              {!fromTaskList && (
                <h4 className="margin-bottom-2">
                  {t('attendees.additionalAttendees')}
                </h4>
              )}

              {/* Button to add additional attendee */}
              <UswdsReactLink
                variant="unstyled"
                className={classNames('usa-button', 'margin-top-0', {
                  'usa-button--outline': attendees.length > 0
                })}
                to={`${url}/list`}
                // Save requester when navigating to additional attendees form
                onClick={() => {
                  // Clear out alert from previous action
                  setFormAlert(false);

                  // Check that all requester fields are filled out
                  // This submission should not throw errors if missing fields
                  if (
                    getValues().euaUserId &&
                    getValues().component &&
                    getValues().role
                  ) {
                    submitForm(() => history.push(`${url}/list`));
                  }
                }}
              >
                {t(
                  attendees.length > 0
                    ? 'attendees.addAnotherAttendee'
                    : 'attendees.addAnAttendee'
                )}
              </UswdsReactLink>

              {/* List of additional attendees */}
              <AttendeesTable
                attendees={attendees}
                setActiveAttendee={setActiveAttendee}
                trbRequestId={request?.id || trbID}
                deleteAttendee={(id: string) =>
                  deleteAttendee({ variables: { id } })
                }
              />
            </div>

            {stepUrl && (
              <Pager
                className="margin-top-5"
                next={{
                  disabled: isSubmitting,
                  onClick: () => {
                    submitForm(() => {
                      history.push(stepUrl.next);
                    });
                  },
                  text: t(
                    attendees.length > 0
                      ? 'Next'
                      : 'attendees.continueWithoutAdding'
                  ),
                  outline: attendees.length === 0
                }}
                back={{
                  disabled: isSubmitting,
                  onClick: () => {
                    submitForm(() => {
                      history.push(stepUrl.back);
                    });
                  }
                }}
                saveExitDisabled={isSubmitting}
                submit={submitForm}
                taskListUrl={taskListUrl}
              />
            )}
          </Form>
        </Route>
      </Switch>
    </div>
  );
}

export default Attendees;
