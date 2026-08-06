import React, { useEffect, useState } from "react";
import NewCustomHook from "./NewCustomHook";
function NewCustomHookData() {
  const { userData, error, loading } = NewCustomHook(
    "https://jsonplaceholder.typicode.com/users",
  );
  const [search, setSearch] = useState("");
  const [debouncing, setDebouncing] = useState("");
  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncing(search);
    }, 1000);
    return () => clearTimeout(debounce);
  }, [search, debouncing]);

  const filter = userData.filter((item) => {
    return item.name.toLowerCase().includes(debouncing.toLowerCase());
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>NewCustomHookData</p>
      {filter.length > 0
        ? filter.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            );
          })
        : "no data found"}
    </>
  );
}

export default NewCustomHookData;
