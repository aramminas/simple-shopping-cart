import React from "react";
import CartItemList from "../cartItemList/CartItemList";

const CartItem = ({items, changeQuantity, removeProduct}) => {

    return (
        <div className="cart-item">
            {items.map(item => <CartItemList
                key={item.id}
                data={item}
                changeQuantity={changeQuantity}
                removeProduct={removeProduct}
            />)}
        </div>
    );
}

export default CartItem;