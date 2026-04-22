import React from 'react';
import "../App.css";
function About({ bio, location, interests }) {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Interests:</strong> {interests}</p>
    </section>
  );
}

export default About;
