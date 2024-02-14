// Assuming you have a rootReducer
import { configureStore } from '@reduxjs/toolkit';;
import rootReducer from '../reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // other configuration options can be added here
});

export default store;
