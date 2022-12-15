import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import {
  checkAuthAction,
  fetchAllFilmsAction,
  fetchPromoFilmAction,
} from "./store/api-actions";
import browserHistory from "./browser-history";
import HistoryRouter from "./components/history-route/history-route";
import {ToastContainer} from "react-toastify";

store.dispatch(checkAuthAction());
store.dispatch(fetchAllFilmsAction());
store.dispatch(fetchPromoFilmAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <ToastContainer/>
      <App/>
    </HistoryRouter>
  </Provider>
);
