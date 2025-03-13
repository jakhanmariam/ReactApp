import React, { useState } from "react";
import '../index.css';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText("");
  };

  return (
    <div>
      <input className="inp"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="new task"
      />
      <button className="btn" onClick={handleAddTask}> ➕ </button>
    </div>
  );
}

export default TaskInput;
