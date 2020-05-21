import React, { useState, useReducer} from 'react';
import {initialState, taskReducer} from '../reducers';
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

  return (
    <div className="App">
      <h1>Lambda's Todo List</h1>
      <form>
        <input type="text" name="task" placeholder="New Todo Task..." value={newTask} onChange={handleChanges} />      
        <button onClick={() => dispatch({type: "ADD_TASK"})}>Add Todo</button>
        <button>Clear Complete</button>
      </form>
      <TodoList />
    </div>
  );
}

export default App;
