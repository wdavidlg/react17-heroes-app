
import AuthProvider from './auth/AuthContext'
import AppRouter from './routers/AppRouter'


const HeroesApp = () => {


    return (
        <div>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </div>
    )
}

export default HeroesApp
