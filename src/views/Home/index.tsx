import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid } from '@trussworks/react-uswds';
import { useFlags } from 'launchdarkly-react-client-sdk';

import LinkCard, { LinkRequestType } from 'components/LinkCard';
import MainContent from 'components/MainContent';
import PageHeading from 'components/PageHeading';
import useMessage from 'hooks/useMessage';
import { AppState } from 'reducers/rootReducer';
import user from 'utils/user';
import List from 'views/Accessibility/AccessibilityRequest/List';
import Table from 'views/MyRequests/Table';
import SystemsListTable from 'views/SystemList/Table';

import AdminHome from './AdminHome';
import WelcomePage from './WelcomePage';

import './welcome.scss';

const Home = () => {
  const { t } = useTranslation();
  const { groups, isUserSet, name } = useSelector(
    (state: AppState) => state.auth
  );

  const flags = useFlags();

  const { Message } = useMessage();

  const requestTypes: Record<LinkRequestType, any> = t('home:actions', {
    returnObjects: true
  });

  const renderView = () => {
    if (isUserSet) {
      if (user.isGrtReviewer(groups, flags) || user.isTrbAdmin(groups, flags)) {
        return (
          <AdminHome
            isGrtReviewer={user.isGrtReviewer(groups, flags)}
            isTrbAdmin={user.isTrbAdmin(groups, flags)}
          />
        );
      }

      if (user.isAccessibilityTeam(groups, flags)) {
        return <List />;
      }

      if (user.isBasicUser(groups, flags)) {
        return (
          <div className="grid-container basic-user-home">
            <div className="grid-container margin-top-6">
              <Message />
            </div>

            <Grid tablet={{ col: 12 }} className="margin-bottom-4">
              <PageHeading className="margin-bottom-0">
                {t('home:title', {
                  user: name
                })}
              </PageHeading>

              <p className="line-height-body-5 font-body-lg text-light margin-bottom-5 margin-top-1">
                {t('home:subtitle')}
              </p>

              <Grid tablet={{ col: 12 }} className="margin-bottom-6">
                <h2 className="margin-bottom-0 margin-top-4">
                  {t('systemProfile:systemTable.mySystemsTitle')}
                </h2>

                <p className="line-height-body-5 margin-bottom-5">
                  {t('systemProfile:systemTable.mySystemsSubtitle')}
                </p>

                <SystemsListTable
                  systems={[]}
                  savedBookmarks={[]}
                  refetchBookmarks={() => null}
                  isMySystems
                />
              </Grid>

              <hr className="margin-bottom-3 margin-top-4" aria-hidden />

              <h2 className="margin-top-4">
                {t('home:requestsTable.heading')}
              </h2>

              <Grid row gap={2}>
                {[
                  { ITGov: requestTypes.ITGov },
                  ...(flags.technicalAssistance
                    ? [{ TRB: requestTypes.TRB }]
                    : [])
                ].map(requestType => (
                  <Grid tablet={{ col: 6 }} key={Object.keys(requestType)[0]}>
                    <LinkCard
                      className="margin-top-1"
                      type={Object.keys(requestType)[0] as LinkRequestType}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <h3 className="margin-top-4">{t('home:requestsTable.title')}</h3>
            <p className="margin-bottom-4">
              {t('home:requestsTable.subtitle')}
            </p>

            <Grid tablet={{ col: 12 }}>
              <Table defaultPageSize={10} />
            </Grid>
          </div>
        );
      }
    }
    return <WelcomePage />;
  };

  return <MainContent className="margin-bottom-5">{renderView()}</MainContent>;
};

export default withRouter(Home);
