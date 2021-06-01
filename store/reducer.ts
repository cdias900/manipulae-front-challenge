import { HYDRATE } from 'next-redux-wrapper';

import { actionTypes } from './actions';

const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case actionTypes.ADD_FAVORITE:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          action.favorite,
        ],
      };

    case actionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => favorite.id !== action.trackId),
      };

    default:
      return state;
  }
};

export default reducer;
