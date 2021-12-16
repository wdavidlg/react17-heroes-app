const { mount } = require("enzyme")
const { MemoryRouter, Router } = require("react-router")
const { AuthContext } = require("../../../auth/AuthContext")
const { NavBar } = require("../../../componentes/ui/NavBar")

describe('Pruebas en <NavBar/>', () => {

    const historyMock = {
        replace: jest.fn(),
        listen: jest.fn(),
        location: {},
        createHref: jest.fn()
    }

    const contextValue = {
        user: {
            name: 'Will',
            logged: true
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value={contextValue}>
                <Router history={historyMock}>
                    <NavBar />
                </Router>
            </AuthContext.Provider>
        </MemoryRouter>
    )

    afterEach(()=>{
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span.text-info').text()).toBe('Will')
    })

    test('debe de llamar al dispatch y history.replace', () => {
        wrapper.find('button.btn').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
        expect(historyMock.replace).toHaveBeenCalledTimes(1);
        expect(historyMock.replace).toHaveBeenLastCalledWith('/login')
    })
    

})
