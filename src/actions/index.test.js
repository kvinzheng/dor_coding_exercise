// jest.mock('../utils/Api.js');
// import * as Api from '../utils/Api.js'; // eslint-disable-line import/first

import {timeNow, retrieveToken, loadAllData, getAllDate} from './index'; // eslint-disable-line import/first

describe('Actions Tests', () => {
  it('SUCCESS: timeNow action', () => {
    const time = timeNow();
    const actual = {
      type: 'CURRENT_TIME',
      payload: time
    }
    const expected = {
      type: 'CURRENT_TIME',
      payload: time
    };

    expect(actual).toEqual(expected);
  });

  it('SUCCESS: retrieveToken thunk test', () => {
    const thunk = retrieveToken();
    expect(typeof thunk).toBe('function');
    //mock api calls
    const axiosTokenFunc = jest.fn();
    const axiosTokenData = jest.fn();
    axiosTokenFunc.mockReturnValueOnce(Promise.resolve({
      data: {
        data: {
          token: 'abcdefgh'
        }
      }
    }));
    axiosTokenData.mockReturnValueOnce(Promise.resolve([
      {
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }
    ]),);
    //mock api object
    const Api = {
      axiosToken: axiosTokenFunc,
      axiosData: axiosTokenData
    };

    const dispatch = jest.fn();
    const getState = () => ({});
    //invoke thunk test
    return thunk(dispatch, getState, {Api}).then(token => {
      expect(Api.axiosToken).toBeCalled()
      expect(token).toBe('abcdefgh');
      expect(dispatch).toBeCalledWith({type: 'RETRIEVE_PENDING'});
    });
  });

  it('FAILURE: retrieveToken thunk test', () => {
    const thunk = retrieveToken();
    expect(typeof thunk).toBe('function');
    //mock api calls
    const axiosTokenFunc = jest.fn();
    const axiosTokenData = jest.fn();
    axiosTokenFunc.mockReturnValueOnce(Promise.reject(new Error('network error')));
    axiosTokenData.mockReturnValueOnce(Promise.resolve([
      {
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }
    ]),);
    //mock api object
    const Api = {
      axiosToken: axiosTokenFunc,
      axiosData: axiosTokenData
    };
    const dispatch = jest.fn();
    const getState = () => ({});
    //run thunk test
    return thunk(dispatch, getState, {Api}).then(token => {
      expect(Api.axiosToken).toBeCalled()
      expect(dispatch).toBeCalledWith({type: 'RETRIEVE_REJECTED'});
    });
  });

  it('SUCCESS: loadAllData thunk test', () => {
    const token = 'abcdefgh';
    const thunk = loadAllData(token);
    expect(typeof thunk).toBe('function');
    //i mock my Api function
    const axiosTokenFunc = jest.fn();
    const axiosTokenData = jest.fn();
    //mock api calls
    axiosTokenFunc.mockReturnValueOnce(Promise.resolve({
      data: {
        data: {
          token: 'abcdefgh'
        }
      }
    }));
    axiosTokenData.mockReturnValueOnce(Promise.resolve([
      {
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }
    ]),);
    //I mock my Api directory and set it to become an object
    const Api = {
      axiosToken: axiosTokenFunc,
      axiosData: axiosTokenData
    };
    const dispatch = jest.fn();
    const getState = () => ({});
    //i set the return return value
    return thunk(dispatch, getState, {Api}).then(data => {
      expect(Api.axiosData).toBeCalled()
      expect(data).toEqual([
        {
          "id": 1
        }, {
          "id": 2
        }, {
          "id": 3
        }
      ]);
      expect(dispatch).toBeCalledWith({type: 'LOAD_ALL_DATA_PENDING'});
    });
  });

  it('FAILURE: loadAllData thunk test', () => {
    //first i assign token
    const token = 'abcdefgh';
    const thunk = loadAllData(token);
    expect(typeof thunk).toBe('function');
    //i mock my Api function
    const axiosTokenFunc = jest.fn();
    const axiosTokenData = jest.fn();
    //i manually set the return value of my Apis
    axiosTokenFunc.mockReturnValueOnce(Promise.resolve({
      data: {
        data: {
          token: 'abcdefgh'
        }
      }
    }));
    axiosTokenData.mockReturnValueOnce(Promise.reject(new Error('network error')));
    //I mock my Api directory and set it to become an object
    const Api = {
      axiosToken: axiosTokenFunc,
      axiosData: axiosTokenData
    };
    const dispatch = jest.fn();
    const getState = () => ({});
    //i set the return return value
    return thunk(dispatch, getState, {Api}).then(data => {
      expect(Api.axiosData).toBeCalled()
      expect(dispatch).toBeCalledWith({type: 'LOAD_ALL_DATA_REJECTED'});
    });
  });

  it('SUCCESS: getAllData thunk test', () => {
    const thunk = getAllDate();
    expect(typeof thunk).toBe('function');

    //mock api function
    const axiosTokenFunc = jest.fn();
    const axiosTokenData = jest.fn();
    axiosTokenFunc.mockReturnValueOnce(Promise.resolve({
      data: {
        data: {
          token: 'abcdefgh'
        }
      }
    }));
    axiosTokenData.mockReturnValueOnce(Promise.resolve([
      {
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }
    ]),);

    //mock an Api object
    const Api = {
      axiosToken: axiosTokenFunc,
      axiosData: axiosTokenData
    };
    const dispatch = jest.fn();
    const getState = () => ({});

    //mock thunks' functions
    const retrieveToken = jest.fn();
    const loadAllData = jest.fn();
    const token = 'abcdefg';
    retrieveToken.mockReturnValueOnce(Promise.resolve(token));
    loadAllData.mockReturnValueOnce(Promise.resolve([
      {
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }
    ]));

    dispatch.mockImplementationOnce(() => retrieveToken()).mockImplementationOnce(() => loadAllData());

    //test thunk
    return thunk(dispatch, getState, {Api}).then(time => {
      expect(retrieveToken).toBeCalled();
      expect(loadAllData).toBeCalled();
      expect(typeof time).toBe('string');
    });
  });

  it('FAILURE: getAllData thunk test', () => {
    const thunk = getAllDate();
    expect(typeof thunk).toBe('function');

    //mock api function
    const axiosTokenFunc = jest.fn();
    const axiosTokenData = jest.fn();
    axiosTokenFunc.mockReturnValueOnce(Promise.resolve({
      data: {
        data: {
          token: 'abcdefgh'
        }
      }
    }));
    axiosTokenData.mockReturnValueOnce(Promise.resolve([
      {
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }
    ]),);

    //Api object
    const Api = {
      axiosToken: axiosTokenFunc,
      axiosData: axiosTokenData
    };
    const dispatch = jest.fn();
    const getState = () => ({});

    //mock thunks functions
    const retrieveToken = jest.fn();
    const loadAllData = jest.fn();
    const token = 'abcdefg';
    retrieveToken.mockReturnValueOnce(Promise.resolve(token));
    loadAllData.mockReturnValueOnce(Promise.reject([
      {
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }
    ]));

    dispatch.mockImplementationOnce(() => retrieveToken()).mockImplementationOnce(() => loadAllData());

    //test thunk
    return thunk(dispatch, getState, {Api}).then(time => {
      expect(retrieveToken).toBeCalled();
      expect(loadAllData).toBeCalled();
      expect(typeof time).toBe('string');
    });
  });
});
