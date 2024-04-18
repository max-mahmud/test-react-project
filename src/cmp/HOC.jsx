import React, { useState } from "react";

// Define a Higher Order Component
const withCounter = (Counter) => () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  return <Counter count={count} incrementCount={incrementCount} />;
};

const Counter = ({ count, incrementCount }) => (
  <div>
    <h3>Count: {count}</h3>
    <button onClick={incrementCount}>Increment</button>
  </div>
);

// Enhance the Counter component with the withCounter HOC
const EnhancedCounter = withCounter(Counter);

const App = () => (
  <div>
    <h2>Counter App with HOC</h2>
    <EnhancedCounter />
  </div>
);

export default App;
