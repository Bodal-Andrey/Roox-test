import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import HomePage from "../home-page";
import FormPage from '../form-page';
import { AppRoute } from "../../const";

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={AppRoute.ROOT} component={HomePage} />
                <Route exact path={AppRoute.FORM} component={FormPage} />
            </Switch>
        </Router>
    );
};

export default App;
