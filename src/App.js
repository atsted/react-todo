import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FilterState } from './constants';
import actions from './actions';
import Todo from './components/Todo/Todo';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  static propTypes = {
    match: PropTypes.object,
    changeFilter: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.updateByUrlParams(props.match.params)
  }
  componentWillReceiveProps(nextProps) {
    this.updateByUrlParams(nextProps.match.params)
  }
  updateByUrlParams(params) {
    let { visibility, priority } = params
    visibility = (visibility || FilterState.ALL).toUpperCase()
    priority = +(priority || -1)
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
