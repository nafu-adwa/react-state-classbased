import React, { Component } from "react";

export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <>
        <h1>Even counter display: {this.props.value}</h1>
      </>
    );
  }
}
