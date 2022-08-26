import { useEffect, useState } from "react";

export default function useCheckDisplay(number, listDataProduct) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const datas = listDataProduct.reverse();
    if (datas && datas.length < number) {
      setProductList(datas);
      return;
    }

    if (datas && datas.length > 0) {
      let newCardProduct = [];
      for (let index = 0; index < number; index++) {
        newCardProduct.push(datas[index]);
      }
      setProductList(newCardProduct);
    }
  }, [listDataProduct, number]);

  return productList;
}
