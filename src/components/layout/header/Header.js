import {useState, useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {change_cart_state} from "../../../store/actions/cartAction";
import {Link} from "react-router-dom";
import HeaderLinks from "../../pages/header/HeaderLinks";
import "./Header.scss";

function Header(props){
    const {cart, state: cartState} = useSelector(state => state.cart);
    const [cartIcon, setCartIcon] = useState(false);

    useEffect(function (){
        setCartIcon(!!Object.keys(cart).length);
    }, [cart]);


    const toggleCart = (e) => {
        e.preventDefault();
        props.changeCartState(!cartState);
    }

    return (
        <header id="header">
            <nav className="site-header sticky-top py-1">
                <div className="container container-header d-flex flex-column flex-md-row justify-content-between">
                    <Link to="/" className="py-2 logo-link" >
                        <img src="/assets/images/simply-logo-white.png" alt="main-logo"/>
                    </Link>
                    <HeaderLinks/>
                    <Link to="/" className="py-2 d-none d-md-inline-block cart-baggage-link"
                        onClick={(e) => toggleCart(e)}
                    >
                        Cart {cartIcon ? <sup><i className="fa fa-cart-plus" aria-hidden="true"/></sup> : null}
                    </Link>
                    <Link to="/admin" className="py-2 d-none d-md-inline-block">admin</Link>
                </div>
            </nav>
        </header>
    );
}

const mapStateToProps = state => {
    return {
        ...state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeCartState: (data) => {dispatch(change_cart_state(data))},
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);