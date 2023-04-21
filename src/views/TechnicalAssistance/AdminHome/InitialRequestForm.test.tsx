import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import i18next from 'i18next';

import {
  getTrbAdminNotesQuery,
  getTRBRequestAttendeesQuery,
  getTrbRequestQuery,
  getTrbRequestSummaryQuery
} from 'data/mock/trbRequest';
import GetTrbRequestDocumentsQuery from 'queries/GetTrbRequestDocumentsQuery';
import {
  GetTrbRequestDocuments,
  GetTrbRequestDocumentsVariables
} from 'queries/types/GetTrbRequestDocuments';
import { MockedQuery } from 'types/util';
import mockUserAuth from 'utils/testing/easiMockStore';
import { mockTrbRequestId } from 'utils/testing/MockTrbAttendees';
import VerboseMockedProvider from 'utils/testing/VerboseMockedProvider';

import InitialRequestForm from './InitialRequestForm';
import TRBRequestInfoWrapper from './RequestContext';

const getTrbRequestDocumentsQuery: MockedQuery<
  GetTrbRequestDocuments,
  GetTrbRequestDocumentsVariables
> = {
  request: {
    query: GetTrbRequestDocumentsQuery,
    variables: { id: mockTrbRequestId }
  },
  result: {
    data: {
      trbRequest: {
        __typename: 'TRBRequest',
        id: mockTrbRequestId,
        documents: []
      }
    }
  }
};

describe('Trb Admin Initial Request Form', () => {
  it.only('renders', async () => {
    const store = mockUserAuth();
    const { getByText, queryByText, queryAllByText, findByText } = render(
      <VerboseMockedProvider
        defaultOptions={{
          watchQuery: { fetchPolicy: 'no-cache' },
          query: { fetchPolicy: 'no-cache' }
        }}
        mocks={[
          getTrbRequestQuery,
          getTrbRequestSummaryQuery,
          getTRBRequestAttendeesQuery,
          getTrbRequestDocumentsQuery,
          getTrbAdminNotesQuery
        ]}
      >
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/trb/${mockTrbRequestId}/initial-request-form`]}
          >
            <TRBRequestInfoWrapper>
              <Route exact path="/trb/:id/:activePage">
                <InitialRequestForm
                  trbRequestId={mockTrbRequestId}
                  noteCount={0}
                />
              </Route>
            </TRBRequestInfoWrapper>
          </MemoryRouter>
        </Provider>
      </VerboseMockedProvider>
    );

    // Loaded okay
    await findByText(
      i18next.t<string>(
        'technicalAssistance:adminHome.subnav.initialRequestForm'
      )
    );

    // Task status tag rendered from query data
    await findByText(i18next.t<string>('taskList:taskStatus.IN_PROGRESS'));

    // Admin description text of request form steps, up to Documents
    for (let stepIdx = 0; stepIdx <= 3; stepIdx += 1) {
      getByText(
        i18next.t<string>(
          `technicalAssistance:requestForm.steps.${stepIdx}.adminDescription`
        )
      );
    }

    // Shouldn't show edit section option
    expect(
      queryAllByText(i18next.t<string>('technicalAssistance:check.edit'))
    ).toHaveLength(0);

    // Shouldn't show request header info
    expect(
      queryByText(
        i18next.t<string>('technicalAssistance:table.header.submissionDate')
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(i18next.t<string>('technicalAssistance:check.requestType'))
    ).not.toBeInTheDocument();

    // Empty documents table loaded
    await findByText(
      i18next.t<string>('technicalAssistance:documents.table.noDocument')
    );
  });
});
