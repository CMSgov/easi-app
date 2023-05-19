import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Accordion, Button, Form } from '@trussworks/react-uswds';

import EmailRecipientFields from 'components/EmailRecipientFields';
import Alert from 'components/shared/Alert';
import SectionWrapper from 'components/shared/SectionWrapper';
import Spinner from 'components/Spinner';
import useCacheQuery from 'hooks/useCacheQuery';
import useTRBAttendees from 'hooks/useTRBAttendees';
import GetTrbAdminNotesQuery from 'queries/GetTrbAdminNotesQuery';
import {
  DeleteTrbRecommendationQuery,
  GetTrbAdviceLetterQuery,
  SendTRBAdviceLetterQuery
} from 'queries/TrbAdviceLetterQueries';
import {
  DeleteTRBRecommendation,
  DeleteTRBRecommendationVariables
} from 'queries/types/DeleteTRBRecommendation';
import {
  GetTrbAdminNotes,
  GetTrbAdminNotes_trbRequest_adminNotes as AdminNote,
  GetTrbAdminNotesVariables
} from 'queries/types/GetTrbAdminNotes';
import {
  SendTRBAdviceLetter,
  SendTRBAdviceLetterVariables
} from 'queries/types/SendTRBAdviceLetter';
import {
  StepComponentProps,
  TrbRecipientFields
} from 'types/technicalAssistance';
import { formatDateLocal } from 'utils/date';
import { trbActionSchema } from 'validations/trbRequestSchema';

import ReviewAdviceLetter from '../AdminHome/components/ReviewAdviceLetter';
import Pager from '../RequestForm/Pager';

const Review = ({
  trbRequestId,
  adviceLetter,
  adviceLetterStatus,
  setFormAlert,
  setIsStepSubmitting
}: StepComponentProps) => {
  const { t } = useTranslation('technicalAssistance');
  const history = useHistory();

  const { data } = useCacheQuery<GetTrbAdminNotes, GetTrbAdminNotesVariables>(
    GetTrbAdminNotesQuery,
    {
      variables: {
        id: trbRequestId
      }
    }
  );

  const notes: AdminNote[] = data?.trbRequest?.adminNotes || [];

  const [mutate, adviceLetterResult] = useMutation<
    SendTRBAdviceLetter,
    SendTRBAdviceLetterVariables
  >(SendTRBAdviceLetterQuery);

  const [remove] = useMutation<
    DeleteTRBRecommendation,
    DeleteTRBRecommendationVariables
  >(DeleteTrbRecommendationQuery, {
    refetchQueries: [
      {
        query: GetTrbAdviceLetterQuery,
        variables: {
          id: trbRequestId
        }
      }
    ]
  });

  const {
    data: { attendees, requester },
    createAttendee
  } = useTRBAttendees(trbRequestId);

  const actionForm = useForm<TrbRecipientFields>({
    resolver: yupResolver(trbActionSchema()),
    defaultValues: {
      copyTrbMailbox: true,
      notifyEuaIds: []
    }
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isDirty }
  } = actionForm;

  const formSubmitting: boolean = isSubmitting || adviceLetterResult.loading;

  useEffect(() => {
    setIsStepSubmitting(isSubmitting);
  }, [setIsStepSubmitting, isSubmitting]);

  return (
    <div id="trbAdviceReview" className="margin-top-5">
      {/* Notes */}
      <p>
        <Trans
          i18nKey="technicalAssistance:adviceLetterForm.notesCount"
          components={{ bold: <span className="text-bold" /> }}
          count={notes.length}
          values={{ plural: notes.length === 1 ? '' : 's' }}
        />
      </p>
      {notes.length > 0 ? (
        <Accordion
          items={notes.map((note, index) => ({
            id: `trbAdminNote${index}`,
            title: `from ${note.author.commonName} (${formatDateLocal(
              note.createdAt,
              'MM/dd/yyyy'
            )})`,
            content: note.noteText,
            expanded: false
          }))}
          bordered
        />
      ) : (
        <Alert type="warning" slim>
          {t('adviceLetterForm.notesAlert')}
        </Alert>
      )}
      {/* Review */}
      <ReviewAdviceLetter
        trbRequestId={trbRequestId}
        adviceLetter={adviceLetter}
        className="margin-top-5 margin-bottom-4"
        recommendationActions={{
          edit: {
            onClick: recommendation =>
              history.push(`/trb/${trbRequestId}/advice/recommendations/form`, {
                recommendation: {
                  ...recommendation,
                  links: recommendation.links.map(link => ({ link }))
                }
              })
          },
          remove: {
            onClick: recommendation =>
              remove({ variables: { id: recommendation.id } }).catch(() =>
                setFormAlert({
                  type: 'error',
                  message: t('adviceLetterForm.error', {
                    action: 'removing',
                    type: 'recommendation'
                  })
                })
              )
          }
        }}
        showSectionEditLinks
      />
      <SectionWrapper borderTop className="margin-top-6 padding-top-2">
        <h3 className="margin-bottom-1">
          {t('actionRequestEdits.notificationTitle')}
        </h3>
        <p className="line-height-body-5 margin-top-1">
          {t('actionRequestEdits.notificationDescription')}
        </p>
        <Form
          onSubmit={handleSubmit(formData =>
            mutate({
              variables: { input: { ...formData, id: adviceLetter.id } }
            })
              .then(() =>
                history.push(`/trb/${trbRequestId}/advice/done`, {
                  success: true
                })
              )
              .catch(() =>
                history.push(`/trb/${trbRequestId}/advice/done`, {
                  success: false
                })
              )
          )}
          className="maxw-full margin-bottom-205 tablet:grid-col-12 desktop:grid-col-6"
        >
          <FormProvider {...actionForm}>
            <EmailRecipientFields
              requester={requester}
              contacts={attendees}
              mailboxes={[
                {
                  key: 'copyTrbMailbox',
                  label: t('emailRecipientFields.copyTrbMailbox')
                }
              ]}
              createContact={contact =>
                createAttendee({ ...contact, trbRequestId })
              }
            />
          </FormProvider>
          {/** Form pager buttons */}
          <Pager
            className="margin-top-6"
            back={{
              outline: true,
              onClick: () =>
                history.push(`/trb/${trbRequestId}/advice/internal-review`)
            }}
            buttons={[
              <div className="display-flex flex-align-center">
                <Button
                  key="buttonNext"
                  type="submit"
                  disabled={isDirty || formSubmitting}
                  className="margin-top-0 margin-right-105"
                >
                  {t('Send')}
                </Button>
                {formSubmitting && <Spinner />}
              </div>
            ]}
            taskListUrl={`/trb/${trbRequestId}/advice`}
            saveExitText={t('adviceLetterForm.returnToRequest')}
            submitDisabled
            border={false}
          />
        </Form>
      </SectionWrapper>
    </div>
  );
};

export default Review;
