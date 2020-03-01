import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionDecrementCount, actionIncrementCount} from "./actions/countActions";

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(actionIncrementCount()),
        decrement: () => dispatch(actionDecrementCount()),
    }
};

class ReduxCounter extends Component {

    render() {
        const {increment, decrement, count} = this.props;
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
        )
    }
}

export const WrappedReduxCounterComponent = connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
