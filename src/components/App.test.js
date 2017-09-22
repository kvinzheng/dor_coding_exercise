import React from 'react';
import ReactDOM from 'react-dom';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { App } from './App';

xit('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(
  //     <App />, div
  // );
  const component = shallow(<App />);
  expect(toJson(component)).toMatchSnapshot();
});
