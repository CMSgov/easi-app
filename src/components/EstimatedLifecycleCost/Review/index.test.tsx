import React from 'react';
import { mount, shallow } from 'enzyme';

import { defaultEstimatedLifecycle } from 'data/businessCase';
import { LifecycleCosts } from 'types/estimatedLifecycle';

import EstimatedLifecycleCostReview from './index';

// Get past TS errors
declare const global: any;

describe('The Estimated Lifecycle Cost review component', () => {
  const sampleData: LifecycleCosts = {
    development: {
      label: 'Development',
      type: 'primary',
      isPresent: true,
      years: {
        year1: '5000',
        year2: '5000',
        year3: '5000',
        year4: '5000',
        year5: '5000'
      }
    },
    operationsMaintenance: {
      label: 'Operations and Maintenance',
      type: 'primary',
      isPresent: true,
      years: {
        year1: '5000',
        year2: '5000',
        year3: '5000',
        year4: '5000',
        year5: '5000'
      }
    },
    helpDesk: {
      label: 'Help desk/call center',
      type: 'related',
      isPresent: false,
      years: {
        year1: '',
        year2: '',
        year3: '',
        year4: '',
        year5: ''
      }
    },
    software: {
      label: 'Software licenses',
      type: 'related',
      isPresent: false,
      years: {
        year1: '',
        year2: '',
        year3: '',
        year4: '',
        year5: ''
      }
    },
    planning: {
      label: 'Planning, support, and professional services',
      type: 'related',
      isPresent: false,
      years: {
        year1: '',
        year2: '',
        year3: '',
        year4: '',
        year5: ''
      }
    },
    infrastructure: {
      label: 'Infrastructure',
      type: 'related',
      isPresent: true,
      years: {
        year1: '5000',
        year2: '5000',
        year3: '5000',
        year4: '5000',
        year5: '5000'
      }
    },
    oit: {
      label: 'OIT services, tools, and pilots',
      type: 'related',
      isPresent: false,
      years: {
        year1: '',
        year2: '',
        year3: '',
        year4: '',
        year5: ''
      }
    },
    other: {
      label: 'Other services, tools, and pilots',
      type: 'related',
      isPresent: false,
      years: {
        year1: '',
        year2: '',
        year3: '',
        year4: '',
        year5: ''
      }
    }
  };

  it('renders without crashing', () => {
    shallow(
      <EstimatedLifecycleCostReview
        fiscalYear={2021}
        data={defaultEstimatedLifecycle}
      />
    );
  });

  describe('Desktop', () => {
    beforeEach(() => {
      global.matchMedia = (media: string) => ({
        addListener: () => {},
        removeListener: () => {},
        matches: media === '(min-width: 769px)'
      });
    });

    it('renders the desktop view', () => {
      const component = mount(
        <EstimatedLifecycleCostReview
          fiscalYear={2021}
          data={defaultEstimatedLifecycle}
        />
      );

      expect(
        component.find("[data-testid='est-lifecycle--desktop']").exists()
      ).toBe(true);
      expect(
        component.find("[data-testid='est-lifecycle--mobile']").exists()
      ).toBe(false);
    });

    it('adds up development total correctly', () => {
      const component = mount(
        <EstimatedLifecycleCostReview fiscalYear={2021} data={sampleData} />
      );

      expect(
        component.find("[data-testid='total-development-costs']").text()
      ).toEqual('$25,000');
    });
  });

  describe('Mobile/Tablet', () => {
    beforeEach(() => {
      global.matchMedia = (media: string) => ({
        addListener: () => {},
        removeListener: () => {},
        matches: media === '(max-width: 768px)'
      });
    });

    it('renders the mobile view', () => {
      const component = mount(
        <EstimatedLifecycleCostReview
          fiscalYear={2021}
          data={defaultEstimatedLifecycle}
        />
      );
      expect(
        component.find("[data-testid='est-lifecycle--mobile']").exists()
      ).toBe(true);
      expect(
        component.find("[data-testid='est-lifecycle--desktop']").exists()
      ).toBe(false);
    });

    it('renders mobile view with development data', () => {
      mount(
        <EstimatedLifecycleCostReview fiscalYear={2021} data={sampleData} />
      );
    });

    it('renders mobile view with O&M data', () => {
      mount(
        <EstimatedLifecycleCostReview fiscalYear={2021} data={sampleData} />
      );
    });

    it('renders mobile view with Other data', () => {
      mount(
        <EstimatedLifecycleCostReview fiscalYear={2021} data={sampleData} />
      );
    });
  });
});
