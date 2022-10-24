import {useAppDispatch} from '../../../hooks';
import {catalogGenresData} from './catalog-genres-data';
import {changeGenre, getFilms} from '../../../store/action';

function CatalogGenres(props: {step: string}): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ul className="catalog__genres-list">
      {catalogGenresData.map((item) => (
        <li key={item.length} className={`catalog__genres-item ${props.step === item ? 'catalog__genres-item--active' : ''}`}>
          <a onClick={() =>
          {dispatch(changeGenre(item));
            dispatch(getFilms());}} className="catalog__genres-link"
          >{item}
          </a>
        </li>))}
    </ul>
  );
}

export default CatalogGenres;
