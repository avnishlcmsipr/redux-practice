import * as actionTypes from '../actions/actions'

const intState = {
    counter: 50
}

const reducer = (state = intState, action) => {
    switch (action.type) {
        case (actionTypes.INCREMENT):
            return {
                ...state,
                counter: state.counter + 1
            }
        case (actionTypes.DECREMENT):
            return {
                ...state,
                counter: state.counter - 1
            }
        case (actionTypes.ADD):
            return {
                ...state,
                counter: state.counter + action.value
            }
        case (actionTypes.SUBTRACT):
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
}


export default reducer