import { FC, useState, MutableRefObject } from 'react';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';

import { Backdrop, Container } from './styles';

interface AudioControlsProps {
  audioRef: MutableRefObject<HTMLAudioElement>
}

const AudioControls: FC<AudioControlsProps> = ({ audioRef }) => {
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
      <Backdrop />
      {!playing && <AiFillPlayCircle size={80} color="#fff" onClick={handlePlay} />}
      {playing && <AiFillPauseCircle size={80} color="#fff" onClick={handlePause} />}
    </Container>
  );
};

export default AudioControls;
