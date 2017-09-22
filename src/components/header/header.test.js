import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Header Component', () => {
  it('Header Component Renders', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
