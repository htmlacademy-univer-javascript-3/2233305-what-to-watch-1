import {useAppDispatch, useAppSelector} from "../../hooks";
import {getFavoriteFilms} from "../../store/favorite-film-process/selectors";
import {fetchChangeFavoriteFilmsAction, fetchFavoriteFilmsAction} from "../../store/api-actions";
import {Film} from "../../types/types";
import {useEffect} from "react";


type MovieInListProps = {
  film : Film
}
function MovieInList(props : MovieInListProps): JSX.Element {
  const filmStatus = props.film.isFavorite
  console.log(props.film)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [filmStatus]);

  const favoriteFilms = useAppSelector(getFavoriteFilms);
  return (
    <button className="btn btn--list film-card__button" type="button" onClick={() => dispatch(fetchChangeFavoriteFilmsAction({filmId: props.film.id, status: Number(!filmStatus)}))}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        {
          filmStatus
            ? <use xlinkHref="#in-list" />
            : <use xlinkHref="#add" />
        }
      </svg>
      <span>My list</span>

      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default MovieInList;
