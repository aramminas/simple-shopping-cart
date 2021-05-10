import React,{Component} from "react";

/* Main Layout */
import Header from "./header/Header";
import Footer from "./footer/Footer";

/* Styles */
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../../scss/font-awesome.scss";
import "../../App.scss";

const LayoutWrapper = (ChildComponent) =>
    class Layout extends Component {
        render() {
            return (
                <div className="App">
                    <Header/>
                    <div id="container">
                        <ChildComponent  {...this.props} />
                    </div>
                    <Footer/>
                </div>
            )
        }
    }

export default LayoutWrapper;