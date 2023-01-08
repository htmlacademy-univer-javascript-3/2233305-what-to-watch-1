import {createAction} from '@reduxjs/toolkit';


export const redirectToRoute = createAction<string>('films/redirectToRoute');

export const changeGenre = createAction<string>('films/changeGenre');

export const showMore = createAction('films/showMoreFilms');

export const resetCount = createAction('films/resetCount');


