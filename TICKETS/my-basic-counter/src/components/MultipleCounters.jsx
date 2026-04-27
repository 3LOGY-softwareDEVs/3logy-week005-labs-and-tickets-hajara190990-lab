import { useState } from 'react';

function MultipleCounters() {
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  const removeCounter = (index) => {
    setCounters(counters.filter((_, i) => i !== index));
  };

  const increment = (index) => {
    setCounters(counters.map((c, i) => i === index ? c + 1 : c));
  };

  const decrement = (index) => {
    setCounters(counters.map((c, i) => i === index ? c - 1 : c));
  };

  const total = counters.reduce((sum, c) => sum + c, 0);

  return (
    <div className="counter">
      <h2>Multiple Counters</h2>
      <button onClick={addCounter}>Add Counter</button>
      <p>Total: {total}</p>
      {counters.map((count, index) => (
        <div key={index} className="counter-box">
          <p>Counter {index + 1}: {count}</p>
          <button onClick={() => increment(index)}>+</button>
          <button onClick={() => decrement(index)}>-</button>
          <button onClick={() => removeCounter(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default MultipleCounters;
