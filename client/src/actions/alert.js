import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';


// An action called setAlert that will 
// dispatch the type of set alert to the reducer 

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    //Get a unique id
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: {msg, alertType, id}
    });

    // Remove alert in 5 seconds
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), timeout);
};