import { useMemo } from "react";

export default function useCalculateTotal(params) {
  const priceTotal = useMemo(
    () =>
      params.reduce(
        (total, cartTotal) => (total += cartTotal.quantity * cartTotal.price),
        0
      ),
    [params]
  );

  return priceTotal;
}
