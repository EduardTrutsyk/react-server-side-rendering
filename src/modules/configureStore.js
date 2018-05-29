import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../modules';

export default (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

  return store;
};
