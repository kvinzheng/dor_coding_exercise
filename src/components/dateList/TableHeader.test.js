import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TableHeader, mapStateToProps, mapDispatchToProps } from './TableHeader';

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
    const getAllDate = jest.fn();
    const wrapper = shallow(<TableHeader currentTime={'2017-09-09'} getAllDate={getAllDate} />);
    wrapper.find('#refresh').simulate('click', {
      preventDefault: () => {},
    });
    expect(getAllDate).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it('matDispatchtoProps', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('getAllDate');
  })
});
