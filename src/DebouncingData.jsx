import { useEffect, useState } from "react";
import UseDebounce from "./UseDebounce";

function DebouncingData() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const debouncedSearch = UseDebounce(search, 1000);

  useEffect(() => {
    async function SearchData() {
      if (!debouncedSearch.trim()) {
        setProducts([]);
        return;
      }

      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(
            debouncedSearch,
          )}`,
        );

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    SearchData();
  }, [debouncedSearch]);

  return (
    <div>
      <h2>Product Search</h2>

      <input
        type="search"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DebouncingData;
