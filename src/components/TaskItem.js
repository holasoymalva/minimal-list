// src/components/TaskItem.js

import React from 'react';

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className="task-item">
      <span
        onClick={() => toggleComplete(task.id)}
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>x</button>
    </div>
  );
}

export default TaskItem;