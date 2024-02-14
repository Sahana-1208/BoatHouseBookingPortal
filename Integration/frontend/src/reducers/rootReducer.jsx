import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // other reducers can be added here
});

export default rootReducer;
