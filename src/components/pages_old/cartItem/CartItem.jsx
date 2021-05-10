import React from "react";
import CartItemList from "../cartItemList/CartItemList";

const CartItem = ({items}) => {

    return (
        <div className="cart-item">
            {items.map(item => <CartItemList key={item.id} data={item}/>)}
        </div>
    );
}

export default CartItem;