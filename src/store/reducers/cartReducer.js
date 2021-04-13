import {
    CART_STATE,
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_FROM_CART,
    ADD_IDS,
    DELETE_IDS,
    CART_ADD_SUBTOTAL,
    CART_SUBTRACT_SUBTOTAL,
    RESET_CART,
} from "../constants";

const initState = {
    state: false,
    cart: {},
    ids: [],
    total: 0,
};

const cartReducer = (state= initState, {type,payload}) => {
    switch (type) {
        case CART_STATE:
            return {
                ...state,
                state: payload,
            };
        case ADD_PRODUCT_TO_CART:
            let newStateCart = {...state.cart, ...payload};
            return {
                ...state,
                cart: {...newStateCart},
            };
        case DELETE_PRODUCT_FROM_CART:
            let tempCart = {...state.cart};
            delete tempCart[payload];
            return {
                ...state,
                cart: {...tempCart},
            };
        case ADD_IDS:
            const idsArray = [...state.ids];
            idsArray.push(payload);
            return {
                ...state,
                ids: [...idsArray],
            };
        case DELETE_IDS:
            const deleteArray = state.ids.filter(id => id !== payload);
            return {
                ...state,
                ids: [...deleteArray],
            };
        case CART_ADD_SUBTOTAL:
            return {
                ...state,
                total: state.total + payload,
            };
        case CART_SUBTRACT_SUBTOTAL:
            return {
                ...state,
                total: state.total - payload,
            };
        case RESET_CART:
            return {
                ...initState,
            };
        default:
            return state;
    }
}

export default cartReducer;