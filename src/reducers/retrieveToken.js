const retrieveToken = ( state = '', action ) => {
  switch (action.type) {
    case 'RETRIEVE_FULFILLED':
      return action.payload.data.data.token;
    case 'RETRIEVE_REJECTED':
      return 'token_bad'
    case 'RETRIEVE_PENDING':
      return 'token_pending'
    default:
      return state;
  }
}

export default retrieveToken;
