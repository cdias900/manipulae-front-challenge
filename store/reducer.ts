import { HYDRATE } from 'next-redux-wrapper';

const initialState = {};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default reducer;
