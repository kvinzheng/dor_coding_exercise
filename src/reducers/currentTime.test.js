import currentTimeReducer from './currentTime';

describe('currentTimeReducer', function(){
  it('returns an empty string if passed in state that is undefined', function(){
    const nextState = currentTimeReducer(undefined, '');
    expect(nextState).toEqual('');
  })
})
