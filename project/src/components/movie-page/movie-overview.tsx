import {useAppSelector} from "../../hooks";
import {getFilm} from "../../store/films-data/selectors";
import NotFound from "../../pages/not-found/not-found";

function MovieOverview(): JSX.Element {
  const film = useAppSelector(getFilm);

  if (film === undefined)
    return <NotFound/>
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.scoresCount}</span>
          <span className="film-rating__count">{film.scoresCount}</span>
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
