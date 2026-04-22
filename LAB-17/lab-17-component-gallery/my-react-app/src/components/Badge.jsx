import React from 'react';
import "../App.css";

function Badge({ text, type = "info" }) {
  const colors = {
    success: "#4caf50",
    warning: "#ff9800",
    error: "#f44336",
    info: "#2196f3"
  };

  return (
    <span
      className="badge"
      style={{ backgroundColor: colors[type] || colors.info }}
    >
      {text}
    </span>
  );
}

export default Badge;
