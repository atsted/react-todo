import defaultState from './state'
import { handleActions } from 'redux-actions'
import { getVisibleTaskIds } from './helpers'
import {
  addTask,
  updateTask,
  removeTask,
  clearCompleted,
  completeAll,
  uncompleteAll,
  changeFilter
} from './actions'

export default handleActions({

  [addTask]: (state, { payload: text }) => {
    return {
      ...state,
      uid: state.uid + 1,
      todo: [
        {
          id: state.uid,
          done: false,
          priority: 0,
          text
        },
        ...state.todo
      ]
    }
  },

  [updateTask]: (state, { payload: options }) => {
    const { id, text } = options
    if (!text) delete options.text
    return {
      ...state,
      todo: state.todo.map(e => (
        e.id === id ? { ...e, ...options } : e
      ))
    }
  },

  [removeTask]: (state, { payload: id }) => ({
    ...state,
    todo: state.todo.filter(e => e.id !== id)
  }),

  [clearCompleted]: (state) => {
    const filteredTodoIds = getVisibleTaskIds(
      state.filter, state.todo
    )
    return {
      ...state,
      todo: state.todo.filter(e => (
        !e.done || !filteredTodoIds.has(e.id))
      )
    }
  },

  [completeAll]: (state) => {
    const filteredTodoIds = getVisibleTaskIds(
      state.filter, state.todo
    )
    return {
      ...state,
      todo: state.todo.map(e =>
        filteredTodoIds.has(e.id) ?
          { ...e, done: true } :
          e
      )
    }
  },

  [uncompleteAll]: (state) => {
    const filteredTodoIds = getVisibleTaskIds(
      state.filter, state.todo
    )
    return {
      ...state,
      todo: state.todo.map(e => 
        filteredTodoIds.has(e.id) ?
          { ...e, done: false } :
          e
      )
    }
  },

  [changeFilter]: (state, { payload: filterState }) => ({
    ...state,
    filter: filterState
  })
  
}, defaultState)
