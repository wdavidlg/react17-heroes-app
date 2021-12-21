const { mount } = require("enzyme")
const { MemoryRouter } = require("react-router")
const { AuthContext } = require("../../auth/AuthContext")
const { default: DashboardRoutes } = require("../../routers/DashboardRoutes")


describe('Pruebas en <DashboardRoutes/>', () => {

    const valueContext = {
        user: {
            name: 'will',
            logged: true
        },
        dispatch: jest.fn()
    }

    test('debe mostrarse correctamente', () => {
        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={valueContext}>
                    <DashboardRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span.text-info').text()).toBe('will');
    })

})
