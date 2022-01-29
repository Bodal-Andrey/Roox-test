import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import HomePage from "../home-page";
import { AppRoute } from "../../const";

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={AppRoute.ROOT} component={HomePage} />
            </Switch>
        </Router>
    );
};

export default App;
