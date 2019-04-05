import * as helpers from '../helpers';
import { createSelector } from 'reselect';
import { FilterState } from '../constants';

export const getFilter = state => state.filter
export const getTodo = state => state.todo

export const getVisibleTasks = createSelector(
  [ getFilter, getTodo ],
  helpers.getVisibleTasks
)

export const getCompletedNumber = createSelector(
  [ getFilter, getTodo ],
  (filter, todo) => helpers.getVisibleTasks({
    ...filter,
    visibility: FilterState.DONE
  }, todo).length
)

export const getActivesNumber = createSelector(
  [ getFilter, getTodo ],
  (filter, todo) => helpers.getVisibleTasks({
    ...filter,
    visibility: FilterState.ACTIVE
  }, todo).length
)

export const getTotalNumber = createSelector(
  [ getFilter, getTodo ],
  (filter, todo) => helpers.getVisibleTasks({
    ...filter,
    visibility: null
  }, todo).length
)
