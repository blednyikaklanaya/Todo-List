/* eslint-disable react/prop-types */

import "./TodoItem.css";

export default function TodoItem({ text, todos, inputChange, setEditTodo, todoCompleted, removeTodo, throughTodo }) {

    const handleChange = (event) => {
        inputChange(event.target.value, todos.id);
    }//function will be called when value of input is changed and will pass field data to the parent function.

    return (
        <div
            className="todo-item__div">
            {todos.isEdit ? (
                <input
                    className="todo-item"
                    type="text"
                    value={text}
                    autoFocus
                    onChange={handleChange}>
                </input>
            ) : (
                <li style={{ backgroundColor: todoCompleted ? "rgb(208 149 219)" : "#edf7ffbd" }} className="todo-item"><span style={{ textDecoration: todoCompleted ? 'line-through' : 'none' }}>{text}</span></li>
            )}
            <button
                className="todo-item__edit-button"
                onClick={setEditTodo}>
                <i className="bi bi-pencil-square"></i>
            </button>
            <button
                onClick={throughTodo}
                className="todo-item__button-through">
                <i className={todoCompleted ? "bi bi-calendar-check-fill" : "bi bi-calendar-check"}></i>
            </button>
            <button
                onClick={removeTodo}
                className="todo-item__button">
                <i className="bi bi-trash-fill"></i>
            </button>
        </div>
    )
}