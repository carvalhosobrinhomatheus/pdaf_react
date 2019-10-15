import React from "react";
import Main from "./modulos/Main/componentes/index";
import Login from "./modulos/Login/componentes/index";

import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => Main()} />
            <Route exact path="/login" component={() => Login()} />
            <PrivateRoute exact path="/app" component={() => <h1>App</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;