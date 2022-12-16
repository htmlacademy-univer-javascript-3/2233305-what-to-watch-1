import {FavoriteFilmProcess} from "../../types/state";
import {createSlice} from "@reduxjs/toolkit";
import {
  fetchFavoriteFilmsAction
} from "../api-actions";
import {NameSpace} from "../../const";

const initialState: FavoriteFilmProcess = {
  favoriteFilms: [],
  currentFilm : undefined,
  isDataLoaded: false
};

export const favoriteFilmProcess = createSlice({
  name: NameSpace.FavoriteFilms,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isDataLoaded = true
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload
        state.isDataLoaded = false
      })
  }
});
