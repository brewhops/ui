import React from 'react';
import TankMonitoring from './TankMonitoring';
import { shallow } from 'enzyme';

describe('src/pages/TankMonitoring/TankMonitoring.tsx', () => {
  it('renders the Tank Monitoring page', () => {
    expect(shallow(<TankMonitoring/>)).toMatchSnapshot();
  })
});