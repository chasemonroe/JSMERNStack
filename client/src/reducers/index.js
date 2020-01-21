import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

// Contains all the reducers we will create 
export default combineReducers({
  alert,
  auth,
  profile,
  post
});