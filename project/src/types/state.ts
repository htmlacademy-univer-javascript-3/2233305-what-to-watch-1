import {AuthorizationStatus} from "../const";
import {store} from "../store";
import {Film, Films, Reviews, UserData} from "./types";

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | undefined,
};

export type FilmsData = {
  filmsCount : number,
  genre : string,
  genresFilms : Films,
  films: Films,
  promoFilm: Film | undefined,
  favoriteFilms: Films,
  review: Reviews,
  isDataLoaded: boolean,
  film: Film | undefined,
  similarFilms: Films
};

export type FilmsProcess = {
  genre: string,
  filmsCount: number,
  genresFilm: Film[],
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
