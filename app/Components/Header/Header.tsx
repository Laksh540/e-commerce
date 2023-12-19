"use client";
import React from "react";
import cartIcon from "../../assets/icons/cart.svg";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/State/store";
import { cartRoute, productsRoute } from "@/app/routes";

const Header = () => {
  const cartProducts = useSelector((product: RootState) => product.cart);
  return (
    <>
      {/* {cartIcon} */}
      <div className="flex justify-between">
        <div>
          <Link href={productsRoute}>
            <text className="font-medium">E-Commerce</text>
          </Link>
        </div>
        <Link href={cartRoute}>
          <div className="relative w-8 h-8">
            <img src={cartIcon?.src ?? ""} alt="" />
            {cartProducts.length > 0 ? (
              <div className="px-1.5 text-xs flex items-center justify-center border border-red-600 rounded-full absolute left-6 top-0 -translate-x-1/2 -translate-y-1/2  bg-red-600 text-white">
                {cartProducts?.length}
              </div>
            ) : null}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
