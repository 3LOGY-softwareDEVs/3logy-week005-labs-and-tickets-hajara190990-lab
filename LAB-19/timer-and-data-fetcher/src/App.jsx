
import StopWatch from "./components/StopWatch";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>useEffect Patterns</h1>
      <StopWatch />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
