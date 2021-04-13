import {useState, useEffect} from "react";
import {connect} from "react-redux";
import {add_total} from "../../../store/actions/cartAction";

function CartItem(props){
    const {id, data, deleteFromCart} = props;
    const [count, setCount] = useState(1);
    const [maxCount, setMaxCount] = useState(10);
    const [prevCount, setPrevCount] = useState(1);

    useEffect(function (){
        if(+data.count < maxCount){
            setMaxCount(+data.count);
        }
    }, []);

    const changeCount = (e) => {
        let newCount = +e.target.value;
        let newSum = (newCount - prevCount) * data.price;
        props.addTotal(newSum);
        setCount(newCount);
        setPrevCount(newCount);
    }

    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={data.image} alt="product"/>
            </div>
            <div className="cart-item-desc">
                <div className="cart-item-desc-name">{data.name}</div>
                <div className="cart-item-desc-model">{data.model}</div>
                <div className="cart-item-desc-count">
                    <input type="number" id="count" className="form-control" name="count" min="1" max={maxCount}
                        value={count} onChange={(e) => changeCount(e)}
                    />
                </div>
            </div>
            <div className="cart-item-price">
                <div className="cart-item-delete" onClick={() => deleteFromCart(id, count*data.price)}>
                    <span><i className="fa fa-trash" aria-hidden="true"/></span>
                </div>
                <div>${data.price}</div>
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
        addTotal: (data) => {dispatch(add_total(data))},
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CartItem);