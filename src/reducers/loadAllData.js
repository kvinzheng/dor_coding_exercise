const loadAllData = ( state = {}, action ) => {
  switch (action.type) {
    case 'LOAD_ALL_DATA_FULFILLED':
      return { ...action.payload.data };
    case 'LOAD_ALL_DATA_REJECTED':
      return 'response_bad'
    case 'LOAD_ALL_DATA_PENDING':
      return 'PENDING'
    default:
      return state;
  }
}

export default loadAllData;
