import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoListItem from '../TodoListItem/TodoListItem'
import { FilterState } from '../../constants'
import './TodoList.css'

class TodoList extends Component {
  getFilteredTasks() {
    switch (this.props.filterState) {
      case FilterState.ACTIVE:
        return this.props.tasks.filter(e => !e.done)
      case FilterState.DONE:
        return this.props.tasks.filter(e => e.done)
      default:
        return this.props.tasks
    }
  }
  render() {
    return (
      <ul className="todo-list">{
        this.getFilteredTasks().map(item => (
          <TodoListItem
            key={item.id}
            task={item}
          />
        ))
      }</ul>
    );
  }
}

export default connect(state => ({
  tasks: state.todo,
  filterState: state.filter
}))(TodoList)
