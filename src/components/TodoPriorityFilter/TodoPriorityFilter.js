import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class TodoPriorityFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: [
        { value: 3, text: 'Important & Urgent' },
        { value: 2, text: 'Important & Not urgent' },
        { value: 1, text: 'Not important & Urgent' },
        { value: 0, text: 'Not important & Not urgent' },
        { value: -1, text: 'All' }
      ]
    }
  }
  render() {
    let { visibility, priority } = this.props.filter
    visibility = visibility.toLowerCase()
    return (
      <div className="todo__priorities">
        <p>Priority: </p>
        { this.state.filters.map(e => {
            const href = `/${visibility}/${e.value}`
            let className = `todo__priority todo__priority_${e.value}`
            e.value === priority && (className += ' active')
            return (
              <Link
                to={href}
                key={e.value}
                className={className}>
                { e.text }
              </Link>
            )
          })
        }
      </div>
    )
  }
}

export default connect(state => ({
  filter: state.filter
}))(TodoPriorityFilter)
