import {useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  previewVideoLink: string;
  posterSrc: string;
}

function VideoPlayer({previewVideoLink, posterSrc} : VideoPlayerProps): JSX.Element{
  const [, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {

    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      const timer = setTimeout(() => videoRef.current?.play(), 1000);
      return () => clearTimeout(timer);
    }

    videoRef.current?.load();

  }, [isPlaying]);


  return (
    <video src={previewVideoLink} poster={posterSrc} muted width="280" height="175" ref={videoRef}
      onMouseEnter={() => setIsPlaying(true)} onMouseLeave={() => setIsPlaying(false)}
    >
    </video>
  );
}

export default VideoPlayer;

