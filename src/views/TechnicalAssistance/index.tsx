import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { GridContainer } from '@trussworks/react-uswds';

import MainContent from 'components/MainContent';
import { NotFoundPartial } from 'views/NotFound';

import AddNote from './AdminHome/AddNote';
import Consult from './AdminHome/Consult';
import RequestEdits from './AdminHome/RequestEdits';
import DocumentUpload from './RequestForm/DocumentUpload';
import AdminHome from './AdminHome';
import AdviceLetterForm from './AdviceLetterForm';
import Homepage from './Homepage';
import ProcessFlow from './ProcessFlow';
import RequestForm from './RequestForm';
import RequestType from './RequestType';
import TaskList from './TaskList';
import TRBDocuments from './TrbDocuments';

import './index.scss';

function TechnicalAssistance() {
  const { path } = useRouteMatch();

  const [requestName, setRequestName] = useState<string>('');

  return (
    <MainContent className="technical-assistance margin-bottom-5 desktop:margin-bottom-10">
      <Switch>
        <Route exact path={path}>
          <Homepage />
        </Route>

        {/*
          Starting a New Request begins with selecting a Request Type.
          Existing Requests can update their request type.
        */}
        <Route exact path={[`${path}/start`, `${path}/type/:id?`]}>
          <RequestType />
        </Route>

        {/* Process flow shows info before proceeding to create new request */}
        <Route exact path={`${path}/process`}>
          <ProcessFlow />
        </Route>

        {/* Task list after request steps are completed */}
        <Route exact path={`${path}/task-list/:id`}>
          <TaskList />
        </Route>

        {/* Documents table requester view from task list - prepare for TRB meeting */}
        <Route exact path={`${path}/task-list/:id/documents`}>
          <TRBDocuments />
        </Route>

        {/* Documents upload requester view from task list - prepare for TRB meeting */}
        <Route exact path={`${path}/task-list/:id/documents/upload`}>
          <DocumentUpload />
        </Route>

        {/* Create new or edit exisiting request */}
        <Route exact path={`${path}/requests/:id/:step?/:view?`}>
          <RequestForm />
        </Route>

        <Route path={`${path}/:id/advice/:formStep/:subpage?`}>
          <AdviceLetterForm />
        </Route>

        {/* Admin view */}
        <Route exact path={`${path}/:id/:activePage`}>
          <AdminHome setRequestName={setRequestName} />
        </Route>

        {/* Admin request form actions */}
        <Route
          exact
          path={`${path}/:id/:activePage/:action(request-edits|ready-for-consult)`}
        >
          <RequestEdits />
        </Route>
        <Route exact path={`${path}/:id/:activePage/:action(schedule-consult)`}>
          <Consult />
        </Route>

        <Route exact path={`${path}/:id/:activePage/add-note`}>
          <AddNote requestName={requestName} />
        </Route>

        <Route path="*">
          <GridContainer className="width-full">
            <NotFoundPartial />
          </GridContainer>
        </Route>
      </Switch>
    </MainContent>
  );
}

export default TechnicalAssistance;
