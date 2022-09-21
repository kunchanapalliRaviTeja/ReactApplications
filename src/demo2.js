import React from 'react';

class demo2 extends React.Component {
  state = {
    count: 0
  };

  handleClick = e => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };

  render() {
    return (
      <div>
        <button className="block" onClick={this.handleClick}>
          <div className="counter">{this.state.count}</div>
        </button>
      </div>
    );
  }
}

export default demo2;