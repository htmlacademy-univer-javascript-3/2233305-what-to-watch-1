import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {Link, useParams} from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import NotFound from '../not-found/not-found';
import FilmCard from '../../components/main/film-card/film-card';
import {useAppSelector} from "../../hooks";
import User from "../../components/user/user";

function MoviePageScreen(): JSX.Element {
  const params = useParams();
  const {films, favoriteFilms} = useAppSelector((state) => state);
  const currentFilm = films.find((film) => film.id.toString() === params.id);
  if (currentFilm === undefined) {
    return (<NotFound/>);
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm?.backgroundImage} alt={currentFilm?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <User/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">{currentFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilms.length}</span>
                </button>
                <Link to={`/films/${currentFilm?.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm?.posterImage} alt={currentFilm?.name}
                   width="218" height="327"
              />
            </div>
            <Tabs film={currentFilm}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {
              films.filter((film) => film.genre === currentFilm.genre).slice(0, 4).map((film) => <FilmCard key={film.id}
                                                                                                           film={film}/>)
            }
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MoviePageScreen;
