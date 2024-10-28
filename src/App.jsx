import { useEffect, useState } from 'react'
import './App.css'
//style

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import TodoHistory from './components/TodoHistory/TodoHistory';
//components

export default function App() {

  //state

  const [todos, setNewTodo] = useState(() => {
    const savesTodos = localStorage.getItem("userTodos");
    return savesTodos ? JSON.parse(savesTodos) : [];
  });

  const [countCompletedTodo, setCountCompletedTodo] = useState(0);

  const [oldTodos, setOldTodos] = useState(() => {
    const saveOldTodos = localStorage.getItem("userOldTodos");
    return saveOldTodos ? JSON.parse(saveOldTodos) : [];
  });

  useEffect(() => {
    setCountCompletedTodo(todos.filter((todo) => todo.completed).length)// return completed todo and set this number.
    localStorage.setItem("userTodos", JSON.stringify(todos));
    console.log(todos);
  }, [todos]); //check edits complected todos. Also set todos for localStorage

  useEffect(() => {
    localStorage.setItem("userOldTodos", JSON.stringify(oldTodos));
  }, [oldTodos])

  //functions

  const addNewTodo = (newTodo) => {
    setNewTodo([...todos, { id: Date.now(), text: newTodo, completed: false, isEdit: false }])// add all todo and new todo
  }

  const handleSetEditTodo = (id) => {
    setNewTodo(
      todos.map((todo) =>
        (todo.id == id ? { ...todo, isEdit: !todo.isEdit } : todo)
      )
    );
  }; //set editing status for todo

  const handleInputChange = (e, id) => {
    setNewTodo(
      todos.map((todo) =>
        (todo.id == id ? { ...todo, text: e } : todo)
      )
    );
  } //set input text for todo

  const onRemoveTodo = (id) => {
    setOldTodos((oldTodos) => [...oldTodos, todos.find((todo) => todo.id === id)]);
    setNewTodo(todos.filter((todo) => todo.id !== id));
  } //remove todo

  const onThroughTodo = (id) => {
    setNewTodo(
      todos.map((todo) =>
        (todo.id === id && todo.isEdit !== true ? { ...todo, completed: !todo.completed } : todo)
      )
    );
  };// function give through style/class for todo.

  return (
    <div
      className="container">
      <TodoForm onAddTodo={addNewTodo} />
      <TodoList todos={todos} setEditTodo={handleSetEditTodo} inputChange={handleInputChange} onRemoveTodo={onRemoveTodo} onThroughTodo={onThroughTodo} />
      <div
        className='counter-todo'>
        <span
          className='count-end-todo'>
          <i className='bi bi-calendar-check-fill'></i>
          {countCompletedTodo}
          <span> : completed</span>
        </span>
        <span
          className='count-total-todo'>
          <i className="bi bi-list-task"></i>
          {todos.length}
          <span> : total</span>
        </span>
      </div>
      <TodoHistory historyTodoData={oldTodos} />
    </div>
  )

}