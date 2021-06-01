import { FC, useState, useRef } from 'react';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';

import { Backdrop, Container } from './styles';

interface AudioControlsProps {
  src: string;
}

const AudioControls: FC<AudioControlsProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>();
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  return (
    <Container playing={playing}>
      <audio ref={audioRef} src={src} />
      <Backdrop />
      {!playing && <AiFillPlayCircle size={80} color="#fff" onClick={handlePlay} />}
      {playing && <AiFillPauseCircle size={80} color="#fff" onClick={handlePause} />}
    </Container>
  );
};

export default AudioControls;
