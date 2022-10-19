import {films} from './film';

export const myListFilms = films.filter((film) => film.addMyList === true);
export const myListFilmsCount = myListFilms.length;
