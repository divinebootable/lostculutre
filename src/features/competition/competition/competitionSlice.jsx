/* eslint-disable arrow-body-style  */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import CompetitionService from 'src/services/competition/competition.service';

export const addCompetition = createAsyncThunk(
  'competition/addCompetition',
  async ({ name, start_date, end_date }, thunkAPI) => {
    try {
      console.log(name, start_date, end_date);
      const response = await CompetitionService.addCompetition(name, start_date, end_date);
      console.log('add Competition DATA!!!!!');
      console.log(response);
      return response;
    } catch (error) {
      console.log('ADD Competition EROR!!!');
      console.log(error);
      throw error;
    }
  }
);

export const getAllCompetitions = createAsyncThunk('competition/total', async (thunkAPI) => {
  try {
    const response = await CompetitionService.getAllCompetitions();
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('ADD Competition EROR!!!');
    console.log(error);
    throw error;
  }
});

const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
  isLoggedIn: true,
  isLoading: false,
  competitions: [], // for user object
  token, // for storing the JWT access token
  isSuccess: false, // for monitoring the registration process.
};

const competitionSlice = createSlice({
  name: 'competition',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addCompetition.fulfilled, (state, action) => {
      // Add user to the state array
      state.competitions.push(action.payload);
      state.isLoading = false;
      state.isSuccess = true; // registration successful
    });
    builder.addCase(addCompetition.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
    });
    builder.addCase(addCompetition.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCompetitions.fulfilled, (state, action) => {
      console.log('PAYLOAD');
      console.log(action.payload);
      state.isLoading = false;
      state.isSuccess = true;
      state.competitions.push(
        action.payload.map((data) => {
          console.log('Data');
          console.log(data);
          return data;
        })
      );
    });
    builder.addCase(getAllCompetitions.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCompetitions.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});

const { reducer } = competitionSlice;
export default reducer;
