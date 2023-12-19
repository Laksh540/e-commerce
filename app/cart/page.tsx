"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { getTotalPrice, numberToCurrencyFormatter } from "../commonUtils";
import {
  removeAllItemAsync,
  removeCartItemAsync,
} from "../State/Cart/cartSlice";
import { useRouter } from "next/navigation";
import Header from "../Components/Header/Header";
import { productsRoute } from "../routes";

const cartList = () => {
  const router = useRouter();
  const cartProducts = useSelector((product: RootState) => product.cart);
  const dispatch: AppDispatch = useDispatch();

  const onConfirmOrder = () => {
    dispatch(removeAllItemAsync(cartProducts?.length));
    router.push(productsRoute);
  };
  return (
    <div className="p-9">
      <Header />
      <div className=" grid grid-cols-2 gap-8 mt-11">
        <div className="p-9 grid gap-5 border border-red-300 rounded-md">
          <div className=" text-center  text-3xl ">
            <span>Cart</span>
          </div>
          {cartProducts.length === 0 ? (
            <div className="text-center">
              <div>
                <span>No Products in the cart</span>
              </div>
            </div>
          ) : null}
          {cartProducts.map((product, index) => (
            <div
              className="grid grid-row-3 grid-flow-col  gap-3 p-6 border border-red-300 rounded-md"
              key={product.id}
            >
              <div className="row-span-3 col-span-2 flex justify-center w-48 ">
                <img src={product?.image?.default?.src} className="h-40 " />
              </div>
              <div className="col-span-2 ">
                <span className="block">{product?.brandName}</span>
                <span className="block w-48 truncate">{product?.name}</span>
              </div>
              <div className="col-span-2 ">
                <span className="text-xl font-semibold block">{`₹${numberToCurrencyFormatter(
                  product?.price
                )}`}</span>
              </div>
              <div className="col-span-2 ">
                <button
                  className="text-red-500"
                  onClick={() => dispatch(removeCartItemAsync(index))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" ">
          <div className=" p-9  border border-red-300 rounded-md">
            <div className=" text-center text-3xl mb-8">
              <span>Order Details</span>
            </div>
            {cartProducts.length > 0 ? (
              <div className="">
                <div className="text-center ">
                  <span>{`Total Price: ₹${numberToCurrencyFormatter(
                    getTotalPrice(cartProducts) ?? 0
                  )}`}</span>
                </div>
                <div className="mt-9 text-center">
                  <button
                    className=" p-3  border rounded-md bg-red-500 text-white hover:bg-red-600"
                    onClick={onConfirmOrder}
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            ) : (
              <div className=" text-center"> No Products in the cart</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default cartList;
