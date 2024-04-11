import { configureStore } from '@reduxjs/toolkit';

import shopReducer from '../features/shop/shopSlice';
import authReducer from '../features/authentication/authSlice';
import contestantReducer from '../features/contestants/contestantSlice';
import regReducer from '../features/competionRegistration/registerSlice';
import categoryReducer from '../features/competition/category/categorySlice';
import competitionReducer from '../features/competition/competition/competitionSlice';

const rootReducer = {
  auth: authReducer,
  registerForCompetition: regReducer,
  competition: competitionReducer,
  category: categoryReducer,
  contestant: contestantReducer,
  shop: shopReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
