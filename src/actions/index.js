import axios from 'axios';

// load current time
export const timeNow = () => {
  const time = new Date().toLocaleString('en-GB').split(',')[1].substring(1);
  return { type: 'CURRENT_TIME', payload: time };
};

// make a post request to retrieve to actual token
export const retrieveToken = () => {
  const API_URL = 'http://api.getdor.com/v1/tokens';
  const body = {
    refresh_token: 'wSGgSqmSDKS4YPfMSHZ4YyiOpiNv',
  };
  const tokenPromise = axios.post(API_URL, body).then(response => response);
  return { type: 'RETRIEVE', payload: tokenPromise };
};

// plug the token into the get request to retrieve the data back
export const loadAllData = (token) => {
  const API_URL = 'http://api.getdor.com/v1/teams/4/stores/4/days';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const dataPromise = axios.get(API_URL, config).then(response => response);

  return { type: 'LOAD_ALL_DATA', payload: dataPromise };
};

// utilize thunk middleware to make sure the order of the actions is correct
// note: I am also using the promiseMiddleware here .
export const getAllDate = () => {
  return (dispatch, getState) => {
    return dispatch(retrieveToken()).then(() => {
      const token = getState().token.myToken;
      return dispatch(loadAllData(token));
    }).then(() => dispatch(timeNow()));
  };
};
