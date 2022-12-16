import {filmsProcess} from "./films-process/films-process";
import {userProcess} from "./user-process/user-process";
import {NameSpace} from "../const";
import {combineReducers} from "@reduxjs/toolkit";
import {filmProcess} from "./film-process/film-process";
import {reviewProcess} from "./review-process/review-process";
import {favoriteFilmProcess} from "./favorite-film-process/favorite-film-process";

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.Review]: reviewProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.FavoriteFilms]: favoriteFilmProcess.reducer
});
