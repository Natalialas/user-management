import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';

const rootReducer = {
  user: userReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
