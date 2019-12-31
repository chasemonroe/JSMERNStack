import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

// Redux Boilerplate code 

// Define initial state
const initialState = {};

// Define Middleware 
const middleware = [thunk];

// Store variable 
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;