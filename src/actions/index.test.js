import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { timeNow, retrieveToken, loadAllData } from './index';

describe('Actions Tests', () => {
  it('timeNow action', () => {
    const result = timeNow();
    const expected = {
      type: 'CURRENT_TIME',
      payload: result.payload,
    };

    expect(result).toEqual(expected);
  });

  it('retrieve token action', () => {
    const mockAxiosToken = jest.fn();
    mockAxiosToken.mockReturnValue(Promise.resolve({ myToken: 'abcdef', status: 'FULFILLED' }));
    const extraArgument = {
      Api: {
        axiosToken: mockAxiosToken,
      },
    };
    const initialState = {
      myToken: null,
      status: null,
    };
    const expectedActionRetrieve = [
      {
        type: 'RETRIEVE',
        payload: mockAxiosToken(),
      },
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
            id: 1,
          }, {
            id: 2,
          }, {
            id: 3,
          },
        ],
        meta: {
          start_date: '2017-9-07',
          end_date: '2017-9-21',
        },
      },
      status: 'FULFILLED',
    }));
    const extraArgument = {
      Api: {
        axiosData: mockAxiosData,
      },
    };
    const token = 'ABCDEFG';
    const initialState = {
      myData: null,
      status: null,
    };
    const expectedActionRetrieve = [
      {
        type: 'LOAD_ALL_DATA',
        payload: mockAxiosData(token),
      },
    ];

    const mockStore = configureStore([thunk.withExtraArgument(extraArgument)]);
    const store = mockStore(initialState, expectedActionRetrieve);
    store.dispatch(loadAllData(extraArgument.Api, token));

    expect(store.getActions()).toEqual(expectedActionRetrieve);
  });
});
