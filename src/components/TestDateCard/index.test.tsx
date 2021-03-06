import React from 'react';
import { shallow } from 'enzyme';
import { DateTime } from 'luxon';

import TestDateCard from 'components/TestDateCard';

describe('The Test Date Card component', () => {
  it('renders without crashing', () => {
    shallow(
      <TestDateCard
        date={DateTime.local().toISO()}
        type="INITIAL"
        testIndex={1}
        score={0}
      />
    );
  });

  describe('test score', () => {
    it('renders score', () => {
      const component = shallow(
        <TestDateCard
          date={DateTime.local().toISO()}
          type="INITIAL"
          testIndex={1}
          score={1000}
        />
      );
      expect(component.find('[data-testid="score"]').text()).toEqual('100.0%');
    });

    it('renders a score of 0', () => {
      const component = shallow(
        <TestDateCard
          date={DateTime.local().toISO()}
          type="INITIAL"
          testIndex={1}
          score={0}
        />
      );
      expect(component.find('[data-testid="score"]').text()).toEqual('0%');
    });

    it('renders score not added', () => {
      const component = shallow(
        <TestDateCard
          date={DateTime.local().toISO()}
          type="INITIAL"
          testIndex={1}
          score={null}
        />
      );
      expect(component.find('[data-testid="score"]').text()).toEqual(
        'Score not added'
      );
    });
  });
});
