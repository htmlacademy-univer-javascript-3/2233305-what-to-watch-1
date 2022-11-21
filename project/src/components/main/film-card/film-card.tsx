import {Link} from 'react-router-dom';
import VideoPlayer from '../../video-player/video-player';
import {FilmProps} from '../../../types/types';

export type FilmCardProps = FilmProps & {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick? : () => void;
}

function FilmCard({film, onMouseLeave, onMouseEnter, onClick}: FilmCardProps): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      <VideoPlayer previewVideoLink={film.previewVideoLink} posterSrc={film.posterImage}/>
      <h3 className="small-film-card__title">
        <Link to={`/film/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
