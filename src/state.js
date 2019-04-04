import { FilterState } from './constants';

let localState = localStorage.getItem('todo')
try {
  localState = JSON.parse(localState)
} catch (e) {
  localState = null
  console.error(e)
}

export default localState || {
  uid: 0,
  todo: [],
  filter: {
    visibility: FilterState.ALL,
    priority: -1
  }
}
