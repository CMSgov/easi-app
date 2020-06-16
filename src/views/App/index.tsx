import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { SecureRoute, LoginCallback } from '@okta/okta-react';
import AuthenticationWrapper from 'views/AuthenticationWrapper';
import Home from 'views/Home';
import Login from 'views/Login';
import BusinessCase from 'views/BusinessCase';
import GRTSystemIntakeReview from 'views/GRTSystemIntakeReview';
import GrtBusinessCaseReview from 'views/GrtBusinessCaseReview';
import SystemIntake from 'views/SystemIntake';
import Sandbox from 'views/Sandbox';
import TimeOutWrapper from 'views/TimeOutWrapper';

import './index.scss';
import GovernanceOverview from 'views/GovernanceOverview';

type MainState = {};

type MainProps = {};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component<MainProps, MainState> {
  handleSkipNav = () => {
    const mainContent = document.getElementById('main-content')!;
    if (mainContent) {
      mainContent.focus();
    }
  };

  render() {
    return (
      <div>
        <div className="usa-overlay" />
        <button type="button" className="skipnav" onClick={this.handleSkipNav}>
          Skip to main content
        </button>
        <BrowserRouter>
          <AuthenticationWrapper>
            <TimeOutWrapper>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                {process.env.NODE_ENV === 'development' && (
                  <Route path="/sandbox" exact component={Sandbox} />
                )}
                <Route
                  path="/governance-overview"
                  exact
                  component={GovernanceOverview}
                />
                <SecureRoute
                  exact
                  path="/system/:systemId/grt-review"
                  render={({ component }: any) => component()}
                  component={GRTSystemIntakeReview}
                />
                <Redirect
                  exact
                  from="/system/:systemId"
                  to="/system/:systemId/contact-details"
                />
                <SecureRoute
                  path="/system/:systemId/:formPage"
                  render={({ component }: any) => component()}
                  component={SystemIntake}
                />
                {/* <SecureRoute
                  path="/system/all"
                  exact
                  component={SystemProfiles}
                /> */}
                {/* <SecureRoute
                  path="/system/:profileId"
                  component={SystemProfile}
                /> */}
                <SecureRoute
                  path="/business/:businessCaseId/grt-review"
                  component={GrtBusinessCaseReview}
                />
                <Redirect
                  exact
                  from="/business/:businessCaseId"
                  to="/business/:businessCaseId/general-project-info"
                />
                <SecureRoute
                  path="/business/:businessCaseId/:formPage"
                  render={({ component }: any) => component()}
                  component={BusinessCase}
                />
                <Route path="/implicit/callback" component={LoginCallback} />
              </Switch>
            </TimeOutWrapper>
          </AuthenticationWrapper>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
