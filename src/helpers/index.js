import { FilterState } from '../constants'

export const getVisibleTasks = (filter = {}, todo = []) => {
  const { priority, visibility } = filter
  return todo.filter(element => (
    (priority === -1 || element.priority === priority) &&
      (visibility === FilterState.ACTIVE ?
        !element.done :
        visibility === FilterState.DONE ?
          !!element.done :
          true)
  ))
}

export const getVisibleTaskIds = (filter = {}, todo = []) => (
  new Set(
    getVisibleTasks(filter, todo).map(e => e.id)
  )
)