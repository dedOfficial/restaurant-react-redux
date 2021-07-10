const initialState = {
    menu: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload
            }
        default:
            return state;
    }
}