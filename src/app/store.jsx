import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/authentication/authSlice';

const rootReducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
