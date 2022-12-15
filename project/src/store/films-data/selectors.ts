import {State} from "../../types/state";
import {Film, Films, Reviews} from "../../types/types";
import {NameSpace} from "../../const";

export const getFilms = (state: State): Films => state[NameSpace.Data].films;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const getFilm = (state: State): Film | undefined => state[NameSpace.Data].film;

export const getFavoriteFilms = (state: State): Films => state[NameSpace.Data].favoriteFilms;

export const getPromoFilm = (state: State): Film | undefined => state[NameSpace.Data].promoFilm;

export const getReviews = (state: State): Reviews => state[NameSpace.Data].review;

export const getSimilarFilms = (state: State): Films => state[NameSpace.Data].similarFilms;

export const getGenre = (state: State): string => state[NameSpace.Data].genre;
export const getFilmsWithGenre = (state: State): Films => state[NameSpace.Data].genresFilms;

