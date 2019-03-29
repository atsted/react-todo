import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTask, removeTask } from '../../actions'

class TodoListItem extends Component {
  toggle() {
    const { id } = this.props.task
    this.props.toggleTask(id)
  } 
  remove() {
    const { id } = this.props.task
    this.props.removeTask(id)
  }
  render() {
    const { id, done, text } = this.props.task
    const taskId = `task-${id}`
    return (
      <li className="todo-list__item">
        <div>
          <input
            id={taskId}
            className="todo-list__checkbox"
            type="checkbox"
            checked={done}
            onChange={this.toggle.bind(this)}
          />
          <label htmlFor={taskId}></label>
        </div>
        <p className="todo-list__name">{text}</p>
        <button
          className="todo-list__button"
          onClick={this.remove.bind(this)}>
          <span>&times;</span>
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id)),
  removeTask: id => dispatch(removeTask(id))
})

export default connect(null, mapDispatchToProps)(TodoListItem)