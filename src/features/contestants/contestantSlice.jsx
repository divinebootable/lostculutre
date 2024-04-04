import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ContestantService from 'src/services/contestants.service';

export const totalNumberOfContestants = createAsyncThunk('contacts/total', async (thunkAPI) => {
  const response = await ContestantService.getTotalNumberOfContestants();
  return response.data;
});

const initialState = {
  isLoading: false,
  contestant: [], // for contestant object
  totalNumberOfContestants: [],
  error: '',
  isSuccess: false,
};

const contestantSlice = createSlice({
  name: 'contestant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(totalNumberOfContestants.fulfilled, (state, action) => {
      // Add user to the state array
      state.totalNumberOfContestants.push(action.payload);
      state.isLoading = false;
      state.isSuccess = true; // registration successful
    });
    builder.addCase(totalNumberOfContestants.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    });
    builder.addCase(totalNumberOfContestants.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});

const { reducer } = contestantSlice;
export default reducer;
