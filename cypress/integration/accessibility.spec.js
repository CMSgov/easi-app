import { formatDate } from '../../src/utils/date';

describe('Accessibility Requests', () => {
  function create508Request(cy) {
    cy.visit('/508/requests/new');
    cy.contains('h1', 'Request 508 testing');
    cy.contains('label', "Choose the application you'd like to test");
    cy.get('#508Request-IntakeId')
      .type('TACO - 000000{enter}')
      .should('have.value', 'TACO - 000000');
    cy.contains('button', 'Send 508 testing request').click();
    cy.location().should(loc => {
      expect(loc.pathname).to.match(/\/508\/requests\/.{36}/);
    });
    cy.contains('li', 'Home');
    cy.contains('li', 'TACO');
    cy.contains(
      '.usa-alert--success',
      '508 testing request created. We have sent you a confirmation email.'
    );
    cy.contains('h1', 'TACO');
    cy.contains('h2', 'Next step: Provide your documents');
    cy.contains('.usa-button', 'Upload a document');
  }

  function addAndRemoveDocument(cy) {
    cy.get('[data-testid="upload-new-document"]').click();
    cy.contains('h1', 'Upload a document to');

    // select document
    cy.fixture('test.pdf').as('document');
    cy.get('[data-testid="file-upload-input"]').then(function (el) {
      const blob = Cypress.Blob.base64StringToBlob(
        this.document,
        'application/pdf'
      );

      const file = new File([blob], 'document.pdf', {
        type: 'application/pdf'
      });
      const list = new DataTransfer();

      list.items.add(file);
      const myFileList = list.files;

      el[0].files = myFileList;
      el[0].dispatchEvent(new Event('change', { bubbles: true }));
    });

    // enter the document type
    cy.contains('.usa-radio', 'Awarded VPAT')
      .find('input')
      .check({ force: true });

    // click upload button
    cy.get('[data-testid="upload-document"]').click();

    cy.contains('.usa-alert', 'document.pdf uploaded to');
    // verify that the document is in the list

    cy.get('[data-testid="accessibility-documents-list"] tbody tr')
      .should('have.length', 1)
      .first()
      .within(() => {
        cy.contains('Awarded VPAT');
        cy.contains('Virus scan in progress...');
      });

    // view document
    // remove document
  }

  it('can create a request and see its details', () => {
    cy.localLogin({ name: 'A11Y' });
    create508Request(cy);

    cy.get('.accessibility-request__side-nav').within(() => {
      cy.contains('h2', 'Test Dates and Scores');
      cy.get('.accessibility-request__other-details').within(() => {
        cy.contains('dt', 'Submission date');
        const dateString = formatDate(new Date().toISOString());
        cy.contains('dl', dateString);

        cy.contains('dt', 'Business Owner');
        cy.contains('dl', 'Shane Clark, OIT');

        cy.contains('dt', 'Project name');
        cy.contains('dl', 'TACO');

        cy.contains('dt', 'Lifecycle ID');
        cy.contains('dl', '000000');
      });

      cy.contains('a', '508 testing templates (opens in a new tab)');
      cy.contains('a', 'Steps involved in 508 testing (opens in a new tab)');
      cy.contains('button', 'Remove this request from EASi');
    });
  });

  it('adds a document from a 508 request as the owner', () => {
    cy.localLogin({ name: 'CMSU' });
    create508Request(cy);
    addAndRemoveDocument(cy);
  });

  it('adds and removes a document from a 508 request as an admin', () => {
    cy.localLogin({ name: 'CMSU' });
    create508Request(cy);

    cy.url().then(requestPageUrl => {
      cy.logout();

      cy.localLogin({ name: 'ADMN', role: 'EASI_D_508_USER' });
      cy.visit(requestPageUrl);
    });

    addAndRemoveDocument(cy);
  });

  it('sees information for an existing request on the homepage', () => {
    cy.localLogin({ name: 'A11Y' });
    cy.visit('/');
    cy.contains('h1', 'Welcome to EASi');
    cy.contains('h2', 'My governance requests');
    cy.get('table').within(() => {
      cy.get('thead').within(() => {
        cy.contains('th', 'Request name');
        cy.contains('th', 'Governance');
        cy.contains('th', 'Submission date');
        cy.contains('th', 'Status');
      });

      cy.get('tbody').within(() => {
        cy.contains('th', 'TACO');
        const dateString = formatDate(new Date().toISOString());
        cy.contains('td', 'Section 508');
        cy.contains('td', dateString);
        cy.contains('td', 'Open');
      });
    });
  });

  it('can remove a request', () => {
    cy.localLogin({ name: 'A11Y' });
    cy.visit('/');
    cy.contains('a', 'TACO').click();
    cy.contains('button', 'Remove this request from EASi').click();
    cy.contains('h2', 'Confirm you want to remove TACO');
    cy.contains('button', 'Keep request').click();
    cy.contains('Confirm you want to remove TACO').should('not.exist');

    cy.contains('button', 'Remove this request from EASi').click();
    cy.contains('h2', 'Confirm you want to remove TACO');
    cy.contains(
      'span',
      'You will not be able to access this request and its documents after it is removed.'
    );
    cy.get('form').within(() => {
      cy.contains('legend', 'Reason for removal');
      cy.contains(
        '.usa-radio',
        'Incorrect application and Lifecycle ID selected'
      );
      cy.contains('.usa-radio', 'No testing needed');
      cy.contains('.usa-radio', 'Other').click();
      cy.contains('button', 'Remove request').click();
    });
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/');
    });
    cy.contains('.usa-alert--success', 'TACO successfully removed');
    cy.contains('Requests will display in a table once you add them');
    cy.get('table').should('not.exist');
  });

  it('can add a note and view it as a 508 user', () => {
    cy.localLogin({ name: 'BOWN' });
    create508Request(cy);

    cy.url().then(requestPageUrl => {
      cy.logout();

      cy.localLogin({ name: 'ADMI', role: 'EASI_D_508_USER' });
      cy.visit(requestPageUrl);
    });

    cy.contains('button', 'Notes').click();
    cy.get('#CreateAccessibilityRequestNote-NoteText').type(
      'This is a really great note'
    );
    cy.contains('button', 'Add note').click();
    cy.get('.easi-notes__list li p')
      .should('have.length', 1)
      .first()
      .within(() => {
        cy.contains('This is a really great note');
      });
  });
});
