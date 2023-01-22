import { heroes } from "../";

export const getHeroesByPublisher = ( publisher ) => {
  const hereosList = heroes.filter(heroe => heroe.publisher === publisher);

  if(hereosList.length) return hereosList;

  throw new Error (`The ${ publisher } is not valid publisher.`);
  // return (`The ${ publisher } is not valid publisher.`);
}
