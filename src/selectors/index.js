import { createSelector } from 'reselect';
import { FilterState } from '../constants';

export const getVisibleTasks = createSelector([
  state => state.filter,
  state => state.todo
], (filter, todo) => {
  switch (filter) {
    case FilterState.ACTIVE:
      return todo.filter(e => !e.done)
    case FilterState.DONE:
      return todo.filter(e => e.done)
    default:
      return todo
  }
})

export const getCompletedNumber = createSelector(
  [ state => state.todo ],
  todo => todo.filter(e => e.done).length
)

export const getActivesNumber = createSelector(
  [ state => state.todo ],
  todo => todo.filter(e => !e.done).length
)

export const getTotalNumber = createSelector(
  [ state => state.todo ],
  todo => todo.length
)
