import Logo from '../../components/logo/logo';
import AddReview from '../../components/add-review/add-review';
import {Link} from 'react-router-dom';
import {useAppSelector} from "../../hooks";
import User from "../../components/user/user";

function AddReviewScreen(): JSX.Element {
  const {promoFilm} = useAppSelector((state) => state);
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={promoFilm?.posterImage} alt={promoFilm?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${promoFilm?.id}`} className="breadcrumbs__link">{promoFilm?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <User/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={promoFilm?.posterImage} alt={promoFilm?.name}
               width="218" height="327"
          />
        </div>
      </div>
      <AddReview/>

    </section>
  );
}

export default AddReviewScreen;
