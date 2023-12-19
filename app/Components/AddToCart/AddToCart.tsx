"use client";
import { addToCartAsync } from "@/app/State/Cart/cartSlice";
import { AppDispatch, RootState } from "@/app/State/store";
import { IProduct } from "@/app/products/page";
import { ActionStore } from "next/dist/client/components/action-async-storage.external";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddToCart = ({ product }: { product: IProduct }) => {
  const products = useSelector((state: RootState) => state.cart);
  const dispatch: AppDispatch = useDispatch();
  return (
    <button
      className={` p-3 w-full  border rounded-md bg-red-500 text-white hover:bg-red-600 ${
        products?.some((item: IProduct) => item?.id === product?.id)
          ? "bg-slate-400 hover:bg-slate-400"
          : ""
      }`}
      onClick={() => dispatch(addToCartAsync(product))}
      disabled={products?.some((item: IProduct) => item?.id === product?.id)}
    >
      <span>Add To Cart</span>
    </button>
  );
};

export default AddToCart;
