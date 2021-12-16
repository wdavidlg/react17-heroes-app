const { mount } = require("enzyme")
const { AuthContext } = require("../../../auth/AuthContext")
const { default: LoginScreen } = require("../../../componentes/login/LoginScreen")
const { types } = require("../../../types/types")


describe('Pruebas en <LoginScreen/>', () => {

    const historyMock = {
        replace: jest.fn()
    }

    const user = {
        name: 'Will'
    }

    const contextValue = {
        dispatch: jest.fn(),
        user
    }

    test('debe mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={historyMock} />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de realizar el dispatch y la navegacion', () => {
        
        Storage.prototype.getItem = jest.fn();
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={historyMock} />
            </AuthContext.Provider>
        )

        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: user
        })
        expect(historyMock.replace).toHaveBeenCalled();
        expect(localStorage.getItem).toHaveBeenCalled();
    })
    
})
