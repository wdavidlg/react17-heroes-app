import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const NavBar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: types.logout });
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link
                    className="navbar-brand" to="/"
                >
                    Asociaciones
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink
                            className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}
                            to="/search"
                        >
                            Search
                        </NavLink>
                        <button
                            className="nav-link btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                    <span className="navbar-text text-info">
                        {name}
                    </span>
                </div>
            </div>
        </nav>

    )
}