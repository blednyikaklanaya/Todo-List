/* eslint-disable react/prop-types */

import "./TodoItem.css";

export default function TodoItem({ text, todoCompleted, removeTodo, throughTodo }) {
    return (
        <div
            className="todo-item__div">
            <li style={{backgroundColor: todoCompleted ? "rgb(208 149 219)" : "#edf7ffbd"}} className="todo-item"><span style={{ textDecoration: todoCompleted ? 'line-through' : 'none' }}>{text}</span></li>
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