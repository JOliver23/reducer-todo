import React, {useState, useReducer} from 'react';
import {initialState, taskReducer} from '../reducers';
import Todo from './Todo'; 

const TodoForm = () => {
    const [todoState, dispatch] = useReducer(taskReducer, initialState);
    const [newTodo, setNewTodo] = useState(initialState.task);
    console.log("todostate in todoform: ", todoState);
    
    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return (
        <div>
            <h1>Lambda Todo's</h1>
            <label htmlFor="new-todo">
                <input
                    type="text"
                    name="newTodo"
                    placeholder="New Todo Task..."
                    value={newTodo}
                    onChange={handleChanges}
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