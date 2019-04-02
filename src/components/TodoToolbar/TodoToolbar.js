import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../actions';
import { FilterState as FS } from '../../constants';
import * as selectors from '../../selectors'
import './TodoToolbar.css';

class TodoToolbar extends Component {
  render() {
    const { filter, all, done, active } = this.props
    return (
      <div className="todo__toolbar">
        <div className="todo__container todo__container_between">
          <div>
            <Link
              className={"todo__button" + (filter.visibility === FS.ALL ? ' active' : '')}
              to="/all">All ({all})</Link>
            <Link
              className={"todo__button" + (filter.visibility === FS.ACTIVE ? ' active' : '')}
              to="/active">Active ({active})</Link>
            <Link
              className={"todo__button" + (filter.visibility === FS.DONE ? ' active' : '')}
              to="/done">Done ({done})</Link>
          </div>
          {all ?
          <div>
            {all === done ?
            <button
              className="todo__button"
              onClick={this.props.uncompleteAll}>Uncomplete all</button> :
            <button
              className="todo__button"
              onClick={this.props.completeAll}>Complete all</button>
            }
            <button
              className="todo__button"
              onClick={this.props.clearCompleted}>Clear completed</button>
          </div> : null
          }
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
    uncompleteAll: actions.uncompleteAll,
    clearCompleted: actions.clearCompleted
  }
)(TodoToolbar)
