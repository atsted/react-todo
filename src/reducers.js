import actions from './actions'
import defaultState from './state'
import { handleActions } from 'redux-actions'

let uid = 0

export default handleActions({
  [actions.addTask]: (state, { payload: text }) => {
    return text.length ? {
      ...state,
      todo: [{
        id: uid++,
        done: false,
        text
      },
      ...state.todo
    ]} : state
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
  [actions.changeFilter]: (state, { payload: filterState }) => ({
    ...state,
    filter: filterState
  })
}, defaultState)
