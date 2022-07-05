import * as ActionType from "../ActionType"

const initialState = {
    isLoading: false,
    medicine: [],
    errors: ''
}

export const medicinereducer = (state = initialState, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionType.GET_MEDICINES:
            return {
                ...state,
                isLoading: false,
                medicine: action.payload,
                errors: ''
            }
        default:
            return state
    }
}