import {useSelector} from "react-redux";
/* components */
import Products from "../products/Products";
import Welcome from "../welcome/Welcome";
import Cart from "../cart/Cart";


function Main(){
    const {state: cartState} = useSelector(state => state.cart);
    return (
        <div className="container">
            <Welcome/>
            <Products/>
            {cartState && <Cart/>}
        </div>
    );
}

export default Main;