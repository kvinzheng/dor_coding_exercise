import React from 'react';
import { TableHeader, mapStateToProps, mapDispatchToProps } from './TableHeader';
import { shallow } from 'enzyme';
import appReducer from '../../reducers/index';
import toJson from 'enzyme-to-json'
import { getAllDate } from '../../actions';

describe('TableHeader Component', () => {

  it('should render without any props defined', () => {
    const component = shallow(
      <TableHeader />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with props passed in', () => {
    const component = shallow(
      <TableHeader currentTime={'2017-09-09'} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('mapStateToProps', () => {
    const state = { currentTime: { time: '12-50-42' } };
    const expected = { currentTime: '12-50-42' };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('simulate refresh clicked', () => {
    const wrapper = shallow(
      <TableHeader currentTime={'2017-09-09'}/>
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.find('#refresh-wrapper').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  it('matDispatchtoProps', () =>{
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('getAllDate');
  })
});
