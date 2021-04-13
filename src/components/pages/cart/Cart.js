import {useState} from "react";
import {connect, useSelector} from "react-redux";
import {
    change_cart_state,
    add_total,
    delete_product_from_cart,
    subtract_total,
    delete_ids,
    reset_cart,
} from "../../../store/actions/cartAction";
/* components */
import CartItem from "./CartItem";
import "./Cart.scss";

function Cart(props){
    const {cart, total} = useSelector(state => state.cart);
    const [isOpen, setIsOpen] = useState(false);

    const closeCart = () => {
        props.changeCartState(false);
    }

    const deleteFromCart = (id, subtract) => {
        props.deleteProductFromCart(id);
        props.subtractTotal(subtract);
        props.deleteIds(id);
    }

    const thankYou = () => {
        setIsOpen(true);
        setTimeout( _ => props.resetCart(1), 5000);
    }

    return (
        <div className="shopping-cart">
            <div className="col-md-12 col-lg-4">
                <div className="summary">
                    <div className="summary-header">
                        <span>Your cart</span>
                        <span className="close-cart" onClick={closeCart}><i className="fa fa-times" aria-hidden="true"/></span>
                    </div>
                    { isOpen ?
                        <div className="thanks-you-content">
                            <h3>Thanks for shopping</h3>
                            <figure>
                                <img src="/assets/images/thank-you.jpg" alt="thank you"/>
                            </figure>
                        </div>
                        :
                        <>
                            <h3>Summary</h3>
                            <div className="summary-items">
                                { Object.keys(cart).length ?
                                    <>
                                        {
                                            Object.keys(cart).map(key => (<CartItem key={key} id={key} data={cart[key]}
                                                                                    deleteFromCart={deleteFromCart}/>))
                                        }
                                    </>
                                    :
                                    <div className="empty-cart">
                                        <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"/>
                                        <span> Cart is empty :( </span>
                                    </div>
                                }
                            </div>
                            <div className="summary-item">
                                <span className="text">Subtotal</span>
                                <span className="price">${total}</span>
                            </div>
                            <button type="button" className="btn btn-info btn-block" onClick={() => thankYou()}>Checkout</button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteProductFromCart: (data) => {dispatch(delete_product_from_cart(data))},
        changeCartState: (data) => {dispatch(change_cart_state(data))},
        addTotal: (data) => {dispatch(add_total(data))},
        deleteIds: (data) => {dispatch(delete_ids(data))},
        subtractTotal: (data) => {dispatch(subtract_total(data))},
        resetCart: (data) => {dispatch(reset_cart(data))},
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);