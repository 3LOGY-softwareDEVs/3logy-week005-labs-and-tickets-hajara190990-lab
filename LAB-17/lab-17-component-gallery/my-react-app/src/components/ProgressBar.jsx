import React from 'react';
import "../App.css";

function ProgressBar({ label, percentage, color }) {
  return (
    <div className="progress-bar">
      <span className="progress-label">{label}</span>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
      <span className="progress-text">{percentage}%</span>
    </div>
  );
}

export default ProgressBar;
