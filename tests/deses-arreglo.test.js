import { retornarArreglo } from "../src/base-pruebas/deses-arreglo"

describe('pruebas deses-arreglo', () => { 
    test('debe retornar un arreglo', () => {
        const [letter, number] = retornarArreglo();


        // expect( letter ).toEqual( 'ABC' )
        // expect( number ).toEqual( 123 )

        // expect( typeof letter ).toBe( 'string' )
        // expect( typeof number ).toBe( 'number' )

        expect( letter ).toEqual( expect.any( number ) )

    })
 })