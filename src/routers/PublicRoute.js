import React from "react";
import propType from 'prop-types';

import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...res
}) => {
  return (
        <Route {...res}
            component={
                (props) => (
                    ( !isAuthenticated )
                    ? (<Component {...props} />)
                    : (<Redirect to="/" />)
                )
            }
        />
    )
};


PublicRoute.prototype = {
    isAuthenticated: propType.bool.isRequired,
    component: propType.func.isRequired
}