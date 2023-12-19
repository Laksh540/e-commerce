"use client";
import { IProduct } from "@/app/products/page";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addToCartAsync.pending, () => {
        console.log("Action pending");
      })
      .addCase(
        addToCartAsync.fulfilled,
        (state, action: PayloadAction<IProduct>) => {
          if (state?.find((product) => product.id === action.payload.id)) {
            return;
          }
          state.push({ ...action.payload });
        }
      );
  },
});

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (product: IProduct) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return product;
  }
);

// export const { increment, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;
