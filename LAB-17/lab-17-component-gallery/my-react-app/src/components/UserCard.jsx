import React from 'react';
import "../App.css";

function UserCard({ name, bio, avatar, skills }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} className="avatar" />
      <h3>{name}</h3>
      <p>{bio}</p>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
