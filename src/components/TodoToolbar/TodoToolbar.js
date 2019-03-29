import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../actions';
import './TodoToolbar.css';

class TodoToolbar extends Component {
  changeFilter(filterState) {
    this.props.changeFilter(filterState)
  }
  render() {
    const { filter } = this.props
    return (
      <div className="todo__toolbar">
        <div className="todo__container">
          <button
            className={"todo__button" + (filter === 'ALL' ? ' active' : '')}
            onClick={() => this.changeFilter('ALL')}>All</button>
          <button
            className={"todo__button" + (filter === 'ACTIVE' ? ' active' : '')}
            onClick={() => this.changeFilter('ACTIVE')}>Active</button>
          <button
            className={"todo__button" + (filter === 'DONE' ? ' active' : '')}
            onClick={() => this.changeFilter('DONE')}>Done</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filter: state.filter
})
const mapDispatchToProps = dispatch => ({
  changeFilter: filterState => dispatch(changeFilter(filterState))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoToolbar)
