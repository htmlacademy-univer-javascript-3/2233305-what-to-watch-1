import {AuthorizationStatus} from "../const";
import {store} from "../store";
import {Film, Review, UserData} from "./types";

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | undefined,
};

export type FilmsData = {
  filmsCount : number,
  genre : string,
  genresFilms : Film[],
  films: Film[],
  promoFilm: Film | undefined,
  favoriteFilms: Film[],
  review: Review[],
  isDataLoaded: boolean,
  film: Film | undefined,
  similarFilms: Film[]
};

export type FilmsProcess = {
  genre: string,
  filmsCount: number,
  genresFilm: Film[],
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
