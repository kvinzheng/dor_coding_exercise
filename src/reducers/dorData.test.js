import loadAllData from './dorData';

describe('loadAllData', function () {
  it('returns an empty object if passed in state that is undefined', function() {
    const nextState = loadAllData(undefined, {});
    expect(nextState).toEqual({ myData: null, status:null});
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', function() {
    const prevState = { myData: null, status:null};

    const nextState = loadAllData(prevState, {type: 'UNKNOWN'});
    expect(nextState).toBe(prevState);
  });

  it('returns a new state with the specific array on it', function() {
    const prevState = {};
    const nextState = loadAllData(prevState, {
      type: 'LOAD_ALL_DATA_FULFILLED',
      payload: {
        data: {
          data: [{ id: 1 }, { id: 2 }, { id: 3 }],
          meta: { start_date: '2017-9-07', end_date: '2017-9-21' }
        },
      },
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({
      myData: {
        data: [
          { id: 1 }, { id: 2 }, { id: 3 }],
        meta: { start_date: '2017-9-07', end_date: '2017-9-21' }
      },
      status: 'FULFILLED'
    });
  });
});
