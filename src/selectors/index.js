import * as helpers from '../helpers';
import { createSelector } from 'reselect';

export const getFilter = state => state.filter
export const getTodo = state => state.todo

export const getVisibleTasks = createSelector(
  [ getFilter, getTodo ],
  helpers.getVisibleTasks
)

export const getCompletedNumber = createSelector(
  getTodo,
  todo => todo.filter(e => e.done).length
)

export const getActivesNumber = createSelector(
  getTodo,
  todo => todo.filter(e => !e.done).length
)

export const getTotalNumber = createSelector(
  getTodo,
  todo => todo.length
)
