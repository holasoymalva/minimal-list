// src/components/ProgressBar.js

import React from 'react';

function ProgressBar({ level, completedTasks }) {
  const progress = (completedTasks % 10) * 10;
  return (
    <div className="progress-container">
      <div className="level-info">
        <span>Level: {level}</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;