import { combineReducers } from 'redux'
import user from './userReducer'
import task from './taskReducer'
const rootReducer = combineReducers({
    user,
    task
})

export default rootReducer;