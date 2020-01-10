import axios from 'axios';
// import config from 'config';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
        // Dispatch either Profile updated or created
        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success' ));

        // If were not going to edit the profile then go to dashboard
        if (!edit) {
            history.push('/dashboard');
        }

    } catch (err) {

        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Add experience
export const addExperience = (formData, history) => async dispatch =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put('/api/profile/experience', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        // Dispatch either Profile updated or created
        dispatch(setAlert('Experience Added', 'success'));

        // Redirect
        history.push('/dashboard');


    } catch (err) {

        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Add education
export const addEducation = (formData, history) => async dispatch =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put('/api/profile/education', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        // Dispatch either Profile updated or created
        dispatch(setAlert('Education Added', 'success'));

        // Redirect
        history.push('/dashboard');


    } catch (err) {

        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}