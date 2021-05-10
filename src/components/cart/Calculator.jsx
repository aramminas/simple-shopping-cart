import React, {useState, useEffect, useContext} from "react";
/* contexts */
import CartContext from "../../store/context/cartContext";
import {
    INCREASE_THE_QUANTITY,
    DECREASE_THE_QUANTITY,
    SET_THE_QUANTITY
} from "../../constants";

const Calculator = ({id, quantity}) => {
    const maxCount = 99;
    const [count, setCount] = useState(1);
    const {dispatchCart} = useContext(CartContext);

    useEffect(() => {
        setCount(quantity);
    }, [quantity]);

    const handleIncreaseProduct = () => {
        if(count < maxCount){
            dispatchCart({
                type: INCREASE_THE_QUANTITY,
                payload: {id, count: count +1}
            });
            setCount( count +1);
        }
    }

    const handleDecreaseProduct = () => {
        if(count > 1){
            dispatchCart({
                type: DECREASE_THE_QUANTITY,
                payload: {id, count: count -1}
            });
            setCount( count -1);
        }
    }

    const handleOnChange = (e) => {
        const val = e.target.value;
        if(val >= 0 && val <= maxCount){
            dispatchCart({
                type: SET_THE_QUANTITY,
                payload: {id, count: val}
            });
            setCount( val);
        }
    }

    return (
        <div className="cart-item-quantity buttons_added">
            <input type="button" value="-" className="minus" onClick={() => handleDecreaseProduct()} disabled={count === 1}/>
            <input type="number" step="1" min="1" max="99" name="quantity" value={count} className="input-text qty text"
                   size="4" onChange={(e) => handleOnChange(e)}
            />
            <input type="button" value="+" className="plus" onClick={() => handleIncreaseProduct()} disabled={count >= maxCount}/>
        </div>
    );
}

export default Calculator;