import React from "react";
/* styles */
import "./ThankYou.scss";

const ThankYou = ({count, subtotal}) => {
    return (
        <div className="container vh-100">
            <div className="others-content">
                <div className="thank-you-content">
                    <figure>
                        <img src="/assets/images/thank-you-1.jpg" alt="thank you"/>
                    </figure>
                    <div className="thank-you-info">
                        <span>You have ordered <span className="thank-you-mark">{count}</span> {count > 1 ? "types of products." : "type of product."} </span>
                        <span>Your order is <span className="thank-you-mark">$ {subtotal.toFixed(2)}</span>.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThankYou;