import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Films} from '../../types/types';

export const getLoadedDataStatusFavoriteFilm = (state: State): boolean => state[NameSpace.FavoriteFilms].isDataLoaded;
export const getFavoriteFilms = (state: State): Films => state[NameSpace.FavoriteFilms].favoriteFilms;

