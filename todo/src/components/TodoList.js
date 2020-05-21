import React, {useReducer} from 'react';
import Todo from './Todo'; 
import {initialState, taskReducer} from '../reducers';

const TodoList = () => {
    const [newTodoState, dispatch] = useReducer(taskReducer, initialState);
    console.log("newTodoState in TodoList: ", newTodoState.todos);
    return(
        <div className="todo-list">
            {newTodoState.todos.map(todo => (
                <Todo key={todo.id}/>
            ))}
        </div>
    )
};

export default TodoList;