import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import {
  usersReduces,
  usersSaga,
} from './users';

function* rootSaga() {
  yield all([
    usersSaga(),
  ]);
}

const rootReducer = combineReducers({
  users: usersReduces,
});

export {
  rootReducer,
  rootSaga,
};
