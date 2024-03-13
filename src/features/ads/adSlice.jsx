import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import AuthService from 'src/services/auth.service';

export const ads = createAsyncThunk(
  'advert/ads',
  async ({ name, gender, region_of_participation, social_media, picture }, thunkAPI) => {
    try {
      const response = await AuthService.signup(
        name,
        gender,
        region_of_participation,
        social_media,
        picture
      );
      console.log('LOGIN DATA!!!!!');
      console.log(response);
      return response;
    } catch (error) {
      console.log('LOGIN EROR!!!');
      console.log(error);
      throw error;
    }
  }
);

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: [], // for user object
  isSuccess: false, // for monitoring the registration process.
};

const adSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ads.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.isSuccess = true; // registration successful
    });
  },
});

const { reducer } = adSlice;
export default reducer;
