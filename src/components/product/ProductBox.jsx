import {useState, useEffect, useContext} from "react";
/* contexts */
import CartContext from "../../store/context/cartContext";
/* constants */
import {defaultImage, ADD_TO_CART} from "../../constants";

const ProductBox = ({product}) => {
    const {cart, dispatchCart} = useContext(CartContext);
    const [alreadyAdded, setAlreadyAdded] = useState(false);

    useEffect(function (){
        let isset = checkAvailabilityOfTheProduct();
        if(isset){
            setAlreadyAdded(isset);
        }
    },[cart.data]);

    const addToCart = () => {
        let isset = checkAvailabilityOfTheProduct();

        if(!isset){
            dispatchCart({
                type: ADD_TO_CART,
                payload: {...product}
            });
        }
    }

    const checkAvailabilityOfTheProduct = () => {
        let isset = false;
        cart.data.forEach(item => {
            if(item.id === product.id){
                isset = true;
            }
        });
        return isset;
    }

    return (
        <div className="col-md-12">
            <div className="single-product-box">
                <section className="single-product-section">
                    <div className="row single-product-row">
                        <div className="col-md-7 mb-4">
                            <div className="view">
                                <img
                                    src={product.image ? product.image : defaultImage}
                                    className="img-fluid" alt="single product"/>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-center single-product-info-block">
                            <div>
                                <h3 className="font-weight-bold">{product.name}</h3>
                                <hr/>
                                <p className="single-product-p">{product.description}</p>
                                <p className="single-product-p" style={{backgroundColor: product.color}}>Product Color</p>
                                <p className="single-product-p">Price: {product.price}</p>
                                <hr/>
                                { alreadyAdded ?
                                    <button type="button" className="btn btn-orange single-product-add" disabled={true}>
                                        Already added
                                    </button>
                                    :
                                    <button type="button" className="btn btn-orange single-product-add" onClick={() => addToCart()}>
                                        Add to cart
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProductBox;