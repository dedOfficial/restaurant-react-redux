const initialState = {
    menu: [],
    loading: true,
    error: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false,
                error: state.error
            }
        case 'MENU_REQUESTED':
            return {
                menu: state.menu,
                loading: true,
                error: state.error
            }
        case 'MENU_ERROR':
            return {
                menu: state.menu,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}