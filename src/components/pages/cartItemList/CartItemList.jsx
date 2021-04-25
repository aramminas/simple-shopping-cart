import Calculator from "../../others/calculator/Calculator";
const defaultImage = "/assets/images/default-thumbnail.jpg";

const CartItemList = ({data, changeQuantity, removeProduct}) => {
    const {id, name, price, quantity, color, image} = data;

    return (
        <div className="cart-item-list">
            <div className="cart-item-image">
                <img src={image ? image : defaultImage} alt="goods"/>
            </div>
            <div className="cart-details">
                <div className="cart-item-name">{name}</div>
                <div className="cart-item-info" style={{backgroundColor: color}}/>
                <Calculator
                    id={id}
                    quantity={quantity}
                    changeQuantity={changeQuantity}
                />
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