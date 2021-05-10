import React from "react";

const CartHeader = () => {
    return (
        <div className="cart-header">
            <span>Your Cart</span>
            <span><i className="fa fa-times" aria-hidden="true"/></span>
        </div>
    );
}

export default CartHeader;