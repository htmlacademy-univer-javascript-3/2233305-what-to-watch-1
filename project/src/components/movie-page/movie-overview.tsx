import {useAppSelector} from '../../hooks';
import NotFound from '../../pages/not-found/not-found';
import {getFilm} from '../../store/film-process/selector';

function MovieOverview(): JSX.Element {
  const film = useAppSelector(getFilm);

  if (film === undefined) {
    return <NotFound/>;
  }
  const ratingFilm = () => {
    if (film.rating >= 0 && film.rating < 3)
    {return 'Bad';}
    if (film.rating >= 3 && film.rating < 5)
    {return 'Normal';}
    if (film.rating >= 5 && film.rating < 8)
    {return 'Good';}
    if (film.rating >= 8 && film.rating < 10)
    {return 'Very good';}
    if (film.rating === 10)
    {return 'Awesome';}
  };
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingFilm()}</span>
          <span className="film-rating__count">{`${film.scoresCount} ratings`}</span>
        </p>
      </div>
      <br/>
      <div className="film-card__text">{film.description}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')}</strong></p>
      </div>
    </>
  );
}


export default MovieOverview;
