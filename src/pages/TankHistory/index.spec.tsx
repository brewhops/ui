import React from 'react';
import { TankHistory } from '.';
import { shallow } from 'enzyme';

describe('src/pages/TankHistory/index.tsx', () => {
  it('renders the Tank History page', () => {
    expect(shallow(<TankHistory/>)).toMatchSnapshot();
  })
});