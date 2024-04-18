import { useState } from "react";
//?Custom Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return {
    count,
    increment,
    decrement,
  };
}

export default useCounter;
