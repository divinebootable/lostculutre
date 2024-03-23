import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ContestantRegistrationService from 'src/services/register.service';

export const register = createAsyncThunk(
  'auth/register',
  async (
    { name, gender, category, stage_name, facebook, youtube, instagram, photo_d },
    thunkAPI
  ) => {
    try {
      const response = await ContestantRegistrationService.register(
        name,
        gender,
        category,
        stage_name,
        facebook,
        youtube,
        instagram,
        photo_d
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
  contestant: [], // for contestant array
  isSuccess: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(register.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.isSuccess = true; // registration successful
    });
  },
});

const { reducer } = authSlice;
export default reducer;
