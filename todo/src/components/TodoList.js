import React, {useReducer} from 'react';
import Todo from './Todo'; 

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