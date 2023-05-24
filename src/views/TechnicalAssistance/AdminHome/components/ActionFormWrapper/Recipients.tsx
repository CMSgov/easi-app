import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import {
  Button,
  ButtonGroup,
  Dropdown,
  ErrorMessage,
  Fieldset,
  FormGroup
} from '@trussworks/react-uswds';

import cmsDivisionsAndOfficesOptions from 'components/AdditionalContacts/cmsDivisionsAndOfficesOptions';
import CedarContactSelect from 'components/CedarContactSelect';
import CheckboxField from 'components/shared/CheckboxField';
import Label from 'components/shared/Label';
import TruncatedContent from 'components/shared/TruncatedContent';
import Spinner from 'components/Spinner';
import cmsDivisionsAndOffices from 'constants/enums/cmsDivisionsAndOffices';
import useTRBAttendees from 'hooks/useTRBAttendees';
import { TRBAttendee_userInfo as UserInfo } from 'queries/types/TRBAttendee';
import { PersonRole } from 'types/graphql-global-types';
import toggleArrayValue from 'utils/toggleArrayValue';

type RecipientsProps = {
  trbRequestId: string;
  setRecipientFormOpen?: (value: boolean) => void;
};

type TrbRecipient = {
  id?: string;
  userInfo: UserInfo | null;
  component: string | null;
  role: PersonRole | null;
};

type RecipientFields = {
  copyTrbMailbox: boolean;
  notifyEuaIds: string[];
  recipients: TrbRecipient[];
};

const initialRecipient: TrbRecipient = {
  userInfo: {
    __typename: 'UserInfo',
    euaUserId: '',
    commonName: '',
    email: ''
  },
  component: null,
  role: null
};

/**
 * TRB email recipients field
 */
const Recipients = ({
  trbRequestId,
  setRecipientFormOpen
}: RecipientsProps) => {
  const { t } = useTranslation('technicalAssistance');

  const {
    data: { requester }
  } = useTRBAttendees(trbRequestId);

  const {
    control,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { isLoading }
  } = useFormContext<RecipientFields>();

  // Recipients field
  const { fields, append, remove } = useFieldArray<{
    recipients: TrbRecipient[];
  }>({
    name: 'recipients'
  });

  const recipientsCount = (watch('recipients') || []).filter(
    ({ id, userInfo }) =>
      id && userInfo?.euaUserId !== requester?.userInfo?.euaUserId
  ).length;

  const selectedCount = watch(['notifyEuaIds', 'copyTrbMailbox'])
    .flat()
    .filter(item => item).length;

  /** Validates required fields and unique euaUserId */
  const validateRecipient = async (
    index: number,
    recipient: TrbRecipient
  ): Promise<boolean> => {
    const errors: Partial<Record<keyof TrbRecipient, string>> = {};

    const { userInfo, role, component } = recipient;
    const { euaUserId } = userInfo || {};

    const isUnique: boolean = !(watch('recipients') || []).find(
      user =>
        user.id && user?.userInfo?.euaUserId === recipient?.userInfo?.euaUserId
    );

    // Set field error messages
    if (!euaUserId) {
      errors.userInfo = t<string>('emailRecipientFields.selectRecipientError');
    } else if (!isUnique) {
      errors.userInfo = t<string>('emailRecipientFields.duplicateRecipient');
    }
    if (!component) {
      errors.component = t<string>('errors.makeSelection');
    }
    if (!role) {
      errors.role = t<string>('errors.makeSelection');
    }

    // If field has error message, set error
    // Otherwise, clear field errors
    (Object.keys(recipient) as Array<keyof TrbRecipient>).forEach(key => {
      if (errors[key]) {
        setError(`recipients.${index}.${key}`, { message: errors[key] });
      } else {
        clearErrors(`recipients.${index}.${key}`);
      }
    });

    // Return whether recipient is valid
    return Object.keys(errors).length === 0;
  };

  /** Add and automatically select new recipient */
  const addRecipient = async (index: number, recipient: TrbRecipient) => {
    const isValid = await validateRecipient(index, recipient);

    if (isValid) {
      setValue(`recipients.${index}.id`, recipient.id);

      const { euaUserId } = recipient?.userInfo || {};
      if (euaUserId) {
        setValue(
          'notifyEuaIds',
          toggleArrayValue(watch('notifyEuaIds'), euaUserId)
        );
      }

      setRecipientFormOpen?.(false);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <Fieldset
      legend={
        <span className="text-bold">
          <Trans
            i18nKey="technicalAssistance:emailRecipientFields.label"
            components={{ red: <span className="text-error" /> }}
          />
        </span>
      }
      className="margin-top-4"
    >
      <p className="margin-bottom-0 margin-top-05">
        <Trans
          i18nKey="technicalAssistance:emailRecipientFields.selectedCount"
          components={{ bold: <span className="text-bold" /> }}
          count={selectedCount}
          values={{ plural: selectedCount === 1 ? '' : 's' }}
        />
      </p>

      <ul className="usa-list usa-list--unstyled">
        <TruncatedContent
          initialCount={2}
          expanded={recipientsCount === 0}
          hideToggle={recipientsCount === 0}
          labelMore={t(`emailRecipientFields.showMore`, {
            number: recipientsCount,
            plural: recipientsCount > 1 ? 's' : ''
          })}
          labelLess={t(`emailRecipientFields.showFewer`, {
            number: recipientsCount,
            plural: recipientsCount > 1 ? 's' : ''
          })}
          buttonClassName="margin-top-2"
        >
          <li>
            <Controller
              name="notifyEuaIds"
              control={control}
              render={({ field }) => {
                const { commonName, euaUserId } = requester?.userInfo || {};

                const component = cmsDivisionsAndOffices.find(
                  value => value.name === requester.component
                )?.acronym;

                const label = `${commonName}${
                  component ? `, ${component}` : ''
                } (${t('Requester')})`;

                const value = euaUserId || '';

                return (
                  <CheckboxField
                    id={`${field.name}.0`}
                    label={label}
                    {...{ ...field, ref: null }}
                    onChange={e => {
                      field.onChange(
                        toggleArrayValue(field.value, e.target.value)
                      );
                    }}
                    value={value}
                    checked={field.value.includes(value)}
                  />
                );
              }}
            />
          </li>

          <li>
            <Controller
              name="copyTrbMailbox"
              control={control}
              render={({ field }) => {
                return (
                  <CheckboxField
                    id={field.name}
                    label={t('emailRecipientFields.copyTrbMailbox')}
                    {...{ ...field, ref: null }}
                    value="true"
                    checked={!!field.value}
                  />
                );
              }}
            />
          </li>

          {fields
            .filter(
              ({ userInfo }) =>
                userInfo?.euaUserId !== requester?.userInfo?.euaUserId
            )
            .map((recipientField, i) => {
              // Add one to index to account for skipping requester
              const index = i + 1;

              return (
                <Controller
                  key={recipientField.id}
                  name={`recipients.${index}`}
                  control={control}
                  render={({ field: userField }) => {
                    const recipient: TrbRecipient = {
                      ...userField.value,
                      id: recipientField.id
                    };
                    const { id, userInfo, role } = userField.value;

                    if (id) {
                      return (
                        <Controller
                          name="notifyEuaIds"
                          control={control}
                          render={({ field }) => {
                            const label = `${userInfo?.commonName} (${t(
                              `attendees.contactRoles.${role}`
                            )})`;

                            const value = userInfo?.euaUserId || '';

                            return (
                              <CheckboxField
                                id={`${field.name}.${index + 1}`}
                                label={label}
                                {...{ ...field, ref: null }}
                                onChange={e => {
                                  field.onChange(
                                    toggleArrayValue(
                                      field.value,
                                      e.target.value
                                    )
                                  );
                                }}
                                value={value}
                                checked={field.value.includes(value)}
                              />
                            );
                          }}
                        />
                      );
                    }

                    return (
                      <li>
                        <Fieldset
                          className="margin-top-4"
                          legend={
                            <span className="text-bold">
                              {t('emailRecipientFields.addAnotherRecipient')}
                            </span>
                          }
                        >
                          <Controller
                            name={`recipients.${index}.userInfo`}
                            control={control}
                            render={({ field, fieldState: { error } }) => {
                              return (
                                <FormGroup
                                  error={!!error}
                                  className="margin-top-2"
                                >
                                  <Label
                                    htmlFor={field.name}
                                    className="text-normal"
                                    required
                                  >
                                    {t('emailRecipientFields.newRecipientName')}
                                  </Label>
                                  {error && (
                                    <ErrorMessage>{error.message}</ErrorMessage>
                                  )}
                                  <CedarContactSelect
                                    id={field.name}
                                    {...{ ...field, ref: null }}
                                    className="maxw-none"
                                  />
                                </FormGroup>
                              );
                            }}
                          />

                          <Controller
                            name={`recipients.${index}.component`}
                            control={control}
                            render={({ field, fieldState: { error } }) => {
                              return (
                                <FormGroup
                                  error={!!error}
                                  className="margin-top-2"
                                >
                                  <Label
                                    htmlFor={field.name}
                                    className="text-normal"
                                    required
                                  >
                                    {t(
                                      'emailRecipientFields.newRecipientComponent'
                                    )}
                                  </Label>
                                  {error && (
                                    <ErrorMessage>{error.message}</ErrorMessage>
                                  )}
                                  <Dropdown
                                    id={field.name}
                                    {...field}
                                    ref={null}
                                    value={field.value || ''}
                                  >
                                    <option
                                      label={`- ${t('basic.options.select')} -`}
                                      disabled
                                    />
                                    {cmsDivisionsAndOfficesOptions('component')}
                                  </Dropdown>
                                </FormGroup>
                              );
                            }}
                          />

                          <Controller
                            name={`recipients.${index}.role`}
                            control={control}
                            render={({ field, fieldState: { error } }) => {
                              return (
                                <FormGroup
                                  error={!!error}
                                  className="margin-top-2"
                                >
                                  <Label
                                    htmlFor={field.name}
                                    className="text-normal"
                                    required
                                  >
                                    {t('emailRecipientFields.newRecipientRole')}
                                  </Label>
                                  {error && (
                                    <ErrorMessage>{error.message}</ErrorMessage>
                                  )}
                                  <Dropdown
                                    id={field.name}
                                    {...field}
                                    ref={null}
                                    value={field.value || ''}
                                  >
                                    <option
                                      label={`- ${t('basic.options.select')} -`}
                                      disabled
                                    />
                                    {Object.keys(PersonRole).map(key => (
                                      <option
                                        key={key}
                                        value={key}
                                        label={t(
                                          `attendees.contactRoles.${key}`
                                        )}
                                      />
                                    ))}
                                  </Dropdown>
                                </FormGroup>
                              );
                            }}
                          />
                          <ButtonGroup>
                            <Button
                              type="button"
                              onClick={() => remove(index)}
                              outline
                            >
                              {t('Cancel')}
                            </Button>
                            <Button
                              type="button"
                              onClick={() => addRecipient(index, recipient)}
                              disabled={
                                !recipient.userInfo?.euaUserId ||
                                !recipient.role ||
                                !recipient.component
                              }
                            >
                              {t('emailRecipientFields.addRecipient')}
                            </Button>
                          </ButtonGroup>
                        </Fieldset>
                      </li>
                    );
                  }}
                />
              );
            })}
          {!watch('recipients').find(({ id }) => !id) && (
            <Button
              type="button"
              onClick={() => {
                append(initialRecipient);
                setRecipientFormOpen?.(true);
              }}
              className="margin-top-3"
              outline
            >
              {t('emailRecipientFields.addAnotherRecipient')}
            </Button>
          )}
        </TruncatedContent>
      </ul>
    </Fieldset>
  );
};

export default Recipients;
