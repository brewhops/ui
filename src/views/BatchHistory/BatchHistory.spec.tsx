import React from 'react';
import { BatchHistory } from './BatchHistory';
import { shallow } from 'enzyme';

describe('src/pages/BatchHistory/BatchHistory.tsx', () => {
  it('renders the Batch History page', () => {
    expect(shallow(<BatchHistory/>)).toMatchSnapshot();
  })
});