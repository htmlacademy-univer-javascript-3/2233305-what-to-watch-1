import {createAction} from '@reduxjs/toolkit';
import {Film} from "../types/types";

export const changeGenre = createAction('films/changeGenre' ,(value) => ({
  payload: value,
}));

export const getFilms = createAction('films/getFilms');

export const showMore = createAction('films/showMoreFilms');

export const resetFilmsCount = createAction('films/resetFilmsCount');

export const loadFilms = createAction('data/loadFilms', (value : Film[]) => ({
  payload: value,
}));

export const getPromo = createAction('data/getPromo', (value : Film) => ({
  payload: value,
}));


export const getFavoriteFilms = createAction('data/getFavorite', (value : Film[]) => ({
  payload: value,
}));

export const getReview = createAction('data/getReview', (value : Review[]) => ({
  payload: value,
}));


export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');


export type Review = {
    comment: string
    date: string
    id: number
    rating: number
    user: {
      id: number
      name: string
    }
}
