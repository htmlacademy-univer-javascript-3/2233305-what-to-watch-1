import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import React, {useEffect, useRef, useState} from 'react';
import {fetchFilmAction} from '../../store/api-actions';

import {getFilm} from '../../store/film-process/selector';
import Spinner from '../../components/spinner/spinner';
import {APIRoute} from '../../const';

function PlayerScreen(): JSX.Element {
  const film = useAppSelector(getFilm);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    dispatch(fetchFilmAction(params.id));

    if (videoRef.current === null) {
      return;
    }

    videoRef.current?.addEventListener('loadeddata', () => setIsLoading(false));

    if (!isPlaying) {
      videoRef.current.load();
    }
  }, [dispatch, isPlaying, params.id]);

  const handleIsPlayClick = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleFullScreenVideo = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  };

  const handleProgressBar = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const target = (e.target as HTMLVideoElement);
    if (isNaN(target.duration)) {
      return;
    }
    setProgress((target.currentTime / target.duration) * 100);
    if (videoRef.current) {
      setTimeLeft(Math.trunc(videoRef.current.duration - videoRef.current.currentTime));
    }

  };

  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    let format = date.toISOString().slice(11, 19).toString();
    if (format.startsWith('00')) {
      format = format.substring(3);
    }
    return `-${format}`;
  };

  return (
    <div className="player">
      <video
        src={film?.videoLink}
        className="player__video"
        poster={film?.backgroundImage}
        ref={videoRef}
        onDoubleClick={handleFullScreenVideo}
        onTimeUpdate={(event) => handleProgressBar(event)}
      />

      {isLoading && <Spinner/>}
      <button type="button" className="player__exit" onClick={() => navigate(`${APIRoute.Films}/${film?.id}`)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTime(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleIsPlayClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              { !isPlaying ?
                <use xlinkHref="#play-s"/> :
                <use xlinkHref="#pause"/>}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenVideo}>
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

