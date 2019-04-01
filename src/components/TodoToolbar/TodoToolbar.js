import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFilter, clearCompleted, completeAll } from '../../actions';
import { FilterState as FS } from '../../constants';
import './TodoToolbar.css';

class TodoToolbar extends Component {
  countCompleted() {
    let done = 0
    for (let task of this.props.tasks) {
      task.done && done++
    }
    return done
  }
  changeFilter(filterState) {
    this.props.changeFilter(filterState)
  }
  render() {
    const { filter } = this.props
    const all = this.props.tasks.length
    const done = this.countCompleted()
    const active = all - done
    return (
      <div className="todo__toolbar">
        <div className="todo__container todo__container_between">
          <div>
            <button
              className={"todo__button" + (filter === FS.ALL ? ' active' : '')}
              onClick={() => this.changeFilter(FS.ALL)}>All ({all})</button>
            <button
              className={"todo__button" + (filter === FS.ACTIVE ? ' active' : '')}
              onClick={() => this.changeFilter(FS.ACTIVE)}>Active ({active})</button>
            <button
              className={"todo__button" + (filter === FS.DONE ? ' active' : '')}
              onClick={() => this.changeFilter(FS.DONE)}>Done ({done})</button>
          </div>
          <div>
            <button
              className="todo__button"
              onClick={this.props.completeAll}>Complete all</button>
              <button
                className="todo__button"
                onClick={this.props.clearCompleted}>Clear completed</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    filter: state.filter,
    tasks: state.todo
  }), {
    changeFilter,
    clearCompleted,
    completeAll
  }
)(TodoToolbar)
