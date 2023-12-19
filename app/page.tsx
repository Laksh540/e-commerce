"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/products");
    }, 1000);
  }, []);
  return (
    <div className=" p-9 h-screen flex justify-center items-center text-3xl">
      Welcome to E-commerce
    </div>
  );
};

export default Welcome;
