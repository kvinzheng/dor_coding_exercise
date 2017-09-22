const dorData = (state = { myData: null, status: null }, action) => {
  switch (action.type) {
    case 'LOAD_ALL_DATA_FULFILLED':
      return { ...state, myData: action.payload.data, status: 'FULFILLED' };
    case 'LOAD_ALL_DATA_REJECTED':
      return { ...state, status: 'REJECTED' };
    case 'LOAD_ALL_DATA_PENDING':
      return { ...state, status: 'PENDING' };
    default:
      return state;
  }
};

export default dorData;
