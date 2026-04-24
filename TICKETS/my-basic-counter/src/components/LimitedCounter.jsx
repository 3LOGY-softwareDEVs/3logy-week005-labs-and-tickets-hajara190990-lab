import { useState } from 'react';

function LimitedCounter({ min = 0, max = 10 }) {
  const [count, setCount] = useState(min);

  const increment = () => {
    if (count < max) setCount(count + 1);
  };

  const decrement = () => {
    if (count > min) setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>Limited Counter</h2>
      <p>Count: {count}</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(count / max) * 100}%` }}
        ></div>
      </div>
      {count === max && <p style={{ color: "red" }}>Max reached!</p>}
      <button onClick={increment} disabled={count === max}>Increment</button>
      <button onClick={decrement} disabled={count === min}>Decrement</button>
      <button onClick={() => setCount(min)}>Reset</button>
    </div>
  );
}

export default LimitedCounter;
