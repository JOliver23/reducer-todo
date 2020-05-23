import React, { useState, useReducer} from 'react';
import {initialState, taskReducer} from './reducers/index';
import TodoList from './components/TodoList';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
  color: gold;
  background: linear-gradient(95deg, black, slategrey);
  border: .3rem dashed papayawhip;
  width: 55vw;

`;

function App() {
  const [task, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState("");
  const handleChanges = e => {
    setNewTask(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewTask("")
  };
  console.log(task)
  return (
    <div className="App">
      <Title>Lambda's Todo List</Title>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" name="task" placeholder="New Todo Task..." value={newTask} onChange={handleChanges} />      
        <button className="bttn" onClick={() => dispatch({type: "ADD_TASK", payload: newTask})} type='submit'>Add Todo</button>
        <button className="bttn" onClick={() => dispatch({type: "CLEAR_COMPLETE", payload: newTask})}>Clear Complete</button>
      </form>
      <TodoList task={task} dispatch={dispatch}/>
    </div>
  );
}

export default App;
