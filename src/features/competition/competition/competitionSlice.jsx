import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import CompetitionService from 'src/services/competition/competition.service';

export const addCompetition = createAsyncThunk(
  'competition/addCompetition',
  async ({ name, statrt_date, end_date }, thunkAPI) => {
    try {
      const response = await CompetitionService.addCompetition(name, statrt_date, end_date);
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

const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
  isLoggedIn: true,
  isLoading: false,
  cometitions: [], // for user object
  token, // for storing the JWT access token
  isSuccess: false, // for monitoring the registration process.
};

const competitionSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addCompetition.fulfilled, (state, action) => {
      // Add user to the state array
      state.competition.push(action.payload);
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
  },
});

const { reducer } = competitionSlice;
export default reducer;
