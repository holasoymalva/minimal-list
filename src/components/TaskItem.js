// src/components/TaskItem.js

import React from 'react';
import './TaskItem.css';

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className="task-item">
      <span
        className={`task-title ${task.completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.title}
      </span>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>x</button>
    </div>
  );
}

export default TaskItem;