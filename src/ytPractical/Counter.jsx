import React, { useState, useRef } from 'react';

// By utilizing a ref to store the count value and updating it before setting the state, we can force React to re-render the component even if the state hasn't technically changed. This can be useful in certain scenarios where you need to imperatively trigger a re-render.

const Counter = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const forceReRender = () => {
    // This will force a re-render of the component
    counterRef.current = count;
    setCount(count);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={forceReRender}>Force Re-render</button>
    </div>
  );
};

export default Counter;
