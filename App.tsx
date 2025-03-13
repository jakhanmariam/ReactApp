import './App.css'
import TaskList from "./hw06/TaskList";
import TaskInput from "./hw06/TaskInput";
import TaskFilter from "./hw06/TaskFilter";
import Task from "./hw06/Task";
import React, {useState} from 'react';


function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("")

  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

   const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleFilterChange = (query) => {
    setFilter(query);
  };

  



  return (
    <div className='container'>
      <h1>📝 My Tasks</h1>
    <TaskList tasks={tasks} filter={filter} toggleTask={toggleTask} deleteTask={deleteTask}/>
    <TaskInput addTask={addTask}/>
    <TaskFilter filter={filter} setFilter={handleFilterChange}/>
    </div>
  )

}

export default App;


