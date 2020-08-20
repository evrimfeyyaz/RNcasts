import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div className="container">
      <p className="counter">{counter}</p>
      <button className="button" onClick={incrementCounter}>
        Increment Counter
      </button>
    </div>
  );
};
