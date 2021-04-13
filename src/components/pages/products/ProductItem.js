function ProductItem(props){
    const {id, data , addToCart} = props;

    return (
        <div className="card card-item">
            <img className="card-img-top" src={data.image} alt="Card"/>
            <div className="card-body">
                <h4 className="card-title">{data.name}</h4>
                <p className="card-text card-model">Model: {data.model}</p>
                <p className="card-text">{data.desc}</p>
                <p className="card-text">Price: {data.price}$</p>
                <button className="btn btn-block btn-primary" type="button" onClick={() => addToCart(id)} >Add to cart</button>
            </div>
        </div>
    );
}

export default ProductItem;