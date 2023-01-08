import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import {checkAuthAction, fetchAllFilmsAction} from './store/api-actions';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';

store.dispatch(checkAuthAction());
store.dispatch(fetchAllFilmsAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <App/>
    </HistoryRouter>
  </Provider>
);
