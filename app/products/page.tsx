// "use client";
import Image from "next/image";
import { Fragment } from "react";
import { DummyProductList } from "../DummyData/ProductList";
import Header from "../Components/Header/Header";
import { numberToCurrencyFormatter } from "../commonUtils";
import ProductWrapper from "../Components/ProductWrapper/ProductWrapper";

export interface IProduct {
  id: number;
  image: {
    default: {
      src: string;
    };
  };
  price: number;
  brandName: string;
  name: string;
  quantity: number;
}

const ProductListing = () => {
  console.log("dummy data", DummyProductList);
  const productList = JSON.parse(DummyProductList);
  return (
    <main className=" p-9">
      <Header />
      <div className="grid grid-cols-4 gap-5 mt-11">
        {productList.map((product: IProduct) => (
          <div
            className="hover:-translate-y-1 hover:shadow-xl border rounded-md cursor-pointer "
            key={product?.id}
          >
            <ProductWrapper productId={product.id}>
              <div className="flex justify-center  h-52">
                <img
                  src={product?.image?.default?.src ?? ""}
                  className=" h-52 object-cover"
                />
              </div>
              <div className="p-3 ">
                <span className="block mb-1.5">{product.brandName}</span>
                <span className="block truncate mb-1.5" title={product.name}>
                  {product.name}
                </span>
                <span className="block">{`₹${numberToCurrencyFormatter(
                  product.price
                )}`}</span>
              </div>
            </ProductWrapper>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductListing;
