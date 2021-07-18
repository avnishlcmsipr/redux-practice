import * as actionTypes from '../actions/actions'

const intState = {
    result: []
}

const reducer = (state = intState, action) => {
    switch (action.type) {
        case (actionTypes.STORE_RESULT):
            return {
                ...state,
                result: state.result.concat({ value: action.result, id: new Date() })
            }
        case (actionTypes.DELETE_RESULT):

            return {
                ...state,
                result: state.result.filter(resEl => resEl.id !== action.clickedId)
            }
    }
    return state;
}


export default reducer