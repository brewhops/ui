import React from 'react';
import TankCardDisplay from './TankCardDisplay';
import { shallow } from 'enzyme';

describe('src/pages/TankMonitoring/TankCardDisplay/TankCardDisplay.tsx', () => {
  it('renders the tank card display', () => {
    expect(shallow(<TankCardDisplay/>)).toMatchSnapshot();
  })
});