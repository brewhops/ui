import React from 'react';
import { Admin } from '../Admin';
import { shallow } from 'enzyme';

describe('src/pages/Admin/index.tsx', () => {
  it('renders the Admin page', () => {
    expect(shallow(<Admin/>)).toMatchSnapshot();
  })
});