import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  Button,
  Grid,
  GridContainer,
  IconArrowBack
} from '@trussworks/react-uswds';

import PageLoading from 'components/PageLoading';
import { Alert } from 'components/shared/Alert';
import StepHeader from 'components/StepHeader';
import { GetTrbAdviceLetterQuery } from 'queries/TrbAdviceLetterQueries';
import {
  GetTrbAdviceLetter,
  GetTrbAdviceLetterVariables
} from 'queries/types/GetTrbAdviceLetter';
import { TRBAdviceLetterStatus } from 'types/graphql-global-types';
import { FormAlertObject } from 'types/technicalAssistance';
import NotFound from 'views/NotFound';

import Breadcrumbs from '../Breadcrumbs';
import { StepSubmit } from '../RequestForm';

import InternalReview from './InternalReview';
import NextSteps from './NextSteps';
import Recommendations from './Recommendations';
import Review from './Review';
import Summary from './Summary';

import './index.scss';

type StepsText = { name: string; longName?: string; description?: string }[];

const adviceFormSteps = [
  {
    slug: 'summary',
    component: Summary
  },
  {
    slug: 'recommendations',
    component: Recommendations
  },
  {
    slug: 'next-steps',
    component: NextSteps
  },
  {
    slug: 'internal-review',
    component: InternalReview
  },
  {
    slug: 'review',
    component: Review
  }
] as const;

type AdviceFormStep = typeof adviceFormSteps[number];

/**
 * TRB request admin advice letter form
 */
const AdviceLetterForm = () => {
  const { t } = useTranslation('technicalAssistance');
  const history = useHistory();

  // Get url params
  const { id, formStep, subpage } = useParams<{
    id: string;
    formStep: string;
    subpage: string;
  }>();

  // TRB request query
  const { data, loading } = useQuery<
    GetTrbAdviceLetter,
    GetTrbAdviceLetterVariables
  >(GetTrbAdviceLetterQuery, {
    variables: { id }
  });

  /** Current trb request */
  const trbRequest = data?.trbRequest;
  const { adviceLetter, taskStatuses } = trbRequest || {};
  const { adviceLetterStatus } = taskStatuses || {};

  // References to the submit handler and submitting state of the current form step
  const [stepSubmit, setStepSubmit] = useState<StepSubmit | null>(null);
  const [isStepSubmitting, setIsStepSubmitting] = useState<boolean>(false);

  // Form level alerts from step components
  const [formAlert, setFormAlert] = useState<FormAlertObject | null>(null);

  /** Form steps translated text object */
  const steps = t<StepsText>('adviceLetterForm.steps', { returnObjects: true });

  /** Index of current form step - will return -1 if invalid URL */
  const currentStepIndex: number = adviceFormSteps.findIndex(
    ({ slug }) => slug === formStep
  );

  /** Current form step object */
  const currentFormStep: AdviceFormStep = adviceFormSteps[currentStepIndex];

  // Page loading
  if (loading) return <PageLoading />;

  // If invalid URL or advice letter can't be started, return page not found
  if (
    currentStepIndex === -1 ||
    !trbRequest ||
    !adviceLetter ||
    adviceLetterStatus === TRBAdviceLetterStatus.CANNOT_START_YET
  ) {
    return <NotFound />;
  }

  return (
    <>
      {/** Form page header */}
      {!subpage && (
        <StepHeader
          heading={t('adviceLetterForm.heading')}
          text={t('adviceLetterForm.description')}
          subText={t('adviceLetterForm.text')}
          step={currentStepIndex + 1}
          steps={steps.map((step, index) => ({
            key: step.name,
            label: (
              <>
                <span className="name">{step.name}</span>
                <span className="long">{step.longName ?? step.name}</span>
              </>
            ),
            description: step.description,
            completed: index < currentStepIndex,
            onClick: async () => {
              const url = `/trb/${id}/advice/${adviceFormSteps[index].slug}`;
              if (!isStepSubmitting && currentStepIndex !== index) {
                // Save and go to step url
                if (stepSubmit) {
                  stepSubmit(() => history.push(url));
                } else {
                  history.push(url);
                }
              }
            }
          }))}
          breadcrumbBar={
            <Breadcrumbs
              items={[
                { text: t('Home'), url: '/trb' },
                {
                  text: t(`Request ${id}`),
                  url: `/trb/${id}/advice`
                },
                { text: t('adviceLetterForm.heading') }
              ]}
            />
          }
          errorAlert={
            formAlert && (
              <Alert type={formAlert.type} className="margin-top-3" slim>
                {formAlert.message}
              </Alert>
            )
          }
        >
          {/* Save and return to request button */}
          <Button
            type="button"
            unstyled
            disabled={isStepSubmitting}
            onClick={() => {
              const url = `/trb/${id}/advice`;
              if (stepSubmit) {
                stepSubmit?.(() => history.push(url));
              } else {
                history.push(url);
              }
            }}
          >
            <IconArrowBack className="margin-right-05 margin-bottom-2px text-tbottom" />
            {t('adviceLetterForm.returnToRequest')}
          </Button>
        </StepHeader>
      )}

      {/* Current form step component */}
      <GridContainer>
        <Grid>
          <currentFormStep.component
            trbRequestId={id}
            adviceLetter={adviceLetter}
            setFormAlert={setFormAlert}
            setStepSubmit={setStepSubmit}
            setIsStepSubmitting={setIsStepSubmitting}
          />
        </Grid>
      </GridContainer>
    </>
  );
};

export default AdviceLetterForm;
