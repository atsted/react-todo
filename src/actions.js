import { createActions } from 'redux-actions';
import {
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  CHANGE_FILTER,
  CLEAR_COMPLETED,
  COMPLETE_ALL,
  UNCOMPLETE_ALL
} from './actionTypes';

export const {
  addTask,
  updateTask,
  removeTask,
  changeTask,
  changeFilter,
  clearCompleted,
  completeAll,
  uncompleteAll
} = createActions(
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  CHANGE_FILTER,
  CLEAR_COMPLETED,
  COMPLETE_ALL,
  UNCOMPLETE_ALL
)
