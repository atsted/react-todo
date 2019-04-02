import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import Todo from './components/Todo/Todo'
import './App.css';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    let { visibility, priority } = nextProps.match.params
    visibility = (visibility || '').toUpperCase()
    priority = (priority || '').toUpperCase()
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
