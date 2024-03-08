import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import AuthService from 'src/services/auth.service';

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ first_name, last_name, email, password }, thunkAPI) => {
    const response = await AuthService.signup(first_name, last_name, email, password);
    return response;
  }
);

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const data = await AuthService.login(email, password);
    console.log('LOGIN DATA!!!!!');
    console.log(data);
    return data;
  } catch (error) {
    console.log('LOGIN EROR!!!');
    console.log(error);
    throw error;
  }
});

const initialState = {
  isLoggedIn: false,
  isLoading: true,
  user: [], // for user object
  token: '', // for storing the JWT access token
  isSuccess: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signup.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.isSuccess = true; // registration successful
    });
    builder.addCase(signup.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
    });
  },
});

const { reducer } = authSlice;
export default reducer;
