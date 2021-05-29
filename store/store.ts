import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducer';
import rootSaga from './saga';

const bindMiddleware = (middleware: any[]) => {
  const composeEnhancers = (process.env.NODE_ENV === 'development'
    && typeof (window) !== 'undefined' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
  return composeEnhancers(applyMiddleware(...middleware));
};

// eslint-disable-next-line no-unused-vars
export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  (store as any).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV === 'development' });
