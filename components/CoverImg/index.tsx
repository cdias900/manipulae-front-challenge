import { FC } from 'react';
import Image from 'next/image';

import AudioControls from '../AudioControls';
import { Container } from './styles';

interface CoverImgProps {
  img: string;
  alt: string;
  preview: string;
}

const CoverImg: FC<CoverImgProps> = ({ img, alt, preview }) => (
  <Container>
    <Image src={img} alt={alt} width={120} height={120} />
    <AudioControls src={preview} />
  </Container>
);

export default CoverImg;
