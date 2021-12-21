import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";


export const AuthContext = createContext(null);

const initialState = {
    logged: false
}

const init = (initialState) => {
    return JSON.parse(localStorage.getItem('user')) || initialState;
}


const AuthProvider = ({children}) => {

    const [user, dispatch] = useReducer(authReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        <AuthContext.Provider value={{
            user, 
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;