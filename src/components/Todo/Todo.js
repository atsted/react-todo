import React from 'react';
import TodoToolbar from '../TodoToolbar/TodoToolbar';
import TodoPriorityFilter from '../TodoPriorityFilter/TodoPriorityFilter';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import './Todo.css';

export default () => (
  <div className="todo">
    <TodoToolbar/>
    <div className="todo__container">
      <TodoInput/>
      <TodoPriorityFilter/>
      <TodoList/>
    </div>
  </div>
)
