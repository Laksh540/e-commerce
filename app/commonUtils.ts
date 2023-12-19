export const numberToCurrencyFormatter = (value: number) => {
  if (!value) {
    return 0;
  }
  const formatter = new Intl.NumberFormat("en-IN");
  return formatter.format(value);
};
