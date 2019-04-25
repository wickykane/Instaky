import { CHANGE_ITEM } from "./constant";

export const initialState = {}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ITEM:
            return {...state, test: 1} ;
        default:
            return state;
    }
}

export default reducer;