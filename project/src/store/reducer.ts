import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilms} from './action';
import {films} from '../mocks/film';

const INITIAL_STATE = 'All genres';

const initialState = {
  genre: INITIAL_STATE,
  filmsGenre: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
  builder
    .addCase(getFilms, (state) => {
      state.filmsGenre = state.genre === INITIAL_STATE ? films : films.filter((film) => film.genre === state.genre);
    });

});

export {reducer};
