import {authReducer} from '../../auth/authReducer'
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {

    const state = {};
    
    test('debe de retornar el estado por defecto', () => {
        const value = authReducer(state, {})
        expect(value).toEqual(state);
    })

    test('debe de autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login, 
            payload: {name: 'Will'}
        };
        const value = authReducer(state, action);
        expect(value.name).toBe('Will');
        expect(value.logged).toBe(true);

    })

    test('debe de borrar el name del usuario y logged en false ', () => {
        const action = {
            type: types.logout, 
        };
        const value = authReducer(state, action);
        expect(value.logged).toBe(false);
    })
    
    
    
})
