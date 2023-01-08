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

  favoriteFilms: Films,
  isDataLoaded: boolean
};

export type FilmProcess = {
  promoFilm: Film,
  isDataLoaded: boolean,
  film: Film | undefined,
  similarFilms: Films
}

export type ReviewProcess = {
  error : string | undefined
  review: Reviews,
  isDataLoaded: boolean,

}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
