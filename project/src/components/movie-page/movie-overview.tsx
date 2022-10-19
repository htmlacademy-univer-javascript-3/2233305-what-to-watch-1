import {FilmProps} from '../../types/types';

function MovieOverview({film}:FilmProps):JSX.Element{
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.ratingLevel}</span>
          <span className="film-rating__count">{film.ratingCount}</span>
        </p>
      </div>

      <div className="film-card__text">{film.description}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring}</strong></p>
      </div>
    </>
  );
}


export default MovieOverview;
