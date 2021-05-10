const ProductNotFound = () => {

    return (
        <div className="col-md-12">
            <div className="empty-product">
                <span className="empty-product-icon">
                   <i className="fa fa-exclamation-triangle" aria-hidden="true"/>
                    &nbsp;:(
                </span>
                <span>
                    This product was not found!
                </span>
            </div>
            <div className="alert alert-warning" role="alert">
                <i className="fa fa-exclamation" aria-hidden="true"/>
                &nbsp;Please contact customer support to let us know how you chose this product!
            </div>
        </div>
    );
}

export default ProductNotFound;