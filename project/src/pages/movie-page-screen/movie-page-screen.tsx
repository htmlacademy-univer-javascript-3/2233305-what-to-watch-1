import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {Link, useParams} from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import NotFound from '../not-found/not-found';
import FilmCard from '../../components/main/film-card/film-card';
import {useAppDispatch, useAppSelector} from "../../hooks";
import User from "../../components/user/user";
import {fetchFilmAction, fetchGetSimilarAction} from "../../store/api-actions";
import {useEffect} from "react";
import {getAuthorizationStatus} from "../../store/user-process/selectors";
import {AuthorizationStatus} from "../../const";
import {getFilm, getLoadedDataStatusFilm, getSimilarFilms} from "../../store/film-process/selector";
import Spinner from "../../components/spinner/spinner";
import MovieInList from "../../components/movie-page/movie-in-list";

function MoviePageScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm)
  const authorizationStatus = useAppSelector(getAuthorizationStatus)
  const similarFilms = useAppSelector(getSimilarFilms)
  const isLoadedFilm = useAppSelector(getLoadedDataStatusFilm)
  useEffect(() => {
    dispatch(fetchFilmAction(params.id));
    dispatch(fetchGetSimilarAction(params.id))
  }, [params.id])

  if (isLoadedFilm)
    return <Spinner/>

  if (film === undefined) {
    return (<NotFound/>);
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <User/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
               <MovieInList film={film}/>
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name}
                   width="218" height="327"
              />
            </div>
            <Tabs/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {
              similarFilms.slice(0, 4).map((film) => <FilmCard key={film.id} film={film}/>)
            }
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MoviePageScreen;
