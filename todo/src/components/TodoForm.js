import React, {useState, useReducer} from 'react';
import {initialState, taskReducer} from '../reducers';

const TodoForm = () => {
    const [todoState, dispatch] = useReducer(taskReducer, initialState);
    const [newTodo, setNewTodo] = useState(initialState.task);
    
    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return (
        <div>
            <h1>Lambda Todo's</h1>
            <label htmlFor="new-todo">
                <input
                    type="text"
                    name="todo"
                    placeholder="New Todo Task..."
                    value={newTodo}
                    handleChang={handleChanges}
                />
            </label>
            <button onClick={() => {
                dispatch({type: "ADD_TASK", payload: newTodo})
            }}>Add</button>
            <button>Clear Completed</button>
        </div>
    )
};

export default TodoForm;