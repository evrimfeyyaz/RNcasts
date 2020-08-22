import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  function handleIncrementCounterClick() {
    setCounter((prevCounter) => prevCounter + step);
  }

  function handleStepChange(event) {
    const newStep = parseInt(event.currentTarget.value);

    setStep(newStep);
  }

  return (
    <div className="container">
      <p className="counter">{counter}</p>
      <input
        type="number"
        className="number-input"
        value={step}
        onChange={handleStepChange}
      />
      <button className="button" onClick={handleIncrementCounterClick}>
        Increment Counter
      </button>
    </div>
  );
};
