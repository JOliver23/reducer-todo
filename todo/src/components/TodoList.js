import React from 'react';
import Todo from './Todo'; 
import styled from 'styled-components';

const TodoDiv = styled.div`
    background: linear-gradient(45deg, papayawhip, rgb(255, 199, 94));
    border: .2rem solid gold;
    border-radius: 5%;
    width: 49%;
    padding: 2rem;
`;

const TodoList = (props) => {

    return (
        <TodoDiv>
            {props.task.map(task => (
                <Todo key={task.id} dispatch={props.dispatch} task={task} />
            ))}
        </TodoDiv>
    )
};

export default TodoList;