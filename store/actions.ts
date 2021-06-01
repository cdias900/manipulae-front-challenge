import { TrackData } from '../components/Track';

export const actionTypes = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
};

export const addFavorite = (favorite: TrackData) => ({
  type: actionTypes.ADD_FAVORITE,
  favorite,
});

export const removeFavorite = (trackId: number) => ({
  type: actionTypes.REMOVE_FAVORITE,
  trackId,
});
