import { combineReducers } from 'redux';
import loadAllData from './loadAllData.js';
import retrieveToken from './retrieveToken.js';
import currentTime from './currentTime.js';

const appReducer = combineReducers({
  loadAllData,
  retrieveToken,
  currentTime
})

export default appReducer
