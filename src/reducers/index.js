import { combineReducers } from 'redux';
import dorData from './dorData';
import token from './token';
import currentTime from './currentTime';

const appReducer = combineReducers({
  dorData,
  token,
  currentTime,
});

export default appReducer;
