import currentTimeReducer from './currentTime';

describe('currentTimeReducer', function(){
  it('returns an empty string if passed in state that is undefined', function(){
    const nextState = currentTimeReducer(undefined, '');
    expect(nextState).toBe('');
  });

  it('returns the exact state given an unkown type (i.e., does not modify the state)',
  function (){
    const prevState = '';

    const nextState = currentTimeReducer(prevState, {type:'UNKNOWN'});
    expect(nextState).toBe('');
  });
})
