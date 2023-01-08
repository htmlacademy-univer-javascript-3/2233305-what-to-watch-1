import FilmCard from '../../components/main/film-card/film-card';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import CatalogGenres from '../../components/main/catalog-genres/catalog-genres';
import {Link, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {resetCount, showMore} from '../../store/action';
import User from '../../components/user/user';
import {getFilmsCount, getFilmsWithGenre, getGenre} from '../../store/films-process/selectors';
import {getPromoFilm} from '../../store/film-process/selector';
import MovieInList from '../../components/movie-page/movie-in-list';
import {APIRoute} from '../../const';
import {fetchPromoFilmAction} from '../../store/api-actions';


function MainScreen(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCount());
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  const promoFilm = useAppSelector(getPromoFilm);
  const genre = useAppSelector(getGenre);
  const filmsCount = useAppSelector(getFilmsCount);
  const genresFilm = useAppSelector(getFilmsWithGenre);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <User/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name}
                width="218" height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`${APIRoute.Player}/${promoFilm.id}`} className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MovieInList film={promoFilm}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CatalogGenres genre={genre}/>
          <div className="catalog__films-list">
            {genresFilm.slice(0, filmsCount).map((film) => (
              <FilmCard key={film.id} film={film} onClick={() => {
                navigate(`${APIRoute.Films}/${film.id}`);
              }}
              />))}
          </div>
          <div className="catalog__more">
            {filmsCount <= genresFilm.length &&
              <button className="catalog__button" type="button" onClick={() => dispatch(showMore())}>Show more</button>}
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
