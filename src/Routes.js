import {Switch, Route} from "react-router-dom";
import Main from "./components/pages/main/Main";
import Admin from "./components/pages/admin/Admin";

export default function App() {
    return (
        <Switch>
            <Route path="/admin">
                <Admin />
            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    );
}