import { combineReducers } from 'redux';
import { todoReducer, filterReducer } from './reducers'

export default combineReducers({
  todo: todoReducer,
  filter: filterReducer,
})