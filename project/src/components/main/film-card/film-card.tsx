import {Link} from 'react-router-dom';
import VideoPlayer from '../../video-player/video-player';
import {Film} from '../../../types/types';
import {APIRoute} from '../../../const';

type FilmProps = {
  film: Film
}

export type FilmCardProps = FilmProps & {
  onClick?: () => void;
}

function FilmCard({film, onClick}: FilmCardProps): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card" onClick={onClick}>
      <VideoPlayer previewVideoLink={film.previewVideoLink} posterSrc={film.posterImage}/>
      <h3 className="small-film-card__title">
        <Link to={`${APIRoute.Film}/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
