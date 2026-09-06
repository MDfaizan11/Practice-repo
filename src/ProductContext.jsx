import React, { createContext, useContext, useEffect, useState } from "react";
export const userdataContext = createContext();

function ProductContext({ children }) {
  const [ProductData, setProductData] = useState([]);
  useEffect(() => {
    async function getProductData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProductData(data);
    }
    getProductData();
  }, []);
  return (
    <userdataContext.Provider value={{ ProductData }}>
      {children}
    </userdataContext.Provider>
  );
}

export default ProductContext;
