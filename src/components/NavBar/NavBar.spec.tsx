import React from 'react';
import { NavBar } from './NavBar';
import { shallow } from 'enzyme';

describe('src/components/NavBar.tsx', () => {
  it('renders the nav bar', () => {
    expect(shallow(<NavBar/>)).toMatchSnapshot();
  })
});