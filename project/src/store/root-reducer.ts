import {filmsData} from "./films-data/films-data";
import {filmProcess} from "./film-process/film-process";
import {userProcess} from "./user-process/user-process";
import {NameSpace} from "../const";
import {combineReducers} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmsData.reducer,
  [NameSpace.Films]: filmProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
