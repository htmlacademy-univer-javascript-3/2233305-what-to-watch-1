import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  getFavoriteFilms,
  getFilms,
  getPromo,
  getReview,
  loadFilms,
  resetFilmsCount, Review, setDataLoadedStatus,
  showMore
} from './action';
import {Film} from "../types/types";


const INITIAL_STATE_GENRE = 'All genres';
const INITIAL_STATE_FILM_COUNT = 8;


type initalState = {
  genre: string,
  films: Film[],
  filmsCount: number,
  promoFilm: Film | null,
  favoriteFilms: Film[],
  review: Review[],
  genresFilm : Film[],
  isDataLoaded: boolean,
  //authorizationStatus: AuthorizationStatus,
}


const initialState: initalState = {
  genre: INITIAL_STATE_GENRE,
  films: [],
  filmsCount: INITIAL_STATE_FILM_COUNT,
  promoFilm: null,
  favoriteFilms: [],
  review: [],
  genresFilm : [],
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
  builder
    .addCase(getFilms, (state) => {
      state.genresFilm = state.genre === INITIAL_STATE_GENRE ? state.films : state.films.filter((film) => film.genre === state.genre);
    });
  builder
    .addCase(showMore, (state) => {
      state.filmsCount = state.films.length > state.filmsCount ? state.filmsCount + 8 : state.filmsCount;
    });
  builder
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = INITIAL_STATE_FILM_COUNT;
    });
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload
      state.genresFilm = action.payload
    })
  builder
    .addCase(getPromo, (state, action) => {
      state.promoFilm = action.payload
    })
  builder
    .addCase(getFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload
    })
  builder
    .addCase(getReview, (state, action) => {
      state.review = action.payload
    })
  builder
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
});

export {reducer};
