import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {AuthData, Film, Films, Review, Reviews, UserData} from "../types/types";
import {
  redirectToRoute,
} from "./action";
import {dropToken, saveToken} from "../services/token";
import {APIRoute} from "../const";


export const fetchAllFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>('/films');
    return data
  },
);

export const fetchFilmAction = createAsyncThunk<Film | undefined, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(`/films/${filmId}`);
      return data
    } catch {
      dispatch(redirectToRoute('/notFound'))
    }
  },
);


export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>('/promo');
    return data
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavorite',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>('/favorite');
    return data
  },
);

export const fetchReviewAction = createAsyncThunk<Reviews, number | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReview',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Reviews>(`/comments/${filmId}`);
    return data
  },
);

export const fetchAddReviewAction = createAsyncThunk<void, { filmId: number | undefined, comment: string, rating: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchAddReview',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {
    await api.post<Review>(`/comments/${filmId}`, {comment, rating});
    dispatch(redirectToRoute(`${APIRoute.Films}/${filmId}`));
  },
);

export const fetchGetSimilarAction = createAsyncThunk<Films, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGetSimilar',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Films>(`/films/${filmId}/similar`);
    return data
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(user.token);
    dispatch(redirectToRoute('/'));
    return user
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete('/logout');
    dropToken();
  },
);
