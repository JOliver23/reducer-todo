import React from 'react';

const TodoList = () => {
    return(
        <div className="todo-list">
            <h2 className="task" complete={false}>Put task value here</h2>
            <p className="note">Put task description notes here</p>
        </div>
    )
};

export default TodoList;