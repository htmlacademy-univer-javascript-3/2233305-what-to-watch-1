import {FilmsProcess} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {fetchAllFilmsAction,} from '../api-actions';
import {INITIAL_STATE_FILM_COUNT, INITIAL_STATE_GENRE, NameSpace} from '../../const';
import {changeGenre, resetCount, showMore} from '../action';

const initialState: FilmsProcess = {
  filmsCount: INITIAL_STATE_FILM_COUNT,
  genre: INITIAL_STATE_GENRE,
  films: [],
  genresFilms: [],
  isDataLoaded: false
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchAllFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchAllFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.genresFilms = state.films;
        state.isDataLoaded = false;
      })
      .addCase(changeGenre, (state, action) => {
        state.genre = action.payload;
        state.genresFilms = state.genre === INITIAL_STATE_GENRE ? state.films : state.films.filter((film) => film.genre === state.genre);
      })
      .addCase(showMore, (state) => {
        state.filmsCount = state.films.length > state.filmsCount ? state.filmsCount + 8 : state.filmsCount;
      })
      .addCase(resetCount, (state) => {
        state.filmsCount = INITIAL_STATE_FILM_COUNT;
      });
  }
});
