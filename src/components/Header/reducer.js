import { FIX_HEADER } from "./constant";

export const initialState = {
    isFix: null,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FIX_HEADER:
            return {...state, isFix: action.payload};
        default:
            return state;
    }
}

export default reducer;