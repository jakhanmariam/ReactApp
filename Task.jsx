import React from "react";
import '../index.css';

function Task({ task, toggleTask, deleteTask }) {
  return (
    <div>
      <span>
        {task.text}
      </span>
      <button className="btn" onClick={() => toggleTask(task.id)}>✅</button>
      <button className="btn" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;