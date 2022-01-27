import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureMockStore from 'redux-mock-store';

import {
  businessCaseInitialData,
  defaultProposedSolution
} from 'data/businessCase';
import BusinessCase from 'views/BusinessCase';

window.matchMedia = (): any => ({
  addListener: () => {},
  removeListener: () => {}
});

window.scrollTo = jest.fn();

const renderPage = (store: any) =>
  render(
    <MemoryRouter
      initialEntries={[
        '/business/75746af8-9a9b-4558-a375-cf9848eb2b0d/alternative-solution-a'
      ]}
    >
      <Provider store={store}>
        <MockedProvider>
          <Route
            path="/business/:businessCaseId/:formPage"
            component={BusinessCase}
          />
        </MockedProvider>
      </Provider>
    </MemoryRouter>
  );

describe('Business case alternative a solution', () => {
  const mockStore = configureMockStore();
  const defaultStore = mockStore({
    auth: {
      euaId: 'AAAA'
    },
    businessCase: {
      form: {
        ...businessCaseInitialData,
        id: '75746af8-9a9b-4558-a375-cf9848eb2b0d'
      },
      isLoading: false,
      isSaving: false,
      error: null
    },
    action: {
      isPosting: false,
      error: null,
      actions: []
    }
  });

  it('renders without errors', async () => {
    renderPage(defaultStore);

    expect(screen.getByTestId('alternative-solution-a')).toBeInTheDocument();
  });

  it('navigates back a page', async () => {
    renderPage(defaultStore);

    screen.getByRole('button', { name: /back/i }).click();

    expect(screen.getByTestId('preferred-solution')).toBeInTheDocument();
  });

  it('adds alternative b and navigates to it', async () => {
    renderPage(defaultStore);

    screen.getByRole('button', { name: /alternative b/i }).click();

    expect(screen.getByTestId('alternative-solution-b')).toBeInTheDocument();
  });

  it('navigates forward to review', async () => {
    renderPage(defaultStore);

    screen.getByRole('button', { name: /next/i }).click();

    expect(screen.getByTestId('business-case-review')).toBeInTheDocument();
  });

  describe('with alternative b', () => {
    const withAlternativeBStore = mockStore({
      auth: {
        euaId: 'AAAA'
      },
      businessCase: {
        form: {
          ...businessCaseInitialData,
          id: '75746af8-9a9b-4558-a375-cf9848eb2b0d',
          alternativeB: {
            ...defaultProposedSolution,
            title: 'Alt B'
          }
        },
        isLoading: false,
        isSaving: false,
        error: null
      },
      action: {
        isPosting: false,
        error: null,
        actions: []
      }
    });

    it('hides adding alternative b when it exists already', async () => {
      renderPage(withAlternativeBStore);

      expect(
        screen.queryByRole('button', { name: /alternative b/i })
      ).not.toBeInTheDocument();
    });

    it('navigates forward to alternative b', async () => {
      renderPage(withAlternativeBStore);

      screen.getByRole('button', { name: /next/i }).click();

      expect(screen.getByTestId('alternative-solution-b')).toBeInTheDocument();
    });
  });

  describe('BIZ_CASE_FINAL_NEEDED', () => {
    const bizCaseFinalStore = mockStore({
      auth: {
        euaId: 'AAAA'
      },
      businessCase: {
        form: {
          ...businessCaseInitialData,
          id: '75746af8-9a9b-4558-a375-cf9848eb2b0d',
          systemIntakeStatus: 'BIZ_CASE_FINAL_NEEDED'
        },
        isLoading: false,
        isSaving: false,
        error: null
      },
      action: {
        isPosting: false,
        error: null,
        actions: []
      }
    });

    it('renders validation errors', async () => {
      renderPage(bizCaseFinalStore);

      // Fill one field so we can trigger validation errors
      const titleField = screen.getByRole('textbox', {
        name: /title/i
      });
      userEvent.type(titleField, 'Alternative A solution title');
      expect(titleField).toHaveValue('Alternative A solution title');

      screen.getByRole('button', { name: /next/i }).click();
      expect(
        await screen.findByTestId('formik-validation-errors')
      ).toBeInTheDocument();
    });
  });
});
