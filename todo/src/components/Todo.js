import React, {useReducer} from 'react';
import {taskReducer, initialState} from '../reducers';

const Todo = (props) => {

    return (
        <div id={props.task.id} dispatch={props.task.dispatch} className="todo-task">
           <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;
