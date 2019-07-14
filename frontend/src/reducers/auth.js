import {
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS,
} from '../actions/accounts';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_PENDING: 
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
            }
        case LOGIN_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }
        case LOGIN_USER_ERROR:
        case FETCH_USER_ERROR:
        case LOGOUT_USER_SUCCESS:
            return {
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }
        default: 
            return state;
    }
}

export default auth;