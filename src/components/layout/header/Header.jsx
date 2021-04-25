import HeaderLinks from "../../pages/header/HeaderLinks";
import "./Header.scss";
const Header = () => {

    return (
        <header id="header">
            <nav className="site-header sticky-top py-1">
                <div className="container container-header d-flex flex-column flex-md-row justify-content-between">
                    <a href="/" className="py-2 logo-link" >
                        <img src="/assets/images/simply-logo-white.png" alt="main-logo"/>
                    </a>
                    <HeaderLinks/>
                    <a href="/" className="py-2 d-none d-md-inline-block cart-baggage-link">
                        Cart
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;