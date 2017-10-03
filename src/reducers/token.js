const retrieveToken = (state = { myToken: null, status: null }, action) => {
  switch (action.type) {
    case 'RETRIEVE_FULFILLED':
      return { ...state, myToken: action.payload.data.data.token, status: 'FULFILLED' };
    case 'RETRIEVE_REJECTED':
      return { ...state, status: 'REJECTED' };
    case 'RETRIEVE_PENDING':
      return { ...state, status: 'PENDING' };
    default:
      return state;
  }
};

export default retrieveToken;


// export const getAllDate = () => {
//   return (dispatch, getState, {Api}) => {
//     return dispatch(retrieveToken())
//     .then(token => dispatch(loadAllData(token)))
//     .then(() => {
//       dispatch(timeNow())
//     })
//     .catch(error => {
//       console.log('There is an error');
//     });
//   };
// };
