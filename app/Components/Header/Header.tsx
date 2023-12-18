"use client";
import React from "react";
import cartIcon from "../../assets/icons/cart.svg";

const Header = () => {
  return (
    <>
      {/* {cartIcon} */}
      <div className="flex justify-between">
        <div>
          <text className="font-medium">E-Commerce</text>
        </div>
        <div className="w-8 h-8">
          <img src={cartIcon?.src ?? ""} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
