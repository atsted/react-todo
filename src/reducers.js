import actions from './actions'
import defaultState from './state'
import { handleActions } from 'redux-actions'
import { getVisibleTaskIds } from './helpers'

export default handleActions({

  [actions.addTask]: (state, { payload: text }) => {
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

  [actions.updateTask]: (state, { payload: options }) => {
    const { id, text } = options
    if (!text) delete options.text
    return {
      ...state,
      todo: state.todo.map(e => (
        e.id === id ? { ...e, ...options } : e
      ))
    }
  },

  [actions.removeTask]: (state, { payload: id }) => ({
    ...state,
    todo: state.todo.filter(e => e.id !== id)
  }),

  [actions.clearCompleted]: (state) => {
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

  [actions.completeAll]: (state) => {
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

  [actions.uncompleteAll]: (state) => {
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

  [actions.changeFilter]: (state, { payload: filterState }) => ({
    ...state,
    filter: filterState
  })
  
}, defaultState)
