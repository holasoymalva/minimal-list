// src/components/AddTaskModal.js

import React, { useState } from 'react';

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
        <input
          type="text"
          placeholder="Write your new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddTask}>Add task</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default AddTaskModal;