import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DasboardRoutes } from "./DasboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

// Sistema de rutas principal
export const AppRouter = () => {

  const {user}  = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact 
            path="/login" 
            component={LoginScreen} 
            isAuthenticated = {user.logged}
          />
          <PrivateRoute 
            path="/" 
            component={DasboardRoutes} 
            isAuthenticated = {user.logged} 
          />
          {/* Sistema de rutas hijas */}
        </Switch>
      </div>
    </Router>
  );
};
