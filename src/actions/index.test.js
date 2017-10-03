import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('./index.test.js');
import {timeNow, retrieveToken, loadAllData, getAllDate} from './index';

jest.mock('../utils/Api.js');
import * as Api from '../utils/Api.js';

describe('Actions Tests', () => {
  it('timeNow action', () => {
    const result = timeNow();
    const expected = {
      type: 'CURRENT_TIME',
      payload: result.payload
    };

    expect(result).toEqual(expected);
  });

  it('retrieve token action', () => {
    const mockAxiosToken = jest.fn();
    mockAxiosToken.mockReturnValue(Promise.resolve({myToken: 'abcdef', status: 'FULFILLED'}));
    const extraArgument = {
      Api: {
        axiosToken: mockAxiosToken
      }
    };
    const initialState = {
      myToken: null,
      status: null
    };
    const expectedActionRetrieve = [
      {
        type: 'RETRIEVE',
        payload: mockAxiosToken()
      }
    ];
    const mockStore = configureStore([thunk.withExtraArgument(extraArgument)]);
    const store = mockStore(initialState, expectedActionRetrieve);
    store.dispatch(retrieveToken(extraArgument.Api));

    expect(store.getActions()).toEqual(expectedActionRetrieve);
  });

  it('load data action', () => {
    const mockAxiosData = jest.fn();
    mockAxiosData.mockReturnValue(Promise.resolve({
      myData: {
        data: [
          {
            id: 1
          }, {
            id: 2
          }, {
            id: 3
          }
        ],
        meta: {
          start_date: '2017-9-07',
          end_date: '2017-9-21'
        }
      },
      status: 'FULFILLED'
    }));
    const extraArgument = {
      Api: {
        axiosData: mockAxiosData
      }
    };
    const token = 'ABCDEFG';
    const initialState = {
      myData: null,
      status: null
    };
    const expectedActionRetrieve = [
      {
        type: 'LOAD_ALL_DATA',
        payload: mockAxiosData(token)
      }
    ];

    const mockStore = configureStore([thunk.withExtraArgument(extraArgument)]);
    const store = mockStore(initialState, expectedActionRetrieve);
    store.dispatch(loadAllData(extraArgument.Api, token));

    expect(store.getActions()).toEqual(expectedActionRetrieve);
  });

  it('test thunk', () => {
    const thunkMiddleware = getAllDate();
    expect(typeof thunkMiddleware).toBe('function');

    const axiosToken = jest.fn();
    const axiosData = jest.fn();
    const timeNow = jest.fn();

    axiosToken.mockReturnValue(Promise.resolve({
      data: {
        data: {
          token: 'abcdefg'
        }
      }
    }));
    axiosData.mockReturnValue(Promise.resolve([
      {
        id: 1,
        id: 2,
        id: 3
      }
    ]));

    timeNow.mockReturnValue('15:50');

    Api = {
      axiosToken: axiosToken,
      axiosData: axiosData
    }

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunkMiddleware(dispatch, getState, {Api}).then((value) => {
      const expectDispatch = {
        payload: {},
        type: "LOAD_ALL_DATA"
      };

      expect(typeof value).toBe(typeof timeNow());
      expect(dispatch).toBeCalledWith({
        type: 'LOAD_ALL_DATA',
        payload: Promise.resolve([
          {
            id: 1,
            id: 2,
            id: 3
          }
        ])
      });
      expect(dispatch).toBeCalledWith({
        type: 'RETRIEVE',
        payload: Promise.resolve({
          data: {
            data: {
              token: 'abcdefg'
            }
          }
        })
      });
    });
  });
});
