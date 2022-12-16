import {FilmProcess} from "../../types/state";
import {createSlice} from "@reduxjs/toolkit";
import {
  fetchFilmAction, fetchGetSimilarAction,
  fetchPromoFilmAction
} from "../api-actions";
import {NameSpace} from "../../const";

const initialState: FilmProcess = {
  promoFilm: undefined,
  isDataLoaded: false,
  film: undefined,
  similarFilms: []
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        console.log("p")
        state.isDataLoaded = true
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        console.log("f")
        state.isDataLoaded = false
      })
      .addCase(fetchGetSimilarAction.pending, (state) => {
        state.isDataLoaded = true
      })
      .addCase(fetchGetSimilarAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isDataLoaded = false
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoaded = true
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload
        state.isDataLoaded = false
      })
  }
});
