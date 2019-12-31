import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
// Contains all the reducers we will create 
export default combineReducers({
  alert,
  auth
});