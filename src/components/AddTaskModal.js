// src/components/AddTaskModal.js

import React, { useState } from 'react';
import './AddTaskModal.css';

function AddTaskModal({ addTask, closeModal }) {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim() === '') return;
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };
    addTask(newTask);
    setTitle('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>×</button>
        <input
          type="text"
          className="task-input"
          placeholder="Write your new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="add-new-task-button" onClick={handleAddTask}>Add task</button>
      </div>
    </div>
  );
}

export default AddTaskModal;