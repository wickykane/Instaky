import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux';

const initRouteState = {
    location: null
};

export function routeReducer(state = initRouteState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            return {
                ...state,
                location: action.payload,
            };
        default:
            return state;
    }
}

export default function initReducer(injectedReducers) {
    return combineReducers({
        route: routeReducer,
        ...injectedReducers,
    })
}