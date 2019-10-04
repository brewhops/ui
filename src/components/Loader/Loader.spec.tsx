import React from 'react';
import { Loader } from './Loader';
import { shallow } from 'enzyme';

describe('src/components/Loader.tsx', () => {
  it('renders the loader', () => {
    expect(shallow(<Loader/>)).toMatchSnapshot();
  })
});