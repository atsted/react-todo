import { FilterState } from './constants'
import {
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  CHANGE_FILTER,
  CLEAR_COMPLETED,
  COMPLETE_ALL
} from './actionTypes'

let uid = 0

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return action.text.length ? [{
          id: uid++,
          text: action.text,
          done: false
        },
        ...state
      ] : state
    case UPDATE_TASK:
      const { id, text } = action.options
      return state.map(e => {
        if (e.id === id) {
          if (!text) delete action.options.text
          return { ...e, ...action.options }
        } else return e
      })
    case REMOVE_TASK:
      const newState = [...state]
      const index = newState.findIndex(e => e.id === action.id)
      newState.splice(index, 1)
      return newState
    case CLEAR_COMPLETED:
      return state.filter(e => !e.done)
    case COMPLETE_ALL:
      return state.map(e => ({
        ...e, done: true
      }))
    default:
      return state
  }
}

export const filterReducer = (state = FilterState.ALL, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filterState
    default:
      return state
  }
}