import * as ActionType from "../Action.Type"

// export const incrementcounter = () => (dispatch) => {
//     dispatch({type: ActionType.INCREMENT_COUNTER})
// }

// export const decrementcounter = () => (dispatch) => {
//     dispatch({type: ActionType.DECREMENT_COUNTER})
// }


export const incrementcounter= () => (dispatch) => {
    dispatch({type: ActionType.INCREMENT_COUNTER})
}

export const decrementcounter= () => (dispatch) => {
    dispatch({type: ActionType.DECREMENT_COUNTER})
}