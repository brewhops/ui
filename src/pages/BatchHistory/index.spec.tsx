import React from 'react';
import { BatchHistory } from '.';
import { shallow } from 'enzyme';

describe('src/pages/BatchHistory/index.tsx', () => {
  it('renders the Batch History page', () => {
    expect(shallow(<BatchHistory/>)).toMatchSnapshot();
  })
});