const CartFooter = ({subtotal, toOrder}) => {
    return (
        <div className="cart-footer">
            <div className="cart-total">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div>
                <button type="button" className="btn btn-info btn-block" onClick={toOrder}
                        disabled={!subtotal}
                >Checkout</button>
            </div>
        </div>
    );
}

export default CartFooter;