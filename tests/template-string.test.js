import { getSaludos } from '../src/base-pruebas/template-string.js';

describe('Pruebas Template String', function() {

    test('getSaludos debe retornar Hola mauricio ', function() {
        const name = 'jose';
        const message = getSaludos(name);
        
        expect(message).toBe(`Hola ${name}`);
    })

})