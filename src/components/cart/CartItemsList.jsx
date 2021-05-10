import {useContext} from "react";
/* contexts */
import CartContext from "../../store/context/cartContext";
/* components */
import Calculator from "./Calculator";
/* constants */
import {defaultImage, REMOVE_PRODUCT} from "../../constants";

const CartItemsList = ({data}) => {
    const {dispatchCart} = useContext(CartContext);

    const removeProduct = (id) => {
        dispatchCart({
            type: REMOVE_PRODUCT,
            payload: id
        });
    }

    return (
        <>
            {data.map(item => (
                <div className="row cart-box cart-item-box" key={item.id}>
                    <div className="col-md-12">
                        <h2>{item.name}</h2>
                        <hr/>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3 cart-image">
                                <img src={item.image ? item.image : defaultImage} alt="cart product"/>
                            </div>
                            <div className="col-md-5">
                                <div className="cart-item-description">{item.description}</div>
                                <div style={{backgroundColor: item.color, width: '50%'}}>
                                    Product color
                                </div>
                            </div>
                            <div className="col-md-2">
                                <Calculator id={item.id} quantity={item.quantity}/>
                            </div>
                            <div className="col-md-2 cart-item-price">
                                <div>US {item.price}</div>
                                <div>
                                   <small>Total $({item.currentAmount.toFixed(2)})</small>
                                </div>
                                <div>
                                    <small>Free shipping</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="button" className="btn btn-outline-dark btn-sm float-right remove-cart-item"
                            onClick={() => removeProduct(item.id)}
                        >Remove</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CartItemsList;