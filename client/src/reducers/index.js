import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';

// Contains all the reducers we will create 
export default combineReducers({
  alert,
  auth,
  profile
});