import currentTime from './currentTime';

describe('currentTime', function() {
  it('returns an empty string if passed in state that is undefined', function() {
    const nextState = currentTime(undefined, {});
    expect(nextState).toEqual({time: null});
  });

  it('returns the exact state given an unkown type (i.e., does not modify the state)', function() {
    const prevState = {
      time: null
    };

    const nextState = currentTime(prevState, {type: 'UNKNOWN'});
    expect(nextState).toBe(prevState);
  });

  it('return a new state with the specified time set on it', function() {
    const prevState = {
      time: null
    };
    const nextState = currentTime(prevState, {
      type: 'CURRENT_TIME',
      payload: "15:27:26"
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({time: "15:27:26"});
  })
})
