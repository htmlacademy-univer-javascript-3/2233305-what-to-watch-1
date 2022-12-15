import {FilmsData} from "../../types/state";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  fetchAllFilmsAction,
  fetchFavoriteFilmsAction,
  fetchFilmAction,
  fetchGetSimilarAction,
  fetchPromoFilmAction, fetchReviewAction
} from "../api-actions";
import {INITIAL_STATE_FILM_COUNT, INITIAL_STATE_GENRE, NameSpace} from "../../const";
import {changeGenre, resetCount, showMore} from "../action";

const initialState: FilmsData = {
  filmsCount: INITIAL_STATE_FILM_COUNT,
  genre: INITIAL_STATE_GENRE,
  films: [],
  genresFilms: [],
  promoFilm: undefined,
  favoriteFilms: [],
  review: [],
  isDataLoaded: false,
  film: undefined,
  similarFilms: []
};

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchAllFilmsAction.pending, (state) => {
        state.isDataLoaded = true
      })
      .addCase(fetchAllFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload
        state.isDataLoaded = false
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchGetSimilarAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload
      })
      .addCase(fetchReviewAction.fulfilled, (state, action) => {
        state.review = action.payload
      })
      .addCase(changeGenre, (state, action: PayloadAction<string>) => {
        state.genre = action.payload
        state.genresFilms = state.genre === INITIAL_STATE_GENRE ? state.films : state.films.filter((film) => film.genre === state.genre);
      })
      .addCase(showMore, (state) => {
        state.filmsCount = state.films.length > state.filmsCount ? state.filmsCount + 8 : state.filmsCount;
      })
      .addCase(resetCount, (state) => {
        state.filmsCount = INITIAL_STATE_FILM_COUNT;
      })
  }
});
