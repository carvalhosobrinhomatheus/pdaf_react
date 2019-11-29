import React from "react";
import Login from "./modulos/Login/Index";
import Dashboard from "./modulos/Dashboard/Index";

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { autenticado } from './Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        autenticado() ?
            (<Component {...props} />) :
            (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={() => Login()} />
            <PrivateRoute exact path="/" component={() => Dashboard()} />
        </Switch>
    </BrowserRouter>
);

export default Routes;