const initialState = {
    menu: [],
    loading: true,
    error: false,
    itemsInCart: [],
    totalPrice: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true,
            }
        case 'MENU_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const itemIdx = state.itemsInCart.findIndex(item => item.id === id);
            if(itemIdx >= 0) {
                const itemInState = state.itemsInCart.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty
                }
                return {
                    ...state,
                    itemsInCart: [
                        ...state.itemsInCart.slice(0, itemIdx),
                        newItem,
                        ...state.itemsInCart.slice(itemIdx + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            }
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                url: item.url,
                id: item.id,
                price: item.price,
                qtty: 1
            }
            return {
                ...state,
                itemsInCart: [
                    ...state.itemsInCart,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            }
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const removedIdx = state.itemsInCart.findIndex(item => item.id === idx);
            const price = state.itemsInCart[removedIdx]['price'] * state.itemsInCart[removedIdx]['qtty'];
            return {
                ...state,
                itemsInCart: [
                    ...state.itemsInCart.slice(0, removedIdx),
                    ...state.itemsInCart.slice(removedIdx + 1)
                ],
                totalPrice: state.totalPrice - price
            }
        default:
            return state;
    }
}