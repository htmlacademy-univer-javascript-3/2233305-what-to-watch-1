import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App title={Setting.title} genre={Setting.genre} year={Setting.year}/>
  </React.StrictMode>,
);
