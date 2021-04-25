import React from "react";

const EmptyResult = () => {
    return (
        <div className="container vh-100">
            <div className="others-content">
                <div className="empty-icon">
                    <i className="fa fa-trash" aria-hidden="true"/>  :(
                </div>
                <div className="empty-title">
                    Product list is empty ...
                </div>
            </div>
        </div>
    );
}

export default EmptyResult;