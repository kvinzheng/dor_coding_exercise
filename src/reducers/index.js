import { combineReducers } from 'redux'
import loadAllData from './loadAllData.js'
import retrieveToken from './retrieveToken.js'

const appReducer = combineReducers({
  loadAllData,
  retrieveToken,
})

export default appReducer
