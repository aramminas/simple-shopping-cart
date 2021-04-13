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

export const change_cart_state = (data) => {
    return {
        type: CART_STATE, payload : data
    };
};

export const add_product_to_cart = (data) => {
    return {
        type: ADD_PRODUCT_TO_CART, payload : data
    };
};

export const delete_product_from_cart = (data) => {
    return {
        type: DELETE_PRODUCT_FROM_CART, payload : data
    };
};

export const add_ids = (data) => {
    return {
        type: ADD_IDS, payload : data
    };
};

export const delete_ids = (data) => {
    return {
        type: DELETE_IDS, payload : data
    };
};

export const add_total = (data) => {
    return {
        type: CART_ADD_SUBTOTAL, payload : data
    };
};

export const subtract_total = (data) => {
    return {
        type: CART_SUBTRACT_SUBTOTAL, payload : data
    };
};

export const reset_cart = (data) => {
    return {
        type: RESET_CART, payload : data
    };
};