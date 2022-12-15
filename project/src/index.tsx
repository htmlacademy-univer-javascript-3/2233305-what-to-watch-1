import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import {
  checkAuthAction,
  fetchAllFilmsAction,
  fetchFavoriteFilmsAction,
  fetchPromoFilmAction,
  fetchReviewAction
} from "./store/api-actions";

store.dispatch(checkAuthAction());
store.dispatch(fetchAllFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(fetchFavoriteFilmsAction());
store.dispatch(fetchReviewAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
  </Provider>
);
