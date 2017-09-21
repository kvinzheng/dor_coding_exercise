import loadAllData from './dorData.js';

describe('loadAllData', function() {
  it('returns an empty object if passed in state that is undefined', function() {
    //not sure about this one, if i pass in undefined, by default it will grab the default state which is an empty {}
    const nextState = loadAllData(undefined, {type: 'UNKNOWN'});
    expect(nextState).toEqual({});
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', function() {
    const prevState = {};
    //it will return the default state
    const nextState = loadAllData(prevState, {type: 'UNKNOWN'});
    expect(nextState).toBe(prevState);
  });

  it('returns a new state with the specific array on it', function() {
    const prevState = {};
    //these data isn't 100% the same, just for the purpose of testing
    const nextState = loadAllData(prevState, {
      type: 'LOAD_ALL_DATA_FULFILLED',
      'payload': {
        data: {
          'data': [ {'id': 1}, {'id': 2}, {'id': 3 }],
          'meta': {
            'start_date': '2017-9-07',
            'end_date': '2017-9-21'
          }
        }
      }
    });
    //expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({
      'data': [ {'id': 1}, {'id': 2}, {'id': 3} ],
      'meta': {
        'start_date': '2017-9-07',
        'end_date': '2017-9-21'
      }
    })
  });
});
