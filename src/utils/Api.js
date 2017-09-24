import axios from 'axios';
// This Api Class is going to be used for making Api calls
// Note: It is also the extraArgument in the Thunk-Middleware
export default class Api {
  static axiosToken() {
    const API_URL = 'http://api.getdor.com/v1/tokens';
    const body = {
      refresh_token: 'wSGgSqmSDKS4YPfMSHZ4YyiOpiNv',
    };
    const tokenPromise = axios.post(API_URL, body).then(response => response);
    return tokenPromise;
  }

  static axiosData(token) {
    const API_URL = 'http://api.getdor.com/v1/teams/4/stores/4/days';
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const dataPromise = axios.get(API_URL, config).then(response => response);
    return dataPromise;
  }
}
