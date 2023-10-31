import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { FormGroup } from '@trussworks/react-uswds';

import HelpText from 'components/shared/HelpText';
import Label from 'components/shared/Label';
import TextAreaField from 'components/shared/TextAreaField';
import CreateSystemIntakeActionProgressToNewStepQuery from 'queries/CreateSystemIntakeActionProgressToNewStepQuery';
import {
  CreateSystemIntakeActionProgressToNewStep,
  CreateSystemIntakeActionProgressToNewStepVariables
} from 'queries/types/CreateSystemIntakeActionProgressToNewStep';
import { SystemIntakeProgressToNewStepsInput } from 'types/graphql-global-types';
import { NonNullableProps } from 'types/util';

import ActionForm, { SystemIntakeActionFields } from './components/ActionForm';

type ProgressToNewStepFields = NonNullableProps<
  Omit<SystemIntakeProgressToNewStepsInput, 'systemIntakeID'> &
    SystemIntakeActionFields
>;

const ProgressToNewStep = ({ systemIntakeId }: { systemIntakeId: string }) => {
  const { t } = useTranslation('action');

  const [mutate] = useMutation<
    CreateSystemIntakeActionProgressToNewStep,
    CreateSystemIntakeActionProgressToNewStepVariables
  >(CreateSystemIntakeActionProgressToNewStepQuery, {
    refetchQueries: ['GetSystemIntake']
  });

  const form = useForm<ProgressToNewStepFields>();
  const { control } = form;

  /**
   * Submit handler containing mutation logic
   *
   * Error and success handling is done in `<ActionForm>`
   */
  const onSubmit = async (formData: ProgressToNewStepFields) =>
    mutate({
      variables: {
        input: {
          systemIntakeID: systemIntakeId,
          ...formData
        }
      }
    });

  return (
    <FormProvider<ProgressToNewStepFields> {...form}>
      <ActionForm
        systemIntakeId={systemIntakeId}
        title={t('progressToNewStep.title')}
        description={t('progressToNewStep.description')}
        breadcrumb={t('progressToNewStep.breadcrumb')}
        successMessage=""
        onSubmit={onSubmit}
      >
        <Controller
          control={control}
          name="feedback"
          render={({ field: { ref, ...field } }) => (
            <FormGroup>
              <Label htmlFor={field.name} className="text-normal">
                {t('progressToNewStep.feedback')}
              </Label>
              <HelpText className="margin-top-1">
                {t('progressToNewStep.feedbackHelpText')}
              </HelpText>
              <TextAreaField
                {...field}
                id={field.name}
                value={field.value || ''}
                size="sm"
                characterCounter={false}
              />
            </FormGroup>
          )}
        />
        <Controller
          control={control}
          name="grbRecommendations"
          render={({ field: { ref, ...field } }) => (
            <FormGroup>
              <Label htmlFor={field.name} className="text-normal">
                {t('progressToNewStep.grbRecommendations')}
              </Label>
              <HelpText className="margin-top-1">
                {t('progressToNewStep.grbRecommendationsHelpText')}
              </HelpText>
              <TextAreaField
                {...field}
                id={field.name}
                value={field.value || ''}
                size="sm"
                characterCounter={false}
              />
            </FormGroup>
          )}
        />
      </ActionForm>
    </FormProvider>
  );
};

export default ProgressToNewStep;
