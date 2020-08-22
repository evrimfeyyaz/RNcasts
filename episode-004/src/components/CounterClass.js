import React from "react";
import "./Counter.css";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
    };
  }

  handleStepChange = (event) => {
    const newStep = parseInt(event.currentTarget.value);

    this.setState({
      step: newStep,
    });
  };

  handleIncrementCounterClick = () => {
    this.setState((state) => ({
      counter: state.counter + state.step,
    }));
  };

  render() {
    const { counter, step } = this.state;

    return (
      <div className="container">
        <p className="counter">{counter}</p>
        <input
          type="number"
          className="number-input"
          value={step}
          onChange={this.handleStepChange}
        />
        <button className="button" onClick={this.handleIncrementCounterClick}>
          Increment Counter
        </button>
      </div>
    );
  }
}
