// src/components/TaskList.js

import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div className="task-list">
      <h2>To do</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;