import React from "react";
import propType from 'prop-types';

import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...res
}) => {
  // Almacenando la ultima ruta que visite.
  localStorage.setItem('lastPath', res.location.pathname);

  return (
        <Route {...res}
            component={
                (props) => (
                    (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
                )
            }
        />
    )
};


PrivateRoute.prototype = {
    isAuthenticated: propType.bool.isRequired,
    component: propType.func.isRequired
}