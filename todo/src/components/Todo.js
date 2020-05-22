import React, {useReducer} from 'react';
import {initialState, taskReducer} from '../reducers';

const Todo = (props) => {
    console.log(props);
    const [task, dispatch] = useReducer(taskReducer, initialState);
    return (
        <div id={props.task.id} className="todo-task" onClick={() => props.dispatch({type: "TOGGLE_COMPLETE", payload: props.task.id})}>
           <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;
