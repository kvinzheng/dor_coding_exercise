// import React from 'react';
// import App from '../src/components/App.js';
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import promiseMiddleware from 'redux-promise-middleware';
// import {Provider} from 'react-redux';
// import {mount} from 'enzyme';
// import * as actions from './actions/index.js';
console.log('hi');
import { store } from './index.js';
console.log('store=',store);
describe('Test Provider and Store --- REACT-REDUX (Mount + wrapping in <Provider>)', () => {
  it('test store', ()=>{
    console.log('hi there');
  })
  // const createStore = jest.fn();

  // expect(typeof store).toBe('Object')

  // const middlewares = [thunk, promiseMiddleware]
  // const mockStore = configureMockStore(middlewares)
  //
  // const initialState = {
  //   dorData: {},
  //   token: {},
  //   currentTime: {}
  // }
  // const store = mockStore(initialState);
  // return store.dispatch(actions.loadAllData()).then(() => {
  //   // return of async actions
  //   expect(store.getActions()).toEqual(expectedActions)
  // })
})
