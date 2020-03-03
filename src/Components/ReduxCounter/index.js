import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionDecrementCount, actionIncrementCount } from './actions/countActions';

class ReduxCounter extends Component {
  render() {
    const { increment, decrement, count } = this.props;
    return (
            <div className="flexWrapper">
                <p>Redux Counter</p>
                <h1 className="digit">
                    {count}
                </h1>
                <div className="buttons">
                    <button className="button plus"
                            onClick={increment}>
                        +
                    </button>
                    <button className="button substr"
                            onClick={count > 0 ? decrement : null}>
                        -
                    </button>
                </div>
            </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(actionIncrementCount()),
  decrement: () => dispatch(actionDecrementCount()),
});


const WrappedReduxCounterComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxCounter);

export { WrappedReduxCounterComponent as default };
