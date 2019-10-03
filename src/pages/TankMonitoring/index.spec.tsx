import React from 'react';
import { TankMonitoring } from '.';
import { shallow } from 'enzyme';

describe('src/pages/TankMonitoring/index.tsx', () => {
  it('renders the Tank Monitoring page', () => {
    expect(shallow(<TankMonitoring/>)).toMatchSnapshot();
  })
});