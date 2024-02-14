// Define action types
export const SET_USER = 'SET_USER';
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';


// Define action creators
export const setUser = (id, name, role) => ({
  type: SET_USER,
  payload: { id, name, role },
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: SET_IS_LOGGED_IN,
  payload: isLoggedIn,
});

