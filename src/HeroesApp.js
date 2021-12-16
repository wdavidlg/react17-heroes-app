import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './router/AppRouter'

const initialState = {
    logged: false
}

const init = (initialState) => {
    return JSON.parse(localStorage.getItem('user')) || initialState;
}

const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        <div>
            <AuthContext.Provider value={{
                user,
                dispatch
            }}>
                <AppRouter/>
            </AuthContext.Provider>
        </div>
    )
}

export default HeroesApp
