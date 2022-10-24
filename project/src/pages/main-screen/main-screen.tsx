import FilmCard from '../../components/main/film-card/film-card';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import CatalogGenres from '../../components/main/catalog-genres/catalog-genres';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {Film} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {resetFilmsCount, showMore,} from '../../store/action';

type MainScreenProps= {
  previewFilm : Film,
  films : Film[],
  myListFilmsCount : number
}

function MainScreen({previewFilm, films, myListFilmsCount} : MainScreenProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {genre, filmsGenre, filmsCount} = useAppSelector((state) => state);
  const [, setEnter] = useState<Film | null>(null);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={previewFilm.imageSrc} alt={previewFilm.imageAlt}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="../../../public/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={previewFilm.posterSrc} alt={previewFilm.posterAlt}
                width="218" height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{previewFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{previewFilm.genre}</span>
                <span className="film-card__year">{previewFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${previewFilm.id}`} className="btn btn--play film-card__button" type="button" onClick={() => {dispatch(resetFilmsCount());}}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={'/mylist'} className="btn btn--list film-card__button" type="button" onClick={() => {dispatch(resetFilmsCount());}}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{myListFilmsCount}</span>
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
            {filmsGenre.slice(0, filmsCount).map((film) => (
              <FilmCard key={film.id} film={film} onMouseEnter={() => {setEnter(film);}}
                onMouseLeave={() => setEnter(null)} onClick={() => {navigate(`/films/${film.id}`); dispatch(resetFilmsCount());}}
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
