import React from 'react';
import { Controller, ControllerRenderProps, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Button, Radio } from '@trussworks/react-uswds';

import PageHeading from 'components/PageHeading';
import CollapsableLink from 'components/shared/CollapsableLink';
import { RadioGroup } from 'components/shared/RadioField';
import { GetSystemIntake_systemIntake as SystemIntake } from 'queries/types/GetSystemIntake';

import NextStep from './NextStep';
import RequestEdits from './RequestEdits';
import Resolutions from './Resolutions';

import './index.scss';

type ActionRadioOptionProps = {
  label: string;
  description: string;
  accordionText: string;
} & Omit<ControllerRenderProps, 'ref'>;

const ActionRadioOption = ({
  label,
  description,
  accordionText,
  ...field
}: ActionRadioOptionProps) => {
  const { t } = useTranslation('action');

  return (
    <Radio
      {...field}
      className="grt-action-radio__option margin-bottom-2 tablet:grid-col-5"
      id={`grt-action__${field.value}`}
      label={t('chooseAction.selectAction')}
      title={label}
      labelDescription={
        <>
          <h3 className="margin-top-2 margin-bottom-0">{label}</h3>
          <p className="margin-0 text-base font-body-sm line-height-body-5">
            {description}
          </p>
          <CollapsableLink
            className="margin-top-2"
            id="grt-action-radio__accordion"
            label={t('chooseAction.accordionLabel')}
          >
            <p className="line-height-body-4 font-body-md margin-0">
              {accordionText}
            </p>
          </CollapsableLink>
        </>
      }
      tile
    />
  );
};

type ActionsProps = {
  systemIntake: SystemIntake;
};

const Actions = ({ systemIntake }: ActionsProps) => {
  const history = useHistory();
  const { t } = useTranslation('action');

  const { state, decisionState } = systemIntake;

  const { control, watch, handleSubmit } = useForm<{ actionRoute: string }>();
  const actionRoute = watch('actionRoute');

  return (
    <div className="grt-admin-actions">
      <Switch>
        <Route
          path="/governance-review-team/:systemId/actions/request-edits"
          render={() => <RequestEdits systemIntakeId={systemIntake.id} />}
        />

        <Route
          path="/governance-review-team/:systemId/actions/next-step"
          render={() => <NextStep systemIntakeId={systemIntake.id} />}
        />

        {/* Select resolution page */}
        <Route
          path="/governance-review-team/:systemId/resolutions/:subPage?"
          render={() => (
            <Resolutions
              systemIntakeId={systemIntake.id}
              state={state}
              decisionState={decisionState}
            />
          )}
        />

        {/* Select action main page */}
        <Route path="/governance-review-team/:systemId/actions">
          <PageHeading
            data-testid="grt-actions-view"
            className="margin-top-0 margin-bottom-5"
          >
            {t('chooseAction.heading')}
          </PageHeading>

          <form
            onSubmit={handleSubmit(formData =>
              history.push(formData.actionRoute)
            )}
            className="margin-bottom-4"
          >
            <Controller
              name="actionRoute"
              control={control}
              render={({ field: { ref, ...fieldProps } }) => {
                return (
                  <RadioGroup className="grt-actions-radio-group grid-row grid-gap-md">
                    {/* Request Edits */}
                    <ActionRadioOption
                      {...fieldProps}
                      value="actions/request-edits"
                      label={t('chooseAction.requestEdits.title')}
                      description={t('chooseAction.requestEdits.description')}
                      accordionText={t('chooseAction.requestEdits.accordion')}
                    />
                    {/* Progress to new step */}
                    <ActionRadioOption
                      {...fieldProps}
                      value="actions/next-step"
                      label={t('chooseAction.progressToNewStep.title')}
                      description={t(
                        'chooseAction.progressToNewStep.description'
                      )}
                      accordionText={t(
                        'chooseAction.progressToNewStep.accordion'
                      )}
                    />
                    {/* Decision action */}
                    <ActionRadioOption
                      {...fieldProps}
                      value="resolutions"
                      label={t(`chooseAction.decision${state}.title`, {
                        context: decisionState
                      })}
                      description={t(
                        `chooseAction.decision${state}.description`,
                        {
                          context: decisionState
                        }
                      )}
                      accordionText={t(
                        `chooseAction.decision${state}.accordion`,
                        {
                          context: decisionState
                        }
                      )}
                    />
                  </RadioGroup>
                );
              }}
            />

            <Button
              className="margin-top-3"
              type="submit"
              disabled={!actionRoute}
            >
              {t('submitAction.continue')}
            </Button>
          </form>
        </Route>
      </Switch>
    </div>
  );
};

export default Actions;
