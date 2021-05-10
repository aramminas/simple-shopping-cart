import {useState , useEffect} from "react";
import {useParams} from "react-router-dom"
import LayoutWrapper from "../layout/LayoutWrapper";
/* API */
import {getAllProducts} from "../../api/productApi";
/* components */
import LoaderContent from "../others/loader/LoaderContent";
import ProductBox from "./ProductBox";
import ProductNotFound from "./ProductNotFound";
/* styles */
import "./Product.scss";
/* constants */
const initError = {
    state: false,
    message: ""
};

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState(initError);
    const [notFound, setNotFound] = useState(false);

    useEffect(function (){

        getAllProducts(id)
            .then(({error, success, result}) => {
                if(error){
                    setError({
                        state: true,
                        message: error
                    });
                }
                if(success && Object.keys(result).length > 0){
                    setProduct(result);
                } else {
                    setNotFound(true);
                }
            })
            .catch(err => {
                if(err.message){
                    setError({
                        state: true,
                        message: err.message
                    });
                    setNotFound(true);
                }else {
                    setError({
                        state: true,
                        message: "An error occurred during the request!"
                    });
                    setNotFound(true);
                }
            });

    }, [id]);

    /* loader view */
    if(Object.keys(product).length === 0 && !notFound){
        return <LoaderContent/>
    }

    /* main view */
    return (
        <div className="product-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <i className="fa fa-opencart" aria-hidden="true"/>
                        <h1 className="product-symbol"> <i className="fa fa-ravelry" aria-hidden="true"/> </h1>
                        <h2 className="single-product-title">
                            <i className="fa fa-product-hunt" aria-hidden="true"/>
                            &nbsp;Detailed product description
                        </h2>
                    </div>
                    { error.state ?  /* error view */
                        <div className="col-md-12">
                            <div className="single-product-error-content">
                                <div className="alert alert-danger" role="alert">
                                    <strong>
                                        <i className="fa fa-exclamation-circle" aria-hidden="true"/>
                                        &nbsp;Error:
                                    </strong> {error.message}
                                </div>
                            </div>
                        </div>
                        :
                        !notFound ?
                            <ProductBox product={product}/>
                            :
                            <ProductNotFound/>
                    }
                </div>
            </div>
        </div>
    );
}

export default LayoutWrapper(Product);