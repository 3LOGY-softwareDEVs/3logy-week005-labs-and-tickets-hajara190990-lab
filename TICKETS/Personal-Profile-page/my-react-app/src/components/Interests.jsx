import React from 'react';
import "../App.css";

function Interests({ hobbies }) {
  return (
    <section className="interests">
      <h2>Interests</h2>
      <div className="hobby-list">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            {hobby}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;
