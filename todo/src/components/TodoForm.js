import React, {useState, useReducer} from 'react';
import Todo from './Todo';

const TodoForm = () => {
    return (
        <div>
            <h1>Lambda Todo's</h1>
            <label htmlFor="new-todo">
                <input
                    type="text"
                    name="todo"
                    placeholder="New Todo Task..."
                />
            </label>
            <button>Add</button>
            <button>Clear Completed</button>
        </div>
    )
};

export default TodoForm;