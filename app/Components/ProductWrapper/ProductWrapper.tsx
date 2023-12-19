"use client";
import Link from "next/link";
import React from "react";

const ProductWrapper = ({
  children,
  productId,
}: {
  children: React.ReactNode;
  productId: number;
}) => {
  return <Link href={`/products/${productId}`}>{children}</Link>;
};

export default ProductWrapper;
