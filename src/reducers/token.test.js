import token from './token.js';

describe('token', function() {
  it('returns an empty string if passed in state that is undefined', function() {

    const nextState = token(undefined, {});
    expect(nextState).toEqual({myToken: null, status: null});
  });

  it('returns the exact state given an unkown type (i.e., does not modify the state)', function() {
    const prevState = {
      myToken: null,
      status: null
    };

    const nextState = token(prevState, {type: 'UNKNOWN'});
    expect(nextState).toBe(prevState);
  })

  it('returns a new state with the specified token set on it', function() {
    const prevState = {
      myToken: null,
      status: null
    };
    const nextState = token(prevState, {
      type: 'RETRIEVE_FULFILLED',
      payload: {
        data: {
          data: {
            token: 'abcdefg'
          }
        }
      }
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({myToken: 'abcdefg', status: 'FULFILLED'})
  })
})
