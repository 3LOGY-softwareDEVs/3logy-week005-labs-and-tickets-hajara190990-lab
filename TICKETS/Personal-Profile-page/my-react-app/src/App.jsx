import React from 'react';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="App">
      <Header
        name="Hajara Yahaya Abubakar"
        tagline="Aspiring Frontend Developer"
        profilePic="https://via.placeholder.com/150"
      />

      <About
        bio="I am passionate about building user-friendly web applications and learning new technologies."
        location="Abuja, Nigeria"
        interests="Coding, Reading, Traveling"
      />

      <Skills
        skills={[
          { name: "React", level: 80 },
          { name: "CSS", level: 70 },
          { name: "JavaScript", level: 85 },
        ]}
      />

      <Interests
        hobbies={["Photography", "Cooking", "Gaming", "Music"]}
      />
    </div>
  );
}

export default App;
