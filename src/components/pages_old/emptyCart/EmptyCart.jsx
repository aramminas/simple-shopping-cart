import React from "react";

const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <span className="empty-cart-icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"/> :(
            </span>
            <span>Your cart is empty!</span>
        </div>
    );
}

export default EmptyCart;