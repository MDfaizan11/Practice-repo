import React, { useEffect, useState } from "react";
import CustomHook3 from "./CustomHook3";
function Customhook3data() {
  const [Product, setProduct] = useState([]);
  const { data, error, loading } = CustomHook3(
    "https://fakestoreapi.com/products",
  );
  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);
  function handleFilterWithCategory(name) {
    if (name === "all") {
      setProduct(data);
    } else {
      const filter = data.filter((item) => item.category === name);
      setProduct(filter);
    }
  }

  return (
    <div>
      <button onClick={() => handleFilterWithCategory("all")}>All</button>
      <button onClick={() => handleFilterWithCategory("men's clothing")}>
        men
      </button>
      <button onClick={() => handleFilterWithCategory("jewelery")}>
        jewelery
      </button>
      <button onClick={() => handleFilterWithCategory("electronics")}>
        electronics
      </button>
      Customhook3data
      {Product.length > 0
        ? Product.map((item, idex) => {
            return (
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            );
          })
        : "no data found"}
    </div>
  );
}

export default Customhook3data;
