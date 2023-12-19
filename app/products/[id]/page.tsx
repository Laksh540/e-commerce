// "use client";
import { DummyProductList } from "@/app/DummyData/ProductList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IProduct } from "../page";
import Header from "@/app/Components/Header/Header";
import { numberToCurrencyFormatter } from "@/app/commonUtils";
import AddToCart from "@/app/Components/AddToCart/AddToCart";
import GoToCart from "@/app/Components/GoToCart/GoToCart";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const productList = JSON.parse(DummyProductList);
  let selectedProduct: IProduct = productList.find(
    (product: IProduct) => product.id === parseInt(params?.id ?? 0)
  );

  return (
    <div className="p-9">
      <Header />
      {selectedProduct ? (
        <div className="grid grid-rows-3 grid-flow-col gap-4 mt-10">
          <div className="row-span-3 col-span-2 flex justify-center ">
            <img
              src={selectedProduct?.image?.default?.src ?? ""}
              className=" h-96 object-cover"
            />
          </div>
          <div className="col-span-1">
            <span className="block max-w-xs font-medium mb-1.5">
              {selectedProduct?.brandName ?? ""}
            </span>
            <span className="block max-w-xs font-medium">
              {selectedProduct?.name ?? ""}
            </span>
          </div>
          <div className="col-span-1">
            <span className="text-xl font-semibold">{`₹${numberToCurrencyFormatter(
              selectedProduct?.price
            )}`}</span>
          </div>
          <div className="col-span-1">
            <div className="mb-3 w-80">
              <AddToCart product={selectedProduct} />
            </div>

            <div className="w-80">
              <GoToCart />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-96 justify-center items-center text-xl">
          No Product found
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
