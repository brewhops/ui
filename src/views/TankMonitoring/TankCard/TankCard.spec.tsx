import React from 'react';
import TankCard from './TankCard';
import { shallow } from 'enzyme';

describe('src/pages/TankMonitoring/TankCard/TankCard.tsx', () => {
  it('renders a tank card', () => {
    expect(shallow(<TankCard/>)).toMatchSnapshot();
  })
});