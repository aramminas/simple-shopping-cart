import React from "react";

const CriticalErrors = ({message}) => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-8 critical-error-content">
                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">
                            <i className="fa fa-exclamation-circle" aria-hidden="true"/>
                            &nbsp;A critical error has occurred!
                        </h4>
                        <p>
                            Received an error from the server side, during such errors, the site may not work correctly,
                            to avoid irreversible errors, we are forced to suspend the site.
                        </p>
                        <p className="mb-0">We apologize for the inconvenience.</p>
                        <br/>
                        <strong>
                            <i className="fa fa-exclamation" aria-hidden="true"/>
                            Error message:
                        </strong> <u>{message}</u>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CriticalErrors;