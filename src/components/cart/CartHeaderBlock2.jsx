const CartHeaderBlock2 = ({items}) => {

    return (
        <div className="row">
            <div className="col-md-12">
                <h1 className="cart-main-title">Shopping cart ({items} items)</h1>
            </div>
            <div className="col-md-12">
                <div role="alert" id="page-alerts" tabIndex="-1" aria-live="polite">
                    <div className="page-alert page-alert--information">
                        <svg id="svg-icon-information" viewBox="0 0 32 32" className="svg-icon">
                            <path fill="#0654ba" d="M15.991 12.986c0 0 0 0 0 0-0.625 0-1.132 0.507-1.132 1.132 0 0 0 0 0 0v8.737c0.074 0.56 0.548 0.987 1.122 0.987s1.048-0.427 1.122-0.981l0.001-8.743c0-0 0-0 0-0 0-0.618-0.496-1.121-1.112-1.131z"/>
                            <path fill="#0654ba" d="M17.401 9.146c0 0.748-0.606 1.354-1.354 1.354s-1.354-0.606-1.354-1.354c0-0.748 0.606-1.354 1.354-1.354s1.354 0.606 1.354 1.354z"/>
                            <path fill="#0654ba" d="M15.991 32c-8.842 0-16.009-7.168-16.009-16.009s7.168-16.009 16.009-16.009c8.842 0 16.009 7.168 16.009 16.009 0 0.007 0 0.013 0 0.020-0.011 8.833-7.174 15.99-16.009 15.99 0 0 0 0 0 0zM15.991 2.319c0 0 0 0 0 0-7.561 0-13.69 6.129-13.69 13.69s6.129 13.69 13.69 13.69c7.561 0 13.69-6.129 13.69-13.69s-6.129-13.69-13.69-13.69z"/>
                        </svg>
                        <p>
                            <span>
                                <span>
                                    <span>We work around the clock and we deliver orders within one day. </span>
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartHeaderBlock2;