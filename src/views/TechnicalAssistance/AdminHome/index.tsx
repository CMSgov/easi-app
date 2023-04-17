import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { Grid, GridContainer, IconArrowBack } from '@trussworks/react-uswds';
import classNames from 'classnames';
import { useFlags } from 'launchdarkly-react-client-sdk';

import PageLoading from 'components/PageLoading';
import cmsDivisionsAndOffices from 'constants/enums/cmsDivisionsAndOffices';
import useMessage from 'hooks/useMessage';
import useTRBAttendees from 'hooks/useTRBAttendees';
import { AppState } from 'reducers/rootReducer';
import { TrbAdminPath } from 'types/technicalAssistance';
import { formatDateLocal } from 'utils/date';
import user from 'utils/user';
import AccordionNavigation from 'views/GovernanceReviewTeam/AccordionNavigation';
import NotFound from 'views/NotFound';

import NoteBox from './components/NoteBox';
import Summary from './components/Summary';
import TrbAdminAction from './components/TrbAdminAction';
import { TRBRequestContext } from './RequestContext';
import trbAdminPages from './trbAdminPages';

import './index.scss';

type SideNavProps = {
  activePage: string;
  trbRequestId: string;
};

/** Side navigation */
const SideNavigation = ({
  /** Active page path */
  activePage,
  /** Request ID */
  trbRequestId
}: SideNavProps) => {
  const { t } = useTranslation('technicalAssistance');
  return (
    <nav>
      <ul className="trb-admin__nav-list usa-list usa-list--unstyled">
        <li className="trb-admin__view-all-link margin-bottom-4">
          <Link to="/">
            <IconArrowBack aria-hidden />
            {t('adminHome.backToRequests')}
          </Link>
        </li>
        {trbAdminPages.map(({ path, text, groupEnd }) => {
          return (
            <li
              key={text.title}
              className={classNames('trb-admin__nav-link', {
                'trb-admin__nav-link--active': path === activePage,
                'trb-admin__nav-link--border': groupEnd
              })}
            >
              <Link to={`/trb/${trbRequestId}/${path}`}>
                <span>{t(text.title)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

/** Wrapper for TRB admin view components */
export default function AdminHome() {
  const { t } = useTranslation();

  // Current user info from redux
  const { groups, isUserSet } = useSelector((state: AppState) => state.auth);

  const flags = useFlags();

  // Get url params
  const { id, activePage } = useParams<{
    id: string;
    activePage: string;
  }>();

  const trbContextData = useContext(TRBRequestContext);

  const { data, loading } = trbContextData;

  const trbRequest = data?.trbRequest;

  // Alert feedback from children
  const { message } = useMessage();

  // Get requester object from request attendees
  const {
    data: { requester, loading: requesterLoading }
  } = useTRBAttendees(id);

  /**
   * Requester name and cms office acronym
   */
  const requesterString = useMemo(() => {
    // If loading, return null
    if (requesterLoading) return null;

    // If requester component is not set, return name or EUA
    if (!requester.component)
      return requester?.userInfo?.commonName || requester?.userInfo?.euaUserId;

    /** Requester component */
    const requesterComponent = cmsDivisionsAndOffices.find(
      object => object.name === requester.component
    );

    // Return requester name and component acronym
    return `${requester?.userInfo?.commonName}, ${requesterComponent?.acronym}`;
  }, [requester, requesterLoading]);

  // Note count for NoteBox modal rendered on each page
  const noteCount: number = (data?.trbRequest?.adminNotes || []).length;

  // If TRB request is loading or user is not set, return page loading
  if (loading || !isUserSet) {
    return <PageLoading />;
  }

  // If TRB request does not exist or user is not TRB admin, return page not found
  if (!trbRequest || !user.isTrbAdmin(groups, flags)) {
    return <NotFound />;
  }

  const { status, state } = trbRequest;
  const submissionDate = formatDateLocal(trbRequest.createdAt, 'MMMM d, yyyy');

  return (
    <div id="trbAdminHome">
      {/* Request summary */}
      <Summary
        trbRequestId={id}
        name={trbRequest.name}
        requestType={trbRequest.type}
        createdAt={trbRequest.createdAt}
        state={trbRequest.state}
        taskStatuses={trbRequest.taskStatuses}
        trbLead={trbRequest.trbLead}
        requester={requester}
        requesterString={requesterString}
        submissionDate={submissionDate}
      />

      {/* Accordion navigation for tablet and mobile */}
      <AccordionNavigation
        activePage={activePage}
        subNavItems={trbAdminPages.map(({ path, text, groupEnd }) => ({
          text: text.title,
          route: `/trb/${id}/${path}`,
          groupEnd
        }))}
        defaultTitle="TRB Request"
      />

      <GridContainer>
        {message}
        <Grid row className="margin-top-5 grid-gap">
          {/* Side navigation */}
          <Grid
            col
            desktop={{ col: 3 }}
            className="display-none desktop:display-block"
          >
            <SideNavigation activePage={activePage} trbRequestId={id} />
          </Grid>

          {/* Page component */}
          <Grid col desktop={{ col: 9 }}>
            {trbAdminPages.map(subpage => (
              <Route
                exact
                path={`/trb/${id}/${subpage.path as string}`}
                key={subpage.path}
              >
                <Grid row gap="lg">
                  <Grid tablet={{ col: 8 }}>
                    <h1 className="margin-top-0 margin-bottom-4">
                      {t(subpage.text.title)}
                    </h1>
                    {subpage.text.description && (
                      <p>{t(subpage.text.description)}</p>
                    )}
                  </Grid>

                  {!['feedback', 'notes'].includes(subpage.path) && (
                    <Grid tablet={{ col: 4 }}>
                      <NoteBox trbRequestId={id} noteCount={noteCount} />
                    </Grid>
                  )}
                </Grid>

                <TrbAdminAction
                  trbRequestId={id}
                  activePage={activePage as TrbAdminPath}
                  status={status}
                  state={state}
                />

                <subpage.component
                  trbRequestId={id}
                  noteCount={noteCount}
                  requesterString={requesterString}
                  submissionDate={submissionDate}
                />
              </Route>
            ))}
          </Grid>
        </Grid>
      </GridContainer>
    </div>
  );
}
