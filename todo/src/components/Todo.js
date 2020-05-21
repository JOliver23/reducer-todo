import React from 'react';

const Todo = (props) => {
    return (
        <div id={props.task.id} className="todo-task" dispatch={"TOGGLE_COMPLETE"}>
           <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;
