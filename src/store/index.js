import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './ducks';

function buildRootReducer(allReducers) {
  return combineReducers({
    ...allReducers,
  });
}

function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(
      thunk,
    ), __DEV__ ? console.tron.createEnhancer() : null]
    .filter(Boolean);

  const createStoreWithMiddleware = compose(
    ...enhancers,
  )(createStore);

  const allReducers = buildRootReducer(reducers);

  return createStoreWithMiddleware(allReducers, initialState);
}

let store;

export default function getStore() {
  if (!store) store = configureStore({});

  return store;
}
