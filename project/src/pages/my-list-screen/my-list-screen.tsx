import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmCard from '../../components/main/film-card/film-card';
import {useAppDispatch, useAppSelector} from '../../hooks';
import User from '../../components/user/user';
import {useEffect} from 'react';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import {getFavoriteFilms} from '../../store/favorite-film-process/selectors';
import {APIRoute} from '../../const';
import {useNavigate} from 'react-router-dom';


function MyListScreen(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  const favoriteFilms = useAppSelector(getFavoriteFilms);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span>
        </h1>
        <User/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {favoriteFilms.map((film) => (
            <FilmCard key={film.id} film={film} onClick={() => {
              navigate(`${APIRoute.Films}/${film.id}`);
            }}
            />))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MyListScreen;
