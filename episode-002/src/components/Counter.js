import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  function incrementCounter(step) {
    setCounter((prevCounter) => prevCounter + step);
  }

  function handleIncrementCounterByOneClick() {
    incrementCounter(1);
  }

  function handleIncrementCounterByTwoClick() {
    incrementCounter(2);
  }

  return (
    <div className="container">
      <p className="counter">{counter}</p>
      <button className="button" onClick={handleIncrementCounterByOneClick}>
        Increment Counter By 1
      </button>
      <button className="button" onClick={handleIncrementCounterByTwoClick}>
        Increment Counter By 2
      </button>
    </div>
  );
};
