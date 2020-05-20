import React, {useReducer} from 'react';
import {taskReducer, initialState} from '../reducers';

const Todo = () => {
    const [newTodoState, dispatch] = useReducer(taskReducer, initialState);
    return (
        <div onClick={() => {
            dispatch({ type: "TOGGLE_COMPLETE"})
        }} className="todo-task">
            <p>{newTodoState.task}</p>
        </div>
    );
};

export default Todo;
