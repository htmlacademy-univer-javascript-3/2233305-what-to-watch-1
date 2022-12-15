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
import {AuthorizationStatus} from "../../components/private-routes/private-route";
import {getFavoriteFilms, getFilm, getSimilarFilms} from "../../store/films-data/selectors";
import {getAuthorizationStatus} from "../../store/user-process/selectors";

function MoviePageScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const film = useAppSelector(getFilm)
  const authorizationStatus = useAppSelector(getAuthorizationStatus)
  const similarFilms = useAppSelector(getSimilarFilms)
  useEffect(() => {dispatch(fetchFilmAction(params.id)); dispatch(fetchGetSimilarAction(params.id))})

  if (film === undefined) {
    return (<NotFound/>);
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <User/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
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
                {authorizationStatus === AuthorizationStatus.Auth ?  <Link to={`/films/${film?.id}/review`} className="btn film-card__button">Add review</Link> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name}
                   width="218" height="327"
              />
            </div>
            <Tabs film={film}/>
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
