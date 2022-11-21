import {useAppDispatch, useAppSelector} from '../../../hooks';
import {changeGenre, getFilms} from '../../../store/action';

function CatalogGenres(props: { genre: string }): JSX.Element {
  const dispatch = useAppDispatch();
  const {films} = useAppSelector((state) => state);
  const catalogGenresData = ['All genres', ...new Set(films.map((x) => x.genre))]
  return (
    <ul className="catalog__genres-list">
      {catalogGenresData.map((genre) => (
        <li key={genre.length}
            className={`catalog__genres-item ${props.genre === genre ? 'catalog__genres-item--active' : ''}`}>
          <a onClick={() => {
            dispatch(changeGenre(genre));
            dispatch(getFilms());
          }} className="catalog__genres-link"
          >{genre}
          </a>
        </li>))}
    </ul>
  );
}

export default CatalogGenres;
