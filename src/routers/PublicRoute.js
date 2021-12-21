import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
    const {user} = useContext(AuthContext)

    return !user.logged ? children : <Navigate to="/" />;
}


export default PublicRoute;
