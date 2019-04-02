import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import './TodoInput.css'

class TodoInput extends Component {
  addTask = event => {
    const form = event.target
    const input = form.name
    const value = input.value.trim()
    if (value.length) {
      this.props.addTask(value)
      form.reset()
    }
    event.preventDefault()
  }
  render() {
    return (
      <form
        onSubmit={this.addTask}
        autoComplete="off">
        <input
          className="todo__input"
          type="text"
          name="name"
          placeholder="Type the task name here and press Enter"
        />
      </form>
    )
  }
}

export default connect(null, {
  addTask: actions.addTask
})(TodoInput)