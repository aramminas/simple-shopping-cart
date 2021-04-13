import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Routes from "./Routes";

import "./scss/font-awesome.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Header/>
            <div id="container">
                <Routes/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
