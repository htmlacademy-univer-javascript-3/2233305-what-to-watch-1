import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilms, resetFilmsCount, showMore} from './action';
import {films} from '../mocks/film';

const INITIAL_STATE_GENRE = 'All genres';
const INITIAL_STATE_FILM_COUNT = 8;
const ALL_FILMS = 8;

const initialState = {
  genre: INITIAL_STATE_GENRE,
  filmsGenre: films,
  filmsCount : INITIAL_STATE_FILM_COUNT
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
  builder
    .addCase(getFilms, (state) => {
      state.filmsGenre = state.genre === INITIAL_STATE_GENRE ? films : films.filter((film) => film.genre === state.genre);
    });
  builder
    .addCase(showMore, (state) => {
      state.filmsCount = ALL_FILMS > state.filmsCount ? state.filmsCount + 8 : state.filmsCount;
    });
  builder
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = INITIAL_STATE_FILM_COUNT;
    });
});

export {reducer};
