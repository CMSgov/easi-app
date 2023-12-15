import React, { useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Button, Link } from '@trussworks/react-uswds';
import { kebabCase } from 'lodash';

import UswdsReactLink from 'components/LinkWrapper';
import Alert from 'components/shared/Alert';
import TaskListItem, { TaskListDescription } from 'components/TaskList';
import { IT_GOV_EMAIL } from 'constants/externalUrls';
import {
  GovernanceRequestFeedbackTargetForm,
  ITGovDraftBusinessCaseStatus,
  SystemIntakeState
} from 'types/graphql-global-types';
import { ItGovTaskSystemIntakeWithMockData } from 'types/itGov';
import { TaskListItemDateInfo } from 'types/taskList';

const GovTaskBizCaseDraft = ({
  id,
  itGovTaskStatuses: { bizCaseDraftStatus },
  bizCaseDraftSubmittedAt,
  bizCaseDraftUpdatedAt,
  governanceRequestFeedbacks,
  businessCase,
  state
}: ItGovTaskSystemIntakeWithMockData) => {
  const stepKey = 'bizCaseDraft';
  const { t } = useTranslation('itGov');
  const history = useHistory();

  const statusButtonText = new Map<ITGovDraftBusinessCaseStatus, string>([
    [ITGovDraftBusinessCaseStatus.READY, 'start'],
    [ITGovDraftBusinessCaseStatus.IN_PROGRESS, 'continue'],
    [ITGovDraftBusinessCaseStatus.EDITS_REQUESTED, 'editForm']
  ]);

  let dateInfo: TaskListItemDateInfo;

  // Updated date
  if (
    (bizCaseDraftStatus === ITGovDraftBusinessCaseStatus.IN_PROGRESS ||
      bizCaseDraftStatus === ITGovDraftBusinessCaseStatus.EDITS_REQUESTED) &&
    bizCaseDraftUpdatedAt
  )
    dateInfo = {
      label: 'lastUpdated',
      value: bizCaseDraftUpdatedAt
    };

  // Submitted date
  if (
    !dateInfo &&
    (bizCaseDraftStatus === ITGovDraftBusinessCaseStatus.SUBMITTED ||
      bizCaseDraftStatus === ITGovDraftBusinessCaseStatus.DONE) &&
    bizCaseDraftSubmittedAt
  )
    dateInfo = {
      label: 'submitted',
      value: bizCaseDraftSubmittedAt
    };

  const hasFeedback = useMemo(
    () =>
      !!governanceRequestFeedbacks.find(
        ({ targetForm }) =>
          targetForm === GovernanceRequestFeedbackTargetForm.DRAFT_BUSINESS_CASE
      ),
    [governanceRequestFeedbacks]
  );

  return (
    <TaskListItem
      heading={t(`taskList.step.${stepKey}.title`)}
      status={bizCaseDraftStatus}
      state={state}
      statusDateInfo={dateInfo}
      testId={kebabCase(t(`taskList.step.${stepKey}.title`))}
    >
      <TaskListDescription>
        <p>{t(`taskList.step.${stepKey}.description`)}</p>

        {/* Draft biz case submitted & waiting for feedback */}
        {bizCaseDraftStatus === ITGovDraftBusinessCaseStatus.SUBMITTED && (
          <Alert slim type="info">
            {t(`taskList.step.${stepKey}.submittedInfo`)}
          </Alert>
        )}

        {bizCaseDraftStatus ===
          ITGovDraftBusinessCaseStatus.EDITS_REQUESTED && (
          <Alert slim type="warning">
            {t(`taskList.step.${stepKey}.editsRequestedWarning`)}
          </Alert>
        )}

        {/* No feedback info */}
        {bizCaseDraftStatus === ITGovDraftBusinessCaseStatus.DONE &&
          !hasFeedback && (
            <Alert slim type="info">
              <Trans
                i18nKey={`itGov:taskList.step.${stepKey}.noFeedbackInfo`}
                components={{
                  a: <Link href={`mailto:${IT_GOV_EMAIL}`}> </Link>,
                  email: IT_GOV_EMAIL
                }}
              />
            </Alert>
          )}

        {statusButtonText.has(bizCaseDraftStatus) && (
          <div className="margin-top-2">
            <Button
              type="button"
              onClick={() => {
                history.push({
                  pathname: `/business/${
                    businessCase?.id || 'new'
                  }/general-request-info`,
                  state: {
                    systemIntakeId: id
                  }
                });
              }}
              disabled={state === SystemIntakeState.CLOSED}
            >
              {t(`button.${statusButtonText.get(bizCaseDraftStatus)}`)}
            </Button>
          </div>
        )}

        {/* Link to view feedback */}
        {hasFeedback && (
          <div className="margin-top-2">
            <UswdsReactLink to={`/governance-task-list/${id}/feedback`}>
              {t('button.viewRequestedEdits')}
            </UswdsReactLink>
          </div>
        )}

        {/* Link to view submitted draft biz case */}
        {(bizCaseDraftStatus === ITGovDraftBusinessCaseStatus.SUBMITTED ||
          bizCaseDraftStatus === ITGovDraftBusinessCaseStatus.DONE) && (
          <div className="margin-top-2">
            <UswdsReactLink to={`/business/${businessCase?.id}/view`}>
              {t(`taskList.step.${stepKey}.viewSubmittedDraftBusinessCase`)}
            </UswdsReactLink>
          </div>
        )}
      </TaskListDescription>
    </TaskListItem>
  );
};

export default GovTaskBizCaseDraft;
