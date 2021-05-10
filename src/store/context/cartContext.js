import {createContext} from "react";

export const initCartState = {
    data: [],
    totalAmount: 0,
    items: 0,
    ids: [],
    ordered: {
        total: 0,
        count: 0
    }
};

const CartContext = createContext(initCartState);

export default CartContext;