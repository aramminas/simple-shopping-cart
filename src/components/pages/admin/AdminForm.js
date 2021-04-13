import Loader from "react-loader-spinner";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import FirebaseFunctions from "./../../../firebase/FirebaseFunctions";

const initValues = {
    name: "",
    model: "",
    desc: "",
    price: 0,
    count: 0,
    image: "/assets/images/no_image.png",
};

const initValid = {
    name:  0,
    model:  0,
    desc:  0,
    price: 0,
    count: 0,
    image: 0,
}

const initImage = {
    data: null,
    file: null,
    name:  null,
};

const initState = {
    state: 0,
    text: "",
};

function AdminForm(){
    const [product, setProduct] = useState(initValues);
    const [valid, setValid] = useState(initValid);
    const [image, setImage] = useState(initImage);
    const [validation, setValidation] = useState(true);
    const [productState, setProductState] = useState(initState);

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setProduct(prevState => ({...prevState,[name]: value}));
        const validValue = !!value;
        setValid(prevState => ({...prevState,[name]: validValue}));
    }

    const onImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let file = event.target.files[0];
        const reader = new FileReader();
        setImage({ });
        if(file !== undefined &&
            (file.type === "image/jpeg" || file.type === "image/png" ||
                file.type === "image/jpg" || file.type === "image/gif")){
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setImage({
                    file,
                    name: file.name,
                    data: reader.result,
                });
            }
            setProductState({...initState});
        }else if(file !== undefined){
            setProductState({
                state: false,
                text: "Incorrect picture format ! ( jpg, jpeg, png, gif )",
            });
        }
        const validValue = !!value;
        setValid(prevState => ({...prevState,[name]: validValue}));
    }

    const addNewProduct = () => {
        /* checking empty fields */
        const validFields = {};
        let validForm = true;
        Object.keys(valid).forEach( key => {
            if(key !== "image" && (valid[key] === 0 || valid[key] === false)){
                validFields[key] = false;
                validForm = false;
            }else {
                validFields[key] = valid[key];
            }
        });
        setValid({...validFields});
        /* send data to insert new product */
        if(validForm){
            setValidation(false);
            startAddingProduct();
        }
    }

    const startAddingProduct = () => {
        if(image.file){
            FirebaseFunctions.addNewDataWithImage("products", image, uuidv4(), product)
                .then(response => {
                    if(response.message){
                        resetProductData();
                        setProductState({
                            state: true,
                            text: "Product was added successfully!"
                        });
                    }
                })
                .catch(error => {
                    setProductState({
                        state: false,
                        text: error.message,
                    });
                });
        } else {
            FirebaseFunctions.addNewData("products", uuidv4(), product)
                .then(response => {
                    if(response.message){
                        setProductState({
                            state: true,
                            text: "Product was added successfully!",
                        });
                        resetProductData();
                    }
                }).catch(error => {
                setProductState({
                    state: false,
                    text: error.message,
                });
            });
        }
    }

    const resetProductData = () => {
        setTimeout(function (){
            setProductState({...initState});
            setValidation(true);
            setValid({...initValid});
        }, 2000);

        setProduct({...initValues});
        setImage({});
    }

    return (
        <form action="/" method="post">
            <div className="form-row">
                <div className="col-lg-12 mb-3">
                    <label htmlFor="product-name">Product Name</label>
                    <input type="text" id="product-name" name="name" placeholder="Enter Product Name"
                       className={`form-control ${valid.name === true ? "is-valid" : valid.name === false ? "is-invalid" : ""}`}
                       value={product.name ? product.name : ""}
                       onChange={(e) => onChange(e)}
                       required/>
                    <div className="valid-feedback">
                        <i className="fa fa-check-square-o" aria-hidden="true"/>
                        completed!
                    </div>
                    <div className="invalid-feedback">
                        <i className="fa fa-minus-square-o" aria-hidden="true"/>
                        Please add name!
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <label htmlFor="product-name">Product Model</label>
                    <input type="text" id="product-model" name="model" placeholder="Enter Product Model"
                           className={`form-control ${valid.model === true ? "is-valid" : valid.model === false ? "is-invalid" : ""}`}
                           value={product.model ? product.model : ""}
                           onChange={(e) => onChange(e)}
                           required/>
                    <div className="valid-feedback">
                        <i className="fa fa-check-square-o" aria-hidden="true"/>
                        completed!
                    </div>
                    <div className="invalid-feedback">
                        <i className="fa fa-minus-square-o" aria-hidden="true"/>
                        Please add model!
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <label htmlFor="Description">Description</label>
                    <textarea id="Description" placeholder="Description" name="desc"
                        className={`form-control ${valid.desc === true ? "is-valid" : valid.desc === false ? "is-invalid" : ""}`}
                        value={product.desc ? product.desc : ""} onChange={(e) => onChange(e)}
                        required/>
                    <div className="valid-feedback">
                        <i className="fa fa-check-square-o" aria-hidden="true"/>
                        completed!
                    </div>
                    <div className="invalid-feedback">
                        <i className="fa fa-minus-square-o" aria-hidden="true"/>
                        Please add some description!
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <label htmlFor="validationServerUsername">Price</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="price-icon">$</span>
                        </div>
                        <input type="number" id="price" placeholder="Price" name="price"
                               className={`form-control ${valid.price === true ? "is-valid" : valid.price === false ? "is-invalid" : ""}`}
                               value={product.price ? product.price : ""}
                               onChange={(e) => onChange(e)} required/>
                        <div className="valid-feedback">
                            <i className="fa fa-check-square-o" aria-hidden="true"/>
                            completed!
                        </div>
                        <div className="invalid-feedback">
                            <i className="fa fa-minus-square-o" aria-hidden="true"/>
                            Please add product price!
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="product-count">Count</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="count-icon"><i className="fa fa-gg" aria-hidden="true"/></span>
                    </div>
                    <input type="number" id="count" placeholder="Count" name="count"
                           className={`form-control ${valid.count === true ? "is-valid" : valid.count === false ? "is-invalid" : ""}`}
                           value={product.count ? product.count : ""}
                           onChange={(e) => onChange(e)} required/>
                    <div className="valid-feedback">
                        <i className="fa fa-check-square-o" aria-hidden="true"/>
                        completed!
                    </div>
                    <div className="invalid-feedback">
                        <i className="fa fa-minus-square-o" aria-hidden="true"/>
                        Please indicate the quantity of the product!
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="product-image">Add image</label>
                <input type="file" name="image" id="product-image"
                       className={`form-control-file ${valid.image === true ? "is-valid" : valid.image === false ? "is-invalid" : ""}`}
                       // value={product.image ? product.image : ""}
                       onChange={onImageChange} />
                <div className="valid-feedback">
                    <i className="fa fa-check-square-o" aria-hidden="true"/>
                    completed!
                </div>
                <div className="invalid-feedback">
                    <i className="fa fa-minus-square-o" aria-hidden="true"/>
                    Please indicate the quantity of the product!
                </div>
                { image.file ?
                    <div className="product-sow-image">
                        <img src={image.data} alt="see"/>
                    </div> :
                    null
                }
            </div>
            <div className={`alert alert-msg ${productState.state === true ? "alert-success" : productState.state === false ? "alert-danger" : ""}`}
                role="alert">
                <i className={`fa ${productState.state === true ? "fa-check-square" : productState.state === false ? "fa-exclamation-circle" : ""}`} aria-hidden="true"/>
                {productState.text}
            </div>
            <button className={`btn btn-block add-product-btn ${ validation ? "btn-primary" : "btn-success"}`}
                type="button" onClick={() => addNewProduct()} disabled={!!!validation}
            >
                <i className="fa fa-floppy-o" aria-hidden="true"/>
                Add product
                { !validation ?
                    <span className="add-prod-loader">
                        <Loader type="ThreeDots" color="#FFFFFF" height={24} width={50} />
                    </span> :
                    null
                }
            </button>
        </form>
    );
}

export default AdminForm;