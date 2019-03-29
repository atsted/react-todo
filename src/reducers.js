import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  CHANGE_FILTER
} from './actionTypes'

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [{
          id: state.length,
          text: action.text,
          done: false
        },
        ...state
      ]
    case TOGGLE_TASK:
      return state.map(e => {
        return e.id === action.id ?
          { ...e, done: !e.done }:
          e
      })
    case REMOVE_TASK:
      const newState = [...state]
      const index = newState.findIndex(e => e.id === action.id)
      newState.splice(index, 1)
      return newState
    default:
      return state
  }
}

export const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filterState
    default:
      return state
  }
}