import {ADD_PRODUCTS} from "../../constants";

function ProductsReducer(state, {type, payload}) {
    switch (type) {
        case ADD_PRODUCTS: {
            return [...state, ...payload];
        }
        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
}

export default ProductsReducer;