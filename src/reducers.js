import actions from './actions'
import defaultState from './state'
import { handleActions } from 'redux-actions'

export default handleActions({
  [actions.addTask]: (state, { payload: text }) => {
    return {
      ...state,
      uid: state.uid + 1,
      todo: [
        {
          id: state.uid,
          done: false,
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
  [actions.clearCompleted]: (state) => ({
    ...state,
    todo: state.todo.filter(e => !e.done)
  }),
  [actions.completeAll]: (state) => ({
    ...state,
    todo: state.todo.map(e => ({
      ...e, done: true
    }))
  }),
  [actions.uncompleteAll]: (state) => ({
    ...state,
    todo: state.todo.map(e => ({
      ...e, done: false
    }))
  }),
  [actions.changeFilter]: (state, { payload: filterState }) => ({
    ...state,
    filter: filterState
  })
}, defaultState)
