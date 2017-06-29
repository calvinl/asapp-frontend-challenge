import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState, history = null) {
  /* Middleware
   * Configure this array with the middleware that you want included
   */
  let middleware = [
    createLogger()
  ];

  if (history) {
    middleware.push(routerMiddleware(history));
  }

  // Add universal enhancers here
  let enhancers = [];

  const enhancer = compose(...[
    applyMiddleware(...middleware),
    ...enhancers
  ]);

  // create store with enhancers, middleware, reducers, and initialState
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
