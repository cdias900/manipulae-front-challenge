import {
  applyMiddleware, createStore, compose,
} from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducer';

const bindMiddleware = (middleware: any[]) => {
  const composeEnhancers = (process.env.NODE_ENV === 'development'
    && typeof (window) !== 'undefined' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
  return composeEnhancers(applyMiddleware(...middleware));
};

// eslint-disable-next-line no-unused-vars
export const makeStore = (context) => {
  if (typeof window !== 'undefined') {
    const { persistReducer, persistStore } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'root',
      storage,
    };

    const store = createStore(
      persistReducer(persistConfig, rootReducer),
      bindMiddleware([]),
    );

    (store as any).__persistor = persistStore(store);
    return store;
  }

  return createStore(
    rootReducer,
    bindMiddleware([]),
  );
};

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV === 'development' });
