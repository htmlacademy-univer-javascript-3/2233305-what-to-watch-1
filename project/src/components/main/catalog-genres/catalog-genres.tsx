import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getFilms} from '../../../store/films-process/selectors';
import {changeGenre} from '../../../store/action';
import {INITIAL_STATE_GENRE} from '../../../const';


function CatalogGenres(props: { genre: string }): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilms);
  const catalogGenresData = [INITIAL_STATE_GENRE, ...new Set(films.map((x) => x.genre))];
  return (
    <ul className="catalog__genres-list">
      {catalogGenresData.map((genre) => (
        <li key={genre.length}
          className={`catalog__genres-item ${props.genre === genre ? 'catalog__genres-item--active' : ''}`}
        >
          <div onClick={() => {
            dispatch(changeGenre(genre));
          }} className="catalog__genres-link"
          >{genre}
          </div>
        </li>))}
    </ul>
  );
}

export default CatalogGenres;
