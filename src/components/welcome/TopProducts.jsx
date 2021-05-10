import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Slider from "react-slick";
/* context */
import ProductsContext from "../../store/context/productsContext";
/* components */
import LoaderContent from "../../components/others/loader/LoaderContent";
/* styles */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* constants */
import {defaultImage} from "../../constants";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
};

const TopProducts = () => {
    const {products} = useContext(ProductsContext);
    const [loader, setLoader] = useState(true);

    useEffect(function (){
        if(products.length > 0){
            setLoader(false);
        }
    }, [products]);


    /* Loader view */
    if(loader){
        return <LoaderContent height="vh-50"/>;
    }

    /* main view */
    return (
        <div className="top-products container">
            <h2 className="prod-title">Top Products</h2>
            <Slider {...settings}>
                { products.slice(0, 9).map(item => (
                    <div className="card welcome-card" key={item.id}>
                        <img className="card-img-top slider-image" src={item.image ? item.image : defaultImage} alt="product"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text" style={{backgroundColor: `${item.color}`}}>{item.description}</p>
                            <Link to={`/product/${item.id}`} className="btn btn-primary">Detailed</Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TopProducts;