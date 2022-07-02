// import * as ActionType from "../Action.Type"

// const initialState = {
//     counter: 0
// }

// export const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ActionType.INCREMENT_COUNTER:
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         case ActionType.DECREMENT_COUNTER:
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }

//         default:
//             return state
//     }
// }


import * as ActionType from "../Action.Type"

const initialSate = {
   counter : 0
}

export const counterReducer = (state=initialSate,action) => {
    switch(action.type) {
        case ActionType.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case ActionType.DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
            default:
                return state
    }
}