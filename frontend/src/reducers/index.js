import { combineReducers } from 'redux'
import tasks from './tasks'
import benefits from './benefits'

export default combineReducers({
    tasks,
    benefits,
})
