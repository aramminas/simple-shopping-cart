import {useContext} from "react";
import {Link} from 'react-router-dom';
/* contexts */
import CartContext from "../../../store/context/cartContext";
/* components */
import HeaderLinks from "./HeaderLinks";
/* styles */
import "./Header.scss";

const Header = () => {
    const { cart : {items}} = useContext(CartContext);

    return (
        <header id="header">
            <nav className="site-header sticky-top py-1">
                <div className="container container-header d-flex flex-column flex-md-row justify-content-between">
                    <Link to="/" className="py-2 logo-link" >
                        <img src="/assets/images/simply-logo-white.png" alt="main-logo"/>
                    </Link>
                    <HeaderLinks/>
                    {/*{id : 3, name: 'Cart', path: 'cart'},*/}
                    <Link className="py-2 cart-link" to={'/cart'}>Cart {items > 0 && <i className="cart-baggage">{items}</i>}</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;