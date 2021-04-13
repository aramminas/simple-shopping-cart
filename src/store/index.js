import {applyMiddleware, combineReducers, compose, createStore} from "redux";

// Reducers **
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";

const AllReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

const InitialState = {};
const middleware = [];

const store = createStore(
    AllReducers,
    InitialState,
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);

export default store;