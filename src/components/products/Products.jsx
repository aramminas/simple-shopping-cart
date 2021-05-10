/* components */
import LayoutWrapper from "../layout/LayoutWrapper";
import ProductsList from "./ProductsList";

/* styles */
import "./Products.scss";

const Products = () => {
    return (
        <section>
            <div className="container products-content">
                <h2 className="text-center">All products</h2>
                <ProductsList/>
            </div>
        </section>
    );
}

export default LayoutWrapper(Products);