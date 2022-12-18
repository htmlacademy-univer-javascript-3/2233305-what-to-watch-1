import Logo from '../../components/logo/logo';
import AddReview from '../../components/add-review/add-review';
import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import User from '../../components/user/user';
import NotFound from '../not-found/not-found';
import {getFilm} from '../../store/film-process/selector';
import {APIRoute} from '../../const';
import {useEffect} from 'react';
import {fetchFilmAction} from '../../store/api-actions';

function AddReviewScreen(): JSX.Element {
  const film = useAppSelector(getFilm);
  const params = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilmAction(params.id));
  }, [dispatch, params.id]);
  if (film === undefined) {
    return <NotFound/>;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${APIRoute.Films}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <div className="breadcrumbs__link">Add review</div>
              </li>
            </ul>
          </nav>
          <User/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name}
            width="218" height="327"
          />
        </div>
      </div>
      <AddReview/>

    </section>
  );
}

export default AddReviewScreen;
