import React from "react";
import Task from "./Task";
import '../index.css';

function TaskList({ tasks, filter, toggleTask, deleteTask }) {
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
