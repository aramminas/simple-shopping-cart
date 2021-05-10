import {useContext} from "react";
/* contexts */
import CartContext from "../../store/context/cartContext";
/* constants */
import {MAKE_PURCHASE} from "../../constants";

const CartCheckout = () => {
    const {cart, dispatchCart} = useContext(CartContext);

    const makePurchase = () => {
        dispatchCart({
            type: MAKE_PURCHASE,
            payload: true
        });
    }

    return (
        <section className="right-section cart-box">
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-primary btn-lg btn-block" type="button" onClick={() => makePurchase()}>
                        Checkout
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <div>
                        <span>Items ({cart.items})</span>
                        <span>US ${cart.totalAmount}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="line-x"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="cart-subtotal-block">
                        <span>Subtotal</span>
                        <span>US ${cart.totalAmount}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartCheckout;