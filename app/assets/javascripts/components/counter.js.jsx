import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick}>Count Up!</button>
      </div>
    );
  }
}

export default Counter;
