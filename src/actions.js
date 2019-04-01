import {
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  CHANGE_FILTER,
  CLEAR_COMPLETED,
  COMPLETE_ALL
} from './actionTypes';

export const addTask = text => ({
  type: ADD_TASK,
  text
})

export const updateTask = options => ({
  type: UPDATE_TASK,
  options
})

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
})

export const changeFilter = filterState => ({
  type: CHANGE_FILTER,
  filterState
})

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
})

export const completeAll = () => ({
  type: COMPLETE_ALL
})
