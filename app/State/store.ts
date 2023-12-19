"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
});

// const persistedReducer = persistReducer(persistConfig, store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
