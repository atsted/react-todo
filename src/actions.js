import {
  ADD_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
  CHANGE_FILTER
} from './actionTypes';

export const addTask = text => ({
  type: ADD_TASK,
  text
})

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  id
})

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
})

export const changeFilter = filterState => ({
  type: CHANGE_FILTER,
  filterState
})