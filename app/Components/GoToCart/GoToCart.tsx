import Link from "next/link";
import React from "react";

const GoToCart = () => {
  return (
    <Link href={"/cart"}>
      <button className="p-3 w-full border rounded-md  bg-red-300 text-white">
        {" "}
        Go To Cart
      </button>
    </Link>
  );
};

export default GoToCart;
