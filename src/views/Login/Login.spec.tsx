import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';

describe('src/pages/Login/Login.tsx', () => {
  it('renders the Login page', () => {
    expect(shallow(<Login/>)).toMatchSnapshot();
  })
});