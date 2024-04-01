import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ContestantRegistrationService from 'src/services/register.service';

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, gender, category, stage_name, facebook, instagram, youtube }, thunkAPI) => {
    try {
      // console.log('Slice');
      // console.log(name, gender, category, stage_name, facebook, instagram, phone, youtube, photo_d);
      const response = await ContestantRegistrationService.register(
        name,
        gender,
        category,
        stage_name,
        facebook,
        instagram,
        youtube
      );
      console.log('REG DATA!!!!!');
      console.log(response);
      return response;
    } catch (error) {
      console.log('REG EROR!!!');
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

const regSlice = createSlice({
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
    builder.addCase(register.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      // Add user to the state array
      state.isSuccess = false;
      state.isLoading = false;
    });
  },
});

const { reducer } = regSlice;
export default reducer;
