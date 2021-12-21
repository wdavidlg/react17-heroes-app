import {mount} from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import AppRouter from '../../routers/AppRouter'

describe('Pruebas en <AppRouter />', () => {

    const user = {
        logged: false
    }
    
    test('debe de mostrar el login si no esta autenticado', () => {
        const user = {
            logged: false
        }
        const wrapper = mount(
            <AuthContext.Provider value = {{
                user
            }}>
                <AppRouter/>
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el componente marvel si esta autenticado', () => {
        const user = {
            name: 'will',
            logged: true
        }
        const wrapper = mount(
            <AuthContext.Provider value = {{
                user
            }}>
                <AppRouter/>
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text()).toBe('Marvel Comics')
    })
    
    
})
