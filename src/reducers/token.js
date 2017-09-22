const retrieveToken = ( state = {myToken: null, status: null}, action ) => {
  switch (action.type) {
    case 'RETRIEVE_FULFILLED':
      return {...state, myToken:action.payload.data.data.token, status: 'FULFILLED' }
    case 'RETRIEVE_REJECTED':
      return {...state, status: 'REJECTED'}
    case 'RETRIEVE_PENDING':
      return {...state, status: 'PENDING'}
    default:
      return state;
  }
}

export default retrieveToken;
