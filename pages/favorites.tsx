import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addFavorite, removeFavorite } from '../store/actions';

import Track from '../components/Track';

import { Container, TrackList } from '../styles/containers';

const Favorites: FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites);

  return (
    <Container>
      <TrackList>
        {favorites.map((track) => (
          <Track
            key={track.id}
            trackData={track}
            addFavorite={() => dispatch(addFavorite(track))}
            removeFavorite={() => dispatch(removeFavorite(track.id))}
            isFavorite={favorites.filter((f) => f.id === track.id).length > 0}
          />
        ))}
      </TrackList>
    </Container>
  );
};

export default Favorites;
