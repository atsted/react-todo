import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTask, removeTask } from '../../actions'
import PropTypes from 'prop-types'

class TodoListItem extends Component {
  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    }).isRequired,
    updateTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      minPriority: 0,
      maxPriority: 3,
      isEditable: false,
      text: this.props.task.text
    }
  }
  toggle = () => {
    const { id, done } = this.props.task
    this.props.updateTask({ id, done: !done })
  } 
  remove = () => {
    const { id } = this.props.task
    this.props.removeTask(id)
  }
  makeEditable = () => {
    this.setState({
      isEditable: true
    })
  }
  save = () => {
    const { id } = this.props.task
    const text = (this.state.text.length ?
      this.state.text :
      this.props.task.text).trim()
    this.props.updateTask({ id, text })
    this.setState({ isEditable: false, text })
  }
  updateLocal = event => {
    const value = event.target.value
    this.setState({ text: value })
    event.preventDefault()
  }
  updatePriority(value) {
    this.props.updateTask({
      id: this.props.task.id,
      priority: value 
    })
  }
  componentDidUpdate() {
    this.inputRef && this.inputRef.focus()
  }
  render() {
    const { id, done, text, priority } = this.props.task
    const taskId = `task-${id}`
    return (
      <li className={`todo-list__item todo-list__item_${priority}`}>
        <div>
          <input
            id={taskId}
            className="todo-list__checkbox"
            type="checkbox"
            checked={done}
            onChange={this.toggle}
          />
          <label htmlFor={taskId}></label>
        </div>
        {this.state.isEditable ? (
          <input
            className="todo-list__input"
            type="text"
            ref={input => this.inputRef = input}
            value={this.state.text}
            onChange={this.updateLocal}
            onBlur={this.save}
            onKeyDown={e => (e.keyCode === 13 && this.save())} />
        ) : (
          <p
            onDoubleClick={this.makeEditable}
            className="todo-list__name">{text}</p>
        )}
        <button
          className="todo-list__button"
          onClick={() => this.updatePriority(priority - 1)}
          disabled={priority <= this.state.minPriority}>
          <span>&darr;</span>
        </button>
        <button
          className="todo-list__button"
          onClick={() => this.updatePriority(priority + 1)}
          disabled={priority >= this.state.maxPriority}>
          <span>&uarr;</span>
        </button>
        <button
          className="todo-list__button"
          onClick={this.remove}>
          <span>&times;</span>
        </button>
      </li>
    );
  }
}

export default connect(null, {
  updateTask,
  removeTask
})(TodoListItem)