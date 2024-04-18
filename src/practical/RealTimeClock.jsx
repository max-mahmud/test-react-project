import React, { useState, useEffect } from "react";

function RealTimeClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      <h2>Real-Time Clock</h2>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default RealTimeClock;
