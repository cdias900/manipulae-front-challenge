import { FC } from 'react';

import { getTrackDurationString } from '../../utils/utils';
import CoverImg from '../CoverImg';

import {
  Container, Title, Artist, InfoContainer,
} from './styles';

interface AlbumData {
  id: number;
  title: string;
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string;
  cover_xl: string;
  tracklist: string;
}

interface ArtistData {
  id: number;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
}

export interface TrackData {
  id: number;
  link: string;
  position: number;
  preview: string;
  rank: number;
  title: string;
  title_short: string;
  duration: number;
  album: AlbumData;
  artist: ArtistData;
}

interface TrackProps {
  trackData: TrackData;
}

const Track: FC<TrackProps> = ({ trackData }) => (
  <Container>
    <CoverImg
      img={trackData.album.cover}
      alt="Capa do Album"
      preview={trackData.preview}
    />
    <InfoContainer>
      <Title>{trackData.title}</Title>
      <Artist>{trackData.artist.name}</Artist>
      <p>{getTrackDurationString(trackData.duration)}</p>
      <p><a href={trackData.link} target="_blank" rel="noreferrer">Abrir no Deezer</a></p>
    </InfoContainer>
  </Container>
);

export default Track;
