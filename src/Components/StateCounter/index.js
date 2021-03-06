import React, { Component } from 'react';

class StateCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    this.addClick = this.addClick.bind(this);
    this.substrClick = this.substrClick.bind(this);
  }

  addClick() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  substrClick() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    return (
            <div className="flexWrapper">
                <p>State Counter</p>
                <h1 className="digit">
                    {this.state.counter}
                </h1>
                <div className="buttons">
                    <button onClick={this.addClick} className="button plus">
                        +
                    </button>
                    <button onClick={this.state.counter > 0 ? this.substrClick : null} className="button substr">
                        -
                    </button>
                </div>
            </div>
    );
  }
}

export default StateCounter;
