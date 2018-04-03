const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer - If state is undefined it will be initialized to initialState
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1 
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + 10 
        };
    }
    return state;
}

// Store - Needs reducer as it's the only thing that can update the state
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription - Allow you to not have to call getState(). It automatically tells the component to update
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({
    type: 'INC_COUNTER'
});

store.dispatch({
    type: 'ADD_COUNTER',
    value: 10
})

console.log(store.getState());

