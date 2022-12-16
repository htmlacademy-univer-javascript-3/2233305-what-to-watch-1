import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmCard from '../../components/main/film-card/film-card';
import {useAppSelector} from "../../hooks";
import User from "../../components/user/user";
import {getFavoriteFilms} from "../../store/films-process/selectors";


function MyListScreen(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span
          className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <User/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {favoriteFilms.map((film) => (
            <article className="small-film-card catalog__films-card" key={film.id}>
              <FilmCard film={film}/>
            </article>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MyListScreen;
