"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../State/store";
import { numberToCurrencyFormatter } from "../commonUtils";

const cartList = () => {
  const cartProducts = useSelector((product: RootState) => product.cart);
  return (
    <div className="grid grid-cols-2">
      <div className="grid grid-col-3 ">
        <div className="grid-cols-2">
          {cartProducts.map((product) => (
            <div className="grid grid-row-3 grid-flow-col" key={product.id}>
              <div className="grid-rows-3">
                <img src={product?.image?.default?.src} className="h-40 " />
              </div>
              <div className="col-span-2 block">{product?.brandName}</div>
              <div className="col-span-2 block">{product?.name}</div>
              <span className="text-xl font-semibold block">{`₹${numberToCurrencyFormatter(
                product?.price
              )}`}</span>
            </div>
          ))}
        </div>
      </div>
      <div>order details</div>
    </div>
  );
};

export default cartList;
