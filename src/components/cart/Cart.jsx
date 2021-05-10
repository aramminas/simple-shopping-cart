import {useContext} from "react";
/* contexts */
import CartContext from "../../store/context/cartContext";
/* components */
import LayoutWrapper from "../layout/LayoutWrapper";
import CartHeaderBlock2 from "./CartHeaderBlock2";
import CartItemsList from "./CartItemsList";
import CartCheckout from "./CartCeckout";
import EmptyCart from "./EmptyCart";
import ThankYou from "../thankYou/ThankYou";
/* styles */
import "./Cart.scss";

const Cart = () => {
    const {cart} = useContext(CartContext);

    /* thank you view */
    if (cart.ordered.total > 0) {
        return (
            <ThankYou count={cart.ordered.count} subtotal={cart.ordered.total}/>
        );
    }

    /* main view */
    return (
        <div className="container cart-content">
            <div className="row mb-5">
                <div className="col-md-12">
                    <i className="fa fa-opencart" aria-hidden="true"/>
                </div>
            </div>
            <CartHeaderBlock2 items={cart.items} />
            { cart.data.length > 0 ?
                <div className="row">
                    <div className="col-md-8">
                        <section className="left-section">
                            <CartItemsList data={cart.data}/>
                        </section>
                    </div>
                    <div className="col-md-4">
                        <CartCheckout />
                    </div>
                </div>
                :
                <div className="row empty-cart-section">
                    <EmptyCart/>
                </div>
            }
        </div>
    );
}

export default LayoutWrapper(Cart);