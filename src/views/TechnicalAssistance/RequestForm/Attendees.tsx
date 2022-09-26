import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Button } from '@trussworks/react-uswds';

import UswdsReactLink from 'components/LinkWrapper';

import AttendeesList from './AttendeesList';
import Pager from './Pager';
import { FormStepComponentProps } from '.';

function Attendees({ request, step }: FormStepComponentProps) {
  const { t } = useTranslation('technicalAssistance');
  const { path, url } = useRouteMatch();

  // Temp example vars to demo adding attendees
  const [numExample, setNumExample] = useState(0);

  return (
    <div className="trb-attendees">
      <Switch>
        <Route exact path={`${path}/attendees`}>
          <AttendeesList
            request={request}
            backToFormUrl={`/trb/requests/${request.id}/${step}`}
            addExample={() => {
              setNumExample(numExample + 1);
            }}
          />
        </Route>

        <Route exact path={`${path}`}>
          <div className="margin-y-2">
            <div className="margin-y-2">Attendees: {numExample}</div>
            <UswdsReactLink
              variant="unstyled"
              className="usa-button"
              to={`${url}/attendees`}
            >
              {t('attendees.addAnAttendee')}
            </UswdsReactLink>
            <Button
              type="button"
              onClick={() => {
                setNumExample(numExample - 1);
              }}
            >
              {t('attendees.remove')}
            </Button>
          </div>

          <Pager
            back={{ url: `/trb/requests/${request.id}/${step - 1}` }}
            next={{
              url: `/trb/requests/${request.id}/${step + 1}`,
              // Demo next button based on attendees
              ...(numExample === 0
                ? {
                    text: t('attendees.continueWithoutAdding'),
                    style: 'outline'
                  }
                : {})
            }}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Attendees;
