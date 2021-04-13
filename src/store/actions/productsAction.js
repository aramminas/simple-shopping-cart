import {SET_ALL_PRODUCTS} from "../constants";

export const set_all_products = (data) => {
    return {
        type: SET_ALL_PRODUCTS, payload : data
    };
};
