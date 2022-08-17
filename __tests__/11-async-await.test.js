
import {getImagen} from '../src/base-pruebas/11-async-await';

describe('11 - Async/Await testing', () => {

    test('Esta prueba debe retornar un url de tipo string', async () => {

        const url = await getImagen();
        console.log(url);

        expect( typeof url ).toBe('string');
    })

});