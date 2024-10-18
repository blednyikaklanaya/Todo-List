/* eslint-disable react/prop-types */
import { useState } from "react"

import "./TodoForm.css";

export default function TodoForm({ onAddTodo }) {

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedText = inputValue.trim();
        if (trimmedText) {
            onAddTodo(trimmedText)
            setInputValue("");
        }
    }

    return (

        <div
            className="todo-form__container">
            <input
                type="text"
                value={inputValue}
                placeholder="Add new a todo"
                onChange={(e) => setInputValue(e.target.value)}
                className="todo-form__input" />
            {/* input value and setInputValue set text */}
            <button
                onClick={handleSubmit}
                className="todo-form__button">
                <i className="bi bi-clipboard-plus"></i>
            </button>
        </div>

    )
}