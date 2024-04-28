import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const timer = setInterval(() => {
      switch (color) {
        case "red":
          setColor("green");
          break;
        case "green":
          setColor("yellow");
          break;
        case "yellow":
          setColor("red");
          break;
        default:
          setColor("red");
          break;
      }
    }, 1000); // Change color every 3 seconds

    return () => clearInterval(timer);
  }, [color]);

  return (
    <div style={{ marginTop: "10px", border: "blue 2px solid" }}>
      <div className="light red" style={{ backgroundColor: color === "red" ? "red" : "transparent" }} />
      <div
        className="light yellow"
        style={{ backgroundColor: color === "yellow" ? "yellow" : "transparent" }}
      />
      <div className="light green" style={{ backgroundColor: color === "green" ? "green" : "transparent" }} />
    </div>
  );
};

export default TrafficLight;
