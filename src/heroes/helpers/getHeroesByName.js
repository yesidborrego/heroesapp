import { heroes } from "../";

export const getHeroesByName = ( name = "" ) => {
  name = name.trim().toLocaleLowerCase();
  if(!name.length) return [];

  return heroes.filter(hero => hero.superhero.toLocaleLowerCase().trim().includes(name));
}
