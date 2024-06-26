/* eslint-disable no-useless-catch */
/* eslint-disable consistent-return */
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

export const checkIfUserLoggedIn = createAsyncThunk(
  'auth/checkIfUserLoggedIn',
  async (_, thunkAPI) => {
    try {
      const user = JSON.parse(localStorage.getItem('userData'));
      if (user.is_superuser === true) {
        return true;
      }
    } catch (error) {
      throw error;
    }
  }
);

// const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: [], // for user object
  token: localStorage.getItem('userToken') || null,
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
    builder.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload.token;
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    });
    builder.addCase(checkIfUserLoggedIn.fulfilled, (state, action) => {
      state.isLoggedIn = true;
    });
  },
});

const { reducer } = authSlice;
export default reducer;
