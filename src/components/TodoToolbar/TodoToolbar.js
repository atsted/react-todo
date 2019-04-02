import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { FilterState as FS } from '../../constants';
import * as selectors from '../../selectors'
import './TodoToolbar.css';

class TodoToolbar extends Component {
  changeFilter(filterState) {
    this.props.changeFilter(filterState)
  }
  render() {
    const { filter, all, done, active } = this.props
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
    all: selectors.getTotalNumber(state),
    done: selectors.getCompletedNumber(state),
    active: selectors.getActivesNumber(state),
    filter: state.filter
  }), {
    completeAll: actions.completeAll,
    changeFilter: actions.changeFilter,
    clearCompleted: actions.clearCompleted
  }
)(TodoToolbar)
