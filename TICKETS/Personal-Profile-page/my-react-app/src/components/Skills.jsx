import React from 'react';
import "../App.css";
function Skills({ skills }) {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
