import React, { Component } from 'react';
// Use connect to wrap component
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Define what slice of state and actions you want, as large apps may have a large state & list of actions.
// State is only changed internally in component, therefore redux needs to 'connect'/map it's state to props
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

// Actions are also connected/mapped from the reducer as props. 'type' is the only mandatory property
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, payload: 15}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, payload: 10}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, payload: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, payload: id})
    };
}

// Connect takes a function and returns a fuction, which is then passed to Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter);