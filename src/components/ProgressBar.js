import React from 'react';
import "../styles/progressBar.scss";

const ProgressBar = ({ levels =[] }) => {
  return (
    <div className="progress-bar">
      {levels.map((level, index) => (
        <div
          key={index}
          className={`progress-bar-segment ${level.label.toLowerCase()}`}
          style={{ width: `${level.percentage}%` }}
        >
          <span className="progress-bar-text">
            {level.label} ({level.vulnerabilities})
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
