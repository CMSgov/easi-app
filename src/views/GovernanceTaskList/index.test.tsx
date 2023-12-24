import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within
} from '@testing-library/react';
import i18next from 'i18next';

import { taskListState } from 'data/mock/govTaskList';
import {
  getGovernanceTaskListQuery,
  systemIntake
} from 'data/mock/systemIntake';
import { MessageProvider } from 'hooks/useMessage';
import { SystemIntakeState } from 'types/graphql-global-types';
import easiMockStore from 'utils/testing/easiMockStore';
import { getByRoleWithNameTextKey } from 'utils/testing/helpers';
import VerboseMockedProvider from 'utils/testing/VerboseMockedProvider';

import GovernanceTaskList from '.';

describe('Governance Task List', () => {
  const { id } = systemIntake;

  const store = easiMockStore();

  it('renders a request task list at the initial state', async () => {
    render(
      <MemoryRouter initialEntries={[`/governance-task-list/${id}`]}>
        <VerboseMockedProvider
          mocks={[
            getGovernanceTaskListQuery(
              taskListState.intakeFormNotStarted.systemIntake
            )
          ]}
        >
          <Provider store={store}>
            <MessageProvider>
              <Route path="/governance-task-list/:systemId">
                <GovernanceTaskList />
              </Route>
            </MessageProvider>
          </Provider>
        </VerboseMockedProvider>
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId('page-loading'));

    // Header
    screen.getByRole('heading', {
      level: 1,
      name: i18next.t<string>('itGov:taskList.heading')
    });

    // Crumb back to it gov home
    expect(
      getByRoleWithNameTextKey('link', 'itGov:itGovernance')
    ).toHaveAttribute('href', '/system/making-a-request');

    // Sidebar back to home
    expect(
      getByRoleWithNameTextKey('link', 'itGov:button.saveAndExit')
    ).toHaveAttribute('href', '/system/making-a-request');

    // First task list item
    screen.getByRole('heading', {
      level: 3,
      name: i18next.t<string>('itGov:taskList.step.intakeForm.title')
    });
  });

  it('renders closed state - no decision', async () => {
    render(
      <MemoryRouter initialEntries={[`/governance-task-list/${id}`]}>
        <VerboseMockedProvider
          mocks={[
            getGovernanceTaskListQuery({
              ...taskListState.bizCaseDraftNotStarted.systemIntake,
              state: SystemIntakeState.CLOSED
            })
          ]}
        >
          <Provider store={store}>
            <MessageProvider>
              <Route path="/governance-task-list/:systemId">
                <GovernanceTaskList />
              </Route>
            </MessageProvider>
          </Provider>
        </VerboseMockedProvider>
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId('page-loading'));

    // Closed alert should render
    expect(screen.getByTestId('closed-alert')).toBeInTheDocument();

    const draftBusinessCaseStep = screen.getByTestId(
      'prepare-a-draft-business-case'
    );

    // Start button should be disabled
    expect(
      within(draftBusinessCaseStep).getByRole('button', { name: 'Start' })
    ).toBeDisabled();

    // Status tag should be gray
    expect(
      within(draftBusinessCaseStep).getByTestId('task-list-task-tag')
    ).toHaveClass('bg-base-light');
  });

  it('renders closed state - decision issued', async () => {
    render(
      <MemoryRouter initialEntries={[`/governance-task-list/${id}`]}>
        <VerboseMockedProvider
          mocks={[
            getGovernanceTaskListQuery(
              taskListState.decisionAndNextStepsDone.systemIntake
            )
          ]}
        >
          <Provider store={store}>
            <MessageProvider>
              <Route path="/governance-task-list/:systemId">
                <GovernanceTaskList />
              </Route>
            </MessageProvider>
          </Provider>
        </VerboseMockedProvider>
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId('page-loading'));

    // Decision alert should render
    expect(screen.getByTestId('decision-alert')).toBeInTheDocument();

    // If decision has been made, closed alert should not be displayed
    expect(screen.queryByTestId('closed-alert')).toBeNull();
  });
});
