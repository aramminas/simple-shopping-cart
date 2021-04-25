import React from "react";
import Loader from "react-loader-spinner";

const LoaderContent = () => {
    return (
        <div className="container vh-100">
            <div className="others-content">
                <Loader type="Oval" color="#045c6b" height={100} width={100} />
                <div className="loader-title">
                    Loading ...
                </div>
            </div>
        </div>
    );
}

export default LoaderContent;