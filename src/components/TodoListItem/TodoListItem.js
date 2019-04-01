import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTask, removeTask } from '../../actions'

class TodoListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    const text = this.state.text.length ?
      this.state.text :
      this.props.task.text
    this.props.updateTask({ id, text })
    this.setState({ isEditable: false, text })
  }
  updateLocal = event => {
    const value = event.target.value.trim()
    this.setState({ text: value })
    event.preventDefault()
  }
  componentDidUpdate() {
    this.inputRef && this.inputRef.focus()
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