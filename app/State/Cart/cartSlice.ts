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
        console.log("Add action pending");
      })
      .addCase(
        addToCartAsync.fulfilled,
        (state, action: PayloadAction<IProduct>) => {
          if (state?.find((product) => product.id === action.payload.id)) {
            return;
          }
          state.push({ ...action.payload });
        }
      )
      .addCase(removeCartItemAsync.pending, () => {
        console.log("Remove action pending");
      })
      .addCase(
        removeCartItemAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          // let updatedState = state.filter(
          //   (product) => product.id !== action.payload
          // );
          state = state.splice(action.payload, 1);
        }
      )
      .addCase(removeAllItemAsync.pending, () => {
        console.log("Remove all action pending");
      })
      .addCase(
        removeAllItemAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          // let updatedState = state.filter(
          //   (product) => product.id !== action.payload
          // );
          state.splice(0, action.payload);
        }
      );
  },
});

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (product: IProduct) => {
    return product;
  }
);

export const removeCartItemAsync = createAsyncThunk(
  "cart/removeCartItemAsync",
  async (productIndex: number) => {
    return productIndex;
  }
);

export const removeAllItemAsync = createAsyncThunk(
  "cart/removeAllItemAsync",
  async (totalProducts: number) => {
    return totalProducts;
  }
);

// export const { increment, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;
