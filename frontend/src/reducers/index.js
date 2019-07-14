import { combineReducers } from 'redux'
import tasks from './tasks'
import benefits from './benefits'
import auth from './auth'

export default combineReducers({
    tasks,
    benefits,
    auth,
})
