import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../actions';
import { FilterState } from '../../constants';
import * as selectors from '../../selectors';
import PropTypes from 'prop-types';
import './TodoToolbar.css';

class TodoToolbar extends Component {
  static propTypes = {
    all: PropTypes.number.isRequired,
    done: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    completeAll: PropTypes.func.isRequired,
    uncompleteAll: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    filter: PropTypes.shape({
      visibility: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired
    }).isRequired
  }
  render() {
    const {
      filter, all, done, active,
      completeAll, uncompleteAll, clearCompleted
    } = this.props
    return (
      <div className="todo__toolbar">
        <div className="todo__container todo__container_between">
          <div>
            <Link
              className={"todo__button" + (filter.visibility === FilterState.ALL ? ' active' : '')}
              to={`/all/${filter.priority}`}>All ({all})</Link>
            <Link
              className={"todo__button" + (filter.visibility === FilterState.ACTIVE ? ' active' : '')}
              to={`/active/${filter.priority}`}>Active ({active})</Link>
            <Link
              className={"todo__button" + (filter.visibility === FilterState.DONE ? ' active' : '')}
              to={`/done/${filter.priority}`}>Done ({done})</Link>
          </div>
          <div className="display-flex">
            {all ?
            <div>
              {all === done ?
              <button
                className="todo__button"
                onClick={uncompleteAll}>Uncomplete all</button> :
              <button
                className="todo__button"
                onClick={completeAll}>Complete all</button>
              }
              <button
                className="todo__button"
                onClick={clearCompleted}>Clear completed</button>
            </div> : null
            }
            <Link
              className="todo__button"
              to="/all/-1">Reset filters</Link>
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
    filter: selectors.getFilter(state)
  }), {
    completeAll: actions.completeAll,
    uncompleteAll: actions.uncompleteAll,
    clearCompleted: actions.clearCompleted
  }
)(TodoToolbar)
