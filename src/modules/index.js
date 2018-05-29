import { combineReducers } from 'redux';

import { usersReduces } from './users';

const rootReducer = combineReducers({
  users: usersReduces,
});

export default rootReducer;
