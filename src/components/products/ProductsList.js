import {useContext} from "react";
import {Link} from "react-router-dom";
/* contexts */
import ProductsContext from "../../store/context/productsContext";
import CartContext from "../../store/context/cartContext";
/* components */
import LoaderContent from "../others/loader/LoaderContent";

/* default values */
import {ADD_TO_CART, defaultImage} from "../../constants";

const ProductsList = () => {
    const {products} = useContext(ProductsContext);
    const {cart, dispatchCart} = useContext(CartContext);

    const addToCart = (product) => {
        if(!cart.ids.includes(product.id)){
            dispatchCart({
                type: ADD_TO_CART,
                payload: {...product}
            });
        }
    }

    /* loader view */
    if(products.length === 0){
        return <LoaderContent/>
    }

    /* main view */
    return (
        <div className="container">
            <div className="row mt-5">
                { products.map(item => (
                    <div className="col-md-4 mt-5" key={item.id}>
                        <div className="card">
                            <div className="image-box">
                                <img src={item.image ? item.image : defaultImage} className="card-img-top" alt="product"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{backgroundColor: item.color}}>Product color</li>
                                <li className="list-group-item">{item.price}</li>
                            </ul>
                            <div className="card-body cart-buttons">
                                <Link to={`/product/${item.id}`} className="btn btn-primary card-link">See more ...</Link>
                                { cart.ids.includes(item.id) ?
                                    <button className="btn btn-secondary" disabled={true}>
                                        <i className="fa fa-cart-plus" aria-hidden="true"/>
                                        &nbsp;Already added
                                    </button>
                                    :
                                    <button className="btn btn-success" onClick={() => addToCart(item)}>
                                        <i className="fa fa-cart-plus" aria-hidden="true"/>
                                        &nbsp;Add to Card
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsList;
