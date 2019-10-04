import React from 'react';
import BulkCsvEntry from './BulkCsvEntry';
import { shallow } from 'enzyme';

describe('src/pages/TankMonitoring/BulkCsvEntry/BulkCsvEntry.tsx', () => {
  it('renders the BulkCsvEntry component', () => {
    expect(shallow(<BulkCsvEntry/>)).toMatchSnapshot();
  })
});