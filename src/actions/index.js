// load current time
export const timeNow = () => {
  const time = new Date().toLocaleString('en-GB').split(',')[1].substring(1);
  return {type: 'CURRENT_TIME', payload: time};
};

// make a post request API_URL to retrieve to actual token
export const retrieveToken = (api) => {
  return (dispatch, getState, {Api}) => {
    dispatch({ type: 'RETRIEVE_PENDING' });
    return Api.aixosToken()
      .then((value)=>{
        const token = value.data.data.token;
        dispatch({ type: 'RETRIEVE_FULFILLED', payload: tokenPromise});
      })
      .then(()=>{
        dispatch({ type: 'RETRIEVE_REJECTED' })
      })
    }
  // const tokenPromise = api.axiosToken();
  // return {type: 'RETRIEVE', payload: tokenPromise};
};

// plug the token into the get request API_URL to retrieve the data back
export const loadAllData = (api, token) => {
  const dataPromise = api.axiosData(token);
  return {type: 'LOAD_ALL_DATA', payload: dataPromise};
};

// utilize thunk middleware to make sure the order of the actions is correct while using the Api Class as the extra argument

export const getAllDate = () => {
  return (dispatch, getState, {Api}) => {
    dispatch(retrieveToken(Api))
    return Api.axiosToken().then((value) => {
      const token = value.data.data.token;
      dispatch(loadAllData(Api, token));
    }).then(() => {
      dispatch(timeNow());
      return timeNow().payload;
    }).catch(error => {
      console.log('error');
    })
  };
};
