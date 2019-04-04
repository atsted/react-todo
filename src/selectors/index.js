import * as helpers from '../helpers';
import { createSelector } from 'reselect';
import { FilterState } from '../constants';

export const getVisibleTasks = createSelector([
  state => state.filter,
  state => state.todo
], (filter, todo) => helpers.getVisibleTasks(filter, todo)
)

export const getCompletedNumber = createSelector([
  state => state.filter,
  state => state.todo
], (filter, todo) => helpers.getVisibleTasks({
    ...filter,
    visibility: FilterState.DONE
  }, todo).length
)

export const getActivesNumber = createSelector([
  state => state.filter,
  state => state.todo
], (filter, todo) => helpers.getVisibleTasks({
    ...filter,
    visibility: FilterState.ACTIVE
  }, todo).length
)

export const getTotalNumber = createSelector([
  state => state.filter,
  state => state.todo
], (filter, todo) => helpers.getVisibleTasks({
    ...filter,
    visibility: null
  }, todo).length
)
