
export const initialState = {
    test: '12312',
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGEUSER':
            return state;
        default:
            return state;
    }
}

export default reducer;