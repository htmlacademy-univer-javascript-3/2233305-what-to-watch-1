import {State} from "../../types/state";
import {NameSpace} from "../../const";
import {Film, Films} from "../../types/types";

export const getLoadedDataStatusFavorite = (state: State): boolean => state[NameSpace.FavoriteFilms].isDataLoaded;
export const getFavoriteFilms = (state: State): Films => state[NameSpace.FavoriteFilms].favoriteFilms;

export const getCurrentFilm = (state: State): Film | undefined => state[NameSpace.FavoriteFilms].currentFilm;
