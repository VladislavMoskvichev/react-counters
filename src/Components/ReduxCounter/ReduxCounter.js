import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionDecrementCount, actionIncrementCount} from "./actions/countActions";

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};

class ReduxCounter extends Component {

    render() {
        return (
            <div className="flexWrapper">
                <p>Redux Counter</p>
                <h1 className="digit">
                    {this.props.count}
                </h1>
                <div className="buttons">
                    <button className="button plus"
                            onClick={actionIncrementCount}>
                        +
                    </button>
                    <button className="button substr"
                            onClick={this.props.count > 0 ? actionDecrementCount : null}>
                        -
                    </button>
                </div>
            </div>
        )
    }
}

export const WrappedReduxCounterComponent = connect(mapStateToProps)(ReduxCounter);
