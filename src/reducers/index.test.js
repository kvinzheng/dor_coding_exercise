import appReducer from './index.js';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions/index.js';

describe('Index Reducer Tests', () => {
  const base = {
    dorData: {},
    token: {},
    currentTime: {}
  }

  it('it expect to handle dorData', () => {
    expect(appReducer({}, {
      type: 'LOAD_ALL_DATA',
      payload: null,
    })).toEqual(Object.assign(base, {
      'dorData': {'myData': null, 'status': null},
      'token': {'myToken': null, 'status': null},
      'currentTime': {'time': null}
    }))
  });
});
