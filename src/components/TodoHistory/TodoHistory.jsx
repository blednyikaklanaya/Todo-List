/* eslint-disable react/prop-types */

import { useState } from "react";
import "./TodoHistory.css";

export default function TodoHistory({ historyTodoData }) {

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
                        <ul
                            className="hitory-list-todo">
                            {historyTodoData.map((oldTodo) => (
                                <li key={oldTodo.id} className="old-todo">{oldTodo.text}</li>
                            ))}
                        </ul>
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