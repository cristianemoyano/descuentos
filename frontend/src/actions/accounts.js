import axios from "axios";

const baseApiURL = process.env.REACT_APP_API_URL;

// FETCH USER

export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

function fetchUserPending() {
    return {
        type: FETCH_USER_PENDING
    }
}

function fetchUserSuccess(user) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user,
    }
}

function fetchUserError(error) {
    return {
        type: FETCH_USER_ERROR,
        error: error
    }
}

export function fetchUser(auth = null) {
    return (dispatch, getState) => {
        dispatch(fetchUserPending());
        let token;

        if (auth) {
            token = auth;
        } else {
            token = getState().auth.token;
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (token) {
            config.headers['Authorization'] = `Token ${token}`;
        }
        axios
        .get(`${baseApiURL}/auth/user`, config)
        .then(res => dispatch(fetchUserSuccess(res.data)))
        .catch(error => {
            dispatch(fetchUserError(error));
        })
    }
}


// LOGIN USER
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';


function loginUserSuccess(user) {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user,
    }
}

function loginUserError(error) {
    return {
        type: LOGIN_USER_ERROR,
        error: error
    }
}

export function loginUser(username, password) {
    return dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({username, password});

        axios
        .post(`${baseApiURL}/auth/login`, body, config)
        .then(res => dispatch(loginUserSuccess(res.data)))
        .catch(error => {
            dispatch(loginUserError(error));
        })
    }
}

// LOGOUT USER

export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';


function logoutUserSuccess(user) {
    return {
        type: LOGOUT_USER_SUCCESS,
        payload: user,
    }
}

function logoutUserError(error) {
    return {
        type: LOGOUT_USER_ERROR,
        error: error
    }
}

export function logoutUser() {
    return (dispatch, getState) => {
        const token = getState().auth.token;

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (token) {
            config.headers['Authorization'] = `Token ${token}`;
        }

        axios
        .post(`${baseApiURL}/auth/logout`, null, config)
        .then(res => dispatch(logoutUserSuccess(res.data)))
        .catch(error => {
            dispatch(logoutUserError(error));
        })
    }
}