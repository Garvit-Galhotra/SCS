import React, { createContext, useEffect, useState } from "react";
import { getAllProductData } from "../api/productapi";

export const ProductDataContext = createContext();

const ProductContext = (props) => {
  const [productData, setProductData] = useState([]);

  const setData = async () => {
    setProductData(await getAllProductData());
  };

  useEffect(() => {
    setData();
  }, []);
  return (
    <ProductDataContext.Provider value={productData}>
      {props.children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
