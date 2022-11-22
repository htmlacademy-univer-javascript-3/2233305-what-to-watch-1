import FilmCard from '../../components/main/film-card/film-card';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import CatalogGenres from '../../components/main/catalog-genres/catalog-genres';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {Film} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {resetFilmsCount, showMore,} from '../../store/action';
import User from "../../components/user/user";


function MainScreen(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {genre, films, filmsCount, promoFilm, favoriteFilms, genresFilm} = useAppSelector((state) => state);
  const [,setEnter] = useState<Film | null>(null);
  console.log(films, genre, filmsCount)
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <User/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name}
                   width="218" height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promoFilm?.id}`} className="btn btn--play film-card__button" type="button"
                      onClick={() => {
                        dispatch(resetFilmsCount());
                      }}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={'/mylist'} className="btn btn--list film-card__button" type="button" onClick={() => {
                  dispatch(resetFilmsCount());
                }}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilms.length}</span>
                </Link>
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
              <FilmCard key={film.id} film={film} onMouseEnter={() => {
                setEnter(film);
              }}
                        onMouseLeave={() => setEnter(null)} onClick={() => {
                navigate(`/films/${film.id}`);
                dispatch(resetFilmsCount());
              }}
              />))}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button" onClick={() => dispatch(showMore())}>Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
