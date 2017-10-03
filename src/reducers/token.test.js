import token from './token';

describe('token', function () {
  it('returns the default state if passed in state that is undefined', function () {
    const nextState = token(undefined, {});
    expect(nextState).toEqual({ myToken: null, status: null });
  });

  it('returns the exact state given an unkown type (i.e., does not modify the state)', function () {
    const prevState = {
      myToken: null,
      status: null,
    };
    const nextState = token(prevState, { type: 'UNKNOWN' });
    expect(nextState).toBe(prevState);
  });

  it('returns a new state with the specified token as the payload', function () {
    const prevState = {
      myToken: null,
      status: null,
    };
    const nextState = token(prevState, {
      type: 'RETRIEVE_FULFILLED',
      payload: {
        data: {
          data: {
            token: 'abcdefg',
          },
        },
      },
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ myToken: 'abcdefg', status: 'FULFILLED' });
  });
  it('PENDING':'returns a new state with the specified token as the payload', function () {
    const prevState = {
      myToken: null,
      status: null,
    };
    const nextState = token(prevState, {
      type: 'RETRIEVE_PENDING',
      payload: { },
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ myToken: null, status:'PENDING' });
  });
  it('REJECTED: returns a new state with the specified token as the payload', function () {
    const prevState = {
      myToken: null,
      status: null,
    };
    const nextState = token(prevState, {
      type: 'RETRIEVE_REJECTED',
      payload: { },
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ myToken: null , status: 'REJECTED' });
  });
});
