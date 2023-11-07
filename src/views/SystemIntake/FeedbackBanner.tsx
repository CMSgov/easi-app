import React from 'react';
import { useTranslation } from 'react-i18next';
import { GridContainer, IconWarning, Link } from '@trussworks/react-uswds';

type FeedbackBannerProps = {
  id: string;
};

const FeedbackBanner = ({ id }: FeedbackBannerProps) => {
  const { t } = useTranslation('intake');
  return (
    <div className="system-intake__feedback-banner bg-error-lighter padding-y-2">
      <GridContainer
        // TODO EASI-3085: Remove horizontal padding class for v2 form layout
        className="padding-x-2"
      >
        <p className="margin-top-0 margin-bottom-2 display-flex line-height-body-5">
          <IconWarning className="text-error-dark margin-right-1" size={3} />
          {t('feedback')}
        </p>
        <Link
          href={`/governance-task-list/${id}/feedback`}
          className="usa-button usa-button--outline"
        >
          {t('viewFeedback')}
        </Link>
      </GridContainer>
    </div>
  );
};

export default FeedbackBanner;
