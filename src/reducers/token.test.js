import retrieveToken from './retrieveToken.js';

describe('retrieveToken', function(){
  it('returns an empty string if passed in state that is undefined', function(){

    const nextState = retrieveToken(undefined, {'type':'UNKNOWN'});
    expect(nextState).toEqual('');
  });

  it('returns the exact state given an unkown type (i.e., does not modify the state)',
  function (){
    const prevState = '';

    const nextState = retrieveToken(prevState, {type:'UNKNOWN'});
    expect(nextState).toBe('');
  })
})
