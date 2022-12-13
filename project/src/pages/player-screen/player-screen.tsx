import {useNavigate, useParams} from 'react-router-dom';
import NotFound from '../not-found/not-found';
import {useAppDispatch, useAppSelector} from "../../hooks";
import React, {ChangeEvent, SyntheticEvent, useEffect, useRef, useState} from "react";
import {fetchFilmAction} from "../../store/api-actions";
import LoadingScreen from "../../components/spinner/spinner";

function PlayerScreen(): JSX.Element {
  const {film} = useAppSelector((state) => state);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

 useEffect(() => {dispatch(fetchFilmAction(params.id))

   if (videoRef.current === null) {
     return;
   }

   videoRef.current?.addEventListener('loadeddata', () => setIsLoading(false));

   if (!isPlaying) {
     videoRef.current.load();
   }
 }, [params.id])

  if (film === null) {
    return <NotFound/>;
  }


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
      videoRef.current?.requestFullscreen()
    }
  }

  const handleProgressBar = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    // @ts-ignore
    if (isNaN(e.target.duration))
      return;
    // @ts-ignore
    setProgress((e.target.currentTime / e.target.duration) * 100);
    if (videoRef.current)
      setTimeLeft(Math.trunc(videoRef.current.duration - videoRef.current.currentTime));

  }

  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    let format = date.toISOString().slice(11, 19).toString();
    if (format.startsWith('00')){
      format = format.substring(3);
    }
    return `-${format}`;
  }

  return (
    <div className="player">
      <video
        src={film?.videoLink}
        className="player__video"
        poster={film?.posterImage}
        ref={videoRef}
        onDoubleClick={handleFullScreenVideo}
        onTimeUpdate={(e) => handleProgressBar(e)}
      />

      {isLoading && <LoadingScreen/>}
      <button type="button" className="player__exit" onClick={() => navigate('/')}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={{ left: `${progress}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTime(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleIsPlayClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
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

