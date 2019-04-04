import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoListItem from '../TodoListItem/TodoListItem'
import { getVisibleTasks } from '../../selectors'
import './TodoList.css'

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">{
        this.props.tasks.map(item => (
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
  tasks: getVisibleTasks(state)
}))(TodoList)
