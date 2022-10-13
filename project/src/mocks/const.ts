import {films} from './film';

export const myListFilms = films.filter((x) => x.addMyList === true);
export const myListFilmsCount = myListFilms.length;
