import {createAction} from '@reduxjs/toolkit';


export const redirectToRoute = createAction<string>('game/redirectToRoute');

export const changeGenre = createAction('films/changeGenre', (value) => ({
  payload: value,
}));

export const showMore = createAction('films/showMoreFilms');


export const setError = createAction<string | null>('game/setError');



