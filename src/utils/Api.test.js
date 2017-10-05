import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as Api from './Api.js';

describe('Api', () => {
  it('returns data when axiostoken is called', done => {
    const API_URL = 'http://api.getdor.com/v1/tokens';
    const body = {
      refresh_token: 'wSGgSqmSDKS4YPfMSHZ4YyiOpiNv'
    };

    const mock = new MockAdapter(axios);
    const data = 'abcdefgh'

    mock.onPost(API_URL, body).reply(200, data);

    Api.axiosToken().then(response => {
      expect(response.data).toEqual(data);
      done();
    })
  });

  it('returns data when axiosData is called', done => {
    const token = 'abcdefgh';
    const API_URL = 'http://api.getdor.com/v1/teams/4/stores/4/days';
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const result = [{id: 1}, {id:2}];
    const mock = new MockAdapter(axios);

    mock.onGet(API_URL, config).reply(200, [{id: 1},{id:2}]);

    Api.axiosData().then(response => {
      expect(response.data).toEqual(result);
      done();
    });
  });

});
