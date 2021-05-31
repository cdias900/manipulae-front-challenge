import { FC, useRef } from 'react';

import AudioControls from '../AudioControls';
import { Container, Img } from './styles';

interface CoverImgProps {
  img: string;
  alt: string;
  preview: string;
}

const CoverImg: FC<CoverImgProps> = ({ img, alt, preview }) => {
  const audioRef = useRef<HTMLAudioElement>();

  return (
    <Container>
      <Img src={img} alt={alt} />
      <audio ref={audioRef} src={preview} />
      <AudioControls audioRef={audioRef} />
    </Container>
  );
};

export default CoverImg;
