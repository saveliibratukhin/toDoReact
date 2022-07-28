import React, { useState } from 'react';
import './App.css';
import TodoList from './ToDoList/ToDoList';
import todo from './store/todo';

function App() {

  return (
    <div className="App">
      <h2>ToDo List: {todo.todos.length} tasks</h2>
      <TodoList />
    </div>
  );
}

export default App;
