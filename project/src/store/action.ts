import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('films/changeGenre' ,(value) => ({
  payload: value,
}));

export const getFilms = createAction('films/getFilms');

export const showMore = createAction('films/showMoreFilms');

export const resetFilmsCount = createAction('films/resetFilmsCount');
