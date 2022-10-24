import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('films/changeGenre' ,(value) => ({
  payload: value,
}));

export const getFilms = createAction('films/getFilms');
