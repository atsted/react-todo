import { FilterState } from '../constants'

export const getVisibleTasks = (filter = {}, todo = []) => {
  const { priority: p, visibility: v } = filter
  return todo.filter(x => (
    (p === -1 || x.priority === p) &&
      (v === FilterState.ACTIVE ?
        !x.done :
        v === FilterState.DONE ?
          !!x.done :
          true)
  ))
}

export const getVisibleTaskIds = (filter = {}, todo = []) => (
  new Set(
    getVisibleTasks(filter, todo).map(e => e.id)
  )
)