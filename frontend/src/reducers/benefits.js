import {
    FETCH_BENEFITS_PENDING,
    FETCH_BENEFITS_SUCCESS,
    FETCH_BENEFITS_ERROR
} from '../actions/benefits';

const initialState = {
    pending: false,
    benefits: [],
    error: null
}

const benefits = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BENEFITS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_BENEFITS_SUCCESS:
            return {
                ...state,
                pending: false,
                benefits: action.payload
            }
        case FETCH_BENEFITS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export default benefits