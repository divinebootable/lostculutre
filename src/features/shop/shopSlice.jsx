import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ShopService from 'src/services/shop.service';

export const buyProduct = createAsyncThunk(
  'shop/buyProduct',
  async ({ contestant, size, amount, number, gender }) => {
    try {
      const response = await ShopService.buyProduc(contestant, size, amount, number, gender);
      console.log('PRODUCT BOUGHT');
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
  isBought: false,
  isSuccess: false,
  isLoading: false,
  buyer: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(buyProduct.fulfilled, (state, action) => {
      state.isBought = true;
      state.isSuccess = true;
      state.buyer.push(action.payload);
    });
    builder.addCase(buyProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(buyProduct.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

const { reducer } = shopSlice;
export default reducer;
