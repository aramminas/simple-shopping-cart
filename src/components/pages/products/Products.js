import FirebaseFunctions from "./../../../firebase/FirebaseFunctions";
import {useState, useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {set_all_products} from  "../../../store/actions/productsAction";
import {add_product_to_cart, add_ids, add_total} from "../../../store/actions/cartAction";
/* components */
import ProductItem from "./ProductItem";

/* styles */
import "./Products.scss";
import Loader from "react-loader-spinner";

const initEmpty = {
    state: 0,
    message: "",
};

function Products(props){
    const [products, setProducts] = useState({});
    const [empty, setEmpty] = useState(initEmpty);
    const {products: { all: allProducts }, cart: { ids }} = useSelector(state => state);

    useEffect(function (){
        if(Object.keys(allProducts).length === 0){
            FirebaseFunctions.getAllData("products")
                .then(data => {
                    setProducts(data);
                    setEmpty( prevState => {
                        return {...prevState, state: false}
                    });
                    /* adding all products to store */
                    props.setAllProducts(data);
                })
                .catch(error => {
                    setEmpty({state: true, message: error.message});
                });
        }else {
            setProducts(allProducts);
        }
    }, []);

    const addToCart = (id) => {
        if(!ids.includes(id)){
            const prodPrice = products[id].price;
            props.addProductToCart({[id]:{...products[id]}});
            props.addIds(id);
            props.addTotal(+prodPrice);
        }
    }

    return (
        <div className="products-content">
            { empty.state === 0 || empty.state === true ?
                <div className="card pending-products">
                    <div className="card-body">
                        { empty.state === 0 ?
                            <>
                                <div>
                                    <span className="add-prod-loader">
                                        <Loader type="BallTriangle" color="#000000" height={80} width={80} />
                                    </span>
                                </div>
                                <div>
                                    <i className="fa fa-clock-o" aria-hidden="true"/>
                                    Loading products ...
                                </div>
                            </> :
                            <>
                                <div>
                                    <i className="fa fa-soundcloud fa-3x" aria-hidden="true"/>
                                </div>
                                <div>
                                    <i className="fa fa-database" aria-hidden="true"/>
                                    {empty.message}
                                </div>
                            </>
                        }
                    </div>
                </div> :
                <div className="product-items-content">
                    { Object.keys(products).map(key => <ProductItem key={key} id={key} data={products[key]} addToCart={addToCart}/>) }
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setAllProducts: (data) => {dispatch(set_all_products(data))},
        addProductToCart: (data) => {dispatch(add_product_to_cart(data))},
        addIds: (data) => {dispatch(add_ids(data))},
        addTotal: (data) => {dispatch(add_total(data))},
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Products);