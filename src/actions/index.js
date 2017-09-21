import axios from 'axios';

//load current time
export const timeNow = () => {
  let time = new Date().toLocaleString('en-GB').split(',')[1].substring(1);
  return {type: 'CURRENT_TIME', payload: time}
}

//make a post request to retrieve to actual token
const retrieveToken = () => {
  const API_URL = 'http://api.getdor.com/v1/tokens';
  const body = {
    refresh_token: 'wSGgSqmSDKS4YPfMSHZ4YyiOpiNv'
  };
  let token = axios.post(API_URL, body).then((response) => {
    return response
  });

  return {type: 'RETRIEVE', payload: token}
}

//plug the token into the get request to retrieve the data back
const loadAllData = (token) => {
  const API_URL = 'http://api.getdor.com/v1/teams/4/stores/4/days';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let data = axios.get(API_URL, config).then((response) => {
    return response;
  });

  return {type: 'LOAD_ALL_DATA', payload: data}
}

//utilize thunk middleware to make sure the order of the actions is correct
//note: I am also using the promiseMiddleware here .
export const getAllDate = () => {
  return (dispatch, getState) => {
    dispatch(retrieveToken()).then(() => {
      const token = getState().token;
      dispatch(loadAllData(token));
    }).then(() => {
      dispatch(timeNow());
    })
  }
}
