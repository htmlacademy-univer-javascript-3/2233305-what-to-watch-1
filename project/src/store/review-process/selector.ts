import {State} from "../../types/state";
import {Reviews} from "../../types/types";
import {NameSpace} from "../../const";

export const getReviews = (state: State): Reviews => state[NameSpace.Review].review;

export const getLoadedDataStatusReview = (state: State): boolean => state[NameSpace.Review].isDataLoaded;
