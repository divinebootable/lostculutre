import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/authentication/authSlice';
import regReducer from '../features/competionRegistration/registerSlice';

const rootReducer = {
  auth: authReducer,
  registerForCompetition: regReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
