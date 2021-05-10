import React, {Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import Loader from "react-loader-spinner";
/* components */
import Welcome from "./components/welcome/Welcome";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import NotFound from "./components/notFound/NotFound";

export default function App() {
    return (
        <Suspense fallback={<div className={"main-loader"}><Loader  type="Oval" color="#045c6b" height={100} width={100}/></div>}>
            <Switch>
                <Route exact={true} path="/">
                    <Welcome />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/product/:id">
                    <Product />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Suspense>
    );
}