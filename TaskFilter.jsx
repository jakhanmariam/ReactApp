import React from "react";
import '../index.css';

function TaskFilter({ filter, setFilter }) {
  return (
    <div>
      <input className="inp"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="search for tasks"
      />
    </div>
  );
}

export default TaskFilter;
