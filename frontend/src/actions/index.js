import axios from "axios";

// FETCH TASK

export const FETCH_TASKS_PENDING = 'FETCH_TASKS_PENDING';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';

function fetchTasksPending() {
    return {
        type: FETCH_TASKS_PENDING
    }
}

function fetchTasksSuccess(tasks) {
    return {
        type: FETCH_TASKS_SUCCESS,
        payload: tasks,
    }
}

function fetchTasksError(error) {
    return {
        type: FETCH_TASKS_ERROR,
        error: error
    }
}

export function fetchTasks() {
    return dispatch => {
        dispatch(fetchTasksPending());
        axios
        .get("http://localhost:8000/api/todos/")
        .then(res => dispatch(fetchTasksSuccess(res.data)))
        .catch(error => {
            dispatch(fetchTasksError(error));
        })
    }
}

// DELETE TASK

export const DELETE_TASK_PENDING = 'DELETE_TASK_PENDING';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_ERROR = 'DELETE_TASK_ERROR';

function deleteTaskPending() {
    return {
        type: DELETE_TASK_PENDING
    }
}

function deleteTaskSuccess(tasks) {
    return dispatch => {
        dispatch(fetchTasks());
        return {
            type: DELETE_TASK_SUCCESS,
            payload: tasks,
        }
    }

}

function deleteTaskError(error) {
    return {
        type: DELETE_TASK_ERROR,
        error: error
    }
}

export function deleteTask(taskId) {
    return dispatch => {
        dispatch(deleteTaskPending());
        axios
        .delete(`http://localhost:8000/api/todos/${taskId}`)
        .then(res => dispatch(deleteTaskSuccess(res.data)))
        .catch(error => {
            dispatch(deleteTaskError(error));
        })
    }
}

// EDIT TASK

export const EDIT_TASK_PENDING = 'EDIT_TASK_PENDING';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_ERROR = 'EDIT_TASK_ERROR';

function editTaskPending() {
    return {
        type: EDIT_TASK_PENDING
    }
}

function editTaskSuccess(tasks) {
    return dispatch => {
        dispatch(fetchTasks());
        return {
            type: EDIT_TASK_SUCCESS,
            payload: tasks,
        }
    }

}

function editTaskError(error) {
    return {
        type: EDIT_TASK_ERROR,
        error: error
    }
}

export function editTask(item) {
    return dispatch => {
        dispatch(editTaskPending());
        axios
        .put(`http://localhost:8000/api/todos/${item.id}/`, item)
        .then(res => dispatch(editTaskSuccess(res.data)))
        .catch(error => {
            dispatch(editTaskError(error));
        })
    }
}

// ADD TASK

export const ADD_TASK_PENDING = 'ADD_TASK_PENDING';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_ERROR = 'ADD_TASK_ERROR';

function addTaskPending() {
    return {
        type: ADD_TASK_PENDING
    }
}

function addTaskSuccess(tasks) {
    return dispatch => {
        dispatch(fetchTasks());
        return {
            type: ADD_TASK_SUCCESS,
            payload: tasks,
        }
    }

}

function addTaskError(error) {
    return {
        type: ADD_TASK_ERROR,
        error: error
    }
}

export function addTask(item) {
    return dispatch => {
        dispatch(addTaskPending());
        axios
        .post(`http://localhost:8000/api/todos/`, item)
        .then(res => dispatch(addTaskSuccess(res.data)))
        .catch(error => {
            dispatch(addTaskError(error));
        })
    }
}
