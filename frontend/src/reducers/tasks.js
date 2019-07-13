import {
    FETCH_TASKS_PENDING,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_ERROR
} from '../actions/tasks';

const initialState = {
    pending: false,
    tasks: [],
    error: null
}

const tasks = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TASKS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                pending: false,
                tasks: action.payload
            }
        case FETCH_TASKS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export default tasks