import { createActions } from 'redux-actions';
import {
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  CHANGE_FILTER,
  CLEAR_COMPLETED,
  COMPLETE_ALL
} from './actionTypes';

export default createActions(
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  CHANGE_FILTER,
  CLEAR_COMPLETED,
  COMPLETE_ALL
)
