import {AuthorizationStatus} from '../const';
import {store} from '../store';
import {Film, Films, Reviews, UserData} from './types';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | undefined,
};

export type FilmsProcess = {
  filmsCount: number,
  genre: string,
  genresFilms: Films,
  films: Films,
  isDataLoaded: boolean
};
export type FavoriteFilmProcess = {

  currentFilm: Film | undefined
  favoriteFilms: Films,
  isDataLoaded: boolean
};

export type FilmProcess = {
  promoFilm: Film | undefined,
  isDataLoaded: boolean,
  film: Film | undefined,
  similarFilms: Films
}

export type ReviewProcess = {
  review: Reviews,
  isDataLoaded: boolean,

}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
