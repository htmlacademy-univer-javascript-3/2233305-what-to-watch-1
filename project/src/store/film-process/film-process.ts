import {createSlice} from "@reduxjs/toolkit";
import {INITIAL_STATE_FILM_COUNT, INITIAL_STATE_GENRE, NameSpace} from "../../const";
import {FilmsProcess} from "../../types/state";



const initialState: FilmsProcess = {
  genre: INITIAL_STATE_GENRE,
  filmsCount: INITIAL_STATE_FILM_COUNT,
  genresFilm: [],
};

export const filmProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    resetFilmsCount: (state) => {
      state.filmsCount = INITIAL_STATE_FILM_COUNT;
    },
  },
});

export const {resetFilmsCount} = filmProcess.actions;
