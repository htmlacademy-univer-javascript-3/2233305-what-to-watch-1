import {myListFilmsCount} from '../../mocks/const';

function MovieInList(): JSX.Element {
  return (
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"/>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{myListFilmsCount}</span>
    </button>
  );
}

export default MovieInList;
