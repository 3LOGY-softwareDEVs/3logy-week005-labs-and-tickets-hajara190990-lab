import "./App.css";
import BasicCounter from "./components/BasicCounter";
import LimitedCounter from "./components/LimitedCounter";
import MultipleCounters from "./components/MultipleCounters";

function App() {
  return (
    <div className="App">
      <h1>⚛️ Counter Showcase</h1>
      <BasicCounter />
      <LimitedCounter min={0} max={10} />
      <MultipleCounters />
    </div>
  );
}

export default App;
