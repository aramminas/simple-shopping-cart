import React from "react";
import Loader from "react-loader-spinner";

const LoaderContent = ({height}) => {
    height = height ? height : "vh-100";

    return (
        <div className={`container ${height}`}>
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