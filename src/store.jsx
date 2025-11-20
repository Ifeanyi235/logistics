import { configureStore } from '@reduxjs/toolkit';
import navStateReducer from "./navOpen";

export const store = configureStore({
  reducer: {
    navState: navStateReducer,
  },
});
