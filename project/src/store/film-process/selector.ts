import {State} from "../../types/state";
import {NameSpace} from "../../const";
import {Film, Films} from "../../types/types";

export const getLoadedDataStatusFilm = (state: State): boolean => state[NameSpace.Film].isDataLoaded;

export const getFilm = (state: State): Film | undefined => state[NameSpace.Film].film;

export const getPromoFilm = (state: State): Film | undefined => state[NameSpace.Film].promoFilm;

export const getSimilarFilms = (state: State): Films => state[NameSpace.Film].similarFilms;
