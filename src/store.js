/* globals window */

import { createStore, combineReducers, compose } from 'redux';
import { state } from 'losen';
import { persistStore, autoRehydrate } from 'redux-persist';
import bruksendring from './api/bruksendring.json';

/**
 * Create the store with middleware
 */
const store = createStore(
  combineReducers({ [state.NAME]: state.reducer(bruksendring) }),
  undefined,
  compose(autoRehydrate(), window.devToolsExtension ? window.devToolsExtension() : f => f),
);

persistStore(store);

export default store;
