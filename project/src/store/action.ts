import {createAction} from '@reduxjs/toolkit';
import {Film, Review, UserData} from "../types/types";
import {AuthorizationStatus} from "../components/private-routes/private-route";

export const changeGenre = createAction('films/changeGenre', (value) => ({
  payload: value,
}));

export const getFilms = createAction('films/getFilms');

export const showMore = createAction('films/showMoreFilms');

export const resetFilmsCount = createAction('films/resetFilmsCount');

export const loadFilms = createAction('data/loadFilms', (value: Film[]) => ({
  payload: value,
}));

export const getPromo = createAction('data/getPromo', (value: Film) => ({
  payload: value,
}));


export const getFavoriteFilms = createAction('data/getFavorite', (value: Film[]) => ({
  payload: value,
}));

export const getReview = createAction('data/getReview', (value: Review[]) => ({
  payload: value,
}));

export const getUser = createAction('data/getUser', (value: UserData) => ({
  payload: value,
}));

export const getSimilar = createAction<Film[]>('data/getSimilar');


export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('game/setError');

export const getFilm = createAction<Film>('game/getFilm');


export const redirectToRoute = createAction<string>('game/redirectToRoute');


