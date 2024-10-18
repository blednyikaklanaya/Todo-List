/* eslint-disable react/prop-types */

import "./TodoList.css";
//style

import TodoItem from "../TodoItem/TodoItem";
//components

export default function TodoList({ todos, onRemoveTodo, onThroughTodo }) {
    return (
        <>

            <div
                className="todo-list__div">
                <ul className="todo-list">
                    {todos.map((todos) => (
                        <TodoItem
                            key={todos.id}
                            text={todos.text}
                            todoCompleted={todos.completed}
                            removeTodo={() => (onRemoveTodo(todos.id))}
                            throughTodo={() => (onThroughTodo(todos.id, todos.completed))} /> //give remove function a todoItem
                    ))}
                </ul>
            </div>

        </>

    )
}