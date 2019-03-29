import React, { Component } from 'react';
import TodoToolbar from '../TodoToolbar/TodoToolbar';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import './Todo.css';

export default class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <TodoToolbar/>
        <div className="todo__container">
          <TodoInput/>
          <TodoList/>
        </div>
      </div>
    );
  }
}
