import {useContext} from "react";
/* components */
import Calculator from "../../others/calculator/Calculator";
/* contexts */
import ItemsContext from "../../../context/ItemsContext";
/* default values */
const defaultImage = "/assets/images/default-thumbnail.jpg";

const CartItemList = ({data: {id, name, price, quantity, color, image}}) => {
    const {removeProduct} = useContext(ItemsContext);

    return (
        <div className="cart-item-list">
            <div className="cart-item-image">
                <img src={image ? image : defaultImage} alt="goods"/>
            </div>
            <div className="cart-details">
                <div className="cart-item-name">{name}</div>
                <div className="cart-item-info" style={{backgroundColor: color}}/>
                <Calculator id={id} quantity={quantity}/>
            </div>
            <div className="cart-item-price-content">
                <div className="cart-item-delete" onClick={() => removeProduct(id)}>
                    <span><i className="fa fa-trash" aria-hidden="true"/></span>
                </div>
                <div>{price}</div>
            </div>
        </div>
    );
}

export default CartItemList;