import React, { Component } from 'react';
// Use connect to wrap component
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <button onClickk={this.props.onStoreResult}>Store Result</button>
                <ul>
                    <li onClick={this.props.onDeleteResult}></li>
                </ul>
            </div>
        );
    }
}

// Define what slice of state and actions you want, as large apps may have a large state & list of actions.
// State is only changed internally in component, therefore redux needs to 'connect'/map it's state to props
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}

// Actions are also connected/mapped from the reducer as props. 'type' is the only mandatory property
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', payload: 15}),
        onAddCounter: () => dispatch({type: 'ADD', payload: 10}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})
    };
}

// Connect takes a function and returns a fuction, which is then passed to Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter);