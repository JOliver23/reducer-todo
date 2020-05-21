import React from 'react';
import Todo from './Todo'; 
import {initialState, taskReducer} from '../reducers';

const TodoList = () => {
    return(
        <div className="todo-list">
            <Todo />
        </div>
    )
};

export default TodoList;