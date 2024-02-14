import { SET_USER,SET_IS_LOGGED_IN } from '../actions/userActions';

const initialState = {
  id: null,
  name: '',
  role: '',
  isLoggedIn:false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        role: action.payload.role,
      };
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
    };
    default:
      return state;
  }
};

export default userReducer;
