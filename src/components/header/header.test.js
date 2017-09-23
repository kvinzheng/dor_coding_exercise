import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './header';

describe('Header Component', () => {
  it('Header Component Renders', () => {
    const component = shallow(<Header />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
