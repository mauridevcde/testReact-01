import heroes from '../data/heroes.js';


export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

console.log('getHeroeById', getHeroeById(1));

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

