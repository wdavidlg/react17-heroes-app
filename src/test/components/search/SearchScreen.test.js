const { mount } = require("enzyme")
const { MemoryRouter, Route } = require("react-router")
const { default: SearchScreen } = require("../../../componentes/search/SearchScreen")


describe('Pruebas en <SearchScreen/>', () => {

    const historyMock = {
        push: jest.fn()
    }
    
    test('debe de mostrarse correctamente con valores por defecto', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path='/search' component={()=>(
                    <SearchScreen history={historyMock}/>
                )} />
            </MemoryRouter>
        )
         
        expect(wrapper.find('.container').text()).toBe('');
    })

    test('debe de mostrar a batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Batman']}>
                <Route path='/search' component={()=>(
                    <SearchScreen history={historyMock}/>
                )} />
            </MemoryRouter>
        )
        expect(wrapper.find('.card-title').text()).toBe('Batman');
        expect(wrapper.find('input').prop('value')).toBe('Batman');
    })
    
    
})
