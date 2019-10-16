import React from "react";
import Main from "./modulos/Main/componentes/index";
import Login from "./modulos/Login/componentes/index";
import Dashboard from "./modulos/Dashboard/componentes/index";

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/app" component={() => Main()} />
            <Route exact path="/login" component={() => Login()} />
            <PrivateRoute exact path="/" component={() => Dashboard()} />
        </Switch>
    </BrowserRouter>
);

export default Routes;