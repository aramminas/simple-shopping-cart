import React, {useState, useEffect, useReducer} from "react";
import Routes from "./Routes";
/* API */
import {getAllProducts} from "./api/productApi";
/* contexts and reducers */
import ProductsContext from "./store/context/productsContext";
import CartContext, {initCartState} from "./store/context/cartContext";
import ProductsReducer from "./store/reducer/ProductsReducer";
import CartReducer from "./store/reducer/CartReducer";
/* components */
import CriticalErrors from "./components/errors/CriticalErrors";
/* constants */
import {ADD_PRODUCTS} from "./constants";
const initError = {
    state: false,
    message: ""
};

function App() {
    const [products, dispatchProducts] = useReducer(ProductsReducer, []);
    const [cart, dispatchCart] = useReducer(CartReducer, initCartState);
    const [error, setError] = useState(initError);

    useEffect(() => {
        getAllProducts()
            .then(({error, success, result}) => {
                if(error){
                    setError({
                        state: true,
                        message: error
                    });
                    console.log("ERROR", error);
                }
                setTimeout(() => {
                    if(success && Object.keys(result).length > 0){
                        dispatchProducts({type: ADD_PRODUCTS, payload: result});
                    }
                }, 2000);
            }).catch(err => {
                if(err.message){
                    setError({
                        state: true,
                        message: err.message
                    });
                    console.log("ERROR", err.message);
                }else {
                    setError({
                        state: true,
                        message: "An error occurred during the request!"
                    });
                    console.log("ERROR", "An error occurred during the request!");
                }
            });
    }, []);

    /* Critical Error view */
    if (error.state && error.message !== "") {
        return (
            <CriticalErrors message={error.message}/>
        );
    }

    /* APP main view */
    return (
        <ProductsContext.Provider value={{products, dispatchProducts}}>
            <CartContext.Provider value={{cart, dispatchCart}}>
                <Routes />
            </CartContext.Provider>
        </ProductsContext.Provider>
    );
}

export default App;
