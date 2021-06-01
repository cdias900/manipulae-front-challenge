import { FC } from 'react';

import { getTrackDurationString } from '../../utils/utils';
import CoverImg from '../CoverImg';

import {
  Container,
  Title,
  Artist,
  InfoContainer,
  Duration,
  ExternalLink,
  FavoriteIcon,
  NotFavoriteIcon,
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
  addFavorite: () => void;
  removeFavorite: () => void;
  isFavorite?: boolean;
}

const Track: FC<TrackProps> = ({
  trackData, addFavorite, removeFavorite, isFavorite,
}) => (
  <Container>
    <CoverImg
      img={trackData.album.cover}
      alt="Capa do Album"
      preview={trackData.preview}
    />
    <InfoContainer>
      <Title>{trackData.title}</Title>
      <Artist>{trackData.artist.name}</Artist>
      <Duration>{getTrackDurationString(trackData.duration)}</Duration>
      <a href={trackData.link} target="_blank" rel="noreferrer">
        <ExternalLink size={24} color="#000" />
      </a>
      {isFavorite && <FavoriteIcon size={24} color="#EAB543" onClick={removeFavorite} />}
      {!isFavorite && <NotFavoriteIcon size={24} color="#EAB543" onClick={addFavorite} />}
    </InfoContainer>
  </Container>
);

export default Track;
