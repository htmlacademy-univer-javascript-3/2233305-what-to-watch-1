import {Link} from 'react-router-dom';
import {films} from '../../../mocks/film';

export type FilmCardProps = {
  posterAlt: string;
  posterSrc: string;
  name: string;
}

function FilmCard({posterAlt, posterSrc, name}: FilmCardProps): JSX.Element {
  const film = films.filter((x) => x.name === name)[0];
  return (
    <>
      <div className="small-film-card__image">
        <img src={posterSrc} alt={posterAlt} width='280' height='175'/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/film/${film.id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </>
  );
}

export default FilmCard;
