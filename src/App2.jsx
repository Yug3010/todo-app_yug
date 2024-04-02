import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App2 = () => {
    let [se, se1] = useState("");
    let [w, wr] = useState([]);

    let addTodo = () => {
        wr([...w, { id: uuidv4(), se, iscompleted: false }]);
        se1("");
    };

    let handleInputChange = (e) => {
        se1(e.target.value);
    };

    let handleCheckboxChange = (e) => {
        let id = e.target.name;

        let updatedTodos = w.map((todo) =>
            todo.id === id ? { ...todo, iscompleted: !todo.iscompleted } : todo
        );

        wr(updatedTodos);
    };

    let deleteTodo = (id) => {
        let updatedTodos = w.filter((todo) => todo.id !== id);
        wr(updatedTodos);
    };

    let editTodo = (id) => {
        let todoToEdit = w.find((todo) => todo.id === id);
        se1(todoToEdit.se);

        let updatedTodos = w.filter((todo) => todo.id !== id);
        wr(updatedTodos);
    };

    return (
        <div className="todo-container">
            <input
                type="text"
                value={se}
                onChange={handleInputChange}
                className="todo-input"
            />
            <button onClick={addTodo} className="add-button">
                Add
            </button>
            <ul className="todo-list">
                {w.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <input
                            type="checkbox"
                            name={todo.id}
                            onChange={handleCheckboxChange}
                            checked={todo.iscompleted}
                            className="todo-checkbox"
                        />
                        <div className={todo.iscompleted ? 'todo-text completed' : 'todo-text'}>
                            {todo.se}
                        </div>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="action-button delete-button"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => editTodo(todo.id)}
                            className="action-button edit-button"
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App2;
