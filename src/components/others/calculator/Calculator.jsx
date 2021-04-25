import React, {useState, useEffect, useContext} from "react";
/* contexts */
import ItemsContext from "../../../context/ItemsContext";

const Calculator = ({id, quantity}) => {
    const maxCount = 99;
    const [count, setCount] = useState(1);
    const {changeQuantity} = useContext(ItemsContext);

    useEffect(() => {
        setCount(quantity);
    }, [quantity]);

    const handleIncreaseProduct = () => {
        changeQuantity(id, count + 1);
    }

    const handleDecreaseProduct = () => {
        if(count > 1){
            changeQuantity(id, count - 1);
        }
    }

    const handleOnChange = (e) => {
        const val = e.target.value;
        if(val >= 0 && val < maxCount){
            setCount(() => val);
            changeQuantity(id, val);
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