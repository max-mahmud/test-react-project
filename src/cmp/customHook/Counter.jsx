import React from "react";
import useCounter from "./UseCounter";
//?Custom Hook
function Counter() {
  const counter = useCounter(0);

  return (
    <div>
      <p>Count: {counter.count}</p>
      <button onClick={counter.increment}>Increment</button>
      <button onClick={counter.decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
