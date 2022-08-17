
import { getUser, getUsuarioActivo } from '../src/base-pruebas/funciones.js';


describe('pruebas en 05 funciones ', () => {
    test('getSaludos debe retornar un objeto ', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        }

        const user = getUser();

        expect(user).toEqual(testUser);

        console.log('ver en la consoladora: ', user);

    })

    test('verificar que la funcion getUsuariosActivos retorne un objeto', () => {
        const name = 'Fernando'

        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: NavigationPreloadManager
        });

    })
})