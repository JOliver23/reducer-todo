import React from 'react';

const Todo = props => {
    const handleClick = e => {
        props.toggleComplete(props.todo.id);
    };
    return (
        <div onClick="" className="">
            <p>props.todo.task</p>
            <p>props.todo.note</p>
        </div>
    );
};

export default Todo;
