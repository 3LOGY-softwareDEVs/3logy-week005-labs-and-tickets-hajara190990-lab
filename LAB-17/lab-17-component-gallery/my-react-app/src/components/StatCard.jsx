import React from 'react';
import "../App.css";

function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <span className="stat-icon">{icon}</span>
      <h4>{title}</h4>
      <p className="stat-value">{value}</p>
    </div>
  );
}

export default StatCard;
