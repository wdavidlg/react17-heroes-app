import {mount, shallow} from 'enzyme'
import { MemoryRouter } from 'react-router'
import DcScreen from '../../componentes/dc/DcScreen'
import DashboardRoutes from '../../router/DashboardRoutes'
import PrivateRoute from '../../router/PrivateRoute'

describe('Pruebas en <PrivateRoute />', () => {
    
    test('debe de mostrar el componente si esta autenticado y guardar localStorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                isAuthenticate={true}
                component={()=><span>Listo</span>}
                location = {{pathname:'/dc'}}
                />
            </MemoryRouter>
        )
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span').exists()).toBe(true);
       // expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar a localStorage', () => {

        Storage.prototype.setItem = jest.fn();

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                isAuthenticate={true}
                component={()=><span>Listo</span>}
                location = {{pathname:'/dc'}}
                />
            </MemoryRouter>
        )
        
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/dc");
       
    })

    test('debe de bloquear el componente si no esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                isAuthenticate={false}
                component={()=><span>Listo</span>}
                location = {{pathname:'/dc'}}
                />
            </MemoryRouter>
        )
        
        console.log(wrapper.html())
        expect(wrapper.html()).toBe("")
        
    })
    
    
    
    
})
