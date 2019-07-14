import axios from "axios";

const baseApiURL = process.env.REACT_APP_API_URL;

// FETCH BENEFITS

export const FETCH_BENEFITS_PENDING = 'FETCH_BENEFITS_PENDING';
export const FETCH_BENEFITS_SUCCESS = 'FETCH_BENEFITS_SUCCESS';
export const FETCH_BENEFITS_ERROR = 'FETCH_BENEFITS_ERROR';

function fetchBenefitsPending() {
    return {
        type: FETCH_BENEFITS_PENDING
    }
}

function fetchBenefitsSuccess(benefits) {
    return {
        type: FETCH_BENEFITS_SUCCESS,
        payload: benefits,
    }
}

function fetchBenefitsError(error) {
    return {
        type: FETCH_BENEFITS_ERROR,
        error: error
    }
}

export function fetchBenefits() {
    return dispatch => {
        dispatch(fetchBenefitsPending());
        axios
        .get(`${baseApiURL}/commerces/benefits/`)
        .then(res => dispatch(fetchBenefitsSuccess(res.data)))
        .catch(error => {
            dispatch(fetchBenefitsError(error));
        })
    }
}

// DELETE BENEFIT

export const DELETE_BENEFIT_PENDING = 'DELETE_BENEFIT_PENDING';
export const DELETE_BENEFIT_SUCCESS = 'DELETE_BENEFIT_SUCCESS';
export const DELETE_BENEFIT_ERROR = 'DELETE_BENEFIT_ERROR';

function deleteBenefitPending() {
    return {
        type: DELETE_BENEFIT_PENDING
    }
}

function deleteBenefitSuccess(benefits) {
    return dispatch => {
        dispatch(fetchBenefits());
        return {
            type: DELETE_BENEFIT_SUCCESS,
            payload: benefits,
        }
    }

}

function deleteBenefitError(error) {
    return {
        type: DELETE_BENEFIT_ERROR,
        error: error
    }
}

export function deleteBenefit(benefitId) {
    return dispatch => {
        dispatch(deleteBenefitPending());
        axios
        .delete(`${baseApiURL}/commerces/benefits/${benefitId}`)
        .then(res => dispatch(deleteBenefitSuccess(res.data)))
        .catch(error => {
            dispatch(deleteBenefitError(error));
        })
    }
}

// EDIT BENEFIT

export const EDIT_BENEFIT_PENDING = 'EDIT_BENEFIT_PENDING';
export const EDIT_BENEFIT_SUCCESS = 'EDIT_BENEFIT_SUCCESS';
export const EDIT_BENEFIT_ERROR = 'EDIT_BENEFIT_ERROR';

function editBenefitPending() {
    return {
        type: EDIT_BENEFIT_PENDING
    }
}

function editBenefitSuccess(benefits) {
    return dispatch => {
        dispatch(fetchBenefits());
        return {
            type: EDIT_BENEFIT_SUCCESS,
            payload: benefits,
        }
    }

}

function editBenefitError(error) {
    return {
        type: EDIT_BENEFIT_ERROR,
        error: error
    }
}

export function editBenefit(item) {
    return dispatch => {
        dispatch(editBenefitPending());
        axios
        .put(`${baseApiURL}/commerces/benefits/${item.id}`, item)
        .then(res => dispatch(editBenefitSuccess(res.data)))
        .catch(error => {
            dispatch(editBenefitError(error));
        })
    }
}

// ADD BENEFIT

export const ADD_BENEFIT_PENDING = 'ADD_BENEFIT_PENDING';
export const ADD_BENEFIT_SUCCESS = 'ADD_BENEFIT_SUCCESS';
export const ADD_BENEFIT_ERROR = 'ADD_BENEFIT_ERROR';

function addBenefitPending() {
    return {
        type: ADD_BENEFIT_PENDING
    }
}

function addBenefitSuccess(benefits) {
    return dispatch => {
        dispatch(fetchBenefits());
        return {
            type: ADD_BENEFIT_SUCCESS,
            payload: benefits,
        }
    }

}

function addBenefitError(error) {
    return {
        type: ADD_BENEFIT_ERROR,
        error: error
    }
}

export function addBenefit(item) {
    return dispatch => {
        dispatch(addBenefitPending());
        axios
        .post(`${baseApiURL}/commerces/benefits`, item)
        .then(res => dispatch(addBenefitSuccess(res.data)))
        .catch(error => {
            dispatch(addBenefitError(error));
        })
    }
}
