const {  mount } = require("enzyme")
const { MemoryRouter, Route } = require("react-router")
const { default: HeroesScreen } = require("../../../componentes/heroes/HeroeScreen")


describe('Pruebas en <HeroeScreen/>', () => {

    const historyMock = {
        length: 3,
        push: jest.fn(),
        goBack: jest.fn()
    }

    
    test('debe de retornar Redirect si no hay un parametro', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe']}>
                <HeroesScreen
                    history={historyMock}
                />
            </MemoryRouter>
        )
        expect(wrapper.find('Redirect').exists()).toBe(true);
    })
    
    test('debe de retornar un heroe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route path='/heroe/:heroeId' component={HeroesScreen}/>
            </MemoryRouter>
        )
        expect(wrapper.find('.row').exists()).toBe(true);
    })

    test('debe de llama a PUSH', () => {
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route 
                    path='/heroe/:heroeId' 
                    component={()=>(
                        <HeroesScreen history={historyMock}/>
                    )}
                />
            </MemoryRouter>
        )
        wrapper.find('button').simulate('click');
        expect(historyMock.push).toHaveBeenCalled();
    })
    test('debe de llama a GOBACK', () => {
        const historyMock = {
            length: 3,
            push: jest.fn(),
            goBack: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route 
                    path='/heroe/:heroeId' 
                    component={()=>(
                        <HeroesScreen history={historyMock}/>
                    )}
                />
            </MemoryRouter>
        )
        wrapper.find('button').simulate('click');
        expect(historyMock.goBack).toHaveBeenCalled();
    })

    test('debe de llama el redirect si el heroe no existe', () => {
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/buuu']}>
                <Route 
                    path='/heroe/:heroeId' 
                    component={()=>(
                        <HeroesScreen history={historyMock}/>
                    )}
                />
            </MemoryRouter>
        )
        
        expect(wrapper.text()).toBe('');
    })

})
