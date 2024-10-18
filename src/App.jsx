
import { useEffect, useState } from 'react'
import './App.css'
//style

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
//components

export default function App() {

  const [todos, setNewTodo] = useState(JSON.parse(localStorage.getItem("userTodos")));
  const [countCompletedTodo, setCountCompletedTodo] = useState(0);

  useEffect(() => {
    setCountCompletedTodo(todos.filter((todo) => todo.completed).length)// return completed todo and set this number.
    localStorage.setItem("userTodos", JSON.stringify(todos));
  }, [todos]); //check edits complected todos. Also set todos for localStorage

  const addNewTodo = (newTodo) => {
    setNewTodo([...todos, { id: Date.now(), text: newTodo, completed: false }])// add all todo and new todo
  }

  const onRemoveTodo = (id) => {
    setNewTodo(todos.filter((todo) => todo.id !== id));
  } //remove todo

  const onThroughTodo = (id) => {
    setNewTodo(
      todos.map((todo) =>
        (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
      )
    );
  };// function give through style/class for todo.

  return (
    <div
      className="container">
      <TodoForm onAddTodo={addNewTodo} />
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onThroughTodo={onThroughTodo} />
      <div
        className='counter-todo'>
        <span
          className='count-end-todo'>
          <i className='bi bi-calendar-check-fill'></i>
          {countCompletedTodo}
        </span>
        <span
          className='count-total-todo'>
          <i className="bi bi-list-task"></i>
          {todos.length}
        </span>
      </div>
    </div>
  )

}