import React from 'react';
import Todo from './Todo'; 
import {initialState, taskReducer} from '../reducers';

const TodoList = (props) => {

    return (
        <div>
            {props.task.map(task => (
                <Todo key={task.id} dispatch={props.dispatch} task={task} />
            ))}
        </div>
    )
};

export default TodoList;