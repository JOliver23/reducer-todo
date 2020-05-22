import React, { useState, useReducer} from 'react';
import {initialState, taskReducer} from './reducers/index';
import TodoList from './components/TodoList';

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
      <h1>Lambda's Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="New Todo Task..." value={newTask} onChange={handleChanges} />      
        <button onClick={() => dispatch({type: "ADD_TASK", payload: newTask})} type='submit'>Add Todo</button>
        <button onClick={() => dispatch({type: "CLEAR_COMPLETE", payload: newTask})}>Clear Complete</button>
      </form>
      <TodoList task={task} dispatch={dispatch}/>
    </div>
  );
}

export default App;
