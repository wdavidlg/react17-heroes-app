import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "../componentes/login/LoginScreen";
import React, { useContext } from 'react'
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {

    const {user} = useContext(AuthContext);
    const {logged} = user;

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        isAuthenticate={logged}
                        exact 
                        path="/login" 
                        component={LoginScreen} />
                    <PrivateRoute
                        path='/'
                        isAuthenticate = {logged}
                        component={DashboardRoutes} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter

