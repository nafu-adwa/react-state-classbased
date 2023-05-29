import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

export default class MyCounter extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState(({ counter }) => {
      return {
        counter: counter + 1,
      };
    });
  };
  render() {
    return (
      <>
        <div>
          <CounterDisplayer value={this.state.counter} />
          {this.state.counter % 2 === 0 ? (
            <EvenCounterDisplayer value={this.state.counter} />
          ) : (
            <EvenCounterDisplayer value={this.state.counter - 1} />
          )}
        </div>
        <div>
          <button onClick={this.increment}>Increment</button>
        </div>
      </>
    );
  }
}

function Value() {
  return <></>;
}
