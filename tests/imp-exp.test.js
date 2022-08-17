import { getHeroeById } from "../src/base-pruebas/imp-exp";

describe('imp-exp', function() {

    test('el heroe por el id', function() {

        const idDelHeroe = 1;

        const heroe = getHeroeById(idDelHeroe);

        console.log('heroe', heroe);
        //expect(heroe).toEqual()
    })

})