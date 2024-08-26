// src/App.js

import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [level, setLevel] = useState(1);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const savedLevel = parseInt(localStorage.getItem('level')) || 1;
    const savedCompletedTasks = parseInt(localStorage.getItem('completedTasks')) || 0;

    setTasks(savedTasks);
    setLevel(savedLevel);
    setCompletedTasks(savedCompletedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('level', level.toString());
    localStorage.setItem('completedTasks', completedTasks.toString());
  }, [tasks, level, completedTasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setShowModal(false);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: !task.completed };
        if (updatedTask.completed) {
          incrementProgress();
        } else {
          decrementProgress();
        }
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const incrementProgress = () => {
    const newCompletedTasks = completedTasks + 1;
    setCompletedTasks(newCompletedTasks);
    if (newCompletedTasks % 10 === 0) {
      setLevel(level + 1);
    }
  };

  const decrementProgress = () => {
    const newCompletedTasks = completedTasks - 1;
    setCompletedTasks(newCompletedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Minima-list</h1>
      <ProgressBar level={level} completedTasks={completedTasks} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      <button className="add-task-button" onClick={() => setShowModal(true)}>+</button>
      {showModal && <AddTaskModal addTask={addTask} closeModal={() => setShowModal(false)} />}
    </div>
  );
}

export default App;