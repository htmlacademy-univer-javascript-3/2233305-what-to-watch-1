import {useState} from 'react';
import MovieOverview from '../movie-page/movie-overview';
import MovieDetails from '../movie-page/movie-details';
import MovieReviews from '../movie-page/movie-reviews';
import {Tab} from '../../const';


function Tabs(): JSX.Element {
  const [currentTab, setCurrentTab] = useState(Tab.Overview);
  const checkTab = (tab: string) => {
    if (tab === Tab.Overview) {
      return <MovieOverview/>;
    }
    if (tab === Tab.Details) {
      return <MovieDetails/>;
    }
    if (tab === Tab.Reviews) {
      return <MovieReviews/>;
    }
  };
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${currentTab === Tab.Overview ? 'film-nav__item--active' : ''}`}>
            <div className="film-nav__link" onClick={() => setCurrentTab(Tab.Overview)}>Overview</div>
          </li>
          <li className={`film-nav__item ${currentTab === Tab.Details ? 'film-nav__item--active' : ''}`}>
            <div className="film-nav__link" onClick={() => setCurrentTab(Tab.Details)}>Details</div>
          </li>
          <li className={`film-nav__item ${currentTab === Tab.Reviews ? 'film-nav__item--active' : ''}`}>
            <div className="film-nav__link" onClick={() => setCurrentTab(Tab.Reviews)}>Reviews</div>
          </li>
        </ul>
      </nav>
      {checkTab(currentTab)}
    </div>
  );
}

export default Tabs;
