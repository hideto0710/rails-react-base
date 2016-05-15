import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
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
        <h2>{this.props.animalName}</h2>
      </div>
    );
  }
}

Counter.propTypes = {
  animalName: React.PropTypes.string,
};

export default Counter;
