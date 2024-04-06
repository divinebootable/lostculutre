import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import CategoryService from 'src/services/competition/category.service';

export const addCategory = createAsyncThunk(
  'category/addcategory',
  async ({ name, voting_name, voting_image, election }, thunkAPI) => {
    try {
      const response = await CategoryService.addCategory(name, voting_name, voting_image, election);
      return response;
    } catch (error) {
      console.log('LOGIN EROR!!!');
      console.log(error);
      throw error;
    }
  }
);

export const getAllCategories = createAsyncThunk('category/total', async (thunkAPI) => {
  try {
    const response = await CategoryService.getAllCategories();
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('ADD Category EROR!!!');
    console.log(error);
    throw error;
  }
});

const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
  isLoading: false,
  categories: [], // for user object
  token, // for storing the JWT access token
  isSuccess: false, // for monitoring the registration process.
};

const categorySlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addCategory.fulfilled, (state, action) => {
      // Add user to the state array
      state.categories.push(action.payload);
      state.isLoading = false;
      state.isSuccess = true; // registration successful
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
    });
    builder.addCase(addCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      console.log('PAYLOAD');
      console.log(action.payload);
      state.isLoading = false;
      state.isSuccess = true;
      state.categories.push(action.payload);
    });
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});

const { reducer } = categorySlice;
export default reducer;
