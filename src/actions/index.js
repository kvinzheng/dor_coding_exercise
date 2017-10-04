// load current time
export const timeNow = () => {
  const time = new Date().toLocaleString('en-GB').split(',')[1].substring(1);
  return { type: 'CURRENT_TIME', payload: time };
};

// make a post request API_URL to retrieve to actual token
export const retrieveToken = () => {
  return (dispatch, getState, { Api }) => {
    dispatch({ type: 'RETRIEVE_PENDING' });
    return Api.axiosToken()
    .then((value) => {
      dispatch({ type: 'RETRIEVE_FULFILLED', payload: value });
      return value.data.data.token;
    })
    .catch(err => {
      dispatch({ type: 'RETRIEVE_REJECTED' });
    });
  };
};

// plug the token into the get request API_URL to retrieve the data back
export const loadAllData = token => {
  return (dispatch, getState, { Api }) => {
    dispatch({ type: 'LOAD_ALL_DATA_PENDING' });
    return Api.axiosData(token)
    .then((data) => {
      dispatch({ type: 'LOAD_ALL_DATA_FULFILLED', payload: data });
      return data;
    })
    .catch(err => {
      dispatch({ type: 'LOAD_ALL_DATA_REJECTED' });
    });
  }
}

// utilize thunk middleware to make sure the order of the actions is correct while using the Api Class as the extra argument
export const getAllDate = () => {
  return (dispatch, getState, { Api }) => {
    // console.log('dispatch(retrsieveToken())=',dispatch(retrieveToken()));
    // return dispatch(retrieveToken())
    return retrieveToken()(dispatch, getState, { Api })
      .then(token => {
        // return dispatch(loadAllData(token));
        return loadAllData(token)(dispatch, getState, { Api });
      })
      .then(() => {
        dispatch(timeNow());
        return timeNow();
      })
      .catch(error => {
        console.log('error', error);
        // console.log('there is an error');
      });
  }
}
