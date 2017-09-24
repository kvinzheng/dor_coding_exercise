// load current time
export const timeNow = () => {
  const time = new Date().toLocaleString('en-GB').split(',')[1].substring(1);
  return { type: 'CURRENT_TIME', payload: time };
};

// make a post request API_URL to retrieve to actual token
export const retrieveToken = (api) => {
  const tokenPromise = api.axiosToken();
  return { type: 'RETRIEVE', payload: tokenPromise };
};

// plug the token into the get request API_URL to retrieve the data back
export const loadAllData = (api, token) => {
  const dataPromise = api.axiosData(token);
  return { type: 'LOAD_ALL_DATA', payload: dataPromise };
};

// utilize thunk middleware to make sure the order of the actions is correct
// note: I am also using the promiseMiddleware here to show the loading page
export const getAllDate = () => {
  return (dispatch, getState, { Api }) => {
    return dispatch(retrieveToken(Api)).then(() => {
      const token = getState().token.myToken;
      return dispatch(loadAllData(Api, token));
    }).then(() => dispatch(timeNow()));
  };
};
