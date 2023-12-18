"use client";
import Image from "next/image";
import Header from "./Components/Header/Header";
import productList from "./DummyData/ProductList.json";

export default function Home() {
  console.log("dummy data", productList);

  return (
    <main className=" p-9">
      <Header />
    </main>
  );
}
