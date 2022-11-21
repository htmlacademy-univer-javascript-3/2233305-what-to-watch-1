import {useState} from 'react';
import {Film} from '../../types/types';
import MovieOverview from '../movie-page/movie-overview';
import MovieDetails from '../movie-page/movie-details';
import MovieReviews from '../movie-page/movie-reviews';

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

function checkTab(tab: string, film: Film) {
  if (tab === Tab.Overview) {
    return <MovieOverview film={film}/>;
  }
  if (tab === Tab.Details) {
    return <MovieDetails film={film}/>;
  }
  if (tab === Tab.Reviews) {
    return <MovieReviews/>;
  }
}
type FilmProps = {
  film: Film
}

function Tabs({film}: FilmProps): JSX.Element {
  const [currentTab, setCurrentTab] = useState(Tab.Overview);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <a className="film-nav__link" onClick={() => setCurrentTab(Tab.Overview)}>Overview</a>
          </li>
          <li className="film-nav__item">
            <a className="film-nav__link" onClick={() => setCurrentTab(Tab.Details)}>Details</a>
          </li>
          <li className="film-nav__item">
            <a className="film-nav__link" onClick={() => setCurrentTab(Tab.Reviews)}>Reviews</a>
          </li>
        </ul>
      </nav>
      {checkTab(currentTab, film)}
    </div>
  );
}

export default Tabs;
