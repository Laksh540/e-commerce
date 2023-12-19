import { IProduct } from "./products/page";

export const numberToCurrencyFormatter = (value: number) => {
  if (!value) {
    return 0;
  }
  const formatter = new Intl.NumberFormat("en-IN");
  return formatter.format(value);
};

export const getTotalPrice = (products: IProduct[]) => {
  let totalPrice = 0;
  products?.forEach((product) => {
    totalPrice += product.price;
  });
  return totalPrice;
};
