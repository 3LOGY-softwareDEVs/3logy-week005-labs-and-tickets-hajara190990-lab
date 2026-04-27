import { useState, useEffect } from 'react';
import "../App.css";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
    setLaps([]);
  };

  const recordLap = () => {
    setLaps([...laps, formatTime(seconds)]);
  };

  return (
    <div className="stopwatch">
      <h2>⏱️ Stopwatch</h2>
      <p className="time-display">{formatTime(seconds)}</p>
      <div className="buttons">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={recordLap} disabled={!isRunning}>Lap</button>
      </div>
      <ul className="laps">
        {laps.map((lap, idx) => (
          <li key={idx}>Lap {idx + 1}: {lap}</li>
        ))}
      </ul>
    </div>
  );
}

export default StopWatch;
