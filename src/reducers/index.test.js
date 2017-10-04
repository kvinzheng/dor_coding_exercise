import appReducer from './index.js';

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
