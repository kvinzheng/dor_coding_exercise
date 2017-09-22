import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(
  //     <App />, div
  // );
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
