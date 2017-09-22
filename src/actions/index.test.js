import { timeNow, retrieveToken, loadAllData } from './index';
import configureStore from './redux-mock-store';
import thunk from 'redux-thunk';

describe('Actions Tests', () => {
  it('timeNow action', () => {
    const time = new Date().toLocaleString('en-GB').split(',')[1].substring(1);

    const expected = {
      type: 'CURRENT_TIME',
      payload: time
    };
    const result = timeNow();
    expect(result).toEqual(expected);
  });

})
