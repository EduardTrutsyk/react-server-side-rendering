// Actions
const FETCH_USERS = 'users/FETCH';
const FETCH_USER_BY_ID = 'users/FETCH_BY_ID';
const UPDATE = 'users/UPDATE';
const UPDATE_CURRENT_USER = 'users/UPDATE_CURRENT_USER';

// Action Creators
export const fetchUsersAction = () => ({
  type: FETCH_USERS,
});
export const fetchUserByIdAction = userId => ({
  type: FETCH_USER_BY_ID,
  payload: userId,
});

export const updateUsers = users => ({
  type: UPDATE,
  payload: users,
});

export const updateCurrentUser = user => ({
  type: UPDATE_CURRENT_USER,
  payload: user,
});

// Async Actions
export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersAction());

    fetch('https://api.github.com/repos/facebook/react/contributors')
      .then(res => res.json())
      .then(users => dispatch(updateUsers(users)));
  };
}

export function fetchUserById(userId) {
  return (dispatch) => {
    dispatch(fetchUserByIdAction());

    fetch(`https://api.github.com/users/${userId}/repos`)
      .then(res => res.json())
      .then(users => dispatch(updateCurrentUser(users)));
  };
}

// Initial state
const INITIAL_STATE = {
  loading: false,
  items: [],
};

// Reducer
export const usersReduces = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case UPDATE:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        loading: false,
        current: action.payload,
      };
    default:
      return state;
  }
};
