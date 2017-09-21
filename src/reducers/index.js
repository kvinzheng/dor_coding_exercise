import { combineReducers } from 'redux';
import dorData from './dorData.js';
import token from './token.js';
import currentTime from './currentTime.js';

const appReducer = combineReducers({
  dorData,
  token,
  currentTime
})

export default appReducer
