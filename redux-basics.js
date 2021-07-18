const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Defining reducer (i am defining reducer first because store requires reducer)
const rootReducer = (state = initialState , action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        } 
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        } 
    }
    return state;
}

// Defining store
const store = createStore(rootReducer)
console.log(store.getState())

// Subscription
store.subscribe(() => {
    console.log('[Subscription:]', store.getState())
})

// Dispatching an action
store.dispatch({type:"INC_COUNTER"});
store.dispatch({type:"ADD_COUNTER", value: 5});
console.log(store.getState())

