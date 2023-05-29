import React, { Component } from "react";

export default class CounterDisplayer extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Counter display: {this.props.value}</h1>
        </div>
      </>
    );
  }
}
