import React, {useState, useEffect} from "react";
import axios from 'axios';
/* components */
import LoaderContent from "../../others/loader/LoaderContent";
import EmptyResult from "../../others/emptyResult/EmptyResult";
import CartHeader from "../cartHeader/CartHeader";
import CartFooter from "../cartFooter/CartFooter";
import CartItem from "../cartItem/CartItem";
import EmptyCart from "../emptyCart/EmptyCart";

/* styles */
import "./Cart.scss";

const Cart = () => {
    const [data, setData] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [loader, setLoader] = useState(true);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        axios.get(`/assets/database/MOCK_DATA.json`)
            .then(res => {
                const result = res.data;
                setTimeout(() => {
                    if(result.length > 0){
                        setData(result);
                        setLoader(false);
                        getSubtotal(result);
                    } else {
                        setEmpty(true);
                        setLoader(false);
                    }
                }, 3);
            })
    }, []);

    const getSubtotal = (data) => {
        setSubtotal(data.reduce((agg, {price, quantity}) => {
            return agg + (+price.replace("$", "") * quantity);
        }, 0));
    }

    const changeQuantity = (id, quantity = 1) => {
        setData(prevState => {
            const res = prevState.map(item => {
                return item.id === id ? {...item, quantity} : item;
            });
            getSubtotal(res);
            return [...res];
        });
    }

    const removeProduct = (id) => {
        setData(prevState => {
            const res = prevState.filter(item => {
                return item.id !== id ;
            });
            getSubtotal(res);
            return [...res];
        });
    }

    /* Loader view */
    if(loader){
        return <LoaderContent/>;
    }

    /* Empty result view */
    if(empty){
        return <EmptyResult/>
    }

    /* Main Cart view */
    return (
        <div className="container">
            <div className="cart-body">
                <CartHeader/>
                { data.length
                    ?
                    <CartItem items={data} changeQuantity={changeQuantity} removeProduct={removeProduct}/>
                    :
                    <EmptyCart />
                }
                <CartFooter subtotal={subtotal}/>
            </div>
        </div>
    );
}

export default Cart;