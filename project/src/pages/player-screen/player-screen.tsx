import {useNavigate, useParams} from 'react-router-dom';
import {FilmsProps} from '../../types/types';
import NotFound from '../not-found/not-found';

function PlayerScreen({films}:FilmsProps): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const currentFilm = films.find((film) => film.id === params.id);
  if (currentFilm === undefined) {
    return <NotFound/>;
  }
  return (
    <div className="player">
      <video src={currentFilm?.videoLink} className="player__video" poster={currentFilm?.imageSrc}/>

      <button type="button" className="player__exit" onClick={() => navigate('/')}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;

