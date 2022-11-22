import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {AuthData, Film, Review, UserData} from "../types/types";
import {
  getFavoriteFilms, getFilm,
  getPromo,
  getReview, getSimilar, getUser,
  loadFilms, redirectToRoute,
  requireAuthorization,
  setDataLoadedStatus, setError
} from "./action";
import {AuthorizationStatus} from "../components/private-routes/private-route";
import {dropToken, saveToken} from "../services/token";
import {store} from "./index";


export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      2000,
    );
  },
);

export const fetchAllFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>('/films');
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchFilmAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (filmId, { dispatch, extra: api }) => {
    try {
      const { data } =  await api.get<Film>(`/films/${filmId}`);
      dispatch(getFilm(data));
    }
    catch {
      dispatch(redirectToRoute('/notFound'))
    }
  },
);


export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>('/promo');
    dispatch(getPromo(data));
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavorite',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>('/favorite');
    dispatch(getFavoriteFilms(data));
  },
);

export const fetchReviewAction = createAsyncThunk<void, number | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReview',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`/comments/${filmId}`);
    dispatch(getReview(data));
  },
);

export const fetchAddReviewAction = createAsyncThunk<void, { filmId: number | undefined, comment : string, rating : number}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchAddReview',
  async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
    await api.post<Review>(`/comments/${filmId}`, {comment, rating});
    dispatch(redirectToRoute(`/films/${filmId}`));
  },
);

export const fetchGetSimilarAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGetSimilar',
  async (filmId , { dispatch, extra: api }) => {
    const {data} = await api.get<Film[]>(`/films/${filmId}/similar`);
    dispatch(getSimilar(data));
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get('/login');
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<UserData>('/login', {email, password});
    saveToken(user.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(getUser(user))
    dispatch(redirectToRoute('/'));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete('/logout');
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
