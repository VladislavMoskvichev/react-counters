import React, {Component} from 'react';
// import {createStore} from "redux";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};

class ReduxCounter extends Component {
    constructor() {
        super();
    }

    actionIncrementCount = () => {
        this.props.dispatch({type: 'INCREMENT'})
    };

    actionDecrementCount = () =>  {
        this.props.dispatch({type: 'DECREMENT'})
    };

    render() {
        return (
            <div className="flexWrapper">
                <p>Redux Counter</p>
                <h1 className="digit">
                    {this.props.count}
                </h1>
                <div className="buttons">
                    <button className="button plus"
                            onClick={this.actionIncrementCount}>
                        +
                    </button>
                    <button className="button substr"
                            onClick={this.props.count > 0 ? this.actionDecrementCount : null}>
                        -
                    </button>
                </div>
            </div>
        )
    }
}

export const WrappedReduxCounterComponent = connect(mapStateToProps)(ReduxCounter);
export default ReduxCounter;
