import React from 'react';
import "./App.css";
import UserCard from "./components/UserCard";
import ProgressBar from "./components/ProgressBar";
import Badge from "./components/Badge";
import StatCard from "./components/StatCard";

function App() {
  return (
    <div className="App">
      <h1>⚛️ React Component Gallery</h1>

      {/* Section 1: User Cards */}
      <section>
        <h2>User Cards</h2>
        <UserCard
          name="Usman Idris"
          bio="Frontend developer passionate about UI/UX."
          avatar="https://via.placeholder.com/100"
          skills={["React", "CSS", "JavaScript"]}
        />
        <UserCard
          name="Sam Aboi"
          bio="Backend engineer specializing in APIs."
          avatar="https://via.placeholder.com/100"
          skills={["Node.js", "Express", "MongoDB"]}
        />
      </section>

      {/* Section 2: Progress Bars */}
      <section>
        <h2>Progress Bars</h2>
        <ProgressBar label="React Mastery" percentage={80} color="#61dafb" />
        <ProgressBar label="Node.js Mastery" percentage={60} color="#68a063" />
      </section>

      {/* Section 3: Badges */}
      <section>
        <h2>Badges</h2>
        <Badge text="Active" type="success" />
        <Badge text="Pending" type="warning" />
        <Badge text="Error" type="error" />
        <Badge text="Info" />
      </section>

      {/* Section 4: Stat Cards */}
      <section>
        <h2>Statistics</h2>
        <StatCard title="Users" value="1,234" icon="👥" />
        <StatCard title="Revenue" value="$56,789" icon="💰" />
      </section>
    </div>
  );
}

export default App;
