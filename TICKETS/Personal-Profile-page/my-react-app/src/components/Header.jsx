import React from 'react';
import "../App.css";
function Header({ name, tagline, profilePic }) {
  return (
    <header className="header">
      <img src={profilePic} alt={name} className="profile-pic" />
      <h1>{name}</h1>
      <p className="tagline">{tagline}</p>
    </header>
  );
}

export default Header;
