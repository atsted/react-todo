import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import Todo from './components/Todo/Todo'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.updateByUrlParams(props.match.params)
  }
  componentWillReceiveProps(nextProps) {
    this.updateByUrlParams(nextProps.match.params)
  }
  updateByUrlParams(params) {
    let { visibility, priority } = params
    visibility = (visibility || '').toUpperCase()
    priority = +(priority || 0)
    this.props.changeFilter({ visibility, priority })
  }
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default connect(null, {
  changeFilter: actions.changeFilter
})(App);
