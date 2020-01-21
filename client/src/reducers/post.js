import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES
} from '../actions/types'


const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const {type, payload } = action;

    switch(type) {
        case GET_POSTS:
            return {
                ...state, 
                posts: payload,
                loading: false
            }
            case POST_ERROR:
                return {
                    ...state, 
                    posts: payload,
                    loading: false
                }
            // map through posts, for each post see if its the correct one if it does, return new state 
            case UPDATE_LIKES:
                return {
                    ...state, 
                    posts: state.post.map(post => post._id === payload.id ? {...post, likes: payload.likes } : post),
                    loading: false 
                }
            default: 
                return state;
    }
}