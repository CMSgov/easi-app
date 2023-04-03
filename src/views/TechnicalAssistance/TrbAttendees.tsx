import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';
import {
  Alert,
  Grid,
  GridContainer,
  IconArrowBack
} from '@trussworks/react-uswds';

import UswdsReactLink from 'components/LinkWrapper';

import Attendees from './RequestForm/Attendees';
import Breadcrumbs from './Breadcrumbs';
import { TrbFormAlert } from './RequestForm';

const TrbAttendees = () => {
  const { t } = useTranslation('technicalAssistance');

  const { pathname } = useLocation();

  const isForm = pathname.includes('/list');

  const { id: requestID } = useParams<{
    id: string;
  }>();

  const [formAlert, setFormAlert] = useState<TrbFormAlert>(false);

  return (
    <GridContainer>
      <Grid desktop={{ col: 12 }}>
        {!isForm && (
          <Breadcrumbs
            items={[
              { text: t('heading'), url: '/trb' },
              {
                text: t('taskList.heading'),
                url: `/trb/task-list/${requestID}`
              },
              {
                text: t('attendees.heading')
              }
            ]}
          />
        )}

        {/* Displays document success/fail messages when removing a document on this view */}
        {formAlert && (
          <Alert
            type={formAlert.type}
            heading={formAlert.heading}
            slim
            className="margin-y-4"
          >
            {formAlert.message}
          </Alert>
        )}

        <Attendees
          fromTaskList
          setFormAlert={setFormAlert}
          taskListUrl={`/trb/task-list/${requestID}`}
        />

        {!isForm && (
          <div className="margin-top-5">
            <UswdsReactLink to={`/trb/task-list/${requestID}`}>
              <IconArrowBack className="margin-right-1 text-middle" />
              <span className="line-height-body-5">
                {t('requestFeedback.returnToTaskList')}
              </span>
            </UswdsReactLink>
          </div>
        )}
      </Grid>
    </GridContainer>
  );
};

export default TrbAttendees;
