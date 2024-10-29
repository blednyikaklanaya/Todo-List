/* eslint-disable react/prop-types */

import { useState } from "react";
import "./TodoHistory.css";

export default function TodoHistory({ onClearHistory, historyTodoData }) {

    const [inOpenHistory, setInOpenHistory] = useState(false);

    const handleClickOpenHistory = () => {
        setInOpenHistory(!inOpenHistory);
    }

    return (
        <>
            <div
                className="todo-history">
                {inOpenHistory ? (
                    <>
                        <button
                            onClick={handleClickOpenHistory}
                            className="button-open-history">
                            Open old Todo
                        </button>
                        <button
                                className="clear-history-button"
                                onClick={onClearHistory}>
                                <i className="bi bi-arrow-clockwise"></i>
                        </button>
                        <div
                            className="container__history-list">
                            <ul
                                className="hitory-list-todo">
                                {historyTodoData.length == 0 ? <span>History a todo is empty</span> : 
                                    historyTodoData.map((oldTodo) => (
                                        <li key={oldTodo.id} className="old-todo">{oldTodo.text}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </>
                ) : (
                    <button
                        onClick={handleClickOpenHistory}
                        className="button-open-history">
                        Open old Todo
                    </button>
                )}
            </div>
        </>
    )
}