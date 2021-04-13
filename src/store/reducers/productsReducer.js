import {SET_ALL_PRODUCTS} from "../constants";

const initState = {
    all: {},
};

const productsReducer = (state= initState, {type,payload}) => {
    switch (type) {
        case SET_ALL_PRODUCTS:
            return {
                ...state,
                all: {...payload},
            };
        default:
            return state;
    }
}

export default productsReducer;