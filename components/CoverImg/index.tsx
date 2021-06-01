import { FC } from 'react';

import AudioControls from '../AudioControls';
import { Container, Img } from './styles';

interface CoverImgProps {
  img: string;
  alt: string;
  preview: string;
}

const CoverImg: FC<CoverImgProps> = ({ img, alt, preview }) => (
  <Container>
    <Img src={img} alt={alt} />
    <AudioControls src={preview} />
  </Container>
);

export default CoverImg;
