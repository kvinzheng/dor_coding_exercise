import React from 'react';
import { shallow, mount } from 'enzyme';
import * as moment from 'moment';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware';
import { DateList, mapStateToProps, mapDispatchToProps } from './DateList';
import { getAllDate } from '../../actions';

const middlewares = [thunk, promise];
const mockStore = configureStore(middlewares);

describe('DateList Component', () => {
  it('should render without any props defined', () => {
    const component = shallow(<DateList />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with props passed in', () => {
    const component = shallow(
      <DateList
        in_counts={[
          {
            date: '2017-09-22'
          }, {
            date: '2017-09-20'
          }, {
            date: '2017-09-19'
          }
        ]}
        max={0}
        currentTime={'2017-09-09'}
        status={'FULFILLED'}
      />,
      );
    expect(toJson(component)).toMatchSnapshot();
  });

it('mapStateToProps', () => {
  const state = {
    dorData: {
      myData: {
        data: [
          {
            date: '2017-09-22'
          }, {
            date: '2017-09-20'
          }, {
            date: '2017-09-19'
          }
        ],
        status: 'FULFILLED'
      }
    },
    token: {
      myToken: 'abcedefgg',
      status: 'FULFILLED',
    },
    currentTime: {
      time: '2017-09-09'
    }
  };
  const expected = {
    in_counts: [
      {
        date: '2017-09-22'
      }, {
        date: '2017-09-20'
      }, {
        date: '2017-09-19'
      }
    ],
    max: -Infinity,
    currentTime: '2017-09-09',
    status: 'FULFILLED'
  };
  expect(mapStateToProps(state)).toEqual(expected);
});

  it('matDispatchtoProps', () =>{
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('getAllDate');
  })

  xit('Calls getAllDate on load', () => {
    let getAllDate = jest.fn();
    const component = mount(
      <DateList />
    )
    expect(getAllDate).toHaveBeenCalled();
  });
});
