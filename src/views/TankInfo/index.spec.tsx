import React from 'react';
import { TankInfo } from '../TankInfo';
import { shallow } from 'enzyme';

describe('src/pages/TankInfo/index.tsx', () => {
  it('renders the Tank Info page', () => {
    expect(shallow(<TankInfo/>)).toMatchSnapshot();
  })
});