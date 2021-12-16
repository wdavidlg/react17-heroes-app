import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({
    isAuthenticate,
    component: Component,
    ...rest
}) => {
    localStorage.setItem('lastPath', rest.location.pathname);
    
    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticate)
                    ?<Component {...props}/>
                    :<Redirect to='/login' />
            )}
        />
    )
}
PrivateRoute.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute
