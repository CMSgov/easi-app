import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormGroup } from '@trussworks/react-uswds';

import FieldErrorMsg from 'components/shared/FieldErrorMsg';
import HelpText from 'components/shared/HelpText';
import Label from 'components/shared/Label';
import TextAreaField from 'components/shared/TextAreaField';
import CreateSystemIntakeActionExpireLcidQuery from 'queries/CreateSystemIntakeActionExpireLcidQuery';
import {
  CreateSystemIntakeActionExpireLcid,
  CreateSystemIntakeActionExpireLcidVariables
} from 'queries/types/CreateSystemIntakeActionExpireLcid';
import { SystemIntakeExpireLCIDInput } from 'types/graphql-global-types';
import { NonNullableProps } from 'types/util';
import { expireLcidSchema } from 'validations/actionSchema';

import ActionForm, { SystemIntakeActionFields } from '../components/ActionForm';

import LcidTitleBox from './LcidTitleBox';
import { ManageLcidProps } from '.';

type ExpireLcidFields = NonNullableProps<
  Omit<SystemIntakeExpireLCIDInput, 'systemIntakeID'> & SystemIntakeActionFields
>;

interface ExpireLcidProps extends ManageLcidProps {
  lcid: string | null;
}

const ExpireLcid = ({ systemIntakeId, lcidStatus, lcid }: ExpireLcidProps) => {
  const { t } = useTranslation('action');
  const form = useForm<ExpireLcidFields>({
    resolver: yupResolver(expireLcidSchema)
  });

  const { control } = form;

  const [expireLcid] = useMutation<
    CreateSystemIntakeActionExpireLcid,
    CreateSystemIntakeActionExpireLcidVariables
  >(CreateSystemIntakeActionExpireLcidQuery, {
    refetchQueries: ['GetSystemIntake']
  });

  /**
   * Expire LCID on form submit
   *
   * Error and success handling is done in `<ActionForm>`
   */
  const onSubmit = async (formData: ExpireLcidFields) =>
    expireLcid({
      variables: {
        input: {
          systemIntakeID: systemIntakeId,
          ...formData
        }
      }
    });

  return (
    <FormProvider<ExpireLcidFields> {...form}>
      <ActionForm
        systemIntakeId={systemIntakeId}
        successMessage={t('expireLcid.success', { lcid })}
        onSubmit={onSubmit}
        title={
          <LcidTitleBox
            systemIntakeId={systemIntakeId}
            title={t('manageLcid.expire', { context: lcidStatus })}
          />
        }
      >
        <Controller
          name="reason"
          control={control}
          render={({ field: { ref, ...field }, fieldState: { error } }) => (
            <FormGroup error={!!error}>
              <Label htmlFor={field.name} className="text-normal" required>
                {t('expireLcid.reason')}
              </Label>
              <HelpText className="margin-top-1">
                {t('expireLcid.reasonHelpText')}
              </HelpText>
              {!!error?.message && (
                <FieldErrorMsg>{t(error.message)}</FieldErrorMsg>
              )}
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
          name="nextSteps"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <FormGroup>
              <Label htmlFor={field.name} className="text-normal">
                {t('expireLcid.nextSteps')}
              </Label>
              <HelpText className="margin-top-1">
                {t('expireLcid.nextStepsHelpText')}
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

export default ExpireLcid;
