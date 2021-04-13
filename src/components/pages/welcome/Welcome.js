import "./Welcome.scss";

function Welcome(){
    return (
        <div className="container text-center welcome-content">
            <h1 className="display-4">Welcome</h1>
            <hr className="hr-short"/>
            <p className="h5">First time visitors?</p>
            <p className="h5">Why not Enjoy</p>
            <p className="h1">$15 OFF*</p>
            <p className="h5">Your First Order</p>
            <hr/>
        </div>
    );
}

export default Welcome;